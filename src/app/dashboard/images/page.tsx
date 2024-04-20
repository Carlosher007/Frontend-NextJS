"use client";
import React from "react";
import PhotoAlbum from "react-photo-album";
import NextImage from "./NextImage/NextImage";
import { getImages } from "./Service/Service";

export default function Page() {
    const images = getImages();
    return (
        <PhotoAlbum 
            layout="rows"
            photos={images}
            renderPhoto={NextImage}
            sizes={{ size: "100vw" }}
        />
    );
}