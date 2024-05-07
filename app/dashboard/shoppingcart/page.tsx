'use client'

import { images as initialImages } from '@/app/core/lib/placeholder-data'
import { Images } from '@/app/core/ui/components/shoppingcart/Images'
import { useState } from 'react'
import { Header } from '@/app/core/ui/components/shoppingcart/Header'
import {useFilters} from '@/app/core/hooks/useFilters'


export default function Page() {
  const [images] = useState(initialImages)
  const {filterImages} = useFilters()

  const filteredImages = filterImages(images)

  return (
    <>
      <Header/>
      <Images images={filteredImages} />
    </>
  )
}