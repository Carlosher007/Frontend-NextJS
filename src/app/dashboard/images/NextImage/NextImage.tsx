import { CldImage } from "next-cloudinary";
import { Button, useDisclosure } from "@nextui-org/react";
import { NextImageProps } from "./NextImage.props";
import { PencilIcon, TrashIcon } from "@/ui/components/icons";
import ImageModal from "../ImageModal/ImageModal";
import ConfirmModal from "@/ui/components/ConfirmModal/ConfirmModal";

export default function NextImage({
  photo,
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
  mode = "public"
}: NextImageProps | any) {

  const {
    isOpen: isOpenImageModal, 
    onOpen: onOpenImageModal, 
    onOpenChange: onOpenChangeImageModal, 
    onClose: onCloseImageModal
  } = useDisclosure();

  const {
    isOpen: isOpenDeleteModal, 
    onOpen: onOpenDeleteModal,  
    onClose: onCloseDeleteModal
  } = useDisclosure();

  const onOpenChangeEditModal = () => {
    console.log(photo)
    onCloseImageModal()
  }

  const onConfirmDeleteModal = () => {
    console.log("Delete image: ", photo)
    onCloseDeleteModal()
  }

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
        <>
        <div className="flex flex-col">
          <Button 
            isIconOnly 
            color="danger" 
            className="m-1"
            onPress={onOpenDeleteModal}>
              <TrashIcon />
          </Button>
          <Button 
            isIconOnly
            className="m-1"
            onPress={onOpenImageModal}>
              <PencilIcon />
          </Button>
        </div>

        <ImageModal isOpen={isOpenImageModal} onOpenChange={onOpenChangeEditModal} onClose={onCloseImageModal} mode="edit" image={photo}/>
        <ConfirmModal isOpen={isOpenDeleteModal} onConfirm={onConfirmDeleteModal} onClose={onCloseDeleteModal} />
        </>
      }
    </div>
  );
}