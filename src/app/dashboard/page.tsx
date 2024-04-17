"use client";

import Image from "next/image";
import { CldUploadButton, CldImage } from 'next-cloudinary';
import { useState } from "react";

type UploadResult = {
  info: {
    public_id: string
  },
  event: 'success'
}

export default function Page() {
  const [imageId, setImageId] = useState<string>("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        // onSuccess={(result: UploadResult) => {
        //   setImageId(result.info.public_id);
        // }}
        uploadPreset="uqnyprp5"
      />

      {imageId && <CldImage
        width="400"
        height="300"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
        blur={800}
      />}
    </main>
  );
}
