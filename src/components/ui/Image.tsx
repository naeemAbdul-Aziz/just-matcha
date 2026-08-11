import React, { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  // Option to disable lazy loading for critical above-the-fold images
  loading?: 'lazy' | 'eager';
}

export const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  style,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Extract object-* classes to apply directly to the img, not the wrapper
  const objectClasses = className.split(' ').filter(c => c.startsWith('object-')).join(' ');
  const wrapperClasses = className.split(' ').filter(c => !c.startsWith('object-')).join(' ');
  
  // Ensure we don't conflict with provided position classes (absolute, fixed, etc.)
  const hasPosition = /\b(absolute|fixed|sticky|relative|static)\b/.test(wrapperClasses);
  const positionClass = hasPosition ? '' : 'relative';

  return (
    <div className={`${positionClass} overflow-hidden flex-shrink-0 ${wrapperClasses}`.trim()} style={style}>
      {/* Skeleton / Blur Placeholder */}
      {(!isLoaded && !hasError) && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-[#222] animate-pulse flex items-center justify-center z-0">
           <span className="material-symbols-sharp text-gray-300 dark:text-gray-700 opacity-50 text-3xl">image</span>
        </div>
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-red-50 dark:bg-red-900/20 flex flex-col items-center justify-center text-red-400 z-0">
           <span className="material-symbols-sharp text-2xl mb-1">broken_image</span>
           <span className="text-[10px] font-medium uppercase tracking-wider">Failed</span>
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full transition-opacity duration-700 ease-in-out relative z-10 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${objectClasses || 'object-cover'}`}
        {...props}
      />
    </div>
  );
};
