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
  const [isLoaded, setIsLoaded] = useState(false);

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

  useEffect(() => {
    // Set loaded state after initial render
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

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

  // Animated background blob variants
  const blobVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: (custom) => ({
      scale: 1,
      opacity: 0.15,
      x: custom % 2 === 0 ? [0, 20, 0, -20, 0] : [0, -20, 0, 20, 0],
      y: custom % 2 === 0 ? [0, -20, 0, 20, 0] : [0, 20, 0, -20, 0],
      transition: {
        x: { repeat: Infinity, duration: 15 + custom * 2, repeatType: 'loop', ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 20 + custom * 2, repeatType: 'loop', ease: 'easeInOut' },
        opacity: { duration: 1, delay: custom * 0.2 },
        scale: { duration: 1, delay: custom * 0.2 }
      }
    })
  };

  return (
    <SectionContainer id="projects" ref={sectionRef} className="relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={`blob-${i}`}
            custom={i}
            variants={blobVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className={`absolute rounded-full bg-gradient-to-br ${
              i === 1
                ? "from-primary/10 to-accent/5 top-10 right-[10%] w-72 h-72"
                : i === 2
                ? "from-secondary/10 to-primary/5 bottom-20 left-[5%] w-80 h-80"
                : "from-accent/10 to-secondary/5 top-[40%] left-[60%] w-64 h-64"
            }`}
            style={{ filter: 'blur(80px)' }}
          />
        ))}
      </div>

      <motion.div
        className="text-center mb-12 relative"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Decorative element */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="absolute w-16 h-16 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-xl -z-10"
        />

        <motion.span
          variants={titleVariants}
          className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium inline-block mb-5 shadow-sm shadow-primary/5 border border-primary/10"
        >
          My Portfolio
        </motion.span>

        <motion.h2
          variants={titleVariants}
          className="text-3xl md:text-4xl font-bold mb-8 relative inline-block"
        >
          <span className="bg-gradient-to-r from-blue-500 via-violet-600 to-purple-500 bg-clip-text text-transparent">Featured Projects</span>
          
          {/* Animated underline */}
          <motion.div
            className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-violet-600 to-purple-500 rounded-full opacity-80"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: '100%', opacity: 0.8 } : { width: 0, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.h2>

        <motion.p
          variants={fadeInVariants}
          className="text-foreground/70 max-w-2xl mx-auto relative"
        >
          A showcase of my passion projects spanning various technologies and domains - from web applications to libraries, tools, and beyond.

          {/* Decorative code brackets */}
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 0.1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -left-8 -bottom-6 text-primary text-4xl font-mono opacity-10"
          >
            {"{"}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 0.1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -right-8 -bottom-6 text-primary text-4xl font-mono opacity-10"
          >
            {"}"}
          </motion.span>
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-12 px-4 overflow-x-auto py-3 relative"
      >
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "50%", opacity: 0.1 } : { width: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent absolute -bottom-2 left-1/2 transform -translate-x-1/2"
        />

        <div className="flex flex-wrap gap-3 justify-center w-full">
          {projectCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2.5 rounded-full text-sm flex items-center gap-2 transition-all duration-300 relative overflow-hidden ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary/90 to-secondary/90 text-white shadow-lg shadow-primary/20'
                  : 'bg-card border border-border hover:bg-primary/10 hover:border-primary/50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 + (index * 0.05), duration: 0.5 }}
            >
              {/* Background ripple effect on active */}
              {activeCategory === category.id && (
                <motion.span
                  className="absolute inset-0 bg-white/20 rounded-full"
                  initial={{ scale: 0, opacity: 0.7 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                />
              )}

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
              className="bg-card border border-border/70 rounded-xl overflow-hidden flex flex-col h-full group relative"
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              style={{
                boxShadow: hoveredProject === project.name
                  ? '0 20px 30px -8px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.08)'
                  : '0 4px 10px -2px rgba(0, 0, 0, 0.08), 0 2px 5px -1px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Card border glow */}
              <motion.div
                className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm"
                animate={{
                  opacity: hoveredProject === project.name ? 0.5 : 0
                }}
              />

              <div className="h-52 bg-muted flex items-center justify-center group overflow-hidden relative">
                {project ? (
                  <div className="relative w-full h-full overflow-hidden aspect-[16/9]">
                    <motion.img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
                      whileHover={{ scale: 1.1 }}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = project.image || `https://placehold.co/600x400/3a86ff/FFFFFF?text=${encodeURIComponent(project.name)}`;
                      }}
                    />

                    {/* Overlay gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />

                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100"
                    >
                      <Link
                        href={`/projects?id=${encodeURIComponent(project.name)}`}
                        className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-black font-medium py-2.5 px-5 rounded-full transform transition-all duration-300 hover:scale-105 hover:bg-white shadow-lg"
                      >
                        <FiEye className="text-primary" /> View Details
                      </Link>
                    </motion.div>
                  </div>
                ) : (
                  <div className="animate-pulse bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 w-full h-full flex items-center justify-center text-center p-4">
                    <span className="text-foreground/70 font-mono text-xl">{project.name}</span>
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute top-3 left-3 z-10">
                  {projectCategories.find(cat => cat.id === project.category) && (
                    <span className="bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full border border-white/10">
                      {projectCategories.find(cat => cat.id === project.category)?.name}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <motion.h3
                    className="text-xl font-bold text-foreground relative group-hover:text-primary transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {project.name}

                    {/* Animated underline */}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors p-1.5 rounded-full hover:bg-primary/10"
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
                        className="text-foreground/60 hover:text-primary transition-colors p-1.5 rounded-full hover:bg-primary/10"
                        aria-label={`Live demo for ${project.name}`}
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="text-foreground/60 text-sm mb-5 flex-grow line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-border/40">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 bg-muted/60 text-foreground/70 rounded-full text-xs font-medium transition-colors"
                      whileHover={{
                        y: -2,
                        backgroundColor: 'rgba(var(--primary-rgb), 0.15)',
                        color: 'var(--primary)'
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.tech.length > 4 && (
                    <motion.span
                      className="px-3 py-1 bg-muted/40 text-foreground/50 rounded-full text-xs"
                      whileHover={{ y: -2 }}
                    >
                      +{project.tech.length - 4} more
                    </motion.span>
                  )}
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
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300"
        >
          <span className="relative z-10">Explore All Projects</span>
          <motion.span
            className="relative z-10 transition-transform duration-300"
            initial={{ x: 0 }}
            animate={isInView ? { x: [0, 5, 0] } : { x: 0 }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
          >
            <FiArrowRight />
          </motion.span>

          {/* Button hover animation */}
          <motion.span
            className="absolute -top-1 left-0 w-full h-[200%] bg-gradient-to-b from-white/0 via-white/20 to-white/0 -z-10"
            initial={{ y: "-100%" }}
            whileHover={{ y: "100%" }}
            transition={{ duration: 0.6 }}
          />
        </Link>
      </motion.div>
    </SectionContainer>
  );
};

export default ProjectsSection;
