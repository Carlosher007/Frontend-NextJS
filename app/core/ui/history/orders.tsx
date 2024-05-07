"use client";

import { getAll } from '../../api/api'
import { useEffect, useState } from 'react'
import OrderCard from './orderCard'
export default function Orders() {

    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const data = await getAll();
            setData(data);
            console.log(data);
        };
        getData();
    }, []);

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
        <div>
            {data != null ? <></> : <h1 className='text-2xl mx-8 mb-8'>Historial</h1>}
            {data.map((order: {
                order_id: number, order_date: string, payment_method: string, total_price: number
            }) => (

                <OrderCard key={order.order_id} id={order.order_id} date={order.order_date} paymentMethod={order.payment_method} total={order.total_price} />

            ))}
        </div>
    )
}