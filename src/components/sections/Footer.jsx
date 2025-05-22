"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { 
  FiLinkedin, 
  FiGithub, 
  FiTwitter, 
  FiMail, 
  FiFileText,
  FiCodepen,
  FiExternalLink,
  FiArrowRight,
  FiSend,
  FiCheck,
  FiChevronRight,
  FiHeart
} from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });
  const currentYear = new Date().getFullYear();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }, 1500);
  };
  
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/sh20raj/', 
      icon: <FiLinkedin size={20} /> 
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/sh20raj', 
      icon: <FiGithub size={20} /> 
    },
    { 
      name: 'Twitter', 
      href: 'https://x.com/SH20RAJ/', 
      icon: <FiTwitter size={20} /> 
    },
    { 
      name: 'Email', 
      href: 'mailto:sh20raj@gmail.com', 
      icon: <FiMail size={20} /> 
    },
    { 
      name: 'Resume', 
      href: 'https://docs.google.com/document/d/1_c8_1teca5JlCIFnsSC0rqoHcvxD5VJrlE-DeKZSXf4/edit?usp=sharing', 
      icon: <FiFileText size={20} /> 
    },
    { 
      name: 'Codepen', 
      href: 'https://codepen.io/sh20raj', 
      icon: <FiCodepen size={20} /> 
    },
    {
      name: 'Portfolio',
      href: 'https://shaswat.live/',
      icon: <FiExternalLink size={20} />
    },
    {
      name: 'Dev Community',
      href: 'https://dev.to/sh20raj',
      icon: <FiExternalLink size={20} />
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  // Background blob animation
  const blobVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: (custom) => ({
      scale: 1,
      opacity: 0.3,
      x: custom % 2 === 0 ? [0, 15, 0, -15, 0] : [0, -15, 0, 15, 0],
      y: custom % 2 === 0 ? [0, -15, 0, 15, 0] : [0, 15, 0, -15, 0],
      transition: {
        x: { repeat: Infinity, duration: 20 + custom * 2, repeatType: 'loop', ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 25 + custom * 2, repeatType: 'loop', ease: 'easeInOut' },
        opacity: { duration: 0.8 },
        scale: { duration: 0.8 }
      }
    })
  };

  return (
    <footer 
      id="footer" 
      ref={footerRef}
      className="relative bg-card/50 py-20 border-t border-border overflow-hidden backdrop-blur-sm"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={`footer-blob-${i}`}
            custom={i}
            variants={blobVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className={`absolute rounded-full bg-gradient-to-r ${
              i === 1 
                ? "from-primary/20 to-secondary/10 -top-20 right-1/4 w-[500px] h-[500px]" 
                : i === 2
                ? "from-secondary/20 to-primary/10 bottom-0 left-1/4 w-[600px] h-[600px]"
                : "from-accent/15 to-secondary/10 top-1/3 -right-20 w-[400px] h-[400px]"
            }`}
            style={{ filter: 'blur(100px)' }}
          />
        ))}
        
        {/* Decorative pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16"
        >
          {/* Column 1: Logo & Bio */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4"
          >
            <Link href="#home" className="inline-block mb-6 group">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text animate-text-gradient group-hover:from-secondary group-hover:to-primary transition-all duration-300">
                Shaswat Raj
              </h3>
              <motion.div 
                className="h-1 bg-gradient-to-r from-primary to-secondary mt-1 rounded-full"
                initial={{ width: "24px" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <p className="text-foreground/70 mb-8 leading-relaxed max-w-md">
              Developer, designer, and dreamer building thoughtful digital experiences and powerful tools that merge creativity with code.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.slice(0, 4).map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted/80 hover:bg-primary/10 hover:text-primary rounded-full transition-all duration-300 transform hover:-translate-y-1 relative group"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.2 + (index * 0.1) } 
                  } : { opacity: 0, y: 20 }}
                >
                  {/* Ripple effect on hover */}
                  <span className="absolute inset-0 rounded-full bg-primary/20 transform scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-0 transition-all duration-500"></span>
                  {link.icon}
                  
                  {/* Tooltip */}
                  <motion.span 
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card px-2 py-1 rounded text-xs font-medium shadow-lg border border-border/50 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Column 2: Quick Links */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2"
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <div className="h-1 w-12 bg-gradient-to-r from-primary/80 to-primary/20 mt-1 rounded-full absolute" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { 
                    x: 0, 
                    opacity: 1,
                    transition: { delay: 0.3 + (index * 0.08) } 
                  } : { x: -20, opacity: 0 }}
                >
                  <Link 
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors flex items-center group"
                  >
                    <FiChevronRight className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" size={14} />
                    <span className="border-b border-transparent group-hover:border-primary/30 pb-1">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Column 3: Connect With Me */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3"
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Connect With Me
              <div className="h-1 w-12 bg-gradient-to-r from-accent/80 to-accent/20 mt-1 rounded-full absolute" />
            </h3>
            <div className="flex flex-col gap-4">
              {socialLinks.slice(4).map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors group"
                  aria-label={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { 
                    x: 0, 
                    opacity: 1,
                    transition: { delay: 0.4 + (index * 0.08) } 
                  } : { x: -20, opacity: 0 }}
                >
                  <div className="p-2 bg-muted/80 group-hover:bg-primary/10 rounded-md transition-all duration-300">
                    {link.icon}
                  </div>
                  <span className="border-b border-transparent group-hover:border-primary/30 pb-1">
                    {link.name}
                  </span>
                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -5 }}
                    whileHover={{ x: 0 }}
                  >
                    <FiArrowRight size={14} className="text-primary" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Column 4: Newsletter */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3"
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Newsletter
              <div className="h-1 w-12 bg-gradient-to-r from-secondary/80 to-secondary/20 mt-1 rounded-full absolute" />
            </h3>
            <p className="text-foreground/70 mb-4">
              Subscribe to stay updated with my latest projects and articles.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-4 py-3 bg-muted/80 backdrop-blur-sm border border-border focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <motion.button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted}
                  className="absolute right-1.5 top-1.5 p-2 bg-gradient-to-r from-primary to-secondary text-white rounded-md transition-all hover:brightness-110"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <motion.div 
                      className="w-5 h-5 border-2 border-t-transparent border-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    />
                  ) : isSubmitted ? (
                    <FiCheck size={20} />
                  ) : (
                    <FiSend size={20} />
                  )}
                </motion.button>
              </div>
              {errorMessage && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-500"
                >
                  {errorMessage}
                </motion.p>
              )}
              {isSubmitted && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-primary flex items-center gap-1"
                >
                  <FiCheck size={14} /> Thanks for subscribing!
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
        
        {/* Footer Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-8 border-t border-border/30 text-center text-foreground/60"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© {currentYear} <span className="font-medium text-foreground/80">Shaswat Raj</span>. All rights reserved.</p>
            <p className="flex items-center justify-center text-sm">
              Built with
              <span className="inline-block mx-1">
                <motion.span 
                  className="text-red-500"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <FiHeart size={14} className="fill-current" />
                </motion.span>
              </span>
              using <span className="font-medium text-foreground/80">Next.js</span> and <span className="font-medium text-foreground/80">TailwindCSS</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
