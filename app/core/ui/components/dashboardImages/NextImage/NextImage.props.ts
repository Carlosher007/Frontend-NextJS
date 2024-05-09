import { RenderPhotoProps } from 'react-photo-album';

type modeType = {
  mode: 'private' | 'public';
};

export type NextImageProps = RenderPhotoProps &
  modeType & {
    onSucces?: () => any;
  };
