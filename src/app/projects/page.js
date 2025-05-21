"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink, FiGithub, FiSearch, FiFilter, FiGrid, FiList, FiSliders, FiX, FiCheck } from 'react-icons/fi';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import BackToTop from '@/components/ui/BackToTop';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { ProgressiveImage, LazyImage } from '@/utils/imageUtils';
import { useIntersectionObserver, RevealOnScroll } from '@/utils/animation';

// Import the same project data to maintain consistency
import { projectsData, projectCategories } from '@/data/projects';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState('newest');
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  const pageRef = useRef(null);
  const isInView = useInView(pageRef, { once: true });
  
  // Animation variants
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
  
  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  // Filter projects based on category and search term
  useEffect(() => {
    let result = [...projectsData];
    
    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(project => project.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(project => 
        project.name.toLowerCase().includes(lowerSearchTerm) ||
        project.description.toLowerCase().includes(lowerSearchTerm) ||
        project.tech.some(tech => tech.toLowerCase().includes(lowerSearchTerm))
      );
    }
    
    // Sort results
    if (sortOrder === 'newest') {
      // Keep as is (assuming the array is already sorted by newest first)
    } else if (sortOrder === 'oldest') {
      result = [...result].reverse();
    } else if (sortOrder === 'a-z') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'z-a') {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    }
    
    setFilteredProjects(result);
  }, [activeCategory, searchTerm, sortOrder]);

  // Page load animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Function to render project cards
  const renderProjectCard = (project, index) => {
    const ProjectComponent = viewMode === 'grid' ? GridProjectCard : ListProjectCard;
    
    return (
      <RevealOnScroll
        key={project.name}
        animation={viewMode === 'grid' ? 'zoom-in' : 'fade-up'}
        delay={index * 0.05}
        className="h-full"
      >
        <ProjectComponent project={project} />
      </RevealOnScroll>
    );
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={pageRef}
    >
      <Header />
      
      <motion.main
        className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10"
        variants={containerVariants}
        initial="hidden"
        animate={isPageLoaded ? "visible" : "hidden"}
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/" className="flex items-center text-foreground/80 hover:text-primary transition-colors mb-6">
            <FiArrowLeft className="mr-2" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-2"
              >
                Projects Showcase
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-foreground/70"
              >
                A collection of my work, experiments, and open-source contributions
              </motion.p>
            </div>
            
            <div className="flex items-center space-x-2">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="bg-card p-2 rounded-lg border border-border/50 hover:border-primary/50 transition-colors relative"
                  aria-label="Toggle filters"
                >
                  <FiSliders size={20} className={showFilters ? "text-primary" : "text-foreground/70"} />
                </button>
                {filteredProjects.length !== projectsData.length && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary" />
                )}
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-card p-2 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
              >
                <button
                  onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                  className="flex items-center"
                  aria-label={viewMode === 'grid' ? 'Switch to list view' : 'Switch to grid view'}
                >
                  {viewMode === 'grid' ? (
                    <FiList size={20} className="text-foreground/70" />
                  ) : (
                    <FiGrid size={20} className="text-foreground/70" />
                  )}
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <AnimatePresence>
          {showFilters && (
            <motion.div
              variants={filterVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              className="bg-card rounded-xl border border-border/50 p-4 shadow-lg mb-8"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Filter & Sort</h2>
                <button 
                  onClick={() => setShowFilters(false)}
                  aria-label="Close filters"
                  className="p-1 rounded-full hover:bg-background/80"
                >
                  <FiX size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-foreground/60 mb-3">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search projects..."
                      className="w-full bg-background rounded-lg border border-border/50 py-2 pl-10 pr-4 focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-all"
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50 hover:text-foreground"
                      >
                        <FiX size={16} />
                      </button>
                    )}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-foreground/60 mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 transition-all ${
                          activeCategory === category.id
                            ? 'bg-primary/20 text-primary border border-primary/30'
                            : 'bg-background border border-border/50 hover:border-primary/30'
                        }`}
                      >
                        {category.icon}
                        <span>{category.name}</span>
                        {activeCategory === category.id && (
                          <FiCheck size={14} className="ml-1" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-foreground/60 mb-3">Sort By</h3>
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full bg-background rounded-lg border border-border/50 p-2 focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-all"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4 pt-3 border-t border-border/30">
                <div className="text-sm text-foreground/70">
                  Showing <span className="font-medium text-foreground">{filteredProjects.length}</span> of {projectsData.length} projects
                </div>
                
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchTerm('');
                    setSortOrder('newest');
                  }}
                  className="text-sm text-primary hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {filteredProjects.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            className={viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
              : 'space-y-6'
            }
          >
            {filteredProjects.map((project, index) => renderProjectCard(project, index))}
          </motion.div>
        ) : (
          <motion.div
            variants={itemVariants}
            className="text-center py-16"
          >
            <div className="inline-block p-5 rounded-full bg-background/80 mb-4">
              <FiFilter size={40} className="text-foreground/40" />
            </div>
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="text-foreground/70 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
              }}
              className="bg-primary text-white px-4 py-2 rounded-lg inline-flex items-center"
            >
              <FiX className="mr-2" />
              Clear Filters
            </button>
          </motion.div>
        )}
      </motion.main>
      
      <Footer />
      <BackToTop />
    </motion.div>
  );
};

// Grid view project card component
const GridProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="bg-card rounded-xl border border-border/50 overflow-hidden h-full flex flex-col shadow-sm hover:shadow-lg transition-all duration-300"
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <LazyImage
          src={project.image}
          alt={project.name}
          width={500}
          height={300}
          className="w-full h-full object-cover transform transition-transform duration-500"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-all duration-300"
          style={{
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0
          }}
        >
          <div className="flex space-x-2">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-primary/80 transition-colors"
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
                className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-primary/80 transition-colors"
                aria-label={`Live demo for ${project.name}`}
              >
                <FiExternalLink size={18} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech) => (
              <span 
                key={tech} 
                className="bg-background px-2 py-1 rounded-full text-xs border border-border/50"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="bg-background px-2 py-1 rounded-full text-xs border border-border/50">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// List view project card component
const ListProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      whileHover={{ 
        x: 5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <div className="relative overflow-hidden h-full max-h-40 md:max-h-full">
            <LazyImage
              src={project.image}
              alt={project.name}
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="p-5 md:col-span-3 flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold">{project.name}</h3>
            
            <div className="flex space-x-2">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-background rounded-full hover:text-primary transition-colors"
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
                  className="p-2 bg-background rounded-full hover:text-primary transition-colors"
                  aria-label={`Live demo for ${project.name}`}
                >
                  <FiExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
          
          <p className="text-foreground/70 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((tech) => (
              <span 
                key={tech} 
                className="bg-background px-2 py-1 rounded-full text-xs border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
