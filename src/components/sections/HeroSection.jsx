"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiMail, FiCodepen, FiDownload, FiArrowDown } from 'react-icons/fi';
import { HiOutlineFire } from 'react-icons/hi';
import { FaReact, FaNode, FaFigma, FaCode } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs } from 'react-icons/si';
import Link from 'next/link';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  // Mouse trailer effect state
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorRef = useRef(null);

  const heroRef = useRef(null);
  const isInView = useInView(heroRef);
  const profileRef = useRef(null);
  
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);
  
  const springConfig = { stiffness: 150, damping: 30 };
  const cursorSpringConfig = { stiffness: 1000, damping: 50 };
  
  const springY = useSpring(0, springConfig);
  const springRotateX = useSpring(0, springConfig);
  const springRotateY = useSpring(0, springConfig);
  
  // Mouse trailer springs
  const cursorSpringX = useSpring(0, cursorSpringConfig);
  const cursorSpringY = useSpring(0, cursorSpringConfig);
  
  const phrases = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Open Source Contributor",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timeout;
    let currentText = "";
    let currentIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;
    
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        currentText = currentPhrase.substring(0, currentIndex - 1);
        currentIndex--;
        typeSpeed = 40;
      } else {
        currentText = currentPhrase.substring(0, currentIndex + 1);
        currentIndex++;
        typeSpeed = 80;
      }
      
      setTypedText(currentText);
      
      if (!isDeleting && currentIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 1200;
        if (currentPhraseIndex === phrases.length - 1) {
          setTypingComplete(true);
        }
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        typeSpeed = 300;
      }
      
      timeout = setTimeout(type, typeSpeed);
    };
    
    timeout = setTimeout(type, 800);
    
    return () => clearTimeout(timeout);
  }, [currentPhraseIndex]);
  
  // Mouse trailer animation variants
  const variants = {
    default: {
      opacity: 0.5,
      scale: 1
    },
    hover: {
      opacity: 0.8,
      scale: 1.5
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
      // Update cursor position for trailer effect
      cursorSpringX.set(e.clientX - 16);
      cursorSpringY.set(e.clientY - 16);
      
      // 3D rotation effect for profile image
      if (!isMobile && profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distX = (e.clientX - centerX) / 25;
        const distY = (e.clientY - centerY) / 25;
        
        springRotateY.set(-distX);
        springRotateX.set(distY);
      }
    };
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        springRotateX.set(0);
        springRotateY.set(0);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkMobile);
    
    checkMobile();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile, springRotateX, springRotateY, cursorSpringX, cursorSpringY]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const particles = Array.from({ length: 35 }).map((_, i) => ({
    id: i,
    size: Math.random() * 100 + 30,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 15,
    offsetX: Math.random() * 70 - 35,
    offsetY: Math.random() * 70 - 35,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.15 + 0.03,
  }));

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub size={20} />,
      href: "https://github.com/sh20raj",
      color: "hover:text-[#333]"
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin size={20} />,
      href: "https://www.linkedin.com/in/sh20raj/",
      color: "hover:text-[#0077B5]"
    },
    {
      name: "Twitter",
      icon: <FiTwitter size={20} />,
      href: "https://x.com/SH20RAJ/",
      color: "hover:text-[#1DA1F2]"
    },
    {
      name: "Email",
      icon: <FiMail size={20} />,
      href: "mailto:sh20raj@gmail.com",
      color: "hover:text-primary"
    },
    {
      name: "Codepen",
      icon: <FiCodepen size={20} />,
      href: "https://codepen.io/sh20raj",
      color: "hover:text-[#FF3C00]"
    }
  ];

  return (
    <motion.section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ opacity, scale, y }}
      onMouseEnter={() => setCursorVariant("default")}
    >
      {/* Custom cursor effect */}
      {!isMobile && (
        <motion.div
          ref={cursorRef}
          className="w-8 h-8 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 fixed z-50 pointer-events-none hidden lg:flex items-center justify-center backdrop-blur-sm border border-white/10"
          animate={cursorVariant}
          variants={variants}
          style={{
            x: cursorSpringX,
            y: cursorSpringY
          }}
        >
          <motion.div 
            className="w-2 h-2 bg-white rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      )}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-10" />
        
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: `radial-gradient(circle, rgba(var(--primary-rgb), ${particle.opacity}) 0%, rgba(var(--primary-rgb), 0) 70%)`,
              opacity: particle.opacity * 2,
            }}
            animate={{
              x: [particle.offsetX, -particle.offsetX, particle.offsetX],
              y: [particle.offsetY, -particle.offsetY, particle.offsetY],
            }}
            transition={{
              duration: particle.duration,
              ease: "easeInOut",
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
        
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} 
        />
        
        <div className="absolute top-[15%] right-[15%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[10%] w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Stats ticker at the very top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="absolute top-24 left-0 w-full overflow-hidden py-2 border-t border-b border-border/20 backdrop-blur-sm bg-card/10 hidden lg:block z-20"
        >
          <motion.div
            className="flex items-center gap-10 justify-start whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }
            }}
          >
            {[...Array(2)].map((_, dupeIndex) => (
              <div key={dupeIndex} className="flex items-center gap-10">
                {[
                  { icon: "🚀", text: "Full Stack Developer" },
                  { icon: "🎨", text: "UI/UX Designer" },
                  { icon: "💻", text: "500+ Projects Completed" },
                  { icon: "🏆", text: "8+ Years Experience" },
                  { icon: "🔍", text: "Problem Solver" },
                  { icon: "🌟", text: "Open Source Enthusiastd" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="text-foreground/60 text-xl">{item.icon}</span>
                    <span className="text-sm font-medium text-foreground/80">{item.text}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-border/70 mx-2"></span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 lg:col-span-3"
          >
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: -20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium mb-6 border border-primary/20 backdrop-blur-sm shadow-lg shadow-primary/5"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(var(--primary-rgb), 0.15)" }}
            >
              <span className="flex items-center">
                <span className="relative w-2.5 h-2.5 mr-2">
                                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                                  <span className="relative rounded-full w-2.5 h-2.5 bg-primary"></span>
                                </span>
                                <span className="mr-1">Available for</span>
                                <motion.span 
                                  className="font-bold relative"
                                  style={{
                                    background: "linear-gradient(to right, #FF5F6D, #FFC371, #2196F3, #FF5F6D)",
                                    backgroundSize: "300% 100%",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    color: "transparent",
                                    textShadow: "0 2px 10px rgba(255, 95, 109, 0.2)"
                                  }}
                                  animate={{ 
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                  }}
                                  transition={{ 
                                    duration: 8, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                  }}
                                >
                                  freelance projects
                                  <motion.span 
                                    className="absolute bottom-0 left-0 w-full h-[2px]"
                                    style={{
                                      background: "linear-gradient(to right, #FF5F6D, #FFC371, #2196F3)",
                                      backgroundSize: "300% 100%"
                                    }}
                                    animate={{
                                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                      scaleX: [0, 1, 0]
                                    }}
                                    transition={{
                                      duration: 8,
                                      repeat: Infinity,
                                      ease: "easeInOut"
                                    }}
                                  />
                                </motion.span>
                              </span>
                            </motion.div>
                            
                            <motion.div
                              initial={{ y: -20, opacity: 0 }}
                              animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              className="text-primary font-medium mb-4 flex items-center"
                            >
                              <motion.span 
                                className="mr-2 inline-block w-10 h-[3px] rounded-full"
                                style={{
                                  background: "linear-gradient(to right, #FF5F6D, #FFC371)",
                                  boxShadow: "0 2px 8px rgba(255, 95, 109, 0.3)"
                                }}
                                animate={{ width: [10, 40, 10], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                              ></motion.span>
                              <span className="relative">
                                Hello, I'm
                                <motion.span
                                  className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full"
                                  style={{
                                    background: "linear-gradient(to right bottom, #FF5F6D, #FFC371)",
                                    boxShadow: "0 0 10px rgba(255, 95, 109, 0.5)"
                                  }}
                                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 3, repeat: Infinity }}
                                />
                              </span>
                            </motion.div>
                            
                            <motion.h1 
                              initial={{ y: -20, opacity: 0 }}
                              animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                              className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tighter relative"
                            >
                              <motion.div
                                className="absolute -left-6 -top-6 w-12 h-12 opacity-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.2 }}
                                transition={{ delay: 0.5 }}
                              >
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 0H0V12H12V0Z" fill="currentColor" />
                                  <path d="M12 18H0V30H12V18Z" fill="currentColor" />
                                  <path d="M12 36H0V48H12V36Z" fill="currentColor" />
                                  <path d="M30 0H18V12H30V0Z" fill="currentColor" />
                                  <path d="M30 18H18V30H30V18Z" fill="currentColor" />
                                  <path d="M30 36H18V48H30V36Z" fill="currentColor" />
                                  <path d="M48 0H36V12H48V0Z" fill="currentColor" />
                                  <path d="M48 18H36V30H48V18Z" fill="currentColor" />
                                  <path d="M48 36H36V48H48V36Z" fill="currentColor" />
                                </svg>
                              </motion.div>
                              
                              <motion.span 
                                className="relative z-10 inline-block"
                                style={{
                                  background: "linear-gradient(to right, #FF5F6D, #FFC371, #2196F3)",
                                  backgroundSize: "200% auto",
                                  WebkitBackgroundClip: "text",
                                  backgroundClip: "text",
                                  color: "transparent",
                                  textShadow: "0 8px 24px rgba(255, 95, 109, 0.2)"
                                }}
                                animate={{ 
                                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                }}
                                transition={{ 
                                  duration: 5, 
                                  repeat: Infinity, 
                                  ease: "easeInOut" 
                                }}
                              >
                                Shaswat Raj
                                
                                {/* Decorative elements */}
                <motion.span 
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <motion.span 
                  className="absolute bottom-2 -right-2 w-3 h-3 rounded-full bg-secondary"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                />
              </motion.span>
            </motion.h1>
            
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="text-xl sm:text-2xl lg:text-3xl text-foreground/90 font-semibold mb-8 h-[45px] overflow-hidden"
            >
              <div className="flex items-center gap-2 relative">
                <motion.span 
                  className="text-primary font-bold relative"
                  whileHover={{ scale: 1.05 }}
                >
                  I'm a
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  />
                </motion.span>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={typedText}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative"
                  >
                    <span className=" text-background">
                      {typedText + ""}
                    </span>
                    <motion.span 
                      className={`absolute top-0 right-[-8px] inline-block w-[3px] h-[32px] bg-gradient-to-b from-primary via-accent to-secondary mt-1 rounded-full ${
                        cursorVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      animate={{ 
                        height: cursorVisible ? "32px" : "15px",
                        y: cursorVisible ? 0 : 5
                      }}
                      transition={{ duration: 0.3 }}
                    ></motion.span>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -right-10 top-2 w-8 h-8 opacity-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2V22" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="mb-10 max-w-lg relative"
            >
              <motion.p 
                className="text-foreground/80 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                I craft <span className="font-medium text-primary">robust and dynamic</span> web experiences, blending 
                <span className="font-medium text-secondary"> creative design</span> with 
                <span className="font-medium text-accent"> cutting-edge technology</span> to build solutions that are 
                not just functional, but <span className="italic">memorable and impactful</span>.
              </motion.p>
              
              {/* Background decoration */}
              <div className="absolute -left-4 -top-4 w-8 h-8 opacity-10">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              
              <motion.div 
                className="absolute -right-2 -bottom-4 w-24 h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
                animate={{ width: [20, 96, 20] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a 
                href="#contact" 
                className="group px-7 py-4 bg-gradient-to-r from-primary via-accent to-secondary text-white rounded-xl font-medium inline-flex items-center gap-2 transition-all hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-primary/20 overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <span className="relative z-10">Get in touch</span>
                <motion.div
                  className="absolute right-4 flex items-center justify-center w-6 h-6 rounded-full bg-white/20 z-10"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight className="text-white text-sm" />
                </motion.div>
                
                {/* Animated overlay */}
                <motion.div 
                  className="absolute inset-0 bg-white/10 translate-x-full"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "-100%" }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Decorative dot */}
                <span className="absolute top-2 right-2 w-1 h-1 rounded-full bg-white/40" />
                <span className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-white/40" />
              </motion.a>
              
              <motion.a 
                href="/resume.pdf" 
                className="group px-7 py-4 border border-border hover:border-primary/40 bg-card hover:bg-card/80 rounded-xl font-medium inline-flex items-center gap-2 transition-all hover:-translate-y-1 active:translate-y-0 relative overflow-hidden backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <span className="relative z-10 bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">Download Resume</span>
                
                <motion.div
                  className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-muted group-hover:bg-gradient-to-r group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <FiDownload className="text-sm text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                </motion.div>
                
                {/* Hover effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transformOrigin: "left" }}
                />
              </motion.a>
              
              {/* Decorative elements */}
              <motion.div 
                className="hidden md:block absolute -right-10 bottom-20 w-20 h-20 opacity-10 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="39" stroke="currentColor" strokeWidth="2"/>
                  <path d="M40 0V80" stroke="currentColor" strokeWidth="2"/>
                  <path d="M0 40H80" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 relative"
            >
              <motion.span 
                className="text-foreground/70 text-sm font-medium flex items-center gap-2 relative"
                animate={{ x: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="h-px w-4 bg-gradient-to-r from-transparent to-foreground/50"></span>
                Find me on
                <span className="h-px w-4 bg-gradient-to-r from-foreground/50 to-transparent"></span>
              </motion.span>
              
              <div className="flex gap-3 relative">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-muted/80 backdrop-blur-sm hover:bg-white/10 ${link.color} rounded-lg transition-all shadow-md border border-transparent hover:border-border/50 relative group overflow-hidden`}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.7 + index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.name}
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <span className="relative z-10">{link.icon}</span>
                    
                    {/* Hover effect */}
                    <motion.span 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `radial-gradient(circle at center, ${link.name === "GitHub" ? '#333' : 
                                                                              link.name === "LinkedIn" ? '#0077B5' : 
                                                                              link.name === "Twitter" ? '#1DA1F2' :
                                                                              link.name === "Email" ? 'rgba(var(--primary-rgb), 1)' : 
                                                                              '#FF3C00'}/10, transparent 70%)` 
                      }}
                    />
                    
                    {/* Tooltip with name */}
                    <motion.div
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card px-2 py-1 rounded-md text-xs font-medium shadow-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-card rotate-45 border-r border-b border-border"></div>
                    </motion.div>
                    
                    {/* Corner dots */}
                    <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-foreground/20"></span>
                    <span className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-foreground/20"></span>
                  </motion.a>
                ))}
              </div>
              
              {/* Decorative line */}
              <motion.div
                className="absolute -bottom-6 left-0 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.5 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center lg:justify-center items-center z-10 lg:col-span-2 mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              ref={profileRef}
              className="relative"
              style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <motion.div 
                  className="w-[400px] h-[400px] rounded-full border-2 border-dashed border-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                >
                  {/* Orbiting dots - outer ring */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div 
                      key={`outer-dot-${i}`}
                      className="absolute w-3 h-3 rounded-full bg-primary/60 shadow-md shadow-primary/50"
                      style={{ 
                        left: '50%',
                        top: '50%',
                        transform: `rotate(${i * 45}deg) translateX(200px) translateY(-50%)` 
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </div>
              
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <motion.div
                  className="w-[320px] h-[320px] rounded-full border border-secondary/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  {/* Orbiting dots - inner ring */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div 
                      key={`inner-dot-${i}`}
                      className="absolute w-2 h-2 rounded-full bg-secondary/70 shadow-sm shadow-secondary/50"
                      style={{ 
                        left: '50%',
                        top: '50%',
                        transform: `rotate(${i * 60}deg) translateX(160px) translateY(-50%)` 
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </div>
              
              {/* Tech icons orbiting */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <motion.div
                  className="w-[360px] h-[360px] rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                  {[
                    { icon: <FaReact size={22} className="text-[#61DAFB]" />, angle: 0 },
                    { icon: <SiNextdotjs size={22} className="text-foreground" />, angle: 72 },
                    { icon: <SiJavascript size={22} className="text-[#F7DF1E]" />, angle: 144 },
                    { icon: <FaNode size={22} className="text-[#339933]" />, angle: 216 },
                    { icon: <FaFigma size={22} className="text-[#F24E1E]" />, angle: 288 }
                  ].map((item, i) => (
                    <motion.div 
                      key={`tech-icon-${i}`}
                      className="absolute p-2 bg-card rounded-full border border-border shadow-lg"
                      style={{ 
                        left: '50%',
                        top: '50%',
                        transform: `rotate(${item.angle}deg) translateX(180px) translateY(-50%) rotate(-${item.angle}deg)` 
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden transform-gpu shadow-2xl" style={{ transformStyle: "preserve-3d" }}>
                {/* Glow effect behind image */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/30 rounded-full blur-2xl opacity-70 -z-10"></div>
                
                {/* Main container with 3D border effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-[4px] border-white/10" style={{ transformStyle: "preserve-3d" }}>
                  {/* Animated gradient border */}
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-60 z-0 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                
                  {/* Image container */}
                  <div className="absolute inset-[3px] rounded-full overflow-hidden z-10" style={{ transformStyle: "preserve-3d" }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-50 z-20"></div>
                    
                    <Image
                      src="/profile.jpg"
                      alt="Shaswat Raj"
                      fill
                      sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
                      className="object-cover"
                      priority
                      style={{ transform: "translateZ(0)", transformStyle: "preserve-3d" }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-secondary/15 mix-blend-overlay z-20"></div>
                    
            
                    <div className="absolute inset-0 z-30 overflow-hidden"></div>
                      {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                          key={`star-${i}`}
                          className="absolute rounded-full bg-white"
                          style={{
                            width: Math.random() * 3 + 1 + "px",
                            height: Math.random() * 3 + 1 + "px",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            boxShadow: "0 0 3px 1px rgba(255,255,255,0.6)"
                          }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.2, 0.5],
                          }}
                          transition={{
                            duration: 1 + Math.random() * 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: Math.random() * 5,
                            repeatDelay: Math.random() * 2
                          }}
                        />
                      ))}
                    </div>

                    {/* Grain texture overlay */}
                    <div 
                      className="absolute inset-0 opacity-10 z-10"
                      style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                        filter: 'contrast(120%) brightness(120%)',
                        mixBlendMode: 'overlay'
                      }}
                    />
                  </div>
                </div>
                
                {/* Highlight dots at cardinal positions */}
                {[0, 90, 180, 270].map((angle, idx) => (
                  <motion.div
                    key={`highlight-dot-${idx}`}
                    className="absolute w-2 h-2 bg-white rounded-full shadow-md z-20"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${angle}deg) translateX(160px) translateY(-50%)`
                    }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                  />
                ))}
             
              
              <div className="absolute top-[5%] -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-2 -left-6 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
              <motion.div 
                className="absolute -bottom-6 right-0 w-24 h-24 rounded-full bg-accent/10 blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <motion.div
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={isInView ? { scale: 1, opacity: 1, y: 0 } : { scale: 0, opacity: 0, y: 20 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-4 top-12 bg-card/80 backdrop-blur-sm shadow-xl border border-border/50 rounded-xl px-4 py-3 z-20"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <HiOutlineFire className="text-primary" size={18} />
                  </div>
                  <div>
                    <div className="flex items-end gap-[2px]">
                      <motion.span 
                        className="text-sm font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                      >
                        8
                      </motion.span>
                      <motion.span 
                        className="text-sm font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                      >
                        +
                      </motion.span>
                      <span className="text-xs font-medium text-foreground/70 ml-1">Years</span>
                    </div>
                    <p className="text-[10px] text-foreground/60">Experience</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-primary/50"></div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={isInView ? { scale: 1, opacity: 1, y: 0 } : { scale: 0, opacity: 0, y: 20 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute -left-6 bottom-16 bg-card/80 backdrop-blur-sm shadow-xl border border-border/50 rounded-xl px-4 py-3 z-20"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <FaCode className="text-secondary" size={18} />
                  </div>
                  <div>
                    <div className="flex items-end gap-[2px]">
                      <motion.span 
                        className="text-sm font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                      >
                        50
                      </motion.span>
                      <motion.span 
                        className="text-sm font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6 }}
                      >
                        0
                      </motion.span>
                      <motion.span 
                        className="text-sm font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7 }}
                      >
                        +
                      </motion.span>
                      <span className="text-xs font-medium text-foreground/70 ml-1">Projects</span>
                    </div>
                    <p className="text-[10px] text-foreground/60">Completed</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-secondary"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-secondary/50"></div>
              </motion.div>
              
              {/* Additional achievement badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute -top-2 left-12 bg-card/80 backdrop-blur-sm shadow-xl border border-border/50 rounded-full px-3 py-1.5 z-20"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <p className="text-[10px] font-medium">Open Source Enthusiast</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Skill badges floating at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-28 left-1/2 transform -translate-x-1/2 w-full max-w-md hidden md:flex justify-center"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {["React", "Next.js", "TypeScript", "Node.js", "UI/UX"].map((skill, i) => (
            <motion.div
              key={skill}
              className="px-3 py-1 bg-card/60 backdrop-blur-sm border border-border/50 rounded-full text-xs font-medium shadow-sm flex items-center gap-1.5"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                backgroundColor: i === 0 ? "rgba(97, 218, 251, 0.08)" : 
                                i === 1 ? "rgba(0, 0, 0, 0.08)" : 
                                i === 2 ? "rgba(49, 120, 198, 0.08)" :
                                i === 3 ? "rgba(51, 153, 51, 0.08)" : 
                                "rgba(var(--primary-rgb), 0.08)"
              }}
            >
              {i === 0 && <FaReact className="text-[#61DAFB] text-xs" />}
              {i === 1 && <SiNextdotjs className="text-foreground text-xs" />}
              {i === 2 && <SiJavascript className="text-[#3178C6] text-xs" />}
              {i === 3 && <FaNode className="text-[#339933] text-xs" />}
              {i === 4 && <FaFigma className="text-[#F24E1E] text-xs" />}
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            {/* Animated line above the scroll button */}
            <motion.div
              className="absolute -top-16 h-12 w-px bg-gradient-to-b from-transparent via-border to-primary/30"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            />
            
            <motion.span 
              className="text-foreground/70 text-sm mb-2 font-medium tracking-wide group-hover:text-primary/80 transition-colors"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Scroll Down
            </motion.span>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/40 to-secondary/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div 
                animate={{ y: [0, 8, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="p-3 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg relative z-10 group-hover:border-primary/50 transition-colors duration-300"
              >
                <FiArrowDown size={18} className="text-primary group-hover:text-accent transition-colors duration-300" />
                
                {/* Echo animation */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/30"
                  animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Corner decoration */}
      <motion.div 
        className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2 }}
      >
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="80" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) rotate(90) scale(80)">
              <stop stopColor="currentColor" stopOpacity="0.3" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
