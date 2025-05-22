"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import SectionContainer from '../ui/SectionContainer';
import { motion, useInView, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiCode, FiPenTool, FiBox, FiGlobe, FiServer, FiLayers, FiChevronRight, FiUser, FiAward, 
  FiHeart, FiCoffee, FiBook, FiMusic, FiZap, FiEye, FiSettings, FiLinkedin, FiGithub, FiTwitter, 
  FiArrowRight} from 'react-icons/fi';
import { TbCoffee, TbMicrophone, TbBrain, TbWorldCode, TbDeviceDesktop } from 'react-icons/tb';
import { useIntersectionObserver, RevealOnScroll } from '@/utils/animation';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isRotating, setIsRotating] = useState(false);
  const [animatePhoto, setAnimatePhoto] = useState(false);
  const [globalMousePosition, setGlobalMousePosition] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  const sectionRef = useRef(null);
  const photoRef = useRef(null);
  const backgroundRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { ref: aboutRef, isIntersecting: isAboutVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  });
  
  // Check for user's preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMediaChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  // Mouse move effects for 3D card rotation and parallax effects
  useEffect(() => {
    // Skip intensive animations if user prefers reduced motion
    if (prefersReducedMotion) return;
    
    const handleMouseMove = (e) => {
      // For 3D card rotation
      if (photoRef.current) {
        const rect = photoRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
      
      // For parallax background effects
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const mouseXpercentage = Math.round((e.pageX / windowWidth) * 100);
      const mouseYpercentage = Math.round((e.pageY / windowHeight) * 100);
      setGlobalMousePosition({ x: mouseXpercentage, y: mouseYpercentage });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger photo animation after a delay
    const timer = setTimeout(() => {
      setAnimatePhoto(true);
    }, 1000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, [prefersReducedMotion]);

  // Personal data for enhanced about section
  const personalInfo = {
    name: "Shaswat Raj",
    title: "Full Stack Developer & Open Source Enthusiast",
    location: "Jharkhand, India",
    bio: "I'm a passionate Full Stack Developer specializing in crafting beautiful user interfaces and robust backend systems. With a focus on modern web technologies, I blend creativity with technical expertise to build innovative digital solutions.",
    longBio: "With over 4 years of development experience, I've worked across the entire technology stack, from creating intuitive frontends with React and Next.js to designing scalable backends with Node.js. I'm deeply committed to open source and have contributed to numerous projects that help the developer community. My approach combines technical excellence with creative problem-solving to deliver exceptional digital experiences.",
    values: [
      "I value clean, maintainable code that solves real problems",
      "I believe in continuous learning and sharing knowledge",
      "I'm passionate about creating accessible, user-friendly interfaces",
      "I strive for excellence in every project I undertake"
    ],
    image: "/images/profile.png",
    facts: [
      { icon: <TbCoffee size={24} />, text: "Fueled by coffee" },
      { icon: <TbMicrophone size={24} />, text: "Podcast enthusiast" },
      { icon: <TbBrain size={24} />, text: "Lifelong learner" },
      { icon: <TbWorldCode size={24} />, text: "Remote worker" },
      { icon: <TbDeviceDesktop size={24} />, text: "Tech collector" }
    ],
    social: [
      { icon: <FiLinkedin size={18} />, name: "LinkedIn", url: "https://linkedin.com/in/sh20raj" },
      { icon: <FiGithub size={18} />, name: "GitHub", url: "https://github.com/sh20raj" },
      { icon: <FiTwitter size={18} />, name: "Twitter", url: "https://twitter.com/sh20raj" }
    ]
  };

  const specializations = [
    {
      id: 1,
      icon: <FiCode size={24} />,
      title: "Development",
      description: "Building clean, efficient, and scalable solutions across the full technology stack."
    },
    {
      id: 2,
      icon: <FiPenTool size={24} />,
      title: "Design",
      description: "Creating intuitive and engaging user experiences with a focus on aesthetics and usability."
    },
    {
      id: 3,
      icon: <FiBox size={24} />,
      title: "Open Source",
      description: "Contributing to and maintaining projects that benefit the developer community."
    },
    {
      id: 4,
      icon: <FiGlobe size={24} />,
      title: "Web & Apps",
      description: "Developing responsive websites and applications across various platforms."
    },
    {
      id: 5,
      icon: <FiServer size={24} />,
      title: "DevOps",
      description: "Setting up infrastructure, deployment pipelines, and ensuring smooth operations."
    },
    {
      id: 6,
      icon: <FiLayers size={24} />,
      title: "Multimedia Tools",
      description: "Creating specialized tools for multimedia content creation and management."
    }
  ];

  const technologies = {
    languages: ["JavaScript", "TypeScript", "PHP", "Python", "C", "C++"],
    frameworks: ["Next.js", "React", "Laravel", "Remix", "Express", "Hono"],
    tools: ["GitHub", "Docker", "VS Code", "Figma", "Git", "AWS"],
    other: ["RESTful APIs", "Web Scraping", "Blogging", "DevOps", "MySQL", "MongoDB"]
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const tabVariants = {
    inactive: { 
      opacity: 0.6, 
      scale: 0.95,
      backgroundColor: "var(--muted)",
      color: "var(--foreground)"
    },
    active: { 
      opacity: 1, 
      scale: 1,
      backgroundColor: "rgba(var(--primary-rgb), 0.1)",
      color: "var(--primary)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(var(--primary-rgb), 0.15)",
    }
  };
  
  const cardVariants = {
    initial: { 
      background: "var(--card)",
      y: 0,
      scale: 1,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
    },
    hover: { 
      background: "linear-gradient(165deg, rgba(var(--primary-rgb), 0.08), rgba(var(--secondary-rgb), 0.08))",
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  
  const photoVariants = {
    initial: { 
      scale: 0.9, 
      opacity: 0,
      rotateY: 15,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
    },
    animate: { 
      scale: 1, 
      opacity: 1, 
      rotateY: 0,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { 
        duration: 1, 
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.3 
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.4 }
    }
  };
  
  // Background blob and particle animation variants
  const blobVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: (custom) => ({
      scale: 1,
      opacity: 0.15,
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
  
  const particleVariants = {
    initial: { 
      y: 0,
      opacity: 0.3
    },
    animate: (custom) => ({
      y: [0, -15, 0],
      opacity: [0.2, 0.8, 0.2],
      transition: {
        y: { 
          repeat: Infinity,
          duration: 3 + custom * 0.5,
          ease: "easeInOut",
          repeatType: "reverse"
        },
        opacity: { 
          repeat: Infinity, 
          duration: 2 + custom * 0.5,
          ease: "easeInOut",
          repeatType: "reverse"
        }
      }
    })
  };
  
  const shimmerVariants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        repeat: Infinity,
        duration: 5,
        ease: "linear"
      }
    }
  };
  
  // Skill technology display logic with enhanced visuals
  const renderTechItems = (items) => {
    return items.map((item, index) => (
      <motion.span
        key={item}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          color: "var(--primary)" 
        }}
        className="px-4 py-1.5 rounded-full bg-gradient-to-r from-muted to-muted/50 text-foreground/80 
                  hover:from-primary/10 hover:to-secondary/10 text-sm font-medium inline-block
                  border border-border/50 hover:border-primary/20 transition-all duration-300 m-1"
      >
        {item}
      </motion.span>
    ));
  };

  return (
    <SectionContainer id="about" ref={sectionRef} className="relative overflow-hidden">
      {/* Dynamic Background Elements with Parallax Effect */}
      <div ref={backgroundRef} className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated gradient blobs with parallax */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={`about-blob-${i}`}
            custom={i}
            variants={blobVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className={`absolute rounded-full bg-gradient-to-br ${
              i === 1 
                ? "from-primary/10 to-accent/5 -top-20 right-[10%] w-[500px] h-[500px]" 
                : i === 2 
                ? "from-secondary/10 to-primary/5 bottom-0 -left-20 w-[600px] h-[600px]" 
                : "from-accent/10 to-secondary/5 top-[40%] right-[20%] w-[300px] h-[300px]"
            }`}
            style={{ 
              filter: 'blur(120px)',
              transform: (isInView && !prefersReducedMotion) ? 
                `translate(${(globalMousePosition.x - 50) / (i * 10)}px, ${(globalMousePosition.y - 50) / (i * 10)}px)` : 
                'translate(0px, 0px)',
              transition: 'transform 0.2s ease-out'
            }}
          />
        ))}
        
        {/* Animated floating particles with parallax */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            custom={i % 5}
            variants={particleVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              filter: 'blur(1px)',
              transform: (isInView && !prefersReducedMotion) ? 
                `translate(${(globalMousePosition.x - 50) / ((i % 3 + 1) * -5)}px, ${(globalMousePosition.y - 50) / ((i % 3 + 1) * -5)}px)` : 
                'translate(0px, 0px)',
              transition: 'transform 0.1s ease-out'
            }}
          />
        ))}
        
        {/* Decorative grid pattern with subtle parallax */}
        <motion.div 
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] mix-blend-overlay"
          style={{ 
            transform: (isInView && !prefersReducedMotion) ? 
              `translate(${(globalMousePosition.x - 50) / 40}px, ${(globalMousePosition.y - 50) / 40}px)` : 
              'translate(0px, 0px)',
            transition: 'transform 0.3s ease-out'
          }}
        ></motion.div>
        
        {/* Optional: Gradient mesh effect with subtle parallax */}
        <motion.div 
          className="absolute inset-0 opacity-10 bg-mesh-gradient"
          style={{ 
            transform: (isInView && !prefersReducedMotion) ? 
              `translate(${(globalMousePosition.x - 50) / -60}px, ${(globalMousePosition.y - 50) / -60}px)` : 
              'translate(0px, 0px)',
            transition: 'transform 0.4s ease-out'
          }}
        ></motion.div>
      </div>
      
      {/* Main Section Header */}
      <div className="text-center mb-16 relative z-10" ref={aboutRef}>
        <RevealOnScroll animation="fade-down" delay={0.1}>
          {/* Advanced Section Title with animated decorative elements */}
          <div className="relative inline-block mb-2">
            <motion.span
              initial={{ opacity: 0, y: -20, rotate: -10 }}
              animate={{ opacity: 0.6, y: 0, rotate: 0 }}
              transition={{ delay: 0.5, duration: 1, type: "spring" }}
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-5xl text-primary/10"
            >
            </motion.span>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary/80 to-transparent rounded-full absolute -top-2 left-0"
            />
                
                <motion.div
                  variants={shimmerVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -z-10"
                  style={{ backgroundSize: "200% 100%" }}
                />
                
            <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent relative inline-block">
              <span className="bg-gradient-to-r from-blue-500 via-violet-600 to-purple-500 bg-clip-text">
                About Me
                </span>
              
            
            </h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-transparent to-primary/80 rounded-full absolute -bottom-4 right-0"
            />
          </div>
        </RevealOnScroll>
      </div>
      
      {/* NEW: Two-column layout with photo and info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 relative">
        {/* Interactive Profile Photo with 3D effect */}
        <div className="relative flex justify-center items-center">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 animate-pulse"></div>
          <motion.div 
            ref={photoRef}
            className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-white/10 bg-muted shadow-2xl"
            variants={photoVariants}
            initial="initial"
            animate={animatePhoto ? "animate" : "initial"}
            whileHover={prefersReducedMotion ? {} : "hover"}
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
              transform: (isRotating && !prefersReducedMotion) ? 
                `rotateY(${(mousePosition.x / 8)}deg) rotateX(${-(mousePosition.y / 8)}deg)` : 
                "rotateY(0deg) rotateX(0deg)"
            }}
            onMouseEnter={() => !prefersReducedMotion && setIsRotating(true)}
            onMouseLeave={() => !prefersReducedMotion && setIsRotating(false)}
            aria-label="Profile photo of Shaswat Raj"
          >
            <Image 
              src={personalInfo.image}
              alt={personalInfo.name}
              fill
              priority
              className="object-cover"
            />
            
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            {/* Interactive shine effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tl from-transparent via-white to-transparent opacity-0 mix-blend-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: isRotating ? 0.15 : 0 }}
              style={{
                backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
                backgroundSize: "300% 300%"
              }}
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white/90">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-xl font-bold">{personalInfo.name}</h3>
                <p className="text-sm text-white/75">{personalInfo.title}</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Floating social icons around image */}
          <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none">
            {personalInfo.social.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: Math.cos(index * (2 * Math.PI / personalInfo.social.length)) * 120,
                  y: Math.sin(index * (2 * Math.PI / personalInfo.social.length)) * 120,
                }}
                transition={{ delay: 1 + index * 0.2, type: "spring" }}
                className="absolute left-1/2 top-1/2 flex items-center justify-center p-3 rounded-full bg-card 
                          border border-border hover:border-primary shadow-xl hover:shadow-primary/20 
                          transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                whileHover={{ scale: 1.2 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Personal Info Column */}
        <div className="flex flex-col justify-center space-y-8">
          <RevealOnScroll animation="fade-left">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block mb-4">
                Hello, I'm {personalInfo.name}
              </h3>
              
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                {personalInfo.longBio}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {personalInfo.facts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex items-center gap-2 text-sm bg-muted/50 border border-border px-3 py-1.5 rounded-full"
                  >
                    <span className="text-primary">{fact.icon}</span>
                    <span>{fact.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll animation="fade-up" delay={0.3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mt-6"
            >
              <div className="flex flex-col">
                <span className="text-primary font-medium">Location</span>
                <span className="text-foreground/80">{personalInfo.location}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-medium">Experience</span>
                <span className="text-foreground/80">4+ Years</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-medium">Availability</span>
                <span className="text-foreground/80">Open to opportunities</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-medium">Remote Work</span>
                <span className="text-foreground/80">Available worldwide</span>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
      
      {/* TABS with enhanced UI */}
      <div className="mb-16">
        <div className="flex flex-wrap justify-center gap-4 mb-16 relative">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1 }}
            className="absolute h-1.5 bg-gradient-to-r from-primary/5 via-secondary/20 to-primary/5 bottom-0 left-0 right-0 rounded-full" 
          />
          
          <motion.button
            onClick={() => setActiveTab("about")}
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "about" ? "active" : "inactive"}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="px-6 py-4 rounded-xl font-semibold text-lg transition-all relative flex items-center gap-2"
          >
            {activeTab === "about" && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                layoutId="tabIndicator"
              />
            )}
            <FiUser className={activeTab === "about" ? "text-primary" : ""} /> 
            My Values
          </motion.button>

          <motion.button
            onClick={() => setActiveTab("specializations")}
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "specializations" ? "active" : "inactive"}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="px-6 py-4 rounded-xl font-semibold text-lg transition-all relative flex items-center gap-2"
          >
            {activeTab === "specializations" && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                layoutId="tabIndicator"
              />
            )}
            <FiAward className={activeTab === "specializations" ? "text-primary" : ""} /> 
            Specializations
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTab("technologies")}
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "technologies" ? "active" : "inactive"}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="px-6 py-4 rounded-xl font-semibold text-lg transition-all relative flex items-center gap-2"
          >
            {activeTab === "technologies" && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                layoutId="tabIndicator"
              />
            )}
            <FiCode className={activeTab === "technologies" ? "text-primary" : ""} />
            Technologies
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTab("journey")}
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "journey" ? "active" : "inactive"}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="px-6 py-4 rounded-xl font-semibold text-lg transition-all relative flex items-center gap-2"
          >
            {activeTab === "journey" && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                layoutId="tabIndicator"
              />
            )}
            <FiCoffee className={activeTab === "journey" ? "text-primary" : ""} />
            My Journey
          </motion.button>
        </div>
        
        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              {/* Values cards in a modern grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalInfo.values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-card border border-border/40 p-6 rounded-xl shadow-lg hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden group"
                  >
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-lg -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-lg translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex gap-3 items-start mb-4">
                        <div className="p-2 bg-primary/10 text-primary rounded-md mt-1">
                          <FiHeart className="w-4 h-4" />
                        </div>
                        <p className="text-lg font-medium leading-relaxed">{value}</p>
                      </div>
                    </div>
                    
                    {/* Gradient hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </motion.div>
                ))}
              </div>
              
              {/* Quote section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-xl relative"
              >
                <div className="absolute -top-4 -left-4 text-4xl text-primary/20">❝</div>
                <div className="absolute -bottom-4 -right-4 text-4xl text-primary/20">❞</div>
                <p className="italic text-center text-lg text-foreground/80">
                  "I believe that great software is born at the intersection of technical excellence and thoughtful user experience. My goal is to create digital products that not only work flawlessly but also bring joy to those who use them."
                </p>
              </motion.div>
            </motion.div>
          )}
          
          {activeTab === "specializations" && (
            <motion.div
              key="specializations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {specializations.map((specialization) => (
                  <motion.div
                    key={specialization.id}
                    variants={cardVariants}
                    initial="initial"
                    whileHover="hover"
                    animate={hoveredCard === specialization.id ? "hover" : "initial"}
                    onHoverStart={() => setHoveredCard(specialization.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="bg-card border border-border/50 rounded-xl p-6 relative overflow-hidden group"
                  >
                    {/* Decorative background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10" 
                      style={{
                        backgroundImage: `radial-gradient(circle at 3px 3px, rgba(var(--primary-rgb), 0.15) 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                      }} 
                    />
                    
                    {/* Icon with enhanced container */}
                    <div className="mb-4 inline-flex items-center justify-center">
                      <motion.div 
                        className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {specialization.icon}
                      </motion.div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {specialization.title}
                    </h3>
                    
                    <p className="text-foreground/70">
                      {specialization.description}
                    </p>
                    
                    {/* Hover indicator */}
                    <motion.div 
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-br-xl rounded-bl-xl"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Hover glow effect */}
                    <motion.div 
                      className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20" 
                      animate={{ 
                        opacity: hoveredCard === specialization.id ? 0.2 : 0 
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {activeTab === 'technologies' && (
            <motion.div
              key="technologies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Technology category cards with enhanced visuals */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-card border border-border p-6 rounded-xl relative overflow-hidden group hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
                >
                  {/* Decorative glowing orb in corner */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-xl group-hover:from-primary/20 transition-all duration-500"></div>
                  
                  <h3 className="text-xl font-bold mb-4 flex items-center relative">
                    <span className="p-3 mr-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/10 text-primary shadow-sm">
                      <FiCode size={20} />
                    </span>
                    Programming Languages
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 relative">
                    {renderTechItems(technologies.languages)}
                  </div>
                  
                  {/* Bottom accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary/80 to-secondary/80"
                    initial={{ width: 0 }}
                    whileInView={{ width: '30%' }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-card border border-border p-6 rounded-xl relative overflow-hidden group hover:shadow-lg hover:shadow-secondary/5 hover:border-secondary/20 transition-all duration-300"
                >
                  {/* Decorative glowing orb in corner */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br from-secondary/10 to-transparent blur-xl group-hover:from-secondary/20 transition-all duration-500"></div>
                  
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="p-3 mr-3 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/10 text-secondary shadow-sm">
                      <FiPenTool size={20} />
                    </span>
                    Frameworks & Libraries
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {renderTechItems(technologies.frameworks)}
                  </div>
                  
                  {/* Bottom accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary/80 to-primary/80"
                    initial={{ width: 0 }}
                    whileInView={{ width: '30%' }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-card border border-border p-6 rounded-xl relative overflow-hidden group hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 transition-all duration-300"
                >
                  {/* Decorative glowing orb in corner */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-xl group-hover:from-accent/20 transition-all duration-500"></div>
                  
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="p-3 mr-3 rounded-lg bg-gradient-to-br from-accent/20 to-primary/10 text-accent shadow-sm">
                      <FiSettings size={20} />
                    </span>
                    Tools & Environments
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {renderTechItems(technologies.tools)}
                  </div>
                  
                  {/* Bottom accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent/80 to-secondary/80"
                    initial={{ width: 0 }}
                    whileInView={{ width: '30%' }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-card border border-border p-6 rounded-xl relative overflow-hidden group hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
                >
                  {/* Decorative glowing orb in corner */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-xl group-hover:from-primary/20 transition-all duration-500"></div>
                  
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="p-3 mr-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 text-primary shadow-sm">
                      <FiServer size={20} />
                    </span>
                    Other Technologies
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {renderTechItems(technologies.other)}
                  </div>
                  
                  {/* Bottom accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary/80 to-accent/80"
                    initial={{ width: 0 }}
                    whileInView={{ width: '30%' }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'journey' && (
            <motion.div
              key="journey"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative pb-10 pt-5">
                {/* Glowing line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-secondary/30 to-accent/30 rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"></div>
                
                {[
                  {
                    year: "2020",
                    title: "Started Professional Development",
                    description: "Began my journey as a professional developer, working on web applications and exploring various technologies.",
                    side: "left",
                    icon: <FiCode />
                  },
                  {
                    year: "2021",
                    title: "Expanded Skill Set",
                    description: "Deepened my expertise in JavaScript frameworks and began contributing to open-source projects.",
                    side: "right",
                    icon: <FiBox />
                  },
                  {
                    year: "2022",
                    title: "Focused on Full-Stack Development",
                    description: "Strengthened my backend skills with Node.js, Express, and database technologies while continuing to improve frontend expertise.",
                    side: "left",
                    icon: <FiLayers />
                  },
                  {
                    year: "2023",
                    title: "Specialized in Modern Web Technologies",
                    description: "Mastered Next.js, TypeScript, and other modern web technologies, focusing on performance and user experience.",
                    side: "right",
                    icon: <FiGlobe />
                  },
                  {
                    year: "2024",
                    title: "Growth & Innovation",
                    description: "Expanded into new areas like DevOps and cloud infrastructure while continuing to build innovative solutions.",
                    side: "left",
                    icon: <FiZap />
                  },
                  {
                    year: "2025",
                    title: "Leading & Creating Impact",
                    description: "Currently focused on leading development teams and creating impactful software that solves real-world problems.",
                    side: "right",
                    icon: <FiAward />
                  }
                ].map((milestone, index) => (
                  <div key={milestone.year} className="grid grid-cols-1 md:grid-cols-2 mb-16 last:mb-0">
                    <motion.div
                      initial={{ opacity: 0, x: milestone.side === "left" ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative ${milestone.side === "left" ? "md:pr-12 md:text-right md:col-start-1" : "md:pl-12 md:col-start-2"}`}
                    >
                      <div className={`p-6 bg-card border border-border rounded-xl shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 relative overflow-hidden group`}>
                        {/* Year badge */}
                        <div className="absolute -top-3 bg-background border border-primary/20 text-primary px-4 py-1 rounded-full font-bold shadow-sm">
                          {milestone.year}
                        </div>
                        
                        {/* Content */}
                        <div className="pt-3">
                          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                            {milestone.title}
                          </h3>
                          <p className="text-foreground/70">{milestone.description}</p>
                        </div>
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      </div>
                    </motion.div>
                    
                    {/* Timeline node */}
                    <motion.div 
                      className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      style={{ top: `calc(${index * 16}rem + ${index * 4}rem + 2.5rem)` }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/20 border-4 border-background">
                        {milestone.icon}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center mt-8"
      >
        <div className="inline-block relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur-md opacity-30"></div>
          <a 
            href="#contact" 
            className="relative px-8 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/50 
                     text-foreground rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300
                     hover:shadow-lg hover:shadow-primary/10"
          >
            Let's Connect <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default AboutSection;
