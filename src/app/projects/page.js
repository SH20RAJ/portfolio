"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink, FiGithub, FiSearch, FiFilter } from 'react-icons/fi';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import BackToTop from '@/components/ui/BackToTop';
import ThemeToggle from '@/components/ui/ThemeToggle';

// Import the same project data to maintain consistency
import { projectsData, projectCategories } from '@/data/projects';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState('newest');

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

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.05 } 
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <>
      <Header />
      <motion.main
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="min-h-screen pt-20 pb-12"
      >
        <div className="container mx-auto px-4">
          {/* Hero section */}
          <section className="mb-12 relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 py-16 px-6">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
            </motion.div>

            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary  text-blue-400 bg-clip-text"
              >
                My Projects Portfolio
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-foreground/70 text-lg mb-8"
              >
                Explore my work across different domains and technologies. From web applications to libraries, tools, and more.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-2 bg-card hover:bg-card/80 border border-border px-6 py-3 rounded-lg transition-colors"
                >
                  <FiArrowLeft /> Back to Home
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Filters and search */}
          <section className="mb-8">
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
              <div className="relative flex-grow max-w-xl">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-foreground/40" />
                </div>
                <input
                  type="text"
                  placeholder="Search projects by name, description, or technology..."
                  className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-card border border-border'}`}
                  aria-label="Grid view"
                >
                  <FiGrid />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-card border border-border'}`}
                  aria-label="List view"
                >
                  <FiList />
                </button>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-3 bg-card border border-border rounded-lg md:hidden"
                  aria-label="Show filters"
                >
                  <FiFilter />
                </button>
              </div>
            </div>

            <div className={`${showFilters ? 'flex' : 'hidden'} md:flex overflow-x-auto whitespace-nowrap py-2 mb-4`}>
              <div className="flex flex-wrap gap-2 w-full">
                {projectCategories.map(category => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all ${
                      activeCategory === category.id
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-card border border-border hover:bg-muted'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{category.icon}</span>
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mb-4">
              <p className="text-foreground/70">
                {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
              </p>
              <div className="flex gap-2">
                <select
                  className="p-2 rounded-lg bg-card border border-border text-sm"
                  onChange={(e) => setSortOrder(e.target.value)}
                  defaultValue="newest"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="a-z">Name (A-Z)</option>
                  <option value="z-a">Name (Z-A)</option>
                </select>
              </div>
            </div>
          </section>

          {/* Projects display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${viewMode}-${activeCategory}`}
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-4"
              }
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <motion.div
                    key={`${project.name}-${index}`}
                    variants={itemVariants}
                    className={`bg-card border border-border rounded-lg overflow-hidden transition-all ${
                      viewMode === 'grid' 
                        ? 'flex flex-col h-full hover:shadow-lg hover:-translate-y-1'
                        : 'flex flex-col md:flex-row h-full hover:shadow-md'
                    }`}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className={`${viewMode === 'grid' ? 'h-48' : 'h-48 md:h-auto md:w-64'} bg-muted flex items-center justify-center`}>
                      {project.image ? (
                        <div className="relative w-full h-full">
                          <img 
                            src={project.image.startsWith('/') ? project.image : `/${project.image}`} 
                            alt={project.name} 
                            className="w-full h-full object-cover"
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
                ))
              ) : (
                <motion.div 
                  variants={itemVariants}
                  className="col-span-full py-16 text-center"
                >
                  <div className="max-w-md mx-auto">
                    <p className="text-lg text-foreground/70 mb-4">No projects match your search criteria.</p>
                    <button
                      onClick={() => {
                        setActiveCategory('all');
                        setSearchTerm('');
                      }}
                      className="px-4 py-2 bg-primary text-white rounded-lg"
                    >
                      Reset Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.main>
      <Footer />
      <BackToTop />
      <ThemeToggle />
    </>
  );
};

export default ProjectsPage;

// Grid and List view icons
const FiGrid = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const FiList = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6"></line>
    <line x1="8" y1="12" x2="21" y2="12"></line>
    <line x1="8" y1="18" x2="21" y2="18"></line>
    <line x1="3" y1="6" x2="3.01" y2="6"></line>
    <line x1="3" y1="12" x2="3.01" y2="12"></line>
    <line x1="3" y1="18" x2="3.01" y2="18"></line>
  </svg>
);
