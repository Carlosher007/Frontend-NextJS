import './Images.css'
import { AddToCartIcon, RemoveFromCartIcon } from '@/app/core/ui/icons'
import { Image as ImageDefinition } from '@/app/core/lib/definitions'
import Image from 'next/image'
import { useCartStore } from '@/app/core/store/images/cart-store'

export function Images({ images }: { images: ImageDefinition[] }) {
  const { addToCart, cart, removeFromCart } = useCartStore(state => ({ addToCart: state.addToCart, cart: state.cart, removeFromCart: state.removeFromCart }))

  const checkProductInCart = (image: ImageDefinition) => {
    return cart.some(item => item.imageId === image.imageId)
  }

  return (
    <main className="images">
      <ul>
        {
          images.map(image => {
            const isProductInCart = checkProductInCart(image)
            return (
              <li key={image.imageId}>
                <Image
                  src={image.src}
                  alt={image.description || "Product Image"}
                  width={1080}
                  height={720}
                />
                <div className='flex flex-col items-center justify-center gap-3'>
                  <div>
                    <strong>{image.name}</strong> - ${image.price}
                  </div>
                  <div>
                    <button
                      style={{ backgroundColor: isProductInCart ? 'red' : 'green' }}
                      onClick={() => {
                        isProductInCart
                          ? removeFromCart(image.imageId)
                          : addToCart(image)
                      }}>
                      {
                        isProductInCart
                          ? <RemoveFromCartIcon />
                          : <AddToCartIcon />
                      }
                    </button>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}