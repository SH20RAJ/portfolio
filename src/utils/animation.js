"use client";

import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook to detect when an element is in the viewport
 * with optional root margin and threshold settings
 */
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  const defaultOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1, // 10% of the element visible
    triggerOnce: true,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true);
      }
      
      // If we only want to trigger once and it has intersected
      if (mergedOptions.triggerOnce && entry.isIntersecting) {
        observer.unobserve(element);
      }
    }, {
      root: mergedOptions.root,
      rootMargin: mergedOptions.rootMargin,
      threshold: mergedOptions.threshold,
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [mergedOptions.root, mergedOptions.rootMargin, mergedOptions.threshold, mergedOptions.triggerOnce, hasIntersected]);

  return { ref, isIntersecting, hasIntersected };
};

/**
 * Component to wrap elements that should animate when they come into view
 */
export const RevealOnScroll = ({ 
  children, 
  threshold = 0.1,
  rootMargin = '0px',
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  triggerOnce = true,
  className = '',
}) => {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });
  
  // Define animation classes
  const animations = {
    'fade-up': {
      hidden: 'opacity-0 translate-y-10',
      visible: 'opacity-100 translate-y-0',
    },
    'fade-down': {
      hidden: 'opacity-0 -translate-y-10',
      visible: 'opacity-100 translate-y-0',
    },
    'fade-left': {
      hidden: 'opacity-0 -translate-x-10',
      visible: 'opacity-100 translate-x-0',
    },
    'fade-right': {
      hidden: 'opacity-0 translate-x-10',
      visible: 'opacity-100 translate-x-0',
    },
    'zoom-in': {
      hidden: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100',
    },
    'zoom-out': {
      hidden: 'opacity-0 scale-105',
      visible: 'opacity-100 scale-100',
    },
  };
  
  const selectedAnimation = animations[animation] || animations['fade-up'];
  const shouldAnimate = triggerOnce ? (isIntersecting || hasIntersected) : isIntersecting;
  
  return (
    <div
      ref={ref}
      style={{ 
        transitionDelay: `${delay}s`,
        transitionDuration: `${duration}s`
      }}
      className={`transition-all ${shouldAnimate ? selectedAnimation.visible : selectedAnimation.hidden} ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * Component to animate children with staggered timing
 */
export const StaggerChildren = ({ 
  children, 
  threshold = 0.1,
  rootMargin = '0px',
  staggerDelay = 0.1,
  baseDelay = 0,
  animation = 'fade-up',
  triggerOnce = true,
  className = '',
}) => {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });
  
  const shouldAnimate = triggerOnce ? (isIntersecting || hasIntersected) : isIntersecting;
  
  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <RevealOnScroll
              key={index}
              animation={animation}
              delay={baseDelay + (index * staggerDelay)}
              triggerOnce={triggerOnce}
            >
              {child}
            </RevealOnScroll>
          ))
        : children
      }
    </div>
  );
};

/**
 * Component to create a parallax scrolling effect
 */
export const ParallaxScroll = ({ 
  children, 
  speed = 0.5,
  direction = 'up', // 'up', 'down', 'left', 'right'
  className = '',
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const element = ref.current;
        const rect = element.getBoundingClientRect();
        const offsetTop = window.pageYOffset + rect.top;
        const windowScrollTop = window.pageYOffset;
        
        // Calculate how far the element is from the viewport top
        const elementScrollPosition = (windowScrollTop + window.innerHeight - offsetTop) / (window.innerHeight + rect.height);
        
        setScrollPosition(elementScrollPosition);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Calculate transform based on direction and scroll position
  let transform = 'translateY(0)';
  
  if (scrollPosition >= 0 && scrollPosition <= 1) {
    const moveAmount = (scrollPosition - 0.5) * speed * 100;
    
    if (direction === 'up') {
      transform = `translateY(${-moveAmount}px)`;
    } else if (direction === 'down') {
      transform = `translateY(${moveAmount}px)`;
    } else if (direction === 'left') {
      transform = `translateX(${-moveAmount}px)`;
    } else if (direction === 'right') {
      transform = `translateX(${moveAmount}px)`;
    }
  }
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div style={{ transform, transition: 'transform 0.1s linear' }}>
        {children}
      </div>
    </div>
  );
};

export default { useIntersectionObserver, RevealOnScroll, StaggerChildren, ParallaxScroll };
