"use client";

import SectionContainer from '../ui/SectionContainer';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiClock, FiArrowRight, FiTag, FiExternalLink, FiBookmark, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const BlogSection = () => {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    // Set loaded state after initial render
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with Next.js and React",
      summary: "Explore the latest techniques and best practices for building high-performance web applications using Next.js and React.",
      date: "May 15, 2025",
      readTime: "8 min read",
      image: "/blog/nextjs-react.jpg",
      tags: ["Next.js", "React", "Web Development"],
      url: "https://dev.to/sh20raj",
      featured: true
    },
    {
      id: 2,
      title: "Creating Accessible User Interfaces: A Comprehensive Guide",
      summary: "Learn how to build interfaces that are accessible to everyone, including users with disabilities.",
      date: "April 28, 2025",
      readTime: "12 min read",
      image: "/blog/accessibility.jpg",
      tags: ["Accessibility", "UI/UX", "HTML"],
      url: "https://dev.to/sh20raj",
      featured: false
    },
    {
      id: 3,
      title: "The Future of JavaScript: What's Coming in 2026",
      summary: "An overview of upcoming JavaScript features and how they will change the way we write code.",
      date: "April 10, 2025",
      readTime: "10 min read",
      image: "/blog/javascript-future.jpg",
      tags: ["JavaScript", "ECMAScript", "Programming"],
      url: "https://dev.to/sh20raj",
      featured: false
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
        stiffness: 70,
        damping: 15
      }
    }
  };
  
  // Tag animation variants
  const tagVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: custom * 0.1, 
        duration: 0.3, 
        type: "spring",
        stiffness: 200
      }
    })
  };
  
  // Background animation variants
  const blobVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: (custom) => ({
      scale: 1,
      opacity: 0.15,
      x: custom % 2 === 0 ? [0, 20, 0, -20, 0] : [0, -20, 0, 20, 0],
      y: custom % 2 === 0 ? [0, -20, 0, 20, 0] : [0, 20, 0, -20, 0],
      transition: {
        x: { repeat: Infinity, duration: 20 + custom * 2, repeatType: 'loop', ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 25 + custom * 2, repeatType: 'loop', ease: 'easeInOut' },
        opacity: { duration: 1, delay: custom * 0.2 },
        scale: { duration: 1, delay: custom * 0.2 }
      }
    })
  };
  
  const generateGradientBackground = (index) => {
    const gradients = [
      "from-primary/10 to-secondary/10",
      "from-secondary/10 to-accent/10",
      "from-accent/10 to-primary/10"
    ];
    return gradients[index % gradients.length];
  };

  return (
    <SectionContainer id="blog" ref={sectionRef} className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        {[1, 2].map((i) => (
          <motion.div
            key={`blog-blob-${i}`}
            custom={i}
            variants={blobVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className={`absolute rounded-full bg-gradient-to-br ${
              i === 1 
                ? "from-primary/10 to-accent/5 top-0 right-[15%] w-[500px] h-[500px]" 
                : "from-secondary/10 to-primary/5 -bottom-40 -left-20 w-[600px] h-[600px]" 
            }`}
            style={{ filter: 'blur(100px)' }}
          />
        ))}
        
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.015] bg-repeat"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative"
      >
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "5rem" } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"
        />
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
          <span className="bg-gradient-to-r from-blue-500 via-violet-600 to-purple-500 bg-clip-text text-transparent">Latest Articles</span>
          
          {/* Decorative elements */}
          <motion.span
            className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-primary/20 text-xl"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {"<"}
          </motion.span>
          <motion.span
            className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-primary/20 text-xl"
            initial={{ opacity: 0, x: 10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {"/>"}
          </motion.span>
          
          {/* Animated underline */}
          <motion.div
            className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-violet-600 to-purple-500 rounded-full opacity-80"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: '100%', opacity: 0.8 } : { width: 0, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </h2>
        
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on web development, design, and technology trends.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            variants={itemVariants}
            className="group relative h-full"
            onMouseEnter={() => setHoveredPost(post.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            {/* Border animation on hover */}
            <motion.div 
              className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 -z-10 blur-sm"
              animate={{
                opacity: hoveredPost === post.id ? 0.5 : 0
              }}
              transition={{ duration: 0.2 }}
            />
            
            <Link 
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label={`Read article: ${post.title}`}
            />
            
            <div className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:border-transparent group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:translate-y-[-5px]">
              {/* Image container with enhanced styling */}
              <div className="h-48 relative overflow-hidden">
                {post.image ? (
                  <>
                    {/* Placeholder gradient for images */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${generateGradientBackground(index)}`} />
                    
                    <div className="absolute inset-0 flex items-center justify-center text-foreground/60">
                      <FiBookmark size={30} />
                    </div>
                    
                    {/* Real image would be here */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-60" />
                    
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] mix-blend-overlay"></div>
                  </>
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${generateGradientBackground(index)} flex items-center justify-center`}>
                    <FiBookmark size={40} className="text-foreground/30" />
                  </div>
                )}
                
                {/* Featured badge with enhanced style */}
                {post.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-white text-xs font-medium px-3 py-1 rounded-md shadow-md">
                    <motion.div
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Featured
                    </motion.div>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                {/* Date and read time with enhanced style */}
                <div className="flex items-center justify-between text-sm text-foreground/60 mb-3">
                  <span className="font-medium flex items-center">
                    <motion.span
                      className="inline-block w-2 h-2 rounded-full bg-primary mr-2"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <FiClock className="mr-1" size={14} />
                    {post.readTime}
                  </span>
                </div>
                
                {/* Title with enhanced hover effect */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 relative">
                  {post.title}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </h3>
                
                {/* Summary with improved styling */}
                <p className="text-foreground/70 text-sm mb-4 flex-grow line-clamp-3">
                  {post.summary}
                </p>
                
                {/* Tags with enhanced animations */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={tagVariants}
                      initial="initial"
                      animate="animate"
                      whileHover={{ y: -2, backgroundColor: 'rgba(var(--primary-rgb), 0.15)', color: 'var(--primary)' }}
                      className="px-3 py-1 bg-muted hover:bg-primary/10 rounded-full text-xs font-medium transition-colors flex items-center"
                    >
                      <FiTag size={10} className="mr-1 text-primary" />
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                {/* Read article button with enhanced hover effect */}
                <div className="flex items-center mt-auto">
                  <motion.div 
                    className="text-sm font-medium text-primary flex items-center gap-1.5 group-hover:gap-3 transition-all"
                    animate={{ 
                      x: hoveredPost === post.id ? 5 : 0 
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Read article 
                    <FiChevronRight className="transform group-hover:translate-x-1 transition-transform" size={14} />
                  </motion.div>
                </div>
              </div>
              
              {/* Hover effect highlight */}
              <motion.div 
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/[0.03] to-secondary/[0.03] opacity-0 transition-opacity"
                animate={{ opacity: hoveredPost === post.id ? 1 : 0 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <Link
          href="https://dev.to/sh20raj" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:brightness-110 transition-all hover:scale-105 active:scale-95 shadow-md shadow-primary/10 group overflow-hidden"
        >
          {/* Button highlight effect */}
          <motion.span 
            className="absolute -inset-full h-full w-1/3 block transform -skew-x-12 bg-white opacity-40 z-10"
            animate={{ 
              left: ["150%", "-150%"], 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5, 
              repeatDelay: 1,
              ease: "easeInOut" 
            }}
          />
          
          <span className="relative z-20">View All Articles</span> 
          <FiExternalLink size={16} className="relative z-20" />
        </Link>
      </motion.div>
    </SectionContainer>
  );
};

export default BlogSection;
