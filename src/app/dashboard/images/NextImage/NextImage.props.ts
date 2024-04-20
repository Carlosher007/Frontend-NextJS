import { RenderPhotoProps } from "react-photo-album";

export type NextImageProps = RenderPhotoProps & {
    mode: "public" | "private"
};