import { CldImage } from "next-cloudinary";
import { Button, useDisclosure } from "@nextui-org/react";
import { NextImageProps } from "./NextImage.props";
import { PencilIcon, TrashIcon } from "@/app/core/ui/icons";
import ImageModal from "../ImageModal/ImageModal";
import ConfirmModal from "@/app/core/ui/components/dashboardImages/ConfirmModal";
import { deleteImage } from "@/app/core/api/dashboardImages/service";
import { toast } from "sonner";

export default function NextImage({
  photo,
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
  mode = "public",
  onSucces
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

  const onAddToCart = () => {
    console.log(photo)
  }

  const onConfirmDeleteModal = async () => {
    try {
      const res: Response = await deleteImage(photo.imageId);
      const resTxt: string = await res.text();
      if (res.status !== 200) throw new Error(resTxt)
      toast.success(resTxt);
    } catch (err) {
      toast.error((err as Error).message)
    } finally { onCloseDeleteModal(); await onSucces() }
  }

  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <CldImage
        fill
        src={src}
        loading="lazy"
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        className="rounded-lg hover:opacity-80 hover:cursor-pointer"
        onClick={onOpenImageModal}
        {...{ alt, title, sizes }}
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

          <ImageModal isOpen={isOpenImageModal} onOpenChange={onOpenChangeEditModal} onClose={onCloseImageModal} mode="edit" image={photo} onSucces={onSucces} />
          <ConfirmModal isOpen={isOpenDeleteModal} onConfirm={onConfirmDeleteModal} onClose={onCloseDeleteModal} />
        </>
      }
      {mode === "public" &&
        <>
        <div className="flex flex-col">
            <Button
              isIconOnly
              color="danger"
              className="m-1"
              onPress={onAddToCart}>
              Cart
            </Button>
          </div>
          <ImageModal isOpen={isOpenImageModal} onOpenChange={onOpenChangeEditModal} onClose={onCloseImageModal} mode="view" image={photo} onSucces={onSucces} />
        </>
      }
      
    </div>
  );
}