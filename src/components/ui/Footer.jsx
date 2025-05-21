"use client";

import { useState, useRef } from 'react';
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
  FiCheck
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

  return (
    <footer 
      id="contact" 
      ref={footerRef}
      className="relative bg-card py-20 border-t border-border overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl translate-x-1/3 translate-y-1/3" />
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
            <Link href="#home" className="inline-block mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-text-gradient">
                Shaswat Raj
              </h3>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mt-1 rounded-full" />
            </Link>
            <p className="text-foreground/70 mb-8 leading-relaxed max-w-md">
              Developer, designer, and dreamer building thoughtful digital experiences and powerful tools that merge creativity with code.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.slice(0, 4).map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted hover:bg-primary/10 hover:text-primary rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
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
              <div className="h-1 w-12 bg-primary/60 mt-1 rounded-full absolute" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors flex items-center group"
                  >
                    <FiArrowRight className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" size={14} />
                    <span className="border-b border-transparent group-hover:border-primary/30 pb-1">
                      {link.name}
                    </span>
                  </Link>
                </li>
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
              <div className="h-1 w-12 bg-accent/60 mt-1 rounded-full absolute" />
            </h3>
            <div className="flex flex-col gap-4">
              {socialLinks.slice(4).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors group"
                  aria-label={link.name}
                >
                  <div className="p-2 bg-muted group-hover:bg-primary/10 rounded-md transition-colors">
                    {link.icon}
                  </div>
                  <span className="border-b border-transparent group-hover:border-primary/30 pb-1">
                    {link.name}
                  </span>
                </a>
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
              <div className="h-1 w-12 bg-secondary/60 mt-1 rounded-full absolute" />
            </h3>
            <p className="text-foreground/70 mb-4">
              Subscribe to stay updated with my latest projects and articles.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-4 py-3 bg-muted border border-border focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted}
                  className="absolute right-1.5 top-1.5 p-2 bg-gradient-to-r from-primary to-secondary text-white rounded-md transition-all hover:brightness-110"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
                  ) : isSubmitted ? (
                    <FiCheck size={20} />
                  ) : (
                    <FiSend size={20} />
                  )}
                </button>
              </div>
              {errorMessage && (
                <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
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
            <p>© {currentYear} Shaswat Raj. All rights reserved.</p>
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
                  ♥
                </motion.span>
              </span>
              using Next.js and TailwindCSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
