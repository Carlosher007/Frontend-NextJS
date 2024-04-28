import { ModalProps } from "@nextui-org/react";
import { modalType } from "../types/types";

export type ImageModalProps = {
    isOpen: boolean
    onOpenChange: () => void
    onClose: () => void
    image?: undefined | any
    onSucces: () => any
} & modalType;