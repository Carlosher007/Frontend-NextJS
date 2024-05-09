import { Button, Chip, Input, Select, SelectItem, Textarea } from '@nextui-org/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ImageModalFormProps } from './ImageModalForm.props';
import { CldImage } from 'next-cloudinary';
import { getCategories, updateImage, uploadImage } from '@/app/core/api/dashboardImages/service';
import { useForm, SubmitHandler } from "react-hook-form"
import { Category } from '@/app/core/lib/definitions';
import { toast } from 'sonner'
import { AnyCnameRecord } from 'dns';
import { useUserStore } from '@/app/core/store';

type ImageForm = {
    image: File[]
    creator?: number
    name: string
    categories: string // Json.parse(number[])
    description?: string
    price?: number
};

export default function ImageModalForm({ image, mode, onSucces, ...props }: ImageModalFormProps) {
    const viewMode = mode === "view";
    const [categories, setCategories] = useState<Category[]>([])
    const [_selectedCategories, _setSelectedCategories] = useState<Set<number> | any>(image ? new Set(image.imagecategories.map(ic => ic.category.categoryId)) : new Set())

    const { register, handleSubmit, formState: { errors }, watch, setValue, getValues } = useForm<ImageForm>()
    const watchSelectedImg = watch("image", undefined)
    const userId = useUserStore(state => state.id);

    const handleSelectionChange = (e:any) => {
        const newSelectedCategories = new Set(e.target.value.split(","));
        _setSelectedCategories(newSelectedCategories);
        setValue("categories", e.target.value.split(",").filter((str:string) => str !== "").join(","))
      };

    const onSubmit: SubmitHandler<ImageForm> = async (data) => {
        try {
            let res = null;
            if (image){
                console.log(data)
                res = await updateImage(data, image.imageId);
            }
            else{
                res = await uploadImage({...data, creator:Number(userId)});
            }
            const resTxt: string = await res.text();
            if (res.status !== 200) throw new Error(resTxt)
            toast.success(resTxt)
            await onSucces()
        } catch (err) {
            toast.error((err as Error).message)
        }
    }

    useEffect(() => {
        if (image){
            setValue("name", image.name)
            setValue("description", image.description)
            setValue("price", image.price)
            setValue("categories", image.imagecategories.map(ic => ic.category.categoryId).join(","))
        }
    }, [image])

    useEffect(() => {
        const _setCategories = async () => setCategories(await getCategories());
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
                            className="w-full h-auto" />
                    }
                </>
            }
            {(mode === "edit" || mode === "view") &&
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
                disabled={viewMode}
                {...register("name", { required: true })}
            />
            <Textarea
                placeholder={viewMode ? "No description" : "Enter the description (optional)"}
                label="Description"
                disabled={viewMode}
                {...register("description")} />
            <Input
                placeholder="Free"
                type="number"
                label="Price"
                onClick={() => console.log(errors)}
                min={0}
                disabled={viewMode}
                {...register("price")} />
            <Select
                color={_selectedCategories.size <= 0 ? "warning" : "default"}
                label="Categories"
                selectionMode="multiple"
                selectedKeys={_selectedCategories}
                {...register("categories", { required: false })}
                onChange={handleSelectionChange}
                isDisabled={viewMode}
                >
                {categories.map(category =>
                    <SelectItem
                        value={category.categoryId}
                        key={category.categoryId}>
                        {category.name}
                    </SelectItem>
                )}
            </Select>
        </form>
    )
}
