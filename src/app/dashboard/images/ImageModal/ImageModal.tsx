import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'
import { ImageModalProps } from './ImageModal.props'
import ImageModalForm from './ImageModalForm/ImageModalForm'

export default function ImageModal({isOpen, onOpenChange, mode, image, ...props}: ImageModalProps) {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} {...props} >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">
                    {mode === "upload" && "Upload Image"}
                    {mode === "edit" && "Edit Image"}
                </ModalHeader>
                <ModalBody>
                    <ImageModalForm mode={mode} image={image}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                    </Button>
                    <Button color="primary" onPress={onClose}>
                    Confirm
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
  )
}
