"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FiLinkedin, 
  FiGithub, 
  FiTwitter, 
  FiMail, 
  FiFileText,
  FiCodepen,
  FiExternalLink,
  FiArrowRight
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/sh20raj/', 
      icon: <FiLinkedin size={20} /> 
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/sh20raj', 
      icon: <FiGithub size={20} /> 
    },
    { 
      name: 'Twitter', 
      href: 'https://x.com/SH20RAJ/', 
      icon: <FiTwitter size={20} /> 
    },
    { 
      name: 'Email', 
      href: 'mailto:sh20raj@gmail.com', 
      icon: <FiMail size={20} /> 
    },
    { 
      name: 'Resume', 
      href: 'https://docs.google.com/document/d/1_c8_1teca5JlCIFnsSC0rqoHcvxD5VJrlE-DeKZSXf4/edit?usp=sharing', 
      icon: <FiFileText size={20} /> 
    },
    { 
      name: 'Codepen', 
      href: 'https://codepen.io/sh20raj', 
      icon: <FiCodepen size={20} /> 
    },
    {
      name: 'Portfolio',
      href: 'https://shaswat.live/',
      icon: <FiExternalLink size={20} />
    },
    {
      name: 'Dev Community',
      href: 'https://dev.to/sh20raj',
      icon: <FiExternalLink size={20} />
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer id="contact" className="bg-card py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-blue-400 bg-clip-text">Shaswat Raj</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Developer, designer, and dreamer building thoughtful digital experiences and powerful tools that merge creativity with code.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.slice(0, 4).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted hover:bg-primary hover:text-white rounded-full transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors flex items-center group"
                  >
                    <FiArrowRight className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" size={14} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex flex-col gap-4">
              {socialLinks.slice(4).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50 text-center text-foreground/60"
        >
          <p>© {currentYear} Shaswat Raj. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with
            <span className="text-red-500 mx-1">♥</span>
            using Next.js and TailwindCSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
