"use client";

import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Spring animation for hover effect
  const springConfig = { stiffness: 300, damping: 30 };
  const scale = useSpring(1, springConfig);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down enough
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Calculate scroll progress percentage
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const handleHoverStart = () => {
    setIsHovered(true);
    scale.set(1.1);
  };
  
  const handleHoverEnd = () => {
    setIsHovered(false);
    scale.set(1);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30 
          }}
        >
          <motion.button
            onClick={scrollToTop}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
            style={{ scale }}
            className="relative p-4 bg-gradient-to-tr from-primary to-secondary text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 overflow-hidden"
            aria-label="Back to top"
            whileTap={{ scale: 0.9 }}
          >
            {/* Progress circle */}
            <svg 
              className="absolute inset-0 w-full h-full -rotate-90" 
              viewBox="0 0 100 100"
            >
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                strokeWidth="4"
                fill="none" 
                stroke="rgba(255, 255, 255, 0.2)"
                className="transition-all duration-200"
              />
              <motion.circle 
                cx="50" 
                cy="50" 
                r="40" 
                strokeWidth="4"
                fill="none" 
                stroke="white"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - scrollProgress / 100)}`}
                className="transition-all duration-200"
                animate={{ 
                  strokeDashoffset: `${2 * Math.PI * 40 * (1 - scrollProgress / 100)}` 
                }}
                transition={{ duration: 0.1 }}
              />
            </svg>
            
            {/* Arrow icon */}
            <motion.div
              className="relative z-10"
              animate={{ y: isHovered ? -2 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <FiArrowUp size={24} />
            </motion.div>
            
            {/* Ripple effect on click */}
            <motion.span
              className="absolute inset-0 bg-white rounded-full scale-0 opacity-30"
              initial={{ scale: 0, opacity: 0.3 }}
              whileTap={{ scale: 4, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
          
          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-card text-foreground text-xs px-2 py-1 rounded shadow-md whitespace-nowrap"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
              >
                Back to top
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
