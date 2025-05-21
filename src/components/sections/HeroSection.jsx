"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring, useInView } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiMail, FiCodepen, FiDownload } from 'react-icons/fi';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef);
  const profileRef = useRef(null);
  
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);
  
  // Animated spring values for smoother motion
  const springConfig = { stiffness: 150, damping: 30 };
  const springY = useSpring(0, springConfig);
  const springRotateX = useSpring(0, springConfig);
  const springRotateY = useSpring(0, springConfig);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
      if (!isMobile && profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance from center points
        const distX = (e.clientX - centerX) / 25;
        const distY = (e.clientY - centerY) / 25;
        
        // Update spring animations
        springRotateY.set(-distX);
        springRotateX.set(distY);
      }
    };
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        // Reset rotations on mobile
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
  }, [isMobile, springRotateX, springRotateY]);
  
  // Particle configuration for dynamic background
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 80 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    offsetX: Math.random() * 60 - 30,
    offsetY: Math.random() * 60 - 30,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.12 + 0.03,
  }));

  return (
    <motion.section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ opacity, scale, y }}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-10" />
        
        {/* Animated particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: 'var(--primary)',
              opacity: particle.opacity,
              filter: 'blur(30px)',
            }}
            animate={{
              x: [0, particle.offsetX],
              y: [0, particle.offsetY],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="stagger-children"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <motion.span 
                  className="block text-foreground/80 reveal-text"
                  initial={{ y: -20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  Hi, I'm
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-text-gradient"
                  initial={{ y: -20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                  Shaswat Raj
                </motion.span>
              </h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.h2 
                  className="text-xl md:text-2xl font-medium text-foreground/80 mb-6 flex items-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <span className="relative overflow-hidden inline-flex h-8">
                    <span className="animate-typing-slide absolute">Developer</span>
                    <span className="animate-typing-slide animation-delay-1000 absolute">Designer</span>
                    <span className="animate-typing-slide animation-delay-2000 absolute">Dreamer</span>
                  </span>
                  <span className="ml-1 h-6 w-[2px] bg-primary animate-pulse-fast"></span>
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-foreground/70 mb-8 max-w-xl leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  I build thoughtful digital experiences and powerful tools that merge creativity with code. 
                  From crafting seamless UIs to launching AI-driven products and open-source projects,
                  I love turning ideas into reality.
                </motion.p>
              </motion.div>
              
              {/* Social links with enhanced hover effects */}
              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                {[
                  { icon: <FiGithub size={20} />, url: "https://github.com/sh20raj", label: "GitHub", color: "#333" },
                  { icon: <FiLinkedin size={20} />, url: "https://www.linkedin.com/in/sh20raj/", label: "LinkedIn", color: "#0077B5" },
                  { icon: <FiTwitter size={20} />, url: "https://x.com/SH20RAJ/", label: "Twitter", color: "#1DA1F2" },
                  { icon: <FiCodepen size={20} />, url: "https://codepen.io/sh20raj", label: "CodePen", color: "#FE6226" },
                  { icon: <FiMail size={20} />, url: "mailto:sh20raj@gmail.com", label: "Email", color: "#EA4335" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card hover:bg-primary/10 rounded-full transition-all duration-300 border border-border relative overflow-hidden group"
                    style={{
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
                    }}
                    aria-label={social.label}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                      y: -5
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                      {social.icon}
                    </span>
                    <motion.span
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ backgroundColor: social.color }}
                    />
                    <motion.span 
                      className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"
                    />
                  </motion.a>
                ))}
              </motion.div>
              
              {/* Call to action buttons with enhanced animations */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                <motion.a 
                  href="#projects" 
                  className="button-primary bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:gap-3 transition-all group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(var(--primary-rgb), 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View Projects</span>
                  <FiArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" />
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-full bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-400 ease-out-cubic"
                  />
                </motion.a>
                <motion.a 
                  href="/resources/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary bg-transparent border border-border px-6 py-3 rounded-lg hover:bg-card transition-all flex items-center gap-2 hover:gap-3 group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 7px 20px -5px rgba(0, 0, 0, 0.1), 0 4px 10px -6px rgba(0, 0, 0, 0.05)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Resume</span>
                  <FiDownload className="relative z-10 transition-all group-hover:translate-y-[2px]" />
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-full bg-gradient-to-r from-muted to-muted/50 group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Profile image with 3D interactive effect */}
          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div
              ref={profileRef}
              className="relative w-64 h-64 md:w-80 md:h-80"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3
              }}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
                rotateX: springRotateX,
                rotateY: springRotateY
              }}
            >
              {/* Decorative elements */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-30 blur-xl animate-pulse-slow"
                style={{ scale: 1.2 }}
              />
              <motion.div 
                className="absolute inset-0 animate-blob"
                style={{
                  border: "2px solid rgba(var(--primary-rgb), 0.2)",
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  scale: 1.05
                }}
              />
              <motion.div 
                className="absolute inset-0 animate-blob-slow"
                style={{
                  border: "2px solid rgba(var(--secondary-rgb), 0.2)",
                  borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                  scale: 1.1,
                  rotate: 30
                }}
              />
              
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-xl" style={{ transform: "translateZ(20px)" }}>
                <Image
                  src="/profile.jpg"
                  alt="Shaswat Raj"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                  className="object-cover scale-[1.15]"
                  style={{ transform: "translateZ(30px)" }}
                />
                
                {/* Overlay shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-60" />
                <div className="shine-effect absolute inset-0" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-foreground/50 text-sm mb-2">Scroll down</span>
        <motion.div 
          className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center items-start p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
