"use client";

import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
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
    // Apply theme changes to document
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-8 p-3 bg-card text-foreground border border-border rounded-full shadow-lg hover:shadow-xl transition-all z-40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;
