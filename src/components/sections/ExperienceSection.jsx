"use client";

import { useState, useRef } from 'react';
import SectionContainer from '../ui/SectionContainer';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import { useIntersectionObserver, RevealOnScroll } from '@/utils/animation';

const ExperienceSection = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isHovering, setIsHovering] = useState(null);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const timelineRef = useRef(null);
  
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
        delay: custom * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <SectionContainer id="experience" ref={sectionRef}>
      <RevealOnScroll animation="fade-down">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-blue-400 bg-clip-text inline-block">
            My Experience
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            A journey through my professional career and the roles that have shaped my expertise
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <RevealOnScroll animation="fade-right" delay={0.2} className="lg:col-span-4">
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-4 mb-8 lg:mb-0 relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-7 w-0.5 h-full bg-border hidden lg:block">
              <motion.div
                ref={timelineRef}
                variants={timelineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-full bg-primary origin-top"
              />
            </div>

            {experiences.map((experience, index) => (
              <motion.button
                key={experience.company}
                custom={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                onClick={() => setActiveExperience(index)}
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(null)}
                className={`relative flex items-center text-left px-4 py-3 rounded-lg transition-all whitespace-nowrap lg:whitespace-normal w-max lg:w-full
                  ${activeExperience === index 
                    ? 'bg-primary/10 text-primary shadow-md border border-primary/30' 
                    : 'hover:bg-card border border-border/50'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-8 hidden lg:block">
                  <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 
                    ${activeExperience === index 
                      ? 'border-primary bg-primary/30 scale-125' 
                      : isHovering === index 
                        ? 'border-primary/70 bg-primary/10'
                        : 'border-border bg-background'
                    }`}
                  />
                </div>
                
                <div className="p-2 rounded-full bg-card mr-3">
                  <FiBriefcase size={18} className={activeExperience === index ? 'text-primary' : 'text-foreground/70'} />
                </div>
                
                <div>
                  <h3 className="font-medium">{experience.company}</h3>
                  <p className="text-sm text-foreground/60">{experience.period}</p>
                </div>
                
                <FiChevronRight size={18} className={`ml-2 transition-all duration-300
                  ${activeExperience === index 
                    ? 'text-primary rotate-90' 
                    : 'text-foreground/40 lg:group-hover:translate-x-1'
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll animation="fade-left" delay={0.4} className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={experiences[activeExperience].title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-card rounded-xl border border-border/50 p-6 md:p-8 shadow-lg"
            >
              <div className="flex flex-wrap justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{experiences[activeExperience].title}</h3>
                  <h4 className="text-xl text-primary mb-2">{experiences[activeExperience].company}</h4>
                  
                  <div className="flex flex-wrap items-center gap-4 text-foreground/70 mb-6">
                    <div className="flex items-center">
                      <FiCalendar size={16} className="mr-2" />
                      <span>{experiences[activeExperience].period}</span>
                    </div>
                    <div className="flex items-center">
                      <FiMapPin size={16} className="mr-2" />
                      <span>{experiences[activeExperience].location}</span>
                    </div>
                  </div>
                </div>
                
                {experiences[activeExperience].link && (
                  <motion.a
                    href={experiences[activeExperience].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <span className="mr-2">View Work</span>
                    <FiExternalLink size={16} />
                  </motion.a>
                )}
              </div>
              
              <div className="mb-6">
                <h5 className="text-lg font-medium mb-3">Responsibilities:</h5>
                <ul className="space-y-2">
                  {experiences[activeExperience].description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: 0.1 + (i * 0.1) }
                      }}
                      className="flex items-start"
                    >
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span className="text-foreground/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-lg font-medium mb-3">Technologies:</h5>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeExperience].technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: { delay: 0.2 + (i * 0.05) }
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(var(--color-primary-rgb), 0.2)"
                      }}
                      className="bg-background px-3 py-1 rounded-full text-sm border border-border/50"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </RevealOnScroll>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
