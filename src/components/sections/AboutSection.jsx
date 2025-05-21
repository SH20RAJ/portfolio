"use client";

import { useState, useRef, useEffect } from 'react';
import SectionContainer from '../ui/SectionContainer';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiCode, FiPenTool, FiBox, FiGlobe, FiServer, FiLayers, FiChevronRight } from 'react-icons/fi';
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
    <SectionContainer id="about" ref={sectionRef}>
      <div className="text-center mb-16" ref={aboutRef}>
        <RevealOnScroll animation="fade-down" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-blue-400 bg-clip-text inline-block">
            About Me
          </h2>
        </RevealOnScroll>
        
        <RevealOnScroll animation="fade-up" delay={0.3}>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
            I'm a passionate full-stack developer with a deep love for creating elegant solutions to complex problems. 
            With expertise spanning multiple technologies and domains, I craft digital experiences that are both
            beautiful and functional.
          </p>
        </RevealOnScroll>
      </div>
      
      {/* TABS */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
          <motion.button
            onClick={() => setActiveTab("specializations")}
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "specializations" ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-3 rounded-lg font-medium transition-all ${
              activeTab === "specializations" 
                ? "bg-primary/10 text-primary" 
                : "bg-muted text-foreground/70"
            }`}
          >
            Specializations
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTab("technologies")}
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "technologies" ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-3 rounded-lg font-medium transition-all ${
              activeTab === "technologies" 
                ? "bg-primary/10 text-primary" 
                : "bg-muted text-foreground/70"
            }`}
          >
            Technologies
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTab("journey")}
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "journey" ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-3 rounded-lg font-medium transition-all ${
              activeTab === "journey" 
                ? "bg-primary/10 text-primary" 
                : "bg-muted text-foreground/70"
            }`}
          >
            My Journey
          </motion.button>
        </div>
        
        <AnimatePresence mode="wait">
          {/* SPECIALIZATIONS TAB */}
          {activeTab === 'specializations' && (
            <motion.div
              key="specializations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specializations.map((specialization) => (
                  <motion.div
                    key={specialization.id}
                    variants={cardVariants}
                    initial="initial"
                    whileHover="hover"
                    onHoverStart={() => setHoveredCard(specialization.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="p-6 rounded-xl border border-border transition-all relative overflow-hidden"
                  >
                    {/* Background gradient effect on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 -z-10"
                      animate={{ 
                        opacity: hoveredCard === specialization.id ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="mb-4 p-3 rounded-lg bg-muted inline-block text-primary">
                      {specialization.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{specialization.title}</h3>
                    <p className="text-foreground/70">{specialization.description}</p>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: hoveredCard === specialization.id ? 1 : 0,
                        scale: hoveredCard === specialization.id ? 1 : 0.8, 
                      }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 flex items-center text-primary text-sm font-medium"
                    >
                      Learn more <FiChevronRight className="ml-1" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* TECHNOLOGIES TAB */}
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
          
          {/* JOURNEY TAB */}
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
