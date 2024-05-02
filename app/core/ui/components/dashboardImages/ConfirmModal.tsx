import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

function ConfirmModal({ isOpen, onConfirm, onClose }: {
    isOpen: boolean
    onConfirm: () => void
    onClose: () => void
    onOpenChange?: () => void
}) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Confirmation
                        </ModalHeader>
                        <ModalBody>
                            Are you sure you want continue
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Cancel
                            </Button>
                            <Button color="primary" onPress={onConfirm}>
                                Continue
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default ConfirmModal