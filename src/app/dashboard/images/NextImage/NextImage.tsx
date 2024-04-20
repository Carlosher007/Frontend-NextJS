import { CldImage } from "next-cloudinary";
import { Button } from "@nextui-org/react";
import { NextImageProps } from "./NextImage.props";
import { PencilIcon, TrashIcon } from "@/ui/components/icons";

export default function NextImage({
  photo,
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
  mode = "public"
}: NextImageProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <CldImage
        fill
        src={src}
        loading="lazy"
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        className="rounded-lg hover:opacity-80 hover:cursor-pointer"
        {...{ alt, title, sizes, onClick }}
      />
      {mode === "private" &&
        <div className="flex flex-col">
          <Button isIconOnly color="danger" className="m-1"><TrashIcon /></Button>
          <Button isIconOnly className="m-1"><PencilIcon /></Button>
        </div>
      }
    </div>
  );
}