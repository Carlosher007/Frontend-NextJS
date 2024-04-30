import React, { useState, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, 
  Card, CardHeader, CardBody, CardFooter, Image, Button, Input} from "@nextui-org/react";
import { PencilIcon } from "./PencilIcon";
import { TrashIcon } from "./TrashIcon";

export default function userCard(
  { cardId, cardNumber, expirationDate, cvcCode, ownerName, handleEdit, handleDelete }: 
  { cardId: string, cardNumber: string, expirationDate: string, cvcCode: String, ownerName: string, handleEdit: (e: React.FormEvent<HTMLFormElement>, cardId: string) => Promise<void>, handleDelete: (cardId: string) => Promise<void>}) {
  const modalEdit = useDisclosure();
  const modalDelete = useDisclosure();

  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 1000));
  }, []);

  return (
    <Card className="h-72 min-w-96 max-w-[440px] w-full relative">
      <CardHeader className="text-black font-bold">
        <Image
          alt="Chip"
          className="left-8 top-20"
          src="/images/card/chip.png"
          width={50}
          height={50}
        />
        <p className="absolute left-12 bottom-24 text-2xl">{cardNumber}</p>
        <p className="absolute right-12 bottom-8 text-lg">{expirationDate}</p>
        <p className="absolute left-12 bottom-8 text-lg">{ownerName}</p>
        <Button
          onPress={modalEdit.onOpen}
          isIconOnly 
          className="absolute bg-gradient-to-tr from-green-300 to-green-500 text-white shadow-lg right-20 top-8" 
          aria-label="Modify">
          <PencilIcon />
          <Modal 
          isOpen={modalEdit.isOpen} 
          onOpenChange={modalEdit.onOpenChange} 
          placement='center' 
          onClick={(e) => e.stopPropagation()}>
            <ModalContent>
              {(onClose) => (
                <>
                  <form onSubmit={(e) => handleEdit(e, cardId)}>
                    <ModalHeader className="flex flex-col gap-1">Edit your card</ModalHeader>
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
                        Edit
                      </Button>
                    </ModalFooter>
                  </form>
                </>
              )}
            </ModalContent>
          </Modal>
        </Button>
        <Button 
          onPress={modalDelete.onOpen}
          isIconOnly 
          className="absolute bg-gradient-to-tr from-red-500 to-red-700 text-white shadow-lg right-8 top-8" 
          aria-label="Modify">
          <TrashIcon />
          <Modal isOpen={modalDelete.isOpen} onOpenChange={modalDelete.onOpenChange} placement='center'>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Are you sure you want to delete this credit card?</ModalHeader>
                  <ModalBody>
                    Remember this is an irreversible action.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      No
                    </Button>
                    <Button color="primary" onPress={onClose} onClick={() => handleDelete(cardId)}>
                      Yes
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </Button>
      </CardHeader>
      <div className="absolute inset-0">
        <Image
          removeWrapper
          alt="background"
          className="z-0 w-full h-full object-cover"
          src={`https://source.unsplash.com/random/?landscape&${randomNumber}`}
        />
      </div>
      <div className="absolute inset-0 bg-white opacity-50 z-1"></div>
    </Card>
  )
}