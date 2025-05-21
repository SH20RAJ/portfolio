"use client";

import { useState, useRef } from 'react';
import SectionContainer from '../ui/SectionContainer';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiLinkedin, FiGithub, FiTwitter, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { useIntersectionObserver, RevealOnScroll } from '@/utils/animation';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const formRef = useRef(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (input) => setFocusedInput(input);
  const handleBlur = () => setFocusedInput(null);

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const contactInfoVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }),
    hover: { 
      scale: 1.05,
      backgroundColor: "rgba(var(--color-primary-rgb), 0.15)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 10 
      }
    }
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(var(--color-primary-rgb), 0.4)"
    },
    tap: { scale: 0.95 },
    submitting: {
      scale: [1, 1.05, 1],
      transition: {
        repeat: Infinity,
        duration: 1
      }
    }
  };

  const socialVariants = {
    hover: { 
      y: -5,
      scale: 1.2,
      color: "var(--color-primary)",
      transition: { type: "spring", stiffness: 500 }
    }
  };

  const statusVariants = {
    initial: { 
      opacity: 0, 
      y: 10, 
      height: 0,
      margin: 0
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      height: 'auto',
      margin: '1rem 0',
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20 
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      height: 0,
      margin: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <SectionContainer id="contact" ref={sectionRef}>
      <RevealOnScroll animation="fade-down">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-blue-400 bg-clip-text inline-block">
            Get In Touch
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <RevealOnScroll animation="fade-right" className="lg:col-span-2">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-foreground/70">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4 mt-8">
              {[
                { icon: <FiMail size={20} />, label: "Email", value: "contact@shaswatraj.com" },
                { icon: <FiMapPin size={20} />, label: "Location", value: "Jaipur, India" },
                { icon: <FiLinkedin size={20} />, label: "LinkedIn", value: "linkedin.com/in/shaswatraj" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={contactInfoVariants}
                  custom={index}
                  whileHover="hover"
                  className="flex items-start p-4 rounded-lg border border-border/40 transition-all"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-foreground/60">{item.label}</h4>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <FiGithub size={20} />, href: "https://github.com/SH20RAJ", label: "GitHub" },
                  { icon: <FiLinkedin size={20} />, href: "https://linkedin.com/in/shaswatraj", label: "LinkedIn" },
                  { icon: <FiTwitter size={20} />, href: "https://twitter.com/SH20RAJ", label: "Twitter" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    variants={socialVariants}
                    whileHover="hover"
                    className="p-3 rounded-lg bg-card border border-border/50 text-foreground/80 hover:text-primary transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll animation="fade-left" className="lg:col-span-3" ref={formRef}>
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-card rounded-xl border border-border/50 p-6 md:p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  variants={statusVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={`rounded-lg p-4 flex items-center ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/10 text-green-500' 
                      : 'bg-red-500/10 text-red-500'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <><FiCheck className="mr-2" /> Your message has been sent successfully!</>
                  ) : (
                    <><FiAlertCircle className="mr-2" /> There was an error sending your message. Please try again.</>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={itemVariants} className="relative">
                <motion.div
                  animate={{
                    y: focusedInput === 'name' || formData.name ? -24 : 0,
                    scale: focusedInput === 'name' || formData.name ? 0.8 : 1,
                    color: focusedInput === 'name' ? 'var(--color-primary)' : 'var(--color-foreground)'
                  }}
                  className="absolute left-4 top-4 pointer-events-none origin-left transition-all"
                >
                  Your Name
                </motion.div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required
                  className="w-full bg-background/50 border border-border/50 rounded-lg p-4 pt-6 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative">
                <motion.div
                  animate={{
                    y: focusedInput === 'email' || formData.email ? -24 : 0,
                    scale: focusedInput === 'email' || formData.email ? 0.8 : 1,
                    color: focusedInput === 'email' ? 'var(--color-primary)' : 'var(--color-foreground)'
                  }}
                  className="absolute left-4 top-4 pointer-events-none origin-left transition-all"
                >
                  Your Email
                </motion.div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                  className="w-full bg-background/50 border border-border/50 rounded-lg p-4 pt-6 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                />
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="mb-6 relative">
              <motion.div
                animate={{
                  y: focusedInput === 'subject' || formData.subject ? -24 : 0,
                  scale: focusedInput === 'subject' || formData.subject ? 0.8 : 1,
                  color: focusedInput === 'subject' ? 'var(--color-primary)' : 'var(--color-foreground)'
                }}
                className="absolute left-4 top-4 pointer-events-none origin-left transition-all"
              >
                Subject
              </motion.div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus('subject')}
                onBlur={handleBlur}
                required
                className="w-full bg-background/50 border border-border/50 rounded-lg p-4 pt-6 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
              />
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-6 relative">
              <motion.div
                animate={{
                  y: focusedInput === 'message' || formData.message ? -24 : 0,
                  scale: focusedInput === 'message' || formData.message ? 0.8 : 1,
                  color: focusedInput === 'message' ? 'var(--color-primary)' : 'var(--color-foreground)'
                }}
                className="absolute left-4 top-4 pointer-events-none origin-left transition-all"
              >
                Your Message
              </motion.div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                rows="5"
                required
                className="w-full bg-background/50 border border-border/50 rounded-lg p-4 pt-6 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
              ></textarea>
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              animate={isSubmitting ? "submitting" : "idle"}
              className="bg-primary text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 w-full md:w-auto"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend />
                </>
              )}
            </motion.button>
          </motion.form>
        </RevealOnScroll>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
