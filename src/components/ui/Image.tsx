
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className = '' }: ImageProps) => {
  // Handle external URLs vs local images
  const isExternal = src.startsWith('http');
  
  // For GitHub Pages deployment, adjust the path if it's a local image
  let imagePath = src;
  if (!isExternal && import.meta.env.MODE === "production") {
    // If deployed to GitHub Pages, add the repository name to the path
    // This assumes deployment to username.github.io/Shuaib_Portfolio
    imagePath = `/Shuaib_Portfolio${src}`;
  }
  
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
