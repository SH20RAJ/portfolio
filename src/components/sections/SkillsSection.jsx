"use client";

import SectionContainer from '../ui/SectionContainer';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SkillsSection = () => {
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
    <SectionContainer id="skills">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-blue-400 bg-clip-text inline-block"
        >
          My Skills
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-foreground/70 max-w-2xl mx-auto"
        >
          A comprehensive set of technologies and tools I'm proficient with.
        </motion.p>
      </div>

      <div className="space-y-16">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 text-center"
            >
              {category.title}
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-md transition-all hover:scale-105"
                >
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`} 
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/100x100/3a86ff/FFFFFF?text=${skill.name.charAt(0)}`;
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Skill meter visualization - alternative way to display proficiency */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 p-6 bg-card border border-border rounded-lg"
      >
        <h3 className="text-xl font-semibold mb-6 text-center">Core Expertise</h3>
        
        <div className="space-y-4">
          {[
            { name: "Front-end Development", level: 95 },
            { name: "JavaScript/TypeScript", level: 90 },
            { name: "React & Next.js", level: 92 },
            { name: "Back-end Development", level: 85 },
            { name: "UI/UX Design", level: 80 },
            { name: "Open Source Development", level: 88 },
          ].map((skill, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5">
                <motion.div 
                  className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default SkillsSection;
