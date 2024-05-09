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

    return (
        <div>
            {data.map((order: {
                order_id: number, order_date: string, payment_method: string, total_price: number
            }) => (

                <OrderCard key={order.order_id} id={order.order_id} date={order.order_date} paymentMethod={order.payment_method} total={order.total_price} />

            ))}
        </div>
    )
}