// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

