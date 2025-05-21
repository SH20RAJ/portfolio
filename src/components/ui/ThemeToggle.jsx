"use client";

import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('system');
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize theme based on localStorage or system preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setTheme(darkMediaQuery.matches ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Apply theme changes to document
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-24 right-8 z-40"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.button
        onClick={toggleTheme}
        className="relative p-3 bg-card text-foreground border border-border rounded-full shadow-lg hover:shadow-xl transition-all overflow-hidden"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
        }}
        whileTap={{ scale: 0.9 }}
        aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      >
        {/* Sun/Moon icon with transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ rotate: -30, opacity: 0, y: 10 }}
            animate={{ rotate: 0, opacity: 1, y: 0 }}
            exit={{ rotate: 30, opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </motion.div>
        </AnimatePresence>
        
        {/* Background circle effect */}
        <motion.div 
          className={`absolute inset-0 ${theme === 'light' ? 'bg-indigo-100' : 'bg-amber-100'} rounded-full`}
          initial={{ scale: 0 }}
          animate={{ scale: theme === 'dark' ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          style={{ originX: 0.5, originY: 0.5, opacity: 0.3 }}
        />
        
        {/* Stars or sun rays */}
        {theme === 'dark' && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute w-1 h-1 bg-yellow-200 rounded-full"
                style={{ 
                  left: `${50 + 35 * Math.cos(i * Math.PI / 3)}%`, 
                  top: `${50 + 35 * Math.sin(i * Math.PI / 3)}%`,
                  opacity: isHovered ? 0.8 : 0.4
                }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: isHovered ? [0.4, 0.8, 0.4] : [0.2, 0.4, 0.2] 
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2,
                  delay: i * 0.3 
                }}
              />
            ))}
          </>
        )}
        
        {/* Moon crater or sun flare effect */}
        {theme === 'light' && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`crater-${i}`}
                className="absolute bg-indigo-200 rounded-full"
                style={{ 
                  width: `${4 + i * 2}px`, 
                  height: `${4 + i * 2}px`,
                  left: `${35 + i * 15}%`, 
                  top: `${30 + i * 15}%`,
                  opacity: 0.6
                }}
                animate={{ 
                  opacity: isHovered ? [0.4, 0.7, 0.4] : [0.3, 0.5, 0.3] 
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  delay: i * 0.5 
                }}
              />
            ))}
          </>
        )}
        
        {/* Ripple effect on click */}
        <motion.span
          className="absolute inset-0 bg-primary rounded-full"
          initial={{ scale: 0, opacity: 0.3 }}
          whileTap={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.button>
      
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-card text-foreground text-xs px-2 py-1 rounded shadow-md whitespace-nowrap"
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ThemeToggle;
