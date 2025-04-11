
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className = '' }: ImageProps) => {
  // Handle external URLs (unsplash) vs local images
  const isExternal = src.startsWith('http');
  
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = 'https://via.placeholder.com/800x450?text=Image+Not+Found';
      }}
    />
  );
};

export default Image;
