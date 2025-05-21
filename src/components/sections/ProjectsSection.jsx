"use client";

import { useState, useEffect, useRef } from 'react';
import SectionContainer from '../ui/SectionContainer';
import { FiExternalLink, FiGithub, FiArrowRight, FiEye } from 'react-icons/fi';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import { projectsData, projectCategories } from '@/data/projects';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
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

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: 0.2
      }
    }
  };
  
  const projectsContainerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.08
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
    initial: { scale: 0.9, y: 30, opacity: 0 },
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
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const staggerDelay = 0.1;

  return (
    <SectionContainer id="projects" ref={sectionRef}>
      <motion.div 
        className="text-center mb-12"
        initial="hidden" 
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.span 
          variants={titleVariants}
          className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium inline-block mb-4"
        >
          My Portfolio
        </motion.span>
        
        <motion.h2 
          variants={titleVariants}
          className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary text-foreground bg-clip-text inline-block relative"
        >
          Featured Projects
          <motion.span 
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: '50%', opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.h2>
        
        <motion.p 
          variants={fadeInVariants}
          className="text-foreground/70 max-w-2xl mx-auto"
        >
          A showcase of my passion projects spanning various technologies and domains - from web applications to libraries, tools, and beyond.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-12 px-4 overflow-x-auto py-2"
      >
        <div className="flex flex-wrap gap-3 justify-center w-full">
          {projectCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-card border border-border hover:bg-primary/10 hover:border-primary/50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 + (index * 0.05), duration: 0.5 }}
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.name}-${index}`}
              variants={projectItemVariants}
              className="card-hover bg-card border border-border rounded-xl overflow-hidden flex flex-col h-full"
              onHoverStart={() => setHoveredProject(project.name)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.3 }}
              style={{
                boxShadow: hoveredProject === project.name 
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                  : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              <div className="h-52 bg-muted flex items-center justify-center group overflow-hidden relative">
                {project.image ? (
                  <div className="relative w-full h-full overflow-hidden">
                    <motion.img 
                      src={project.image.startsWith('/') ? project.image : `/${project.image}`} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/600x400/3a86ff/FFFFFF?text=${encodeURIComponent(project.name)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link 
                        href={`/projects?id=${encodeURIComponent(project.name)}`}
                        className="flex items-center gap-2 bg-white text-primary font-medium py-2 px-4 rounded-full transform transition-transform duration-300 hover:scale-105"
                      >
                        <FiEye /> View Details
                      </Link>
                    </motion.div>
                  </div>
                ) : (
                  <div className="animate-blob bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 w-full h-full flex items-center justify-center text-center p-4">
                    <span className="text-foreground/70 font-mono text-xl">{project.name}</span>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <motion.h3 
                    className="text-xl font-bold text-foreground relative animated-underline"
                    whileHover={{ x: 2 }}
                  >
                    {project.name}
                  </motion.h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors"
                        aria-label={`GitHub repository for ${project.name}`}
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiGithub size={18} />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors"
                        aria-label={`Live demo for ${project.name}`}
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <p className="text-foreground/60 text-sm mb-5 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, idx) => (
                    <motion.span 
                      key={idx} 
                      className="px-2 py-1 bg-muted/60 text-foreground/70 rounded-full text-xs"
                      whileHover={{ y: -2, x: 0, backgroundColor: 'var(--primary-light)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <Link 
          href="/projects" 
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300"
        >
          <span className="relative z-10">Explore All Projects</span>
          <motion.span 
            className="relative z-10 transition-transform duration-300"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            <FiArrowRight />
          </motion.span>
          <span className="absolute bottom-0 left-0 w-0 h-full bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </Link>
      </motion.div>
    </SectionContainer>
  );
};

export default ProjectsSection;
