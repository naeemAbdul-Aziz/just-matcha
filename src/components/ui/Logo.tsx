import React from 'react';
import { cn } from '../../lib/utils';
import { Image } from './Image';

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <Image 
      src="/logo.jpeg" 
      alt="Just Matcha Logo" 
      className={cn("rounded-full", className)} 
      {...props}
    />
  );
};
