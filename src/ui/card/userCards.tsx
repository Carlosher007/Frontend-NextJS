"use client";

import { getCard } from '../../util/api/api'
import { useEffect, useState } from 'react'
import UserCard from './userCard'

export default function UserCards({user_id}: {user_id: number}) {

  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const data = await getCard(user_id);
      setData(data);
      console.log(data);
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

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-items-center'>
      {data.map((card: {
        card_id: string, card_number: string, expiration_date: string, cvc_code: string, owner_name: string
      }) => (
        <UserCard
          key={card.card_id}
          cardNumber={maskCardNumber(card.card_number)}
          expirationDate={formatDate(card.expiration_date)}
          cvcCode={card.cvc_code}
          ownerName={card.owner_name} />
      ))}
    </div>
  )
}