import React from 'react';
import { cn } from '../../lib/utils';

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <img 
      src="/logo.jpeg" 
      alt="Just Matcha Logo" 
      className={cn("rounded-full object-cover", className)} 
      {...props}
    />
  );
};
