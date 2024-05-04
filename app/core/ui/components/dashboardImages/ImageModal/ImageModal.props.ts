import { ModalProps } from '@nextui-org/react';

type modalType = {
  mode: 'upload' | 'edit' | 'view';
};

export type ImageModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  image?: undefined | any;
  onSucces: () => any;
} & modalType;
