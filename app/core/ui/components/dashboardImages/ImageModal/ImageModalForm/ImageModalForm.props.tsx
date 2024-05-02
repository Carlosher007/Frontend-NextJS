import { DetailedHTMLProps } from "react"

export type ImageModalFormProps = {
    image?: any
    mode: "upload" | "edit"
    id?: string
    onSucces: () => any
}