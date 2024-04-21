import { Input } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { ImageModalFormProps } from './ImageModalForm.props';
import { CldImage } from 'next-cloudinary';

export default function ImageModalForm({image, mode}:ImageModalFormProps) {
    const [imageSelected, setImageSelected] = useState<any | null>();
    return (
        <form className='flex flex-col gap-4 items-center'>
            {mode === "upload" && 
                <>
                <input 
                    type="file"
                    onChange={(e) => setImageSelected(e.target?.files && e.target?.files[0])}
                    className="rounded-sm bg-gray-800"/>
                {imageSelected && 
                    <Image 
                        alt='Tu imagen' 
                        src={URL.createObjectURL(imageSelected)} 
                        width={300} height={200} 
                        className=" justify-center items-center"/>
                }
                </>
            }
            {mode === "edit" &&
                <>
                {image && 
                    <CldImage 
                        alt={"image.name"}
                        src={image.src}
                        width={image.width}
                        height={image.height}
                    />
                }
                </>
            }
            <Input placeholder="Enter the name" type="text" label="Name"/>
            <Input placeholder="Enter the description" type="text" label="Description"/>
            <Input placeholder="Enter the price" type="number" label="Price" min={0}/>
        </form>
  )
}
