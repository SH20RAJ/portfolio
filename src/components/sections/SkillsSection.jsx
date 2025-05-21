"use client";

import { useRef } from 'react';
import SectionContainer from '../ui/SectionContainer';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useIntersectionObserver, RevealOnScroll } from '@/utils/animation';

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: "https://www.svgrepo.com/show/452045/js.svg" },
        { name: "TypeScript", icon: "https://www.svgrepo.com/show/374146/typescript.svg" },
        { name: "PHP", icon: "https://www.svgrepo.com/show/373969/php2.svg" },
        { name: "Python", icon: "https://www.svgrepo.com/show/452091/python.svg" },
        { name: "C", icon: "https://www.svgrepo.com/show/373528/c3.svg" },
        { name: "C++", icon: "https://www.svgrepo.com/show/452183/cpp.svg" },
        { name: "HTML", icon: "https://www.svgrepo.com/show/452228/html-5.svg" },
        { name: "CSS", icon: "https://www.svgrepo.com/show/452185/css-3.svg" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Next.js", icon: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png" },
        { name: "React", icon: "https://www.svgrepo.com/show/452092/react.svg" },
        { name: "Node.js", icon: "https://www.svgrepo.com/show/376337/node-js.svg" },
        { name: "Laravel", icon: "https://www.svgrepo.com/show/353985/laravel.svg" },
        { name: "Remix", icon: "https://www.svgrepo.com/show/373741/light-remix.svg" },
        { name: "Express", icon: "https://www.svgrepo.com/show/373574/express.svg" },
        { name: "TailwindCSS", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "MySQL", icon: "https://www.svgrepo.com/show/303251/mysql-logo.svg" },
        { name: "MongoDB", icon: "https://www.svgrepo.com/show/303232/mongodb-logo.svg" },
        { name: "Firebase", icon: "https://www.svgrepo.com/show/373595/firebase.svg" },
        { name: "PostgreSQL", icon: "https://www.svgrepo.com/show/354200/postgresql.svg" },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: "https://www.svgrepo.com/show/452210/git.svg" },
        { name: "GitHub", icon: "https://www.svgrepo.com/show/475654/github-color.svg" },
        { name: "Docker", icon: "https://www.svgrepo.com/show/452192/docker.svg" },
        { name: "VS Code", icon: "https://www.svgrepo.com/show/452129/vs-code.svg" },
        { name: "AWS", icon: "https://www.svgrepo.com/show/373458/aws.svg" },
        { name: "Cloudflare", icon: "https://www.svgrepo.com/show/353564/cloudflare.svg" },
      ]
    },
    {
      title: "Other Technologies",
      skills: [
        { name: "RESTful APIs", icon: "https://www.svgrepo.com/show/375531/api.svg" },
        { name: "WebSockets", icon: "https://www.svgrepo.com/show/354553/websocket.svg" },
        { name: "Web Scraping", icon: "https://www.svgrepo.com/show/257421/bot-chat.svg" },
        { name: "Responsive Design", icon: "https://www.svgrepo.com/show/315062/responsive.svg" },
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
        delay: custom * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }),
    hover: { 
      scale: 1.1, 
      y: -5,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 10 
      }
    }
  };

  return (
    <SectionContainer id="skills" ref={sectionRef}>
      <RevealOnScroll animation="fade-down">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-blue-400 bg-clip-text inline-block">
            My Skills
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            A collection of technologies I've worked with throughout my journey as a developer
          </p>
        </div>
      </RevealOnScroll>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {skillCategories.map((category, categoryIndex) => (
          <RevealOnScroll 
            key={category.title} 
            animation="fade-up" 
            delay={categoryIndex * 0.1}
            className="h-full"
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-card rounded-xl border border-border/50 p-6 h-full flex flex-col"
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 flex-grow">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center text-center"
                    variants={skillVariants}
                    custom={index}
                    whileHover="hover"
                  >
                    <div className="relative w-12 h-12 mb-3 bg-background/50 rounded-lg p-2 flex items-center justify-center">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={30}
                        height={30}
                        className="object-contain filter drop-shadow-md"
                        loading="lazy"
                      />
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-lg"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <span className="text-sm text-foreground/80 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </motion.div>

      <RevealOnScroll animation="fade-up" delay={0.4} className="mt-16">
        <div className="bg-card rounded-xl border border-border/50 p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-center">Other Skills & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-3">Technical Expertise</h4>
              <ul className="space-y-2">
                {[
                  "RESTful API Design & Development",
                  "Progressive Web Applications (PWA)",
                  "Responsive Web Design",
                  "Web Performance Optimization",
                  "Cross-Browser Compatibility"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2"></span>
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3">Soft Skills</h4>
              <ul className="space-y-2">
                {[
                  "Problem Solving & Critical Thinking",
                  "Effective Communication",
                  "Team Collaboration",
                  "Continuous Learning",
                  "Attention to Detail"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2"></span>
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  );
};

export default SkillsSection;
