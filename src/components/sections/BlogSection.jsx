"use client";

import SectionContainer from '../ui/SectionContainer';
import { motion } from 'framer-motion';
import { FiClock, FiArrowRight, FiTag } from 'react-icons/fi';
import Image from 'next/image';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building Modern Web Applications with Next.js and React",
      summary: "Explore the latest techniques and best practices for building high-performance web applications using Next.js and React.",
      date: "May 15, 2025",
      readTime: "8 min read",
      image: "/blog/nextjs-react.jpg",
      tags: ["Next.js", "React", "Web Development"],
      url: "https://dev.to/sh20raj"
    },
    {
      title: "Creating Accessible User Interfaces: A Comprehensive Guide",
      summary: "Learn how to build interfaces that are accessible to everyone, including users with disabilities.",
      date: "April 28, 2025",
      readTime: "12 min read",
      image: "/blog/accessibility.jpg",
      tags: ["Accessibility", "UI/UX", "HTML"],
      url: "https://dev.to/sh20raj"
    },
    {
      title: "The Future of JavaScript: What's Coming in 2026",
      summary: "An overview of upcoming JavaScript features and how they will change the way we write code.",
      date: "April 10, 2025",
      readTime: "10 min read",
      image: "/blog/javascript-future.jpg",
      tags: ["JavaScript", "ECMAScript", "Programming"],
      url: "https://dev.to/sh20raj"
    }
  ];

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
    <SectionContainer id="blog">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-blue-400 bg-clip-text inline-block"
        >
          Latest Articles
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-foreground/70 max-w-2xl mx-auto"
        >
          Thoughts, tutorials, and insights on web development and design.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogPosts.map((post, index) => (
          <motion.a
            key={index}
            variants={itemVariants}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-5px] flex flex-col"
          >
            <div className="h-48 bg-muted relative">
              {post.image ? (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-foreground/50 font-mono text-sm">Article Image</span>
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-foreground/50 font-mono text-sm">Article Image</span>
                </div>
              )}
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center justify-between text-sm text-foreground/60 mb-3">
                <span>{post.date}</span>
                <span className="flex items-center">
                  <FiClock className="mr-1" size={14} />
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-foreground/70 text-sm mb-4 flex-grow">{post.summary}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs flex items-center">
                    <FiTag size={10} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center text-primary font-medium mt-auto">
                Read article <FiArrowRight className="ml-2" size={16} />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a 
          href="https://dev.to/sh20raj" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          View All Articles <FiArrowRight size={16} />
        </a>
      </motion.div>
    </SectionContainer>
  );
};

export default BlogSection;
