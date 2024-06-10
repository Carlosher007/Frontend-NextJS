import { Image } from "@/app/core/lib/definitions"
import { DetailedHTMLProps } from "react"

export type ImageModalFormProps = {
    image?: Image
    mode: "upload" | "edit" | "view"
    id?: string
    onSucces: () => any
}