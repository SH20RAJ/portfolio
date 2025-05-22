"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiArrowRight, FiMoon, FiSun, FiChevronRight } from 'react-icons/fi';
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
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div 
          className={`absolute inset-0 transition-all duration-300 ${
            scrolled || showBackground 
              ? 'bg-background/85 backdrop-blur-lg shadow-lg' 
              : 'bg-transparent'
          }`} 
        />
        
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-10">
          {/* Logo with animated elements */}
          <Link href="/" className="group relative">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              {/* Logo icon/shape */}
              <div className="relative mr-2 w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="font-bold text-white text-lg transform -rotate-3 select-none">S</div>
                
                <motion.div 
                  className="absolute inset-0 bg-white mix-blend-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                />
              </div>
              
              {/* Logo text */}
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Shaswat Raj
                </span>
                <span className="text-xs text-foreground/60 -mt-1">Developer & Designer</span>
              </div>
              
              {/* Hover effect */}
              <motion.div 
                className="absolute -bottom-1 -left-2 -right-2 h-0.5 bg-gradient-to-r from-primary/80 via-accent/80 to-secondary/80 rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Glass Card Style */}
          <div className="hidden md:block">
            <div className="bg-background/40 backdrop-blur-md border border-white/10 rounded-full px-2 py-1 shadow-lg">
              <div className="flex items-center">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('/#', '');
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="relative px-4 py-2 mx-1 rounded-full transition-all duration-300"
                      onClick={closeMenu}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="navIndicator"
                          className="absolute inset-0 bg-primary/20 dark:bg-primary/10 rounded-full"
                          transition={{ type: "spring", duration: 0.6 }}
                        />
                      )}
                      <span className={`relative z-10 font-medium text-sm ${
                        isActive ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
                      }`}>
                        {link.name}
                      </span>
                    </Link>
                  );
                })}
                
                {/* CTA Button */}
                <Link
                  href="#contact"
                  className="ml-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:translate-y-[-1px]"
                >
                  <span className="flex items-center">
                    Let's Talk
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                    >
                      <FiChevronRight className="ml-1" />
                    </motion.div>
                  </span>
                </Link>
                
                {/* Theme toggle will go here once uncommented */}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-3">
            {/* <ThemeToggle /> */}
            
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-full focus:outline-none bg-background/60 backdrop-blur-md hover:bg-primary/10 transition-colors border border-white/10 shadow-md"
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </motion.div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu - Modern Glassmorphism */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden bg-background/90 backdrop-blur-xl border-t border-white/10 shadow-lg"
            >
              <motion.div 
                className="container mx-auto px-4 py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.replace('/#', '');
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className={`px-4 py-3 rounded-xl flex items-center space-x-2 ${
                            isActive
                              ? 'bg-primary/10 text-primary' 
                              : 'hover:bg-white/5'
                          }`}
                          onClick={closeMenu}
                        >
                          {isActive && (
                            <motion.div 
                              layoutId="mobileNavIndicator"
                              transition={{ duration: 0.3 }}
                              className="h-2 w-2 rounded-full bg-primary"
                            />
                          )}
                          <span className={isActive ? 'font-medium' : ''}>{link.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="mt-4 pt-2 border-t border-white/10"
                  >
                    <Link
                      href="#contact"
                      className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-3 rounded-xl flex justify-between items-center shadow-md"
                      onClick={closeMenu}
                    >
                      <span className="font-medium">Let's Talk</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FiArrowRight />
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* This spacer ensures content doesn't hide behind the fixed header */}
      <div className={`${scrolled ? 'h-16' : 'h-20'} transition-all duration-300`} />
    </>
  );
};

export default Header;
