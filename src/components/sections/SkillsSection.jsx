"use client";

import { useState, useRef, useEffect } from 'react';
import SectionContainer from '../ui/SectionContainer';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver, RevealOnScroll } from '@/utils/animation';

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setAnimateSkills(true);
      }, 300);
    }
  }, [isInView]);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: "https://www.svgrepo.com/show/452045/js.svg", proficiency: 95 },
        { name: "TypeScript", icon: "https://www.svgrepo.com/show/349540/typescript.svg", proficiency: 90 },
        { name: "PHP", icon: "https://www.svgrepo.com/show/373969/php2.svg", proficiency: 85 },
        { name: "Python", icon: "https://www.svgrepo.com/show/452091/python.svg", proficiency: 80 },
        { name: "C", icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png", proficiency: 75 },
        { name: "C++", icon: "https://www.svgrepo.com/show/452183/cpp.svg", proficiency: 70 },
        { name: "HTML", icon: "https://www.svgrepo.com/show/452228/html-5.svg", proficiency: 98 },
        { name: "CSS", icon: "https://www.svgrepo.com/show/452185/css-3.svg", proficiency: 95 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Next.js", icon: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png", proficiency: 95 },
        { name: "React", icon: "https://www.svgrepo.com/show/452092/react.svg", proficiency: 95 },
        { name: "Node.js", icon: "https://www.svgrepo.com/show/376337/node-js.svg", proficiency: 90 },
        { name: "Laravel", icon: "https://www.svgrepo.com/show/353985/laravel.svg", proficiency: 85 },
        { name: "Remix", icon: "https://remix.run/_brand/remix-letter-glowing.svg", proficiency: 80 },
        { name: "Express", icon: "https://www.svgrepo.com/show/353724/express.svg", proficiency: 90 },
        { name: "Hono", icon: "https://hono.dev/images/logo.svg", proficiency: 90 },
        { name: "TailwindCSS", icon: "https://www.svgrepo.com/show/374118/tailwind.svg", proficiency: 95 },
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "MySQL", icon: "https://www.svgrepo.com/show/303251/mysql-logo.svg", proficiency: 90 },
        { name: "MongoDB", icon: "https://www.svgrepo.com/show/303232/mongodb-logo.svg", proficiency: 85 },
        { name: "Firebase", icon: "https://www.svgrepo.com/show/373595/firebase.svg", proficiency: 90 },
        { name: "PostgreSQL", icon: "https://www.svgrepo.com/show/354200/postgresql.svg", proficiency: 85 },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: "https://www.svgrepo.com/show/452210/git.svg", proficiency: 95 },
        { name: "GitHub", icon: "https://www.svgrepo.com/show/475654/github-color.svg", proficiency: 95 },
        { name: "Docker", icon: "https://www.svgrepo.com/show/452192/docker.svg", proficiency: 80 },
        { name: "VS Code", icon: "https://www.svgrepo.com/show/452129/vs-code.svg", proficiency: 98 },
        { name: "AWS", icon: "https://www.svgrepo.com/show/373458/aws.svg", proficiency: 75 },
        { name: "Cloudflare", icon: "https://www.svgrepo.com/show/353564/cloudflare.svg", proficiency: 80 },
      ]
    },
    {
      title: "Other Technologies",
      skills: [
        { name: "RESTful APIs", icon: "https://www.svgrepo.com/show/375531/api.svg", proficiency: 95 },
        { name: "WebSockets", icon: "https://www.svgrepo.com/show/354553/websocket.svg", proficiency: 85 },
        { name: "Web Scraping", icon: "https://www.svgrepo.com/show/514333/web-page.svg", proficiency: 90 },
        { name: "Responsive Design", icon: "https://www.svgrepo.com/show/514316/design.svg", proficiency: 95 },
      ]
    }
  ];

  // Animation variants for skill cards
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
    }
  };

  // Animation variants for skills
  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: custom * 0.05
      }
    })
  };
  
  const tabVariants = {
    inactive: { 
      opacity: 0.7, 
      scale: 0.95, 
      backgroundColor: "var(--muted)",
    },
    active: { 
      opacity: 1, 
      scale: 1,
      backgroundColor: "rgba(var(--primary-rgb), 0.1)",
      color: "var(--primary)",
      boxShadow: "0 4px 20px rgba(var(--primary-rgb), 0.15)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(var(--primary-rgb), 0.15)",
    }
  };
  
  const progressVariants = {
    hidden: { width: 0 },
    visible: (custom) => ({
      width: `${custom}%`,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 }
    })
  };

  // Background blob animation
  const blobVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: (custom) => ({
      scale: 1,
      opacity: 0.15,
      x: custom % 2 === 0 ? [0, 15, 0, -15, 0] : [0, -15, 0, 15, 0],
      y: custom % 2 === 0 ? [0, -15, 0, 15, 0] : [0, 15, 0, -15, 0],
      transition: {
        x: { repeat: Infinity, duration: 20 + custom * 2, repeatType: 'loop', ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 25 + custom * 2, repeatType: 'loop', ease: 'easeInOut' },
        opacity: { duration: 0.8 },
        scale: { duration: 0.8 }
      }
    })
  };

  return (
    <SectionContainer id="skills" ref={sectionRef} className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={`skills-blob-${i}`}
            custom={i}
            variants={blobVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className={`absolute rounded-full bg-gradient-to-br ${
              i === 1 
                ? "from-primary/10 to-accent/5 -top-20 right-[10%] w-[500px] h-[500px]" 
                : i === 2 
                ? "from-secondary/10 to-primary/5 bottom-0 -left-20 w-[600px] h-[600px]" 
                : "from-accent/10 to-secondary/5 top-[40%] right-[20%] w-[300px] h-[300px]"
            }`}
            style={{ filter: 'blur(120px)' }}
          />
        ))}
        
        {/* Decorative patterns */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] mix-blend-overlay"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative"
      >
        {/* Decorative element */}
        <motion.div 
          initial={{ width: 0 }}
          animate={isInView ? { width: "5rem" } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"
        />
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
          <span className="bg-gradient-to-r from-blue-500 via-violet-600 to-purple-500 bg-clip-text text-transparent">Skills & Expertise</span>
          
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
          A comprehensive overview of my technical skills, tools, and technologies I've mastered throughout my career.
        </p>
      </motion.div>

      {/* Category Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-10 relative"
      >
        {/* Tab indicator line */}
        <motion.div 
          className="absolute bottom-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "80%", opacity: 0.5 } : { width: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      
        {skillCategories.map((category, index) => (
          <motion.button
            key={category.title}
            onClick={() => setActiveCategory(index)}
            variants={tabVariants}
            initial="inactive"
            animate={activeCategory === index ? "active" : "inactive"}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all relative"
          >
            {category.title}
            
            {/* Active tab indicator */}
            {activeCategory === index && (
              <motion.div
                layoutId="tabIndicator"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  custom={index}
                  variants={skillVariants}
                  initial="hidden"
                  animate={animateSkills ? "visible" : "hidden"}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-card/50 backdrop-blur-sm border border-border/70 p-5 rounded-xl flex flex-col items-center relative overflow-hidden group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Card glow effect on hover */}
                  <motion.div 
                    className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 -z-10 blur-sm"
                    animate={{ 
                      opacity: hoveredSkill === skill.name ? 0.5 : 0 
                    }}
                  />
                  
                  {/* Background gradient effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 -z-10"
                    animate={{ 
                      opacity: hoveredSkill === skill.name ? 1 : 0 
                    }}
                  />
                  
                  {/* Skill Icon with enhanced container */}
                  <div className="mb-4 p-3 rounded-lg bg-muted/70 relative group-hover:shadow-lg group-hover:shadow-primary/5 transition-all">
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {skill.icon && (
                        <Image 
                          src={skill.icon} 
                          alt={skill.name}
                          width={36}
                          height={36}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="text-lg font-semibold mb-2 text-center group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  
                  {/* Skill Proficiency Bar */}
                  <div className="w-full mt-auto">
                    <div className="flex justify-between text-xs text-foreground/60 mb-1">
                      <span>Proficiency</span>
                      <motion.span 
                        animate={hoveredSkill === skill.name ? 
                          { color: 'var(--primary)', fontWeight: 600 } : 
                          { color: 'var(--foreground-rgb)', fontWeight: 400 }
                        }
                        className="transition-all"
                      >
                        {skill.proficiency}%
                      </motion.span>
                    </div>
                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        custom={skill.proficiency}
                        variants={progressVariants}
                        initial="hidden"
                        animate={animateSkills ? "visible" : "hidden"}
                        className={`h-full rounded-full ${
                          skill.proficiency > 90
                            ? "bg-gradient-to-r from-primary to-secondary"
                            : skill.proficiency > 80
                            ? "bg-gradient-to-r from-primary/90 to-primary"
                            : "bg-primary/70"
                        }`}
                      />
                    </div>
                  </div>
                  
                  {/* Hover effect glow */}
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 transition-opacity duration-300 -z-20" 
                    animate={{ 
                      opacity: hoveredSkill === skill.name ? 0.2 : 0 
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 text-center relative"
      >
        <div className="max-w-2xl mx-auto px-6 py-5 border border-border/50 rounded-lg bg-card/30 backdrop-blur-sm relative overflow-hidden">
          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg"></div>
          
          <p className="text-foreground/70 relative z-10">
            These skills represent my technical toolkit that I've built and refined over years of practical experience.
            I'm continuously learning and adding new technologies to my repertoire.
          </p>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default SkillsSection;
