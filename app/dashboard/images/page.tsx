'use client';
import React, { useEffect, useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import NextImage from '@/app/core/ui/components/dashboardImages/NextImage/NextImage';
import {
  getImages,
  getUserImages,
  getUserPurchasedImages,
} from '../../core/api/dashboardImages/service';
import { Button, ButtonGroup } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/use-disclosure';
import ImageModal from '@/app/core/ui/components/dashboardImages/ImageModal/ImageModal';
import { Image } from '@/app/core/lib/definitions';
import { Toaster } from 'sonner';
import { useFilters } from '@/app/core/hooks/useFilters';
import { Filters } from '@/app/core/ui/components/shoppingcart/Filters';
import { useUserStore } from '@/app/core/store';
import { number } from 'zod';

export default function Page() {
  const [images, setImages] = useState<Image[]>([]);
  const [mode, setMode] = useState<'public' | 'private'>('public');
  const [purchasedImages, setPurchasedImages] = useState<boolean>(false);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { filterImages } = useFilters();
  const filteredImages = filterImages(images);
  const userId = useUserStore((state) => state.idUser);

  const _getImages = async () => {
    if (mode == 'public') {
      if (purchasedImages) {
        if (userId) {
          setImages(await getUserPurchasedImages(userId));
          return;
        }
      }
      setImages(await getImages());
      return;
    }
    if (userId) {
      setImages(await getUserImages(userId));
    }
  };
  
  useEffect(() => {
    _getImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, purchasedImages]);

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          color={mode === 'public' && !purchasedImages ? 'success' : 'default'}
          onClick={() => {
            setMode('public'), setPurchasedImages(false);
          }}
        >
          Explore
        </Button>
        <Button
          color={purchasedImages && mode === 'public' ? 'success' : 'warning'}
          onClick={() => {
            setMode('public');
            setPurchasedImages(true);
          }}
        >
          My Purchased Images
        </Button>
        <Button
          color={mode === 'private' ? 'success' : 'default'}
          onClick={() => setMode('private')}
        >
          My Images
        </Button>
        {mode === 'private' && (
          <Button color="warning" onPress={onOpen}>
            Upload Image
          </Button>
        )}
      </ButtonGroup>
      <Filters />
      <PhotoAlbum
        layout="rows"
        photos={filteredImages}
        renderPhoto={(props) => (
          <NextImage mode={mode} onSucces={_getImages} {...props} />
        )}
        sizes={{ size: '100vw' }}
      />

      <ImageModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        mode="upload"
        onSucces={_getImages}
      />

      <Toaster position="top-center" richColors />
    </div>
  );
}
