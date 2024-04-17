import Image from 'next/image'
import './right-section.css'
import { Suspense } from 'react'

export default function LandingRightSection() {
  return (
    <div className="container">
      <div className='item img1'>
        <Image className="item-image" src="/images/landing/img1.jpg" alt="img1" width={4000} height={6000} />
      </div>
      <div className='item img2'>
        <Image className="item-image" src="/images/landing/img2.jpg" alt="img2" width={2204} height={3308} />
      </div>
      <div className='item img3'>
        <Image className="item-image" src="/images/landing/img3.jpg" alt="img3" width={2133} height={3327} />
      </div>
      <div className='item img4'>
        <Image className="item-image" src="/images/landing/img4.jpg" alt="img4" width={4000} height={2645} />
      </div>
      <div className='item img5'>
        <Image className="item-image" src="/images/landing/img5.jpg" alt="img5" width={5819} height={4364} />
      </div>
      <div className='item img6'>
        <Image className="item-image" src="/images/landing/img6.jpg" alt="img6" width={4000} height={6000} />
      </div>
    </div>
  )
} 