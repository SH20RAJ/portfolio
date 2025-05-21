"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/**
 * A responsive image component with blur hash effect for loading
 */
const BlurImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  blurHash = "L6PZfSi_.AyE_3t7t7R**0o#DgR4", 
  className = "",
  priority = false,
  objectFit = "cover",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBlur, setShowBlur] = useState(true);
  
  // Convert SVG blurHash to data URL
  const blurDataURL = `data:image/svg+xml;base64,${Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <filter id="b" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation="20" />
      </filter>
      <rect width="100%" height="100%" fill="#f6f6f6" />
      <rect width="100%" height="100%" fill="#3498db" filter="url(#b)" opacity="0.3" />
    </svg>`
  ).toString('base64')}`;

  useEffect(() => {
    // When the image finishes loading, wait a bit before hiding the blur
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowBlur(false);
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);
  
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        quality={90}
        className={`z-10 transition-opacity duration-500 ease-in-out ${objectFit === "cover" ? "object-cover" : "object-contain"}`}
        onLoad={() => setIsLoaded(true)}
        style={{ opacity: isLoaded ? 1 : 0 }}
        {...props}
      />
      
      <AnimatePresence>
        {showBlur && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={blurDataURL}
              alt=""
              fill
              className={`z-0 ${objectFit === "cover" ? "object-cover" : "object-contain"}`}
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/**
 * Image with color extraction functionality
 */
const ImageWithPalette = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = "",
  onPaletteExtracted = () => {},
  ...props 
}) => {
  const [colors, setColors] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // This would normally use a color extraction library
  // For this example, we'll simulate with a timeout
  useEffect(() => {
    if (isLoaded) {
      // Simulate color extraction
      const timer = setTimeout(() => {
        const extractedColors = {
          vibrant: '#3498db',
          darkVibrant: '#2c3e50',
          lightVibrant: '#ecf0f1',
          muted: '#95a5a6',
          darkMuted: '#7f8c8d',
          lightMuted: '#bdc3c7'
        };
        
        setColors(extractedColors);
        onPaletteExtracted(extractedColors);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isLoaded, onPaletteExtracted]);
  
  return (
    <div className={`relative ${className}`}>
      <BlurImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoadingComplete={() => setIsLoaded(true)}
        {...props}
      />
      
      {colors && (
        <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-center space-x-1 bg-background/30 backdrop-blur-sm">
          {Object.values(colors).map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Image gallery component with masonry layout
 */
const ImageMasonry = ({ images, columns = 3, gap = 8, className = "" }) => {
  const [columnHeights, setColumnHeights] = useState(Array(columns).fill(0));
  const [layout, setLayout] = useState([]);
  const [isLayoutComplete, setIsLayoutComplete] = useState(false);

  useEffect(() => {
    if (!images || images.length === 0) return;
    
    // Calculate layout positions
    const newColumnHeights = Array(columns).fill(0);
    const newLayout = [];
    
    images.forEach((image) => {
      // Find shortest column
      const shortestCol = newColumnHeights.indexOf(Math.min(...newColumnHeights));
      
      // Calculate aspect ratio and height
      const aspectRatio = image.width / image.height;
      const displayWidth = 100 / columns;
      const displayHeight = (100 / columns) / aspectRatio;
      
      // Add to layout
      newLayout.push({
        x: (shortestCol / columns) * 100,
        y: newColumnHeights[shortestCol],
        width: displayWidth,
        height: displayHeight,
        image,
      });
      
      // Update column height
      newColumnHeights[shortestCol] += displayHeight + gap;
    });
    
    setColumnHeights(newColumnHeights);
    setLayout(newLayout);
    setIsLayoutComplete(true);
  }, [images, columns, gap]);
  
  return (
    <div 
      className={`relative w-full ${className}`}
      style={{ height: `${Math.max(...columnHeights)}vw` }}
    >
      <AnimatePresence>
        {isLayoutComplete && layout.map((item, index) => (
          <motion.div
            key={item.image.src}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="absolute"
            style={{
              left: `${item.x}%`,
              top: `${item.y}vw`,
              width: `calc(${item.width}% - ${gap}px)`,
              height: `${item.height}vw`,
            }}
          >
            <BlurImage
              src={item.image.src}
              alt={item.image.alt || "Gallery image"}
              width={item.image.width}
              height={item.image.height}
              className="rounded-lg shadow-md w-full h-full"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export { BlurImage, ImageWithPalette, ImageMasonry };
