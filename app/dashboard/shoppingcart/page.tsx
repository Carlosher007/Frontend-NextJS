'use client'

import { images as initialImages } from '@/app/core/lib/placeholder-data'
import { Images } from '@/app/core/ui/components/shoppingcart/Images'
import { useState } from 'react'
import { Header } from '@/app/core/ui/components/shoppingcart/Header'
import {useFilters} from '@/app/core/hooks/useFilters'
import { Cart } from '@/app/core/ui/components/shoppingcart/Cart'


export default function Page() {
  const [images] = useState(initialImages)
  const {filterImages} = useFilters()

  const filteredImages = filterImages(images)

  return (
    <>
      <Header/>
      {/* <Cart /> */}
      <Images images={filteredImages} />
    </>
  )
}