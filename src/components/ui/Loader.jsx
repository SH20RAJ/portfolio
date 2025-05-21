"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing");

  // Array of loading messages for a more dynamic experience
  const loadingMessages = [
    "Initializing",
    "Loading assets",
    "Preparing canvas",
    "Setting up environment",
    "Almost there"
  ];

  useEffect(() => {
    // Simulate progressive loading with incremental updates
    let progressInterval;
    let messageInterval;

    const startLoading = () => {
      // Progress bar animation
      progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (Math.random() * 15);
          // Slow down as we approach 100%
          return Math.min(newProgress > 80 ? prev + 1 : newProgress, 100);
        });
      }, 200);

      // Change loading message periodically
      messageInterval = setInterval(() => {
        setLoadingText(prev => {
          const currentIndex = loadingMessages.indexOf(prev);
          const nextIndex = (currentIndex + 1) % loadingMessages.length;
          return loadingMessages[nextIndex];
        });
      }, 1000);
    };

    // Start after a short delay to ensure DOM is ready
    const initialTimer = setTimeout(() => {
      startLoading();
    }, 300);

    // Set a minimum loading time for effect
    const hideTimer = setTimeout(() => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      setProgress(100);
      
      // Final delay before hiding
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    }, 2500);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 bg-background flex flex-col items-center justify-center z-[9999]"
        >
          <div className="flex flex-col items-center">
            {/* Logo animation */}
            <motion.div
              className="mb-8 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Dynamic Background Element */}
              <motion.div
                className="absolute -inset-10 rounded-full bg-primary/5 animate-pulse-slow"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0, -10, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Animated Logo/Icon */}
              <div className="relative">
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background circle */}
                  <motion.circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    stroke="currentColor" 
                    strokeOpacity="0.1" 
                    strokeWidth="8" 
                  />
                  
                  {/* Animated progress circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - progress / 100)}
                    initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                    animate={{ 
                      strokeDashoffset: 2 * Math.PI * 40 * (1 - progress / 100) 
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  
                  {/* Particles that float around the circle */}
                  {[...Array(5)].map((_, i) => (
                    <motion.circle
                      key={i}
                      r={2 + Math.random() * 2}
                      fill="url(#gradient)"
                      initial={{
                        cx: 50 + 45 * Math.cos(i * (2 * Math.PI / 5)),
                        cy: 50 + 45 * Math.sin(i * (2 * Math.PI / 5)),
                        scale: 0
                      }}
                      animate={{
                        cx: [
                          50 + 45 * Math.cos(i * (2 * Math.PI / 5)),
                          50 + 45 * Math.cos((i + 1) * (2 * Math.PI / 5)),
                          50 + 45 * Math.cos((i + 2) * (2 * Math.PI / 5))
                        ],
                        cy: [
                          50 + 45 * Math.sin(i * (2 * Math.PI / 5)),
                          50 + 45 * Math.sin((i + 1) * (2 * Math.PI / 5)),
                          50 + 45 * Math.sin((i + 2) * (2 * Math.PI / 5))
                        ],
                        scale: [0, 1.5, 0]
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.5, 1]
                      }}
                    />
                  ))}
                  
                  {/* Initials or logo in the center */}
                  <motion.text
                    x="50"
                    y="56"
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="bold"
                    fill="currentColor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    SR
                  </motion.text>
                  
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--primary)" />
                      <stop offset="50%" stopColor="var(--accent)" />
                      <stop offset="100%" stopColor="var(--secondary)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
            
            {/* Loading text with typewriter effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-foreground/80 font-medium text-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={loadingText}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center"
                >
                  {loadingText}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-1"
                  >
                    ...
                  </motion.span>
                </motion.div>
              </AnimatePresence>
              
              {/* Progress percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                className="text-sm mt-1"
              >
                {Math.round(progress)}%
              </motion.div>
            </motion.div>
            
            {/* Progress bar */}
            <div className="w-48 h-0.5 bg-foreground/10 mt-4 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
