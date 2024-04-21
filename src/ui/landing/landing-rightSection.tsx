import Image from 'next/image'
import './right-section.css'
import { useState } from 'react';

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
        <Image className="item-image" src="/images/landing/img1.jpg" alt="img1" width={1280} height={720} priority={false} onLoad={handleImageLoad} />
      </div>
      <div className='item img2'>
          <div className='text-foregroundSecondary flex justify-center items-center' style={{ height: '100%' }}>
          {loadedImages < 6 && <p>Loading...</p>}
        </div>
        <Image className="item-image" src="/images/landing/img2.jpg" alt="img2" width={1280} height={720} onLoad={handleImageLoad} />
      </div>
      <div className='item img3'>
          <div className='text-foregroundSecondary flex justify-center items-center' style={{ height: '100%' }}>
          {loadedImages < 6 && <p>Loading...</p>}
        </div>
        <Image className="item-image" src="/images/landing/img3.jpg" alt="img3" width={1280} height={720} onLoad={handleImageLoad} />
      </div>
      <div className='item img4'>
          <div className='text-foregroundSecondary flex justify-center items-center' style={{ height: '100%' }}>
          {loadedImages < 6 && <p>Loading...</p>}
        </div>
        <Image className="item-image" src="/images/landing/img3.jpg" alt="img3" width={1280} height={720} onLoad={handleImageLoad} />
      </div>
      <div className='item img5'>
          <div className='text-foregroundSecondary flex justify-center items-center' style={{ height: '100%' }}>
          {loadedImages < 6 && <p>Loading...</p>}
        </div>
        <Image className="item-image" src="/images/landing/img4.jpg" alt="img4" width={1280} height={720} onLoad={handleImageLoad} />
      </div>
      <div className='item img6'>
          <div className='text-foregroundSecondary flex justify-center items-center' style={{ height: '100%' }}>
          {loadedImages < 6 && <p>Loading...</p>}
        </div>
        <Image className="item-image" src="/images/landing/img5.jpg" alt="img5" width={1280} height={720} onLoad={handleImageLoad} />
      </div>
    </div>
  )
} 