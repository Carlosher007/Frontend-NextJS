import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Image = {
  imageId: number
  creator?: number
  src: string
  name: string
  description?: string
  format: string
  price?: number,
  isFree: boolean,
  isDefault: boolean,
  width: number,
  height: number
};

export type Category = {
  category_id: number
  name: string
  description: string
}
