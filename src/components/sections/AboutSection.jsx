"use client";

import SectionContainer from '../ui/SectionContainer';
import { motion } from 'framer-motion';
import { FiCode, FiPenTool, FiBox, FiGlobe, FiServer, FiLayers } from 'react-icons/fi';

const AboutSection = () => {
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        stiffness: 100
      }
    }
  };

  return (
    <SectionContainer id="about">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-blue-400 bg-clip-text inline-block"
        >
          About Me
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-foreground/70 max-w-2xl mx-auto text-lg"
        >
          I'm passionate about creating impactful digital experiences through a combination of technical expertise and creative problem-solving.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <p className="text-foreground/70 mb-4 leading-relaxed">
            As a dedicated developer and designer, I've spent years honing my skills across various programming languages and frameworks. My journey in the tech world has been driven by curiosity and a desire to create meaningful solutions.
          </p>
          <p className="text-foreground/70 mb-4 leading-relaxed">
            I specialize in building full-stack applications, developing open-source tools, and creating interactive user interfaces that deliver exceptional experiences.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            My approach combines technical proficiency with creative thinking, allowing me to tackle complex problems with innovative solutions. I'm always looking to learn new technologies and improve my skills.
          </p>
        </motion.div>

        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6"
          >
            Technical Expertise
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div variants={itemVariants} className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-primary">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.languages.map((lang, idx) => (
                  <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm">{lang}</span>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-primary">Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.frameworks.map((framework, idx) => (
                  <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm">{framework}</span>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-primary">Tools & Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm">{tool}</span>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-primary">Other Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.other.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div>
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-6 text-center"
        >
          Specializations
        </motion.h3>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {specializations.map((spec, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-5 bg-card border border-border rounded-lg hover:shadow-lg transition-all hover:translate-y-[-5px]"
            >
              <div className="text-primary mb-3">{spec.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{spec.title}</h4>
              <p className="text-foreground/70 text-sm">{spec.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
