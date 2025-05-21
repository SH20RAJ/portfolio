"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, forwardRef } from 'react';

const SectionContainer = forwardRef(({ id, children, className = '' }, ref) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const combinedRef = (node) => {
    // Forward the ref to the parent component if provided
    if (ref) {
      if (typeof ref === 'function') {
        ref(node);
      } else {
        ref.current = node;
      }
    }
    // Assign to our local ref as well
    sectionRef.current = node;
  };
  
  return (
    <section 
      id={id} 
      ref={combinedRef} 
      className={`py-24 md:py-32 relative overflow-hidden ${className}`}
    >
      {/* Decorative gradient blobs that appear when section comes into view */}
      <motion.div 
        className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />
      
      <motion.div 
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
});

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer;
