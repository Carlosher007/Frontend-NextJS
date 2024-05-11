'use client';

import React, { useState, useEffect } from 'react';
import { Divider } from "@nextui-org/react";

const example_data: image[] = [
    {
        name: 'gato jugando',
        description: 'gatito',
        price: 100,
    },
    {
        name: 'gato corriendo',
        description: 'gatito',
        price: 10,
    },
    {
        name: 'gato durmiendo',
        description: 'gatito',
        price: 50,
    },
    {
        name: 'gato comiendo',
        description: 'gatito',
        price: 25,
    },
    {
        name: 'gato cazando',
        description: 'gatito',
        price: 75,
    },
    {
        name: 'gato saltando',
        description: 'gatito',
        price: 15,
    },
    {
        name: 'gato maullando',
        description: 'gatito',
        price: 5,
    },
    {
        name: 'gato ronroneando',
        description: 'gatito',
        price: 30,
    },
    {
        name: 'gato arañando',
        description: 'gatito',
        price: 20,
    },
    {
        name: 'gato mordiendo',
        description: 'gatito',
        price: 35,
    },
    {
        name: 'gato persiguiendo',
        description: 'gatito',
        price: 45,
    },
    {
        name: 'gato trepando',
        description: 'gatito',
        price: 40,
    },
    {
        name: 'gato escondiendose',
        description: 'gatito',
        price: 55,
    },
    {
        name: 'gato mirando',
        description: 'gatito',
        price: 60,
    },
    {
        name: 'gato vigilando',
        description: 'gatito',
        price: 65,
    },
    {
        name: 'gato cazando',
        description: 'gatito',
        price: 70,
    },
    {
        name: 'gato jugando',
        description: 'gatito',
        price: 80,
    },
    {
        name: 'gato corriendo',
        description: 'gatito',
        price: 85,
    },
    {
        name: 'gato durmiendo',
        description: 'gatito',
        price: 90,
    },
    {
        name: 'gato comiendo',
        description: 'gatito',
        price: 95,
    }
];

type image = {
    name: string;
    description: string;
    price: number;
}

export const Billing = () => {
    const [data, setData] = useState<image[]>([]); // Correctly typed useState

    useEffect(() => {
        setData(example_data);
    }, []);

    return (
        <div className='bg-lightForegroundSecondary dark:bg-darkForegroundSecondary w-1/4 p-10 rounded-3xl h-full'>
            <h1 className='text-lg font-semibold dark:text-zinc-50'>Detalles de la compra</h1>
            <Divider className='my-4'/>
            <div className="container">
                {data.map((image, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 my-1 text-zinc-500 dark:text-zinc-100">
                        {/* First column: Name */}
                        <div className="col-span-3">{image.name}</div>
                        {/* Second column: Price */}
                        <div className="col-span-1">$ {image.price}</div>
                    </div>
                ))}
            </div>
            <Divider className='my-4'/>
            <div className='grid grid-cols-4 gap-4 my-1 text-zinc-600 dark:text-zinc-50'>
                <p className='col-span-3 '>Total:</p>
                <p className='col-span-1  '>${data.reduce((acc, image) => acc + image.price, 0)}</p>
            </div>
        </div>
    );
}
