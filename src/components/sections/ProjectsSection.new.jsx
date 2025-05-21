"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import SectionContainer from '../ui/SectionContainer';
import { FiExternalLink, FiGithub, FiArrowRight, FiArrowUpRight, FiFolder } from 'react-icons/fi';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import { projectsData, projectCategories } from '@/data/projects';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true, amount: 0.1 });
  
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
    hidden: { y: 30, opacity: 0 },
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
    initial: { scale: 0.95, y: 20, opacity: 0 },
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
      scale: 0.95, 
      y: -20, 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  // Filter button animation
  const filterButtonVariants = {
    inactive: { 
      scale: 0.95, 
      opacity: 0.7, 
      backgroundColor: "var(--muted)"
    },
    active: { 
      scale: 1, 
      opacity: 1,
      backgroundColor: "rgba(var(--primary-rgb), 0.1)",
      color: "var(--primary)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(var(--primary-rgb), 0.15)",
    }
  };

  return (
    <SectionContainer id="projects" ref={projectsRef}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-blue-400 bg-clip-text inline-block">
          My Projects
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Explore my portfolio of work spanning web applications, tools, and open-source contributions that showcase my skills and passion for development.
        </p>
      </motion.div>

      {/* Project Categories/Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        <motion.button
          onClick={() => setActiveCategory('all')}
          variants={filterButtonVariants}
          initial="inactive"
          animate={activeCategory === 'all' ? "active" : "inactive"}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 rounded-full text-sm font-medium transition-all"
        >
          All Projects
        </motion.button>
        
        {projectCategories.map((category) => (
          <motion.button
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            variants={filterButtonVariants}
            initial="inactive"
            animate={activeCategory === category.value ? "active" : "inactive"}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full text-sm font-medium transition-all"
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={projectsContainerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectItemVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative flex flex-col h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Project Image with Overlay */}
              <div className="relative aspect-video w-full overflow-hidden">
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={340}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-60" />
                  </>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-muted">
                    <FiFolder size={40} className="text-primary/50" />
                  </div>
                )}
                
                {/* Technology Pills */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="rounded-full bg-background/80 backdrop-blur px-2 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="rounded-full bg-background/80 backdrop-blur px-2 py-1 text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mb-4 text-foreground/70 text-sm flex-1">
                  {project.description}
                </p>
                
                {/* Project Links */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 text-foreground/70 hover:text-primary transition-colors"
                        aria-label={`View ${project.title} live`}
                      >
                        <FiExternalLink size={18} />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 text-foreground/70 hover:text-primary transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FiGithub size={18} />
                      </motion.a>
                    )}
                  </div>
                  
                  <motion.div
                    initial={{ x: -5, opacity: 0 }}
                    animate={hoveredProject === project.id ? { x: 0, opacity: 1 } : { x: -5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-primary text-sm font-medium flex items-center gap-1"
                  >
                    View Details <FiArrowUpRight size={14} />
                  </motion.div>
                </div>
              </div>
              
              {/* Clickable overlay for the entire card */}
              <Link 
                href={project.liveUrl || project.githubUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label={`View ${project.title} project`}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* View All Projects Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium transition-all hover:brightness-110 hover:scale-105 active:scale-95"
        >
          View All Projects <FiArrowRight />
        </Link>
      </motion.div>
    </SectionContainer>
  );
};

export default ProjectsSection;
