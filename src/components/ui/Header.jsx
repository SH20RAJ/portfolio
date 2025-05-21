"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiArrowRight, FiMoon, FiSun } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackground, setShowBackground] = useState(false);
  const headerRef = useRef(null);
  const intersectionRef = useRef(null);

  // Enhanced scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Show background when scrolled past 10px
      setScrolled(window.scrollY > 10);
      
      // Track active section for highlighting nav links
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 80; // Add offset for header

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    // Create intersection observer for subtle header effects
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBackground(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (intersectionRef.current) observer.unobserve(intersectionRef.current);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <div ref={intersectionRef} className="h-1 absolute top-0 w-full" />
      <motion.header 
        ref={headerRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className={`absolute inset-0 bg-background/80 backdrop-blur-md shadow-sm transition-opacity duration-300 ${
          scrolled || showBackground ? 'opacity-100' : 'opacity-0'
        }`} />
        
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-10">
          <Link href="/" className="text-xl font-bold relative">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Shaswat Raj
              </span>
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary" 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              />
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                  activeSection === link.href.replace('#', '') 
                    ? 'text-primary' 
                    : 'text-foreground/70 hover:text-foreground'
                }`}
                onClick={closeMenu}
              >
                <span className="relative z-10">{link.name}</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" 
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: activeSection === link.href.replace('#', '') ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* <ThemeToggle /> */}
            
            <Link
              href="#contact"
              className="bg-primary text-white px-4 py-2 rounded-lg flex items-center space-x-1 hover:bg-primary/90 transition-colors"
            >
              <span>Let's Talk</span>
              <FiArrowRight className="ml-1 animate-pulse-subtle" />
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-4">
            {/* <ThemeToggle /> */}
            
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-lg focus:outline-none bg-card hover:bg-muted transition-colors border border-border/50"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-card/95 backdrop-blur-md border-t border-border/30 shadow-lg"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`px-4 py-3 rounded-lg flex justify-between items-center ${
                          activeSection === link.href.replace('#', '') 
                            ? 'bg-primary/10 text-primary' 
                            : 'hover:bg-muted'
                        }`}
                        onClick={closeMenu}
                      >
                        <span>{link.name}</span>
                        {activeSection === link.href.replace('#', '') && (
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="mt-2 pt-2 border-t border-border/30"
                  >
                    <Link
                      href="#contact"
                      className="bg-primary text-white px-4 py-3 rounded-lg flex justify-between items-center hover:bg-primary/90 transition-colors"
                      onClick={closeMenu}
                    >
                      <span>Let's Talk</span>
                      <FiArrowRight />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* This spacer ensures content doesn't hide behind the fixed header */}
      <div className={`h-20 ${scrolled ? 'h-16' : 'h-24'} transition-all duration-300`} />
    </>
  );
};

export default Header;
