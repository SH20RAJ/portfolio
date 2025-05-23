// filepath: /Users/shaswatraj/Desktop/open-source/portfolio/src/components/sections/SkillsSection.jsx
"use client";

import { useState, useRef, useEffect } from 'react';
import SectionContainer from '../ui/SectionContainer';
import Image from 'next/image';
import { motion, useInView, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useIntersectionObserver } from '@/utils/animation';
import { FiCode, FiLayers, FiDatabase, FiServer, FiGlobe } from 'react-icons/fi';
import { RiToolsFill } from 'react-icons/ri';

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [animateSkills, setAnimateSkills] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverCount, setHoverCount] = useState(0);
  
  // Values for the interactive cursor effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Handle mouse movement for interactive effects
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    
    // Calculate relative mouse position
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    
    setMousePosition({ x, y });
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };
  
  // Effect to animate skills when section comes into view
  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setAnimateSkills(true);
      }, 300);
    }
  }, [isInView]);

  // Categories with icons and enhanced visual hierarchy
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FiCode className="text-xl" />,
      description: "Core languages I use to build applications and systems",
      skills: [
        { name: "JavaScript", icon: "https://www.svgrepo.com/show/452045/js.svg", proficiency: 95, experience: "8+ years", color: "#f7df1e" },
        { name: "TypeScript", icon: "https://www.svgrepo.com/show/349540/typescript.svg", proficiency: 90, experience: "5+ years", color: "#3178c6" },
        { name: "PHP", icon: "https://www.svgrepo.com/show/373969/php2.svg", proficiency: 85, experience: "7+ years", color: "#777bb3" },
        { name: "Python", icon: "https://www.svgrepo.com/show/452091/python.svg", proficiency: 80, experience: "4+ years", color: "#3776ab" },
        { name: "C", icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png", proficiency: 75, experience: "3+ years", color: "#a8b9cc" },
        { name: "C++", icon: "https://www.svgrepo.com/show/452183/cpp.svg", proficiency: 70, experience: "2+ years", color: "#00599c" },
        { name: "HTML", icon: "https://www.svgrepo.com/show/452228/html-5.svg", proficiency: 98, experience: "10+ years", color: "#e34f26" },
        { name: "CSS", icon: "https://www.svgrepo.com/show/452185/css-3.svg", proficiency: 95, experience: "10+ years", color: "#1572b6" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <FiLayers className="text-xl" />,
      description: "Tools that accelerate development and enhance capabilities",
      skills: [
        { name: "Next.js", icon: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png", proficiency: 95, experience: "5+ years", color: "#000000" },
        { name: "React", icon: "https://www.svgrepo.com/show/452092/react.svg", proficiency: 95, experience: "7+ years", color: "#61dafb" },
        { name: "Node.js", icon: "https://www.svgrepo.com/show/376337/node-js.svg", proficiency: 90, experience: "6+ years", color: "#68a063" },
        { name: "Laravel", icon: "https://www.svgrepo.com/show/353985/laravel.svg", proficiency: 85, experience: "5+ years", color: "#ff2d20" },
        { name: "Remix", icon: "https://remix.run/_brand/remix-letter-glowing.svg", proficiency: 80, experience: "2+ years", color: "#121212" },
        { name: "Express", icon: "https://www.svgrepo.com/show/353724/express.svg", proficiency: 90, experience: "6+ years", color: "#000000" },
        { name: "Hono", icon: "https://hono.dev/images/logo.svg", proficiency: 90, experience: "2+ years", color: "#5f25a0" },
        { name: "TailwindCSS", icon: "https://www.svgrepo.com/show/374118/tailwind.svg", proficiency: 95, experience: "4+ years", color: "#38b2ac" },
      ]
    },
    {
      title: "Databases & Storage",
      icon: <FiDatabase className="text-xl" />,
      description: "Solutions I use for storing and managing data",
      skills: [
        { name: "MySQL", icon: "https://www.svgrepo.com/show/303251/mysql-logo.svg", proficiency: 90, experience: "8+ years", color: "#4479a1" },
        { name: "MongoDB", icon: "https://www.svgrepo.com/show/303232/mongodb-logo.svg", proficiency: 85, experience: "5+ years", color: "#47a248" },
        { name: "Firebase", icon: "https://www.svgrepo.com/show/373595/firebase.svg", proficiency: 90, experience: "6+ years", color: "#ffca28" },
        { name: "PostgreSQL", icon: "https://www.svgrepo.com/show/354200/postgresql.svg", proficiency: 85, experience: "4+ years", color: "#336791" },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <RiToolsFill className="text-xl" />,
      description: "Tools that streamline development and deployment",
      skills: [
        { name: "Git", icon: "https://www.svgrepo.com/show/452210/git.svg", proficiency: 95, experience: "9+ years", color: "#f05032" },
        { name: "GitHub", icon: "https://www.svgrepo.com/show/475654/github-color.svg", proficiency: 95, experience: "9+ years", color: "#181717" },
        { name: "Docker", icon: "https://www.svgrepo.com/show/452192/docker.svg", proficiency: 80, experience: "4+ years", color: "#2496ed" },
        { name: "VS Code", icon: "https://www.svgrepo.com/show/452129/vs-code.svg", proficiency: 98, experience: "7+ years", color: "#007acc" },
        { name: "AWS", icon: "https://www.svgrepo.com/show/373458/aws.svg", proficiency: 75, experience: "3+ years", color: "#ff9900" },
        { name: "Cloudflare", icon: "https://www.svgrepo.com/show/353564/cloudflare.svg", proficiency: 80, experience: "4+ years", color: "#f48120" },
      ]
    },
    {
      title: "Other Technologies",
      icon: <FiGlobe className="text-xl" />,
      description: "Additional technologies that complete my toolkit",
      skills: [
        { name: "RESTful APIs", icon: "https://www.svgrepo.com/show/375531/api.svg", proficiency: 95, experience: "8+ years", color: "#00c853" },
        { name: "WebSockets", icon: "https://www.svgrepo.com/show/354553/websocket.svg", proficiency: 85, experience: "5+ years", color: "#4d4d4d" },
        { name: "Web Scraping", icon: "https://www.svgrepo.com/show/514333/web-page.svg", proficiency: 90, experience: "6+ years", color: "#6b21a8" },
        { name: "Responsive Design", icon: "https://www.svgrepo.com/show/514316/design.svg", proficiency: 95, experience: "10+ years", color: "#0099ff" },
      ]
    }
  ];

  // Animation variants for 3D skill cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  // Enhanced 3D card animation
  const skillVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      rotateX: 30,
      rotateY: -30
    },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: custom * 0.07
      }
    }),
    hover: {
      scale: 1.05,
      rotateX: 0,
      rotateY: 0,
      y: -10,
      boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };
  
  // Interactive tab animations
  const tabVariants = {
    inactive: { 
      opacity: 0.7, 
      scale: 0.95, 
      backgroundColor: "var(--muted)",
    },
    active: { 
      opacity: 1, 
      scale: 1.05,
      backgroundColor: "rgba(var(--primary-rgb), 0.1)",
      color: "var(--primary)",
      boxShadow: "0 8px 30px rgba(var(--primary-rgb), 0.2)",
      transition: { type: "spring", stiffness: 400, damping: 20 }
    },
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(var(--primary-rgb), 0.15)",
      boxShadow: "0 10px 25px rgba(var(--primary-rgb), 0.15)",
    }
  };
  
  // Enhanced progress bar animation
  const progressVariants = {
    hidden: { width: 0 },
    visible: (custom) => ({
      width: `${custom}%`,
      transition: { 
        duration: 1.5, 
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2 
      }
    })
  };

  // Floating particles animation
  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom) => ({
      opacity: [0, 0.8, 0],
      scale: [0, 1, 0],
      x: custom.x,
      y: custom.y,
      transition: { 
        duration: 2 + Math.random() * 3,
        repeat: Infinity,
        repeatType: 'loop',
        ease: "easeInOut",
        delay: custom.delay
      }
    })
  };

  // Enhanced background blob animation
  const blobVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: (custom) => ({
      scale: [1, 1.1, 1],
      opacity: [0.15, 0.12, 0.15],
      x: custom % 2 === 0 ? [0, 15, 0, -15, 0] : [0, -15, 0, 15, 0],
      y: custom % 2 === 0 ? [0, -15, 0, 15, 0] : [0, 15, 0, -15, 0],
      transition: {
        x: { repeat: Infinity, duration: 20 + custom * 2, repeatType: 'mirror', ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 25 + custom * 2, repeatType: 'mirror', ease: 'easeInOut' },
        opacity: { repeat: Infinity, duration: 8, repeatType: 'mirror', ease: 'easeInOut' },
        scale: { repeat: Infinity, duration: 12, repeatType: 'mirror', ease: 'easeInOut' }
      }
    })
  };
  
  // Generate skill-related particles
  const generateParticles = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: [
        Math.random() * 600 - 300, 
        Math.random() * 800 - 400
      ],
      y: [
        Math.random() * 300 - 150, 
        Math.random() * 400 - 200
      ],
      delay: Math.random() * 5,
      size: 2 + Math.random() * 4
    }));
  };
  
  const particles = generateParticles(20);
  
  return (
    <SectionContainer 
      id="skills" 
      ref={sectionRef} 
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Dynamic gradient blobs */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={`skills-blob-${i}`}
            custom={i}
            variants={blobVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className={`absolute rounded-full bg-gradient-to-br ${
              i === 1 
                ? "from-primary/10 to-accent/5 -top-20 right-[10%] w-[600px] h-[600px]" 
                : i === 2 
                ? "from-secondary/10 to-primary/5 bottom-0 -left-20 w-[700px] h-[700px]" 
                : "from-accent/10 to-secondary/5 top-[40%] right-[20%] w-[400px] h-[400px]"
            }`}
            style={{ 
              filter: 'blur(120px)',
              transformOrigin: i === 1 ? 'top right' : i === 2 ? 'bottom left' : 'center',
              transform: `translate(${(mousePosition.x - 0.5) * -30}px, ${(mousePosition.y - 0.5) * -30}px)`
            }}
          />
        ))}
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            custom={particle}
            variants={particleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`absolute rounded-full ${
              particle.id % 5 === 0 ? "bg-primary" : 
              particle.id % 5 === 1 ? "bg-secondary" : 
              particle.id % 5 === 2 ? "bg-accent" : 
              particle.id % 5 === 3 ? "bg-blue-400" : 
              "bg-violet-400"
            }`}
            style={{ 
              width: particle.size, 
              height: particle.size,
              top: '50%',
              left: '50%',
              opacity: 0
            }}
          />
        ))}
        
        {/* Mesh pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/30 backdrop-blur-[2px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] mix-blend-overlay"
          style={{
            transform: `translate(${(mousePosition.x - 0.5) * -15}px, ${(mousePosition.y - 0.5) * -15}px)`
          }}
        />
        
        {/* Interactive mouse follower */}
        <motion.div
          className="hidden lg:block absolute w-60 h-60 rounded-full pointer-events-none"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
            background: "radial-gradient(circle, rgba(var(--primary-rgb), 0.08), transparent 70%)",
            opacity: hoverCount > 0 ? 1 : 0
          }}
        />
      </div>
      
      {/* Section heading with enhanced animations */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative"
      >
        {/* Decorative element */}
        <motion.div 
          initial={{ width: 0 }}
          animate={isInView ? { width: "8rem" } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-blue-500 via-violet-600 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
            
            {/* Decorative elements */}
            <motion.span
              className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-primary/20 text-2xl font-light"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {"<"}
            </motion.span>
            <motion.span
              className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-primary/20 text-2xl font-light"
              initial={{ opacity: 0, x: 10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {"/>"}
            </motion.span>
            
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-4 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-violet-600 to-purple-500 rounded-full opacity-80"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: '100%', opacity: 0.8 } : { width: 0, opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-foreground/70 max-w-3xl mx-auto text-lg mt-4"
        >
          A comprehensive showcase of my technical expertise, showcasing the tools and technologies 
          I've mastered to create exceptional digital experiences.
        </motion.p>
      </motion.div>

      {/* Enhanced Category Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-16 relative"
      >
        {/* Tab indicator line */}
        <motion.div 
          className="absolute bottom-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "90%", opacity: 0.5 } : { width: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      
        {skillCategories.map((category, index) => (
          <motion.button
            key={category.title}
            onClick={() => setActiveCategory(index)}
            variants={tabVariants}
            initial="inactive"
            animate={activeCategory === index ? "active" : "inactive"}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl text-base font-medium transition-all relative flex items-center gap-2"
          >
            {/* Icon */}
            <span className={activeCategory === index ? "text-primary" : "text-foreground/70"}>
              {category.icon}
            </span>
            
            {/* Text */}
            <span>{category.title}</span>
            
            {/* Glowing indicator for active tab */}
            {activeCategory === index && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-primary/5 rounded-xl -z-10"
                transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
              />
            )}
            
            {/* Active tab indicator */}
            {activeCategory === index && (
              <motion.div
                layoutId="tabIndicator"
                className="absolute -bottom-1.5 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Category description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`description-${activeCategory}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-10"
        >
          <p className="text-foreground/70 italic">
            {skillCategories[activeCategory].description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Skills Grid with enhanced 3D cards */}
      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  custom={index}
                  variants={skillVariants}
                  initial="hidden"
                  animate={animateSkills ? "visible" : "hidden"}
                  whileHover="hover"
                  className="bg-card/40 backdrop-blur-xl border border-border/50 p-6 rounded-2xl flex flex-col items-center relative overflow-hidden group transform perspective-1200"
                  onMouseEnter={() => {
                    setHoveredSkill(skill.name);
                    setHoverCount(prev => prev + 1);
                  }}
                  onMouseLeave={() => {
                    setHoveredSkill(null);
                    setHoverCount(prev => prev - 1);
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Premium glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  
                  {/* Card glow effect on hover with skill's brand color */}
                  <motion.div 
                    className="absolute -inset-px rounded-2xl opacity-0 -z-10 blur-md"
                    animate={{ 
                      opacity: hoveredSkill === skill.name ? 0.5 : 0,
                      backgroundColor: hoveredSkill === skill.name ? skill.color + "40" : "transparent"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Halo effect specific to each skill color */}
                  <motion.div
                    className="absolute -inset-0 rounded-2xl opacity-0 -z-10"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${skill.color}20, transparent 70%)`
                    }}
                    animate={{ 
                      opacity: hoveredSkill === skill.name ? 1 : 0
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Elevated Skill Icon container with 3D effect */}
                  <motion.div 
                    className="mb-6 p-4 rounded-xl relative bg-gradient-to-br from-muted/90 to-muted/30 shadow-lg border border-white/10 transform group-hover:-translate-y-1 transition-transform"
                    style={{
                      transformStyle: "preserve-3d",
                      boxShadow: hoveredSkill === skill.name ? `0 10px 25px -5px ${skill.color}30` : "none",
                    }}
                  >
                    <motion.div
                      animate={
                        hoveredSkill === skill.name
                          ? { 
                              rotateY: [0, 5, 0, -5, 0], 
                              rotateX: [0, -5, 0, 5, 0],
                            }
                          : {}
                      }
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "mirror",
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {skill.icon && (
                        <Image 
                          src={skill.icon} 
                          alt={skill.name}
                          width={45}
                          height={45}
                          className="transition-all duration-500 group-hover:scale-110"
                          style={{
                            filter: hoveredSkill === skill.name ? "drop-shadow(0 0 8px " + skill.color + "60)" : "none",
                          }}
                        />
                      )}
                    </motion.div>
                    
                    {/* Icon base shadow */}
                    <div className="absolute bottom-0 inset-x-0 h-1/2 bg-black/10 blur-sm rounded-full transform translate-y-1/4 scale-75 opacity-0 group-hover:opacity-70 transition-opacity" />
                  </motion.div>
                  
                  {/* Skill Name with dynamic color */}
                  <motion.h3 
                    className="text-xl font-bold mb-2 text-center transition-colors"
                    animate={{
                      color: hoveredSkill === skill.name ? skill.color : "var(--foreground)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.name}
                  </motion.h3>
                  
                  {/* Experience badge */}
                  <div className="mb-4 px-3 py-1 rounded-full bg-muted/50 text-xs border border-white/10 shadow-sm">
                    {skill.experience}
                  </div>
                  
                  {/* Enhanced Skill Proficiency Bar */}
                  <div className="w-full mt-auto">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="font-medium text-foreground/60">Proficiency</span>
                      <motion.span 
                        animate={{
                          color: hoveredSkill === skill.name ? skill.color : "var(--foreground-rgb)",
                          fontWeight: hoveredSkill === skill.name ? 600 : 400,
                          scale: hoveredSkill === skill.name ? 1.1 : 1
                        }}
                        className="transition-all"
                      >
                        {skill.proficiency}%
                      </motion.span>
                    </div>
                    
                    {/* Multi-layer progress bar */}
                    <div className="w-full h-2 bg-muted/70 rounded-full overflow-hidden backdrop-blur-sm relative">
                      {/* Background pulse animation */}
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, scale: 1 }}
                          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.02, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full"
                          style={{ backgroundColor: skill.color + "20" }}
                        />
                      )}
                      
                      {/* Main progress bar */}
                      <motion.div
                        custom={skill.proficiency}
                        variants={progressVariants}
                        initial="hidden"
                        animate={animateSkills ? "visible" : "hidden"}
                        className="h-full rounded-full"
                        style={{ 
                          background: hoveredSkill === skill.name
                            ? `linear-gradient(90deg, ${skill.color}99, ${skill.color})`
                            : skill.proficiency > 90
                              ? "linear-gradient(90deg, var(--primary), var(--secondary))"
                              : skill.proficiency > 80
                                ? "linear-gradient(90deg, var(--primary-rgb) 90%, var(--primary))"
                                : "var(--primary-rgb, 70%)"
                        }}
                      >
                        {/* Shimmering effect */}
                        {hoveredSkill === skill.name && (
                          <motion.div
                            className="absolute top-0 bottom-0 w-10 bg-white/20 skew-x-30"
                            animate={{ left: ["-10%", "100%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                          />
                        )}
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className={`absolute top-0 right-0 w-5 h-5 border-t border-r transition-colors duration-300 rounded-tr-md ${hoveredSkill === skill.name ? `border-[${skill.color}]` : 'border-primary/30'}`} />
                  <div className={`absolute bottom-0 left-0 w-5 h-5 border-b border-l transition-colors duration-300 rounded-bl-md ${hoveredSkill === skill.name ? `border-[${skill.color}]` : 'border-primary/30'}`} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Skill mastery visualization */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-20 w-full max-w-4xl mx-auto"
      >
        <div className="relative">
          {/* Mastery scale visualization */}
          <div className="grid grid-cols-5 gap-2 bg-muted/30 p-4 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-center">
              <div className="h-4 rounded bg-primary/30 mb-2"></div>
              <span className="text-xs text-foreground/60">Beginner</span>
            </div>
            <div className="text-center">
              <div className="h-8 rounded bg-primary/40 mb-2"></div>
              <span className="text-xs text-foreground/60">Elementary</span>
            </div>
            <div className="text-center">
              <div className="h-12 rounded bg-primary/60 mb-2"></div>
              <span className="text-xs text-foreground/60">Intermediate</span>
            </div>
            <div className="text-center">
              <div className="h-16 rounded bg-primary/80 mb-2"></div>
              <span className="text-xs text-foreground/60">Advanced</span>
            </div>
            <div className="text-center">
              <div className="h-20 rounded bg-gradient-to-t from-primary to-secondary mb-2"></div>
              <span className="text-xs text-foreground/60">Expert</span>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Enhanced Skills Summary with tessellated pattern */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-16 text-center relative px-4"
      >
        <div className="max-w-3xl mx-auto px-8 py-6 border border-border/50 rounded-2xl bg-card/30 backdrop-blur-lg relative overflow-hidden">
          {/* Animated geometric pattern */}
          <div className="absolute inset-0 -z-10 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="hexagonPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M15,0 L30,10 L30,20 L15,30 L0,20 L0,10 Z" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#hexagonPattern)" />
            </svg>
          </div>
          
          {/* Corner decorations with gradient */}
          <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gradient-to-r from-primary/50 to-secondary/50 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-gradient-to-r from-secondary/50 to-primary/50 rounded-bl-lg"></div>
          
          <p className="text-foreground/80 relative z-10 text-lg">
            These skills represent my technical toolkit that I've built and refined over years of practical experience.
            I'm continuously learning and adding new technologies to my repertoire to deliver cutting-edge solutions.
          </p>
          
          {/* Animated underline */}
          <motion.div
            className="h-0.5 w-1/3 mx-auto mt-4 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: '33%' } : { width: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default SkillsSection;