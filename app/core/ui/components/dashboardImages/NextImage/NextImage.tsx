"use client"
import { CldImage } from "next-cloudinary";
import { Button, useDisclosure } from "@nextui-org/react";
import { NextImageProps } from "./NextImage.props";
import { PencilIcon, TrashIcon } from "@/app/core/ui/icons";
import ImageModal from "../ImageModal/ImageModal";
import ConfirmModal from "@/app/core/ui/components/dashboardImages/ConfirmModal";
import { deleteImage } from "@/app/core/api/dashboardImages/service";
import { toast } from "sonner";
import { useCartStore } from '@/app/core/store/images/cart-store'
import clsx from 'clsx';
import { Image as ImageDefinition } from "@/app/core/lib/definitions";
import { AddToCartIcon, RemoveFromCartIcon } from '@/app/core/ui/icons'
import { useEffect, useState } from 'react'

export default function NextImage({
  photo,
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
  mode = "public",
  onSucces
}: NextImageProps | any) {

  const { addToCart, cart, removeFromCart } = useCartStore(state => ({ addToCart: state.addToCart, cart: state.cart, removeFromCart: state.removeFromCart }))

  const checkProductInCart = (id: number) => {
    return cart.some(item => item.imageId === id)
  }

  const [isProductInCart, setIsProductInCart] = useState(checkProductInCart(photo.imageId))

  useEffect(() => {
    setIsProductInCart(checkProductInCart(photo.imageId))
  }, [cart])


  const {
    isOpen: isOpenImageModal,
    onOpen: onOpenImageModal,
    onOpenChange: onOpenChangeImageModal,
    onClose: onCloseImageModal
  } = useDisclosure();

  const {
    isOpen: isOpenDeleteModal,
    onOpen: onOpenDeleteModal,
    onClose: onCloseDeleteModal
  } = useDisclosure();

  const onOpenChangeEditModal = () => {
    console.log(photo)
    onCloseImageModal()
  }

  const onAddToCart = () => {
    if (isProductInCart) {
      removeFromCart(photo.imageId)
      return;
    }
    addToCart(photo)
  }

  const onConfirmDeleteModal = async () => {
    try {
      const res: Response = await deleteImage(photo.imageId);
      const resTxt: string = await res.text();
      if (res.status !== 200) throw new Error(resTxt)
      toast.success(resTxt);
    } catch (err) {
      toast.error((err as Error).message)
    } finally { onCloseDeleteModal(); await onSucces() }
  }

  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <CldImage
        fill
        src={src}
        loading="lazy"
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        className="rounded-lg hover:opacity-80 hover:cursor-pointer"
        onClick={onOpenImageModal}
        {...{ alt, title, sizes }}
      />
      {mode === "private" &&
        <>
          <div className="flex flex-col">
            <Button
              isIconOnly
              color="danger"
              className="m-1"
              onPress={onOpenDeleteModal}>
              <TrashIcon />
            </Button>
            <Button
              isIconOnly
              className="m-1"
              onPress={onOpenImageModal}>
              <PencilIcon />
            </Button>
          </div>

          <ImageModal isOpen={isOpenImageModal} onOpenChange={onOpenChangeEditModal} onClose={onCloseImageModal} mode="edit" image={photo} onSucces={onSucces} />
          <ConfirmModal isOpen={isOpenDeleteModal} onConfirm={onConfirmDeleteModal} onClose={onCloseDeleteModal} />
        </>
      }
      {mode === "public" &&
        <>
          <div className="flex flex-col">
            <Button
              isIconOnly
              color="danger"
              className={clsx("m-1", {
                'bg-red-500': isProductInCart,
                'bg-green-500': !isProductInCart
              })}
              onPress={onAddToCart}
            >
              {
                isProductInCart
                  ? <RemoveFromCartIcon />
                  : <AddToCartIcon />
              }
            </Button>
          </div>
          <ImageModal isOpen={isOpenImageModal} onOpenChange={onOpenChangeEditModal} onClose={onCloseImageModal} mode="view" image={photo} onSucces={onSucces} />
        </>
      }

    </div>
  );
}