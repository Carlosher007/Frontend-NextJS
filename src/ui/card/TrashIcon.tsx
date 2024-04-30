interface TrashIconProps {
  fill?: string;
  filled?: boolean;
  size?: number;
  height?: number;
  width?: number;
  label?: string;
  [key: string]: any;
}

export const TrashIcon = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  label,
  ...props
}: TrashIconProps) => {
  return (
    <svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 24 24"
      fill={filled ? fill : 'none'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4 6H20L18.4199 20.2209C18.3074 21.2337 17.4512 22 16.4321 22H7.56786C6.54876 22 5.69264 21.2337 5.5801 20.2209L4 6Z" stroke={fill} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.34491 3.14716C7.67506 2.44685 8.37973 2 9.15396 2H14.846C15.6203 2 16.3249 2.44685 16.6551 3.14716L18 6H6L7.34491 3.14716Z" stroke={fill} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 6H22" stroke={fill} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 11V16" stroke={fill} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 11V16" stroke={fill} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}