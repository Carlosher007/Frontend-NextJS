export type ConfirmModalProps = {
    isOpen: boolean
    onConfirm: () => void
    onClose: () => void
    onOpenChange?: () => void
}