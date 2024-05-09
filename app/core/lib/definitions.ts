// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

import { SVGProps } from 'react';
import { Dispatch, SetStateAction } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


// GENERAL

export type User = {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
};

export type Image = {
  imageId: string;
  category: string;
  creator?: number;
  src: string;
  name: string;
  description?: string;
  format: string;
  price: number;
  isFree: boolean;
  isDefault?: boolean;
  width?: number;
  height?: number;
};

export type Category = {
  category_id: number;
  name: string;
  description: string;
};