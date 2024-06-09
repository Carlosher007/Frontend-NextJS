'use client'
import Image from 'next/image'
import './right-section.css'
import { useState } from 'react';
import { img1,img2,img3,img4,img5,img6 } from '@/app/core/ui/landing';

export default function LandingRightSection() {
  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoad = () => {
    setLoadedImages((prevCount) => prevCount + 1);
  };

  return (
    <div className="container">
      <div className='item img1'>
        <div className='text-foregroundSecondary flex justify-center items-center' style={{ height: '100%' }}>
          {loadedImages < 6 && <p>Loading...</p>}
        </div>
        <Image className="item-image" src={img1} alt="img1" width={1280} height={720} priority={true} onLoad={handleImageLoad} />
      </div>
      <div className='item img2'>
        <div className='text-foregroundSecondary flex justify-center items-center' style={{ height: '100%' }}>
          {loadedImages < 6 && <p>Loading...</p>}
        </div>
        <Image className="item-image" src={img2} alt="img2" width={1280} height={720} priority={true} onLoad={handleImageLoad} />
      </div>
      <div className='item img3'>
        <div className='text-foregroundSecondary flex justify-center items-center' style={{ height: '100%' }}>
          {loadedImages < 6 && <p>Loading...</p>}
        </div>
        <Image className="item-image" src={img3} alt="img3" width={1280} height={720} priority={true} onLoad={handleImageLoad} />
      </div>
      <div className='item img4'>
        <div className='text-foregroundSecondary flex justify-center items-center' style={{ height: '100%' }}>
          {loadedImages < 6 && <p>Loading...</p>}
        </div>
        <Image className="item-image" src={img4} alt="img3" width={1280} height={720} priority={true} onLoad={handleImageLoad} />
      </div>
      <div className='item img5'>
        <div className='text-foregroundSecondary flex justify-center items-center' style={{ height: '100%' }}>
          {loadedImages < 6 && <p>Loading...</p>}
        </div>
        <Image className="item-image" src={img5} alt="img4" width={1280} height={720} priority={true} onLoad={handleImageLoad} />
      </div>
      <div className='item img6'>
        <div className='text-foregroundSecondary flex justify-center items-center' style={{ height: '100%' }}>
          {loadedImages < 6 && <p>Loading...</p>}
        </div>
        <Image className="item-image" src={img6} alt="img5" width={1280} height={720} priority={true} onLoad={handleImageLoad} />
      </div>
    </div>
  )
} 