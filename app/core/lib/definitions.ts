import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type User = {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
};

export type Image = {
  imageId: number;
  creator?: number;
  src: string;
  name: string;
  description?: string;
  format: string;
  price?: number;
  isFree: boolean;
  isDefault: boolean;
  width: number;
  height: number;
  imagecategories: ImageCategory[];
};

export type ImageCategory = {
  category: Category;
};

export type Category = {
  category_id: number;
  name: string;
  description: string;
};
