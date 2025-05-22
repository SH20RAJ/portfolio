"use client";

import { useState, useRef, useEffect } from 'react';
import SectionContainer from '../ui/SectionContainer';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronRight, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { useIntersectionObserver, RevealOnScroll } from '@/utils/animation';

const ExperienceSection = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isHovering, setIsHovering] = useState(null);
  const [animateTimeline, setAnimateTimeline] = useState(false);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (timelineInView) {
      setTimeout(() => {
        setAnimateTimeline(true);
      }, 500);
    }
  }, [timelineInView]);
  
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Labs",
      location: "Remote",
      period: "2023 - Present",
      description: [
        "Leading development of multiple web applications using Next.js, React, and Node.js",
        "Implementing CI/CD pipelines and DevOps practices for streamlined deployment",
        "Mentoring junior developers and conducting code reviews"
      ],
      technologies: ["Next.js", "React", "Node.js", "AWS", "GitHub Actions", "Jest"],
      link: "#"
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Inc.",
      location: "New Delhi, India",
      period: "2021 - 2023",
      description: [
        "Developed responsive web applications and user interfaces using modern JavaScript frameworks",
        "Created RESTful APIs and microservices using Node.js and Express",
        "Optimized database queries and improved application performance"
      ],
      technologies: ["React", "Express", "MongoDB", "MySQL", "Docker", "TypeScript"],
      link: "#"
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Studios",
      location: "Bangalore, India",
      period: "2019 - 2021",
      description: [
        "Built interactive user interfaces using React and Redux",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Collaborated with UX designers to implement design systems"
      ],
      technologies: ["React", "Redux", "Sass", "Webpack", "Jest", "Storybook"],
      link: "#"
    },
    {
      title: "Web Development Intern",
      company: "CodeMasters",
      location: "Mumbai, India",
      period: "2018 - 2019",
      description: [
        "Assisted in developing website features using HTML, CSS, and JavaScript",
        "Created and maintained documentation for web projects",
        "Participated in team meetings and contributed to project planning"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "PHP"],
      link: "#"
    }
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: '100%',
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: custom * 0.1,
      }
    })
  };
  
  const cardVariants = {
    inactive: { 
      y: 0,
      opacity: 0.7,
      scale: 0.97,
      backgroundColor: "var(--muted)",
      transition: { duration: 0.3 }
    },
    active: { 
      y: 0,
      opacity: 1,
      scale: 1,
      backgroundColor: "rgba(var(--primary-rgb), 0.05)",
      transition: { type: "spring", stiffness: 200, damping: 15 }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <SectionContainer id="experience" ref={sectionRef}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
          <span className="bg-gradient-to-r from-blue-500 via-violet-600 to-purple-500 bg-clip-text text-transparent">Work Experience</span>
          
          {/* Animated underline */}
          <motion.div
            className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-violet-600 to-purple-500 rounded-full opacity-80"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: '100%', opacity: 0.8 } : { width: 0, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          A timeline of my professional journey and the companies I've had the privilege to work with.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative">
        {/* Timeline line */}
        <div className="hidden lg:block lg:col-span-4 relative">
          <div ref={timelineRef} className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border">
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-full bg-gradient-to-t from-transparent via-primary to-transparent"
              initial={{ height: 0 }}
              animate={animateTimeline ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>
        
        {/* Experience Tabs for Mobile */}
        <div className="lg:hidden mb-8">
          <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar">
            {experiences.map((experience, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveExperience(index)}
                variants={cardVariants}
                initial="inactive"
                animate={activeExperience === index ? "active" : "inactive"}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-3 rounded-lg text-sm whitespace-nowrap ${
                  activeExperience === index 
                    ? "font-medium" 
                    : "font-normal"
                }`}
              >
                {experience.company}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Experience List for Desktop */}
        <div className="hidden lg:block lg:col-span-4">
          <div className="sticky top-24 space-y-4">
            {experiences.map((experience, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveExperience(index)}
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(null)}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`relative w-full text-left p-4 rounded-lg transition-all ${
                  activeExperience === index 
                    ? "bg-primary/5 border-l-4 border-primary" 
                    : "bg-card border-l-4 border-transparent hover:border-primary/30 hover:bg-primary/5"
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-1/2 transform -translate-x-[calc(100%+8px)] -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all ${
                  activeExperience === index 
                    ? "border-primary bg-primary/30" 
                    : "border-border bg-card"
                }`}>
                  <motion.div 
                    className="absolute inset-[3px] rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    animate={activeExperience === index ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <h3 className={`font-bold transition-colors ${
                  activeExperience === index ? "text-primary" : "text-foreground"
                }`}>
                  {experience.company}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {experience.period}
                </p>
                
                <motion.div 
                  className="absolute right-4 text-primary"
                  initial={{ opacity: 0, x: -5 }}
                  animate={activeExperience === index || isHovering === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight />
                </motion.div>
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Experience Details */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExperience}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary/90 to-secondary/90 bg-clip-text text-transparent">
                    {experiences[activeExperience].title}
                  </h3>
                  {experiences[activeExperience].link && (
                    <a 
                      href={experiences[activeExperience].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/50 hover:text-primary transition-colors"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <FiBriefcase size={18} className="text-primary" />
                    <span>{experiences[activeExperience].company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <FiCalendar size={18} className="text-primary" />
                    <span>{experiences[activeExperience].period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <FiMapPin size={18} className="text-primary" />
                    <span>{experiences[activeExperience].location}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {experiences[activeExperience].description.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="text-primary mt-1.5">
                        <FiChevronRight size={14} />
                      </div>
                      <p className="text-foreground/80">{item}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-foreground/60 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeExperience].technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="px-3 py-1 rounded-full bg-muted text-foreground/80 text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-6 border-t border-border/50"
              >
                <p className="text-foreground/60 text-sm italic">
                  {activeExperience < experiences.length - 1 
                    ? `Previous Role: ${experiences[activeExperience + 1].title} at ${experiences[activeExperience + 1].company}`
                    : `Started professional journey as ${experiences[experiences.length - 1].title}`}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
