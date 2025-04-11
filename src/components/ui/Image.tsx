
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className = '' }: ImageProps) => {
  // Handle external URLs vs local images
  const isExternal = src.startsWith('http');
  
  // For Vercel deployment, no need to adjust paths as it uses the public folder directly
  // Just ensure we're using the correct path format
  const imagePath = src;
  
  return (
    <img
      src={imagePath}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        console.log(`Image failed to load: ${target.src}`);
        target.src = 'https://via.placeholder.com/800x450?text=Image+Not+Found';
      }}
    />
  );
};

export default Image;
