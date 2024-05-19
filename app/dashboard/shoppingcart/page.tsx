'use client'

import { images as initialImages } from '@/app/core/lib/placeholder-data'
import { Images } from '@/app/core/ui/components/shoppingcart/Images'
import { useEffect, useState } from 'react'
import { Header } from '@/app/core/ui/components/shoppingcart/Header'
import { useFilters } from '@/app/core/hooks/useFilters'
import { Cart } from '@/app/core/ui/components/shoppingcart/Cart'
import { getCarts } from '@/app/core/api/shoppingcart/service'

export default function Page() {
  const [images, setImages] = useState([])
  const { filterImages } = useFilters()

  useEffect(() => {
    const getData = async () => {
      const data = await getCarts();
      setImages(data);
      console.log(`Images: ${JSON.stringify(data) } `);
    };
    getData();
  }, []);

  return (
    <>
      <Header />
      {/* <Cart /> */}
      {/* <Images images={filteredImages} /> */}
    </>
  )
}