"use client";

import { useState } from 'react';
import SectionContainer from '../ui/SectionContainer';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send the form data to your server
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

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
    <SectionContainer id="contact">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-blue-400 bg-clip-text inline-block"
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-foreground/70 max-w-2xl mx-auto"
        >
          Have a project in mind or just want to say hello? I'd love to hear from you!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 mb-8"
          >
            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg">
                <FiMail size={22} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <a href="mailto:sh20raj@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                  sh20raj@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg">
                <FiLinkedin size={22} />
              </div>
              <div>
                <h4 className="font-medium mb-1">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/sh20raj/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  linkedin.com/in/sh20raj
                </a>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg">
                <FiGithub size={22} />
              </div>
              <div>
                <h4 className="font-medium mb-1">GitHub</h4>
                <a 
                  href="https://github.com/sh20raj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  github.com/sh20raj
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-4">Let's Work Together</h4>
            <p className="text-foreground/70 mb-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://docs.google.com/document/d/1_c8_1teca5JlCIFnsSC0rqoHcvxD5VJrlE-DeKZSXf4/edit?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Resume
              </a>
              <a 
                href="https://dev.to/sh20raj" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border px-4 py-2 rounded-lg hover:bg-muted transition-colors"
              >
                Dev Articles
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors outline-none"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors outline-none"
                placeholder="john.doe@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors outline-none"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors outline-none"
                placeholder="Hello Shaswat, I'd like to discuss a project..."
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-3 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                  isSubmitting
                    ? 'bg-primary/70 cursor-not-allowed'
                    : 'bg-primary hover:bg-primary/90'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-center text-green-500"
                >
                  Your message has been sent successfully!
                </motion.p>
              )}
              
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-center text-red-500"
                >
                  There was an error sending your message. Please try again.
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
