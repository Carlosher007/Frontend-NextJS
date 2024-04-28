import { Button, Chip, Input, Select, SelectItem, Textarea } from '@nextui-org/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ImageModalFormProps } from './ImageModalForm.props';
import { CldImage } from 'next-cloudinary';
import { getCategories, uploadImage } from '../../Service/Service';
import { useForm, SubmitHandler } from "react-hook-form"
import { objectToFormData } from '../../utils/utils';
import { Category } from '@/types';

type ImageForm = {
    image: File[]
    creator?: number
    name: string
    categories: string | number[] | undefined // Json.parse(number[])
    description?: string
    price?: number
};

export default function ImageModalForm({image, mode, ...props}:ImageModalFormProps) {

    const [categories, setCategories] = useState<Category[]>([])
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([])

    const onSelectCategory = (e: any) => {
        if (!e.target.value) return;
        const categorySelected = JSON.parse(e.target.value)

        if (selectedCategories.map(sc => sc.category_id).includes(categorySelected.category_id)) return;
        setSelectedCategories([...selectedCategories, categorySelected])
    }

    const onRemoveCategory = (removedCategoryId: number) => {
        setSelectedCategories(selectedCategories.filter(sc => sc.category_id != removedCategoryId))
    }

    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<ImageForm>()
    const watchSelectedImg = watch("image", undefined)

    const onSubmit: SubmitHandler<ImageForm> = async (data) => {

        try {
            console.log(data)
            const res = await uploadImage(data);
            console.log(res)
        } catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        selectedCategories.length > 0 ? 
            setValue("categories", selectedCategories.map(sc => sc.category_id))
            :
            setValue("categories", undefined)
    }, [selectedCategories])

    useEffect(() => {
        const _setCategories = async() => setCategories(await getCategories());
        _setCategories();
    }, [])

    return (
        <form
            className='flex flex-col gap-4 items-center' 
            onSubmit={handleSubmit(onSubmit)}
            {...props}>
            {mode === "upload" && 
                <>
                <input 
                    type="file"
                    accept='.png'
                    className="rounded-sm bg-gray-800"
                    {...register("image", { required: true })}
                    />
                {watchSelectedImg && watchSelectedImg.length > 0 && 
                    <Image 
                        alt='Tu imagen' 
                        src={URL.createObjectURL(watchSelectedImg[0])} 
                        width="0" height="0" 
                        sizes="100vw"
                        className="w-full h-auto"/>
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
            <Input
                color={errors.name && "danger"}
                placeholder="Enter the name" 
                type="text" 
                label="Name"
                {...register("name", { required: true })}
            />
            <Textarea 
                placeholder="Enter the description (optional)"
                label="Description"
                {...register("description")}/>
            <Input 
                placeholder="Free" 
                type="number" 
                label="Price" 
                min={0}
                {...register("price")}/>
            <Select
                color={selectedCategories.length <= 0 ? "warning" : "default"} 
                label="Select a category"
                {...register("categories", { required: true })}
                onChange={onSelectCategory}>
                {categories.map(category => 
                    <SelectItem 
                        key={JSON.stringify(category)}>
                            {category.name}
                    </SelectItem>
                )}
            </Select>
            <div className='flex flex-row gap-2'>
                {selectedCategories.map(selectedCategory => 
                    <Chip
                        onClose={() => onRemoveCategory(selectedCategory.category_id)}
                        key={selectedCategory.category_id}>
                            {selectedCategory.name}
                    </Chip>
                )} 
            </div>
        </form>
  )
}
