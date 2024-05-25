import './Cart.css'

import { useEffect, useId, useState } from 'react'
import { CartIcon, ClearCartIcon } from '@/app/core/ui/icons'
import { useCartStore, useUserStore } from '@/app/core/store/'
import Image from 'next/image'
import { Image as ImageDefinition } from "@/app/core/lib/definitions";
import { CldImage } from "next-cloudinary";
import { getCart as getCartAPI } from '@/app/core/api/shoppingcart/service'
import { getImageById } from '@/app/core/api/dashboardImages/service'

function CartItem({ image, removeFromCart }: { image: ImageDefinition, removeFromCart: () => void }) {

  return (
    <li>
      <CldImage
        src={image.src}
        loading="lazy"
        alt={image.name}
        className='cart-image'
        width={image.width}
        height={image.height}
      />
      <div className='flex justify-center mt-2'>
        <strong>{image.name}</strong> - ${image.price}
      </div>

      <footer className='mt-1'>
        <button className='bg-neutral-800 text-sm ' onClick={removeFromCart}>Quitar</button>
      </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, removeFromCart, setCart } = useCartStore(state => ({
    cart: state.cart,
    clearCart: state.clearCart,
    removeFromCart: state.removeFromCart,
    setCart: state.setCart
  }))

  const [idUser, loading, setLoading] = useUserStore((state) => [state.idUser, state.loading, state.setLoading]);


  useEffect(() => {
    const getCartApi = async () => {
      if (idUser) {
        const response = await getCartAPI(idUser);
        const { cartImages } = response
        // const response2 = await getImageById(cartImages[0].imageId)
        const imagePromises = cartImages.map(async (item: ImageDefinition) => {
          const response2 = await getImageById(item.imageId)
          return response2
        });

        const images = await Promise.all(imagePromises)
        console.log(images)
        setCart(images)
      }
    }
    getCartApi()

  }, [idUser])

  return (
    <>
      <label className='cart-button bg-default-200' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul className='flex flex-col gap-5 mt-9 '>
          {cart.map(image => (
            <CartItem
              key={image.imageId}
              removeFromCart={() => removeFromCart((image.imageId))}
              image={image}
            />
          ))}
        </ul>

        {
          cart.length > 0 ?
            (
              <div className='flex justify-center mt-3'>
                <button className='bg-neutral-800' onClick={clearCart}>
                  <ClearCartIcon />
                </button>
              </div>
            )
            :
            (
              <div className='text-center flex items-center text-lg flex-grow mt-16'>
                There are no items in the cart
              </div>
            )
        }
      </aside>
    </>
  )
}