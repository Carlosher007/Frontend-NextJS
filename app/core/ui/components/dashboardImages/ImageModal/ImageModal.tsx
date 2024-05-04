import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'
import { ImageModalProps } from './ImageModal.props'
import ImageModalForm from './ImageModalForm/ImageModalForm'

export default function ImageModal({isOpen, onOpenChange, mode, image, onSucces, ...props}: ImageModalProps) {
    
    const onAddToCart = () => {
        console.log(image)
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
                        onSucces={async() => {await onSucces(); onClose()}}
                        />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                    </Button>
                    {mode === "view" ?
                        <Button 
                            onPress={onAddToCart}
                            color="primary">
                            Add To Cart
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
