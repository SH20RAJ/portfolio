"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

/**
 * Progressive Image component that shows a blur-up effect when loading images
 * @param {string} src - The source URL of the image
 * @param {number} width - The width of the image
 * @param {number} height - The height of the image
 * @param {string} alt - The alt text for the image
 * @param {string} className - Additional CSS classes
 * @param {string} placeholder - URL of placeholder image or "blur" to use built-in placeholder
 * @param {string} blurDataURL - Data URL for blur placeholder if placeholder="blur"
 * @param {Object} props - Any additional props to pass to the Image component
 */
export const ProgressiveImage = ({
  src,
  width,
  height,
  alt,
  className = '',
  placeholder = 'empty',
  blurDataURL,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
    </div>
  );
};

/**
 * Generates a simple blur hash data URL for use as placeholder
 * @param {string} hex - Hex color code without # (e.g., "ff0000" for red)
 * @returns {string} A data URL for a blurred placeholder
 */
export const generateBlurPlaceholder = (hex = '888888') => {
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <rect width="100" height="100" fill="#${hex}" />
      <filter id="a"><feGaussianBlur stdDeviation="20" /></filter>
      <rect width="100" height="100" fill="#${hex}" filter="url(#a)" />
    </svg>`
  ).toString('base64')}`;
};

/**
 * Image with intersection observer loading to only load when in viewport
 */
export const LazyImage = ({
  src,
  width,
  height,
  alt,
  className = '',
  threshold = 0.1,
  rootMargin = '200px',
  ...props
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgRef, setImgRef] = useState(null);

  useEffect(() => {
    if (!imgRef) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(imgRef);
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(imgRef);
    
    return () => {
      if (imgRef) {
        observer.unobserve(imgRef);
      }
    };
  }, [imgRef, threshold, rootMargin]);

  return (
    <div 
      ref={setImgRef}
      className={`relative overflow-hidden ${className}`} 
      style={{ width, height }}
    >
      {isInView ? (
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          {...props}
        />
      ) : (
        <div className="w-full h-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
    </div>
  );
};

/**
 * Aspect ratio container for images
 */
export const AspectRatio = ({ 
  ratio = '1:1', 
  children, 
  className = '' 
}) => {
  const [x, y] = ratio.split(':').map(Number);
  const paddingTop = `${(y / x) * 100}%`;
  
  return (
    <div className={`relative ${className}`} style={{ paddingTop }}>
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
};

/**
 * Image gallery with lazy loading and masonry layout
 */
export const ImageGallery = ({ 
  images,
  columns = 3,
  gap = 16,
  className = ''
}) => {
  const [columnHeights, setColumnHeights] = useState(Array(columns).fill(0));
  const [imagePositions, setImagePositions] = useState([]);
  
  useEffect(() => {
    // Calculate positions for each image in a masonry layout
    const positions = [];
    const heights = Array(columns).fill(0);
    
    images.forEach((image) => {
      // Find the shortest column
      const shortestColumn = heights.indexOf(Math.min(...heights));
      
      // Calculate aspect ratio (assume width:height = x:y)
      const aspectRatio = image.width / image.height;
      
      // Add image to the shortest column
      positions.push({
        column: shortestColumn,
        top: heights[shortestColumn],
        height: 1 / aspectRatio,
      });
      
      // Update column height
      heights[shortestColumn] += 1 / aspectRatio + gap;
    });
    
    setColumnHeights(heights);
    setImagePositions(positions);
  }, [images, columns, gap]);
  
  return (
    <div 
      className={`relative ${className}`}
      style={{ height: `${Math.max(...columnHeights)}px` }}
    >
      {images.map((image, index) => {
        const position = imagePositions[index];
        
        return position ? (
          <div
            key={image.src}
            className="absolute transition-all duration-500"
            style={{
              left: `${(position.column / columns) * 100}%`,
              top: position.top,
              width: `${(1 / columns) * 100}%`,
              height: position.height,
              padding: `0 ${gap / 2}px`,
            }}
          >
            <LazyImage
              src={image.src}
              alt={image.alt || 'Gallery image'}
              width={image.width}
              height={image.height}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ) : null;
      })}
    </div>
  );
};

/**
 * Generates a color palette from an image
 * This is a mock implementation - in a real app you'd use a library
 * like node-vibrant or colorthief
 */
export const getImagePalette = async (imageSrc) => {
  // This is a mock implementation
  // In a real app, you would analyze the image to extract colors
  return [
    '#3498db', // Primary
    '#2980b9', // Secondary
    '#e74c3c', // Accent
    '#f1c40f', // Highlight
    '#2c3e50', // Dark
  ];
};

/**
 * Utility function to preload important images
 */
export const preloadImages = (srcs = []) => {
  if (typeof window === 'undefined') return;
  
  srcs.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};
