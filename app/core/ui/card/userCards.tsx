"use client";

import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure,
  Card, CardHeader, CardBody, CardFooter, Image, Button, Input
} from "@nextui-org/react";
import { getCard, addCard, editCard, deleteCard } from '../../api/orders/api'
import { useEffect, useState } from 'react'
import UserCard from './userCard'

export default function UserCards({ user_id }: { user_id: number }) {

  interface Card {
    card_id: string;
    card_number: string;
    expiration_date: string;
    cvc_code: string;
    owner_name: string;
  }

  const [data, setData] = useState<Card[]>([])
  const [loading, setLoading] = useState<boolean>(true);

  const modalAdd = useDisclosure();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await getCard(user_id);
      setData(data);
      setLoading(false);
    };
    getData();
  }, []);

  const maskCardNumber = (cardNumber: string) => {
    const lastFourDigits = cardNumber.slice(-4);
    const maskedNumber = "**** **** **** " + lastFourDigits;
    return maskedNumber;
  }

  const formatDate = (date: string) => {
    return date.split('T')[0];
  }

  if (data == null) {
    return (
      <div className="h-[calc(100vh-150px)] flex flex-col items-center justify-center">
        <p className='text-6xl text-center font-medium m-6'> Ops! x_x</p>
        <p className='text-xl'>There has been an error on the Backend.</p>
        <p className='text-xl '>Try again later.</p>
      </div>
    )
  }

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("uwu")
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const card_number = formData.get('card_number');
    const expiration_date = formData.get('expiration_date');
    const cvc_code = formData.get('cvc_code');
    const owner_name = formData.get('owner_name');

    console.log(card_number);
    console.log(expiration_date);
    console.log(cvc_code);
    console.log(owner_name);

    if (card_number && expiration_date && cvc_code && owner_name) {
      console.log("Entré")
      await addCard(user_id, card_number as string, expiration_date as string, cvc_code as string, owner_name as string);
      const data = await getCard(user_id);
      setData(data)
    }
  }

  const handleEdit = async (e: React.FormEvent<HTMLFormElement>, cardId: string) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const originalCard = data.find((card: { card_id: string }) => card.card_id === cardId);

    if (!originalCard) {
      throw new Error(`No card found with id ${cardId}`);
    }

    const card_number = formData.get('card_number') || originalCard.card_number;
    const expiration_date = formData.get('expiration_date') || originalCard.expiration_date;
    const cvc_code = formData.get('cvc_code') || originalCard.cvc_code;
    const owner_name = formData.get('owner_name') || originalCard.owner_name;

    await editCard(cardId as string, user_id as unknown as string, card_number as string, expiration_date as string, cvc_code as string, owner_name as string);
    const card = await getCard(user_id);
    setData(card)
  }

  const handleDelete = async (cardId: string) => {
    //console.log(cardId)
    await deleteCard(cardId);
    const data = await getCard(user_id);
    setData(data)
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-items-center'>
      {data.map((card: {
        card_id: string, card_number: string, expiration_date: string, cvc_code: string, owner_name: string
      }) => (
        <UserCard
          key={card.card_id}
          cardId={card.card_id}
          cardNumber={maskCardNumber(card.card_number)}
          expirationDate={formatDate(card.expiration_date)}
          cvcCode={card.cvc_code}
          ownerName={card.owner_name}
          handleEdit={handleEdit}
          handleDelete={handleDelete} />
      ))}
      {!loading && (
        <Card
          isPressable
          onPress={modalAdd.onOpen}
          className="h-72 min-w-96 max-w-[440px] w-full relative flex items-center justify-center">
          <div className="place-content-center">
            <p className="text-9xl">+</p>
            <Modal
              isOpen={modalAdd.isOpen}
              onOpenChange={modalAdd.onOpenChange}
              placement='center'
              onClick={(e) => e.stopPropagation()}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <form onSubmit={handleAdd}>
                      <ModalHeader className="flex flex-col gap-1">Add your card</ModalHeader>
                      <ModalBody>
                        <div className="grid grid-cols-1 gap-4">
                          <Input type="text" name="card_number" label="Card Number" />
                          <Input type="date" name="expiration_date" label="Expiration date" />
                          <Input type="string" name="cvc_code" label="CVC" />
                          <Input type="text" name="owner_name" label="Owner name" />
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                          Cancel
                        </Button>
                        <Button type="submit" color="primary" onPress={onClose}>
                          Add
                        </Button>
                      </ModalFooter>
                    </form>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </Card>)}
    </div>
  )
}