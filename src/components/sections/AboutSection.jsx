"use client";

import { useState, useRef } from 'react';
import SectionContainer from '../ui/SectionContainer';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiCode, FiPenTool, FiBox, FiGlobe, FiServer, FiLayers } from 'react-icons/fi';
import { useIntersectionObserver, RevealOnScroll } from '@/utils/animation';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('specializations');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { ref: aboutRef, isIntersecting: isAboutVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  });

  const specializations = [
    {
      icon: <FiCode size={24} />,
      title: "Development",
      description: "Building clean, efficient, and scalable solutions across the full technology stack."
    },
    {
      icon: <FiPenTool size={24} />,
      title: "Design",
      description: "Creating intuitive and engaging user experiences with a focus on aesthetics and usability."
    },
    {
      icon: <FiBox size={24} />,
      title: "Open Source",
      description: "Contributing to and maintaining projects that benefit the developer community."
    },
    {
      icon: <FiGlobe size={24} />,
      title: "Web & Apps",
      description: "Developing responsive websites and applications across various platforms."
    },
    {
      icon: <FiServer size={24} />,
      title: "DevOps",
      description: "Setting up infrastructure, deployment pipelines, and ensuring smooth operations."
    },
    {
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

  return (
    <SectionContainer id="about" ref={sectionRef}>
      <div className="text-center mb-16" ref={aboutRef}>
        <RevealOnScroll animation="fade-down" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-blue-400 bg-clip-text inline-block">
            About Me
          </h2>
        </RevealOnScroll>
        
        <RevealOnScroll animation="fade-up" delay={0.3}>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            I'm passionate about creating impactful digital experiences through a combination of technical expertise and creative problem-solving.
          </p>
        </RevealOnScroll>
      </div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-background/30 backdrop-blur-sm p-1 rounded-lg border border-border/40 shadow-md">
          {['specializations', 'journey'].map((tab) => (
            <motion.button
              key={tab}
              variants={tabVariants}
              initial="inactive"
              animate={activeTab === tab ? "active" : "inactive"}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === tab 
                  ? 'bg-primary/10 text-primary shadow-sm' 
                  : 'hover:bg-background/60 hover:text-foreground/90'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'specializations' ? (
          <motion.div
            key="specializations"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {specializations.map((specialization, index) => (
              <RevealOnScroll 
                key={specialization.title} 
                animation="zoom-in" 
                delay={index * 0.1}
                className="relative"
              >
                <motion.div
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" 
                  }}
                  className="bg-card p-6 rounded-xl border border-border/50 h-full flex flex-col"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary inline-block mb-4">
                    {specialization.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{specialization.title}</h3>
                  <p className="text-foreground/70">{specialization.description}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="journey"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          >
            <RevealOnScroll animation="fade-right">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-foreground/80 mb-4">
                My journey in technology began with a curiosity about how digital systems work. Over the years, I've evolved from a curious learner to a skilled developer, consistently expanding my knowledge and refining my craft.
              </p>
              <p className="text-foreground/80">
                I thrive in collaborative environments where innovative solutions are valued, and I'm constantly seeking opportunities to push the boundaries of what's possible in digital development.
              </p>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-left" delay={0.2}>
              <h3 className="text-2xl font-bold mb-4">My Approach</h3>
              <p className="text-foreground/80 mb-4">
                I believe in creating technology that not only functions flawlessly but also delivers an exceptional user experience. My approach combines technical precision with creative thinking, resulting in solutions that are both robust and engaging.
              </p>
              <p className="text-foreground/80">
                Whether I'm developing a complex web application or contributing to an open-source project, I prioritize clean code, thoughtful architecture, and seamless integration.
              </p>
            </RevealOnScroll>
          </motion.div>
        )}
      </AnimatePresence>

      <RevealOnScroll animation="fade-up">
        <div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Technologies I Work With</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(technologies).map(([category, items]) => (
              <RevealOnScroll key={category} animation="fade-up" delay={0.1} className="flex flex-col">
                <h4 className="uppercase text-sm font-bold text-primary mb-3">{category}</h4>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <motion.li 
                      key={item}
                      whileHover={{ x: 5 }}
                      className="flex items-center text-foreground/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  );
};

export default AboutSection;
