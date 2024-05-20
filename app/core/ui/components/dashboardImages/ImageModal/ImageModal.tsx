"use client"
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'
import { ImageModalProps } from './ImageModal.props'
import ImageModalForm from './ImageModalForm/ImageModalForm'
import { useCartStore } from '@/app/core/store/images/cart-store'
import clsx from 'clsx';
import { useEffect, useState } from 'react'

export default function ImageModal({ isOpen, onOpenChange, mode, image, onSucces, ...props }: ImageModalProps) {

    const { addToCart, cart, removeFromCart } = useCartStore(state => ({ addToCart: state.addToCart, cart: state.cart, removeFromCart: state.removeFromCart }))

    const checkProductInCart = (id: number) => {
        return cart.some(item => item.imageId === id)
    }

    const [isProductInCart, setIsProductInCart] = useState(false)

    useEffect(() => {
        if (image) {
            setIsProductInCart(checkProductInCart(image.imageId))
        }
    }, [cart])

    const onAddToCart = () => {
        if (isProductInCart) {
            removeFromCart(image.imageId)
            return;
        }
        addToCart(image)
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior='inside' {...props} >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            {mode === "upload" && "Upload Image"}
                            {mode === "edit" && "Edit Image"}
                            {mode === "view" && "View Image"}
                        </ModalHeader>
                        <ModalBody>
                            <ImageModalForm
                                id="imageForm"
                                mode={mode}
                                image={image}
                                onSucces={async () => { await onSucces(); onClose() }}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Cancel
                            </Button>
                            {mode === "view" ?
                                <Button
                                    onPress={onAddToCart}
                                    color={isProductInCart ? "secondary" : "primary"}>
                                    {isProductInCart ? "Remove From Cart" : "Add To Cart"}
                                </Button>
                                :
                                <Button type="submit" form="imageForm" color="primary">
                                    Confirm
                                </Button>
                            }
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}
