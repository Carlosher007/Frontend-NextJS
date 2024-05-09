import './Images.css'
import { AddToCartIcon } from '@/app/core/ui/icons'
import { Image as ImageDefinition } from '@/app/core/lib/definitions'
import Image from 'next/image'

export function Images({ images }: { images: ImageDefinition[] }) {
  return (
    <main className="images">
      <ul>
        {
          images.map(image => (
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
                  <button>
                    <AddToCartIcon />
                  </button>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}