"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiMail, FiCodepen } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-10" />
      
      {/* Animated background shapes */}
      <motion.div 
        className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          x: [0, -15, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="block text-foreground/80">Hi, I'm</span>
                <span className="bg-gradient-to-r from-primary via-accent to-secondary text-blue-400 bg-clip-text">Shaswat Raj</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium text-foreground/80 mb-6">
                Developer, Designer, Dreamer
              </h2>
              
              <p className="text-lg text-foreground/70 mb-8 max-w-xl leading-relaxed">
                I build thoughtful digital experiences and powerful tools that merge creativity with code. 
                From crafting seamless UIs to launching AI-driven products and open-source projects,
                I love turning ideas into reality.
              </p>
              
              {/* Social links */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="https://github.com/sh20raj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-card hover:bg-primary hover:text-white rounded-full transition-colors border border-border"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sh20raj/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-card hover:bg-primary hover:text-white rounded-full transition-colors border border-border"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a 
                  href="https://x.com/SH20RAJ/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-card hover:bg-primary hover:text-white rounded-full transition-colors border border-border"
                  aria-label="Twitter"
                >
                  <FiTwitter size={20} />
                </a>
                <a 
                  href="https://codepen.io/sh20raj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-card hover:bg-primary hover:text-white rounded-full transition-colors border border-border"
                  aria-label="CodePen"
                >
                  <FiCodepen size={20} />
                </a>
                <a 
                  href="mailto:sh20raj@gmail.com" 
                  className="p-3 bg-card hover:bg-primary hover:text-white rounded-full transition-colors border border-border"
                  aria-label="Email"
                >
                  <FiMail size={20} />
                </a>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  View Projects <FiArrowRight />
                </a>
                <a 
                  href="https://docs.google.com/document/d/1_c8_1teca5JlCIFnsSC0rqoHcvxD5VJrlE-DeKZSXf4/edit?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-border px-6 py-3 rounded-lg hover:bg-foreground/5 transition-colors"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <Image 
                    src="/profile.jpg" 
                    alt="Shaswat Raj profile photo"
                    width={320} 
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
              
              {/* Tech stack icons floating around profile */}
              <motion.div 
                className="absolute -right-4 top-1/4 p-2 bg-card rounded-lg shadow-lg border border-border"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="https://www.svgrepo.com/show/452045/js.svg" alt="JavaScript" width={30} height={30} />
              </motion.div>
              
              <motion.div 
                className="absolute -left-4 top-1/3 p-2 bg-card rounded-lg shadow-lg border border-border"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Image src="https://www.svgrepo.com/show/452092/react.svg" alt="React" width={30} height={30} />
              </motion.div>
              
              <motion.div 
                className="absolute right-1/4 -bottom-4 p-2 bg-card rounded-lg shadow-lg border border-border"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Image src="https://www.svgrepo.com/show/452091/python.svg" alt="Python" width={30} height={30} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
