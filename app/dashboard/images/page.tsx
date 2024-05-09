"use client";
import React, { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import NextImage from "@/app/core/ui/components/dashboardImages/NextImage/NextImage";
import { getImages, getUserImages } from "../../core/api/dashboardImages/service";
import { Button, ButtonGroup, useDisclosure } from "@nextui-org/react";
import ImageModal from "@/app/core/ui/components/dashboardImages/ImageModal/ImageModal";
import { Image } from "@/app/core/lib/definitions";
import { Toaster } from "sonner";
import {useFilters} from '@/app/core/hooks/useFilters'
import { Filters } from "@/app/core/ui/components/shoppingcart/Filters";
import { useUserStore } from "@/app/core/store";
import { number } from "zod";

export default function Page() {
    const [images, setImages] = useState<Image[]>([])
    const [mode, setMode] = useState<"public" | "private">("public");
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const {filterImages} = useFilters()
    const filteredImages = filterImages(images)
    const userId = useUserStore(state => state.id);

    const _getImages = async () => {
        if (mode == "public"){
            setImages(await getImages())
            return;
        }
        setImages(await getUserImages(userId))
    };
    useEffect(() => {
        _getImages();
    }, [mode])

    return (
        <div className="flex flex-col gap-4">
            <ButtonGroup>
                <Button
                    color={mode === "public" ? "success" : "default"}
                    onClick={() => setMode("public")}>
                    Explore
                </Button>
                <Button
                    color={mode === "private" ? "success" : "default"}
                    onClick={() => setMode("private")}>
                    My Images
                </Button>
                {mode === "private" &&
                    <Button
                        color="warning"
                        onPress={onOpen}>
                        Upload Image
                    </Button>
                }
            </ButtonGroup>
            <Filters />
            <PhotoAlbum
                layout="rows"
                photos={filteredImages}
                renderPhoto={(props) => (<NextImage mode={mode} onSucces={_getImages} {...props} />)}
                sizes={{ size: "100vw" }}
            />

            <ImageModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={onClose}
                mode="upload"
                onSucces={_getImages} />

            <Toaster position="top-center" richColors />
        </div>
    );
}