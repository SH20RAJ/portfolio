"use client";

import { useState, useRef, useEffect } from 'react';
import SectionContainer from '../ui/SectionContainer';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiCode, FiPenTool, FiBox, FiGlobe, FiServer, FiLayers, FiChevronRight, FiUser, FiAward } from 'react-icons/fi';
import { useIntersectionObserver, RevealOnScroll } from '@/utils/animation';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('specializations');
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { ref: aboutRef, isIntersecting: isAboutVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  });

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
    frameworks: ["Next.js", "React", "Laravel", "Remix"],
    tools: ["GitHub", "Docker", "Visual Studio Code"],
    other: ["RESTful APIs", "Web Scraping", "Blogging Platforms", "DevOps", "AWS", "MySQL"]
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
    inactive: { opacity: 0.6, scale: 0.95 },
    active: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
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
      background: "linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.05), rgba(var(--secondary-rgb), 0.05))",
      y: -8,
      scale: 1.02,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  
  // Background blob animation variants
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
  
  // Skill technology display logic
  const renderTechItems = (items) => {
    return items.map((item, index) => (
      <motion.span
        key={item}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="px-3 py-1.5 rounded-full bg-muted text-foreground/80 text-sm inline-block"
      >
        {item}
      </motion.span>
    ));
  };

  return (
    <SectionContainer id="about" ref={sectionRef} className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
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
            style={{ filter: 'blur(120px)' }}
          />
        ))}
        
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] mix-blend-overlay"></div>
      </div>
      
      <div className="text-center mb-16 relative z-10" ref={aboutRef}>
        <RevealOnScroll animation="fade-down" delay={0.1}>
          {/* Enhanced Section Title with animated decorative elements */}
          <div className="relative inline-block mb-2">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-5xl text-primary/10"
            >
              <FiUser />
            </motion.span>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary/80 to-transparent rounded-full absolute -top-2 left-0"
            />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent relative inline-block">
              <span className="bg-gradient-to-r from-blue-500 via-violet-600 to-purple-500 bg-clip-text">About Me</span>
              
              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-blue-500 via-violet-600 to-purple-500 absolute -bottom-1 left-0 rounded-full"
              />
            </h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-transparent to-primary/80 rounded-full absolute -bottom-4 right-0"
            />
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll animation="fade-up" delay={0.3}>
          <p className="text-foreground/80 max-w-3xl mx-auto text-xl leading-relaxed tracking-wide mt-8">
            I'm a passionate full-stack developer with a deep love for creating <span className="text-primary font-semibold">elegant solutions</span> to complex problems. 
            With expertise spanning multiple technologies and domains, I craft digital experiences that are both
            <span className="text-secondary font-semibold"> beautiful and functional</span>.
          </p>
        </RevealOnScroll>
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
            onClick={() => setActiveTab("specializations")}
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "specializations" ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-4 rounded-xl font-semibold text-lg transition-all relative ${
              activeTab === "specializations" 
                ? "bg-gradient-to-br from-primary/20 to-secondary/20 text-primary shadow-lg shadow-primary/5" 
                : "bg-muted/30 text-foreground/70 hover:bg-muted/50"
            }`}
          >
            {activeTab === "specializations" && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                layoutId="tabIndicator"
              />
            )}
            <span className="flex items-center gap-2">
              <FiAward className={activeTab === "specializations" ? "text-primary" : ""} /> 
              Specializations
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTab("technologies")}
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "technologies" ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-4 rounded-xl font-semibold text-lg transition-all relative ${
              activeTab === "technologies" 
                ? "bg-gradient-to-br from-primary/20 to-secondary/20 text-primary shadow-lg shadow-primary/5" 
                : "bg-muted/30 text-foreground/70 hover:bg-muted/50"
            }`}
          >
            {activeTab === "technologies" && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                layoutId="tabIndicator"
              />
            )}
            Technologies
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTab("journey")}
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "journey" ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-4 rounded-xl font-semibold text-lg transition-all relative ${
              activeTab === "journey" 
                ? "bg-gradient-to-br from-primary/20 to-secondary/20 text-primary shadow-lg shadow-primary/5" 
                : "bg-muted/30 text-foreground/70 hover:bg-muted/50"
            }`}
          >
            {activeTab === "journey" && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                layoutId="tabIndicator"
              />
            )}
            My Journey
          </motion.button>
        </div>
        
        {/* Tab Content */}
        <AnimatePresence mode="wait">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-card border border-border p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="p-2 mr-3 rounded-lg bg-primary/10 text-primary">
                      <FiCode size={20} />
                    </span>
                    Programming Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {renderTechItems(technologies.languages)}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-card border border-border p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="p-2 mr-3 rounded-lg bg-secondary/10 text-secondary">
                      <FiPenTool size={20} />
                    </span>
                    Frameworks & Libraries
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {renderTechItems(technologies.frameworks)}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-card border border-border p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="p-2 mr-3 rounded-lg bg-accent/10 text-accent">
                      <FiBox size={20} />
                    </span>
                    Tools & Environments
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {renderTechItems(technologies.tools)}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-card border border-border p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="p-2 mr-3 rounded-lg bg-primary/10 text-primary">
                      <FiServer size={20} />
                    </span>
                    Other Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {renderTechItems(technologies.other)}
                  </div>
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
              className="max-w-3xl mx-auto"
            >
              <div className="relative pl-10 pb-10 border-l-2 border-primary/30 space-y-10">
                {[
                  {
                    year: "2020",
                    title: "Started Professional Development",
                    description: "Began my journey as a professional developer, working on web applications and exploring various technologies."
                  },
                  {
                    year: "2021",
                    title: "Expanded Skill Set",
                    description: "Deepened my expertise in JavaScript frameworks and began contributing to open-source projects."
                  },
                  {
                    year: "2022",
                    title: "Focused on Full-Stack Development",
                    description: "Strengthened my backend skills with Node.js, Express, and database technologies while continuing to improve frontend expertise."
                  },
                  {
                    year: "2023",
                    title: "Specialized in Modern Web Technologies",
                    description: "Mastered Next.js, TypeScript, and other modern web technologies, focusing on performance and user experience."
                  },
                  {
                    year: "2024",
                    title: "Growth & Innovation",
                    description: "Expanded into new areas like DevOps and cloud infrastructure while continuing to build innovative solutions."
                  }
                ].map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative"
                  >
                    <div className="absolute -left-[42px] p-1.5 rounded-full bg-background border-4 border-primary">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div className="mb-1 text-xl font-bold text-primary">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-foreground/70">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
