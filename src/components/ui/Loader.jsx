"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-background flex flex-col items-center justify-center z-[9999]"
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-8"
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.circle 
              cx="50" 
              cy="50" 
              r="40" 
              stroke="currentColor" 
              strokeOpacity="0.2" 
              strokeWidth="8" 
            />
            <motion.path
              d="M50 10
                A 40 40 0 0 1 90 50"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ 
                pathLength: 1,
                rotate: 360
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--secondary)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-foreground/80 font-medium"
        >
          Loading...
        </motion.div>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="h-0.5 bg-gradient-to-r from-primary via-accent to-secondary mt-4 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default Loader;
