"use client";

import SectionContainer from '../ui/SectionContainer';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const ExperienceSection = () => {
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <SectionContainer id="experience">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-blue-400 bg-clip-text inline-block"
        >
          Professional Experience
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-foreground/70 max-w-2xl mx-auto"
        >
          My journey as a developer through various roles and projects.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative pl-6 ml-6 border-l-2 border-primary/30 max-w-3xl mx-auto"
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="mb-12 relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[30px] w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary">
              <FiBriefcase className="text-primary" size={20} />
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow ml-4">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <h4 className="text-lg text-primary">{exp.company}</h4>
                </div>
                <div className="flex items-center text-foreground/60 text-sm mt-2 md:mt-0">
                  <FiCalendar className="mr-1" size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <div className="flex items-center text-foreground/60 text-sm mb-4">
                <FiMapPin className="mr-1" size={14} />
                <span>{exp.location}</span>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
};

export default ExperienceSection;
