"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionContainer from '../ui/SectionContainer';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projectsData, projectCategories } from '@/data/projects';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  // Show only 6 projects in the home page
  const visibleProjects = projectsData.slice(0, 6);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(visibleProjects);
    } else {
      const filtered = projectsData.filter(project => project.category === activeCategory);
      setFilteredProjects(filtered.slice(0, 6)); // Only show 6 filtered projects
    }
  }, [activeCategory]);

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
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  const projectsContainerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.07 
      } 
    },
    exit: { 
      opacity: 0,
      transition: { 
        staggerChildren: 0.05, 
        staggerDirection: -1 
      } 
    }
  };
  
  const projectItemVariants = {
    initial: { scale: 0.9, y: 20, opacity: 0 },
    animate: { 
      scale: 1, 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    exit: { 
      scale: 0.9, 
      y: -20, 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <SectionContainer id="projects">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-blue-400 bg-clip-text inline-block"
        >
          My Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-foreground/70 max-w-2xl mx-auto"
        >
          A collection of my work across various domains and technologies. From web applications to libraries, tools, and more.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 mb-12 px-4 overflow-x-auto whitespace-nowrap py-2"
      >
        <div className="flex flex-wrap gap-2 justify-center w-full">
          {projectCategories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-md scale-105'
                  : 'bg-card border border-border hover:bg-muted hover:scale-105'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          variants={projectsContainerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.name}-${index}`}
              variants={projectItemVariants}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-5px] flex flex-col h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-48 bg-muted flex items-center justify-center">
                {project.image ? (
                  <div className="relative w-full h-full">
                    <Image 
                      src={project.image.startsWith('/') ? project.image : `/${project.image}`} 
                      alt={project.name} 
                      className="w-full h-full object-cover"
                      width={600}
                      height={400}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/600x400/3a86ff/FFFFFF?text=${encodeURIComponent(project.name)}`;
                      }}
                    />
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-full h-full flex items-center justify-center text-center p-4">
                    <span className="text-foreground/50 font-mono text-xl">{project.name}</span>
                  </div>
                )}
              </div>
              
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors"
                        aria-label={`GitHub repository for ${project.name}`}
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors"
                        aria-label={`Live demo for ${project.name}`}
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-foreground/70 text-sm mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-muted rounded-full text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
        >
          View All Projects
          <FiArrowRight />
        </Link>
      </motion.div>
    </SectionContainer>
  );
};

export default ProjectsSection;
