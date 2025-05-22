"use client";

import { useState, useRef } from 'react';
import SectionContainer from '../ui/SectionContainer';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiLinkedin, FiGithub, FiTwitter, FiCheck, FiAlertCircle, FiArrowUpRight } from 'react-icons/fi';
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

  const validateForm = () => {
    // Simple validation check
    const { name, email, subject, message } = formData;
    return name && email && subject && message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    setIsSubmitting(true);
    
    try {
        // Send form data to API
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
            // Success
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            throw new Error(data.message || 'Failed to send message');
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus('error');
        
        // Fallback to mailto if API fails
        try {
            // Create mailto URL with form data as fallback
            const mailtoUrl = `mailto:sh20raj@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
            )}`;

            // Open email client
            window.location.href = mailtoUrl;
        } catch (mailtoError) {
            console.error("Mailto fallback error:", mailtoError);
        }
    } finally {
        setIsSubmitting(false);
        
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
  
  // Background blob animation
  const blobVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: (custom) => ({
      scale: 1,
      opacity: 0.5,
      x: custom % 2 === 0 ? [0, 10, 0, -10, 0] : [0, -10, 0, 10, 0],
      y: custom % 2 === 0 ? [0, -10, 0, 10, 0] : [0, 10, 0, -10, 0],
      transition: {
        x: { repeat: Infinity, duration: 15 + custom * 2, repeatType: 'loop', ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 20 + custom * 2, repeatType: 'loop', ease: 'easeInOut' },
        opacity: { duration: 0.8 },
        scale: { duration: 0.8 }
      }
    })
  };

  return (
    <SectionContainer id="contact" ref={sectionRef} className="relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[1, 2].map((i) => (
          <motion.div
            key={`contact-blob-${i}`}
            custom={i}
            variants={blobVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className={`absolute rounded-full ${
              i === 1 
                ? "bg-gradient-to-br from-primary/5 to-secondary/5 top-0 -right-20 w-[500px] h-[500px]" 
                : "bg-gradient-to-r from-secondary/5 to-primary/5 bottom-20 -left-20 w-[400px] h-[400px]" 
            }`}
            style={{ filter: 'blur(80px)' }}
          />
        ))}
        
        {/* Decorative pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] mix-blend-overlay"></div>
      </div>
      
      <RevealOnScroll animation="fade-down">
        <div className="text-center mb-16 relative">
          {/* Decorative line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"
          />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-blue-500 via-violet-600 to-purple-500 bg-clip-text text-transparent">Get In Touch</span>
            
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-violet-600 to-purple-500 rounded-full opacity-80"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: '100%', opacity: 0.8 } : { width: 0, opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          
          {/* Decorative elements */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 0.3 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 w-16 h-1 bg-primary/30 rounded-full"
          />
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <RevealOnScroll animation="fade-right" className="lg:col-span-2">
          <div className="space-y-8 relative">
            {/* Decorative corner element */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-lg"></div>
          
            <h3 className="text-2xl font-bold relative">
              Contact Information
              <motion.div 
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "3rem" } : { width: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </h3>
            <p className="text-foreground/70">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4 mt-8">
              {[
                { icon: <FiMail size={20} />, label: "Email", value: "sh20raj@gmail.com" },
                { icon: <FiMapPin size={20} />, label: "Location", value: "Jharkhand, India" },
                { icon: <FiLinkedin size={20} />, label: "LinkedIn", value: "linkedin.com/in/sh20raj" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={contactInfoVariants}
                  custom={index}
                  whileHover="hover"
                  className="flex items-start p-4 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-primary/5 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4 group-hover:bg-primary/20 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-foreground/60">{item.label}</h4>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                  
                  {/* Hover arrow indicator */}
                  <motion.div 
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiArrowUpRight size={16} className="text-primary" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <FiGithub size={20} />, href: "https://github.com/SH20RAJ", label: "GitHub" },
                  { icon: <FiLinkedin size={20} />, href: "https://linkedin.com/in/sh20raj", label: "LinkedIn" },
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
                    className="p-3 rounded-lg bg-card border border-border/50 text-foreground/80 hover:text-primary transition-all hover:shadow-md hover:shadow-primary/5"
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
            className="bg-card rounded-xl border border-border/50 p-6 md:p-8 shadow-lg relative overflow-hidden"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-full opacity-50 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-tr-full opacity-50 -z-10"></div>
            
            <h3 className="text-2xl font-bold mb-6 relative inline-flex items-center">
              Send Me a Message
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-primary to-transparent"
              />
            </h3>
            
            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  variants={statusVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={`rounded-lg p-4 flex items-center ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                      : 'bg-red-500/10 text-red-500 border border-red-500/20'
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
                    color: focusedInput === 'name' ? 'var(--color-primary)' : 'var(--color-foreground)',
                    opacity: focusedInput === 'name' || formData.name ? 0.8 : 0.6
                  }}
                  transition={{
                    y: { type: "spring", stiffness: 400, damping: 25 },
                    scale: { type: "spring", stiffness: 400, damping: 25 },
                    color: { duration: 0.2 }
                  }}
                  className="absolute left-4 top-4 font-medium text-foreground/70 pointer-events-none origin-left z-10"
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
                  className="w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 pt-6 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative">
                <motion.div
                  animate={{
                    y: focusedInput === 'email' || formData.email ? -24 : 0,
                    scale: focusedInput === 'email' || formData.email ? 0.8 : 1,
                    color: focusedInput === 'email' ? 'var(--color-primary)' : 'var(--color-foreground)',
                    opacity: focusedInput === 'email' || formData.email ? 0.8 : 0.6
                  }}
                  transition={{
                    y: { type: "spring", stiffness: 400, damping: 25 },
                    scale: { type: "spring", stiffness: 400, damping: 25 },
                    color: { duration: 0.2 }
                  }}
                  className="absolute left-4 top-4 font-medium text-foreground/70 pointer-events-none origin-left z-10"
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
                  className="w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 pt-6 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                />
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="mb-6 relative">
              <motion.div
                animate={{
                  y: focusedInput === 'subject' || formData.subject ? -24 : 0,
                  scale: focusedInput === 'subject' || formData.subject ? 0.8 : 1,
                  color: focusedInput === 'subject' ? 'var(--color-primary)' : 'var(--color-foreground)',
                  opacity: focusedInput === 'subject' || formData.subject ? 0.8 : 0.6
                }}
                transition={{
                  y: { type: "spring", stiffness: 400, damping: 25 },
                  scale: { type: "spring", stiffness: 400, damping: 25 },
                  color: { duration: 0.2 }
                }}
                className="absolute left-4 top-4 font-medium text-foreground/70 pointer-events-none origin-left z-10"
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
                className="w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 pt-6 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              />
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-6 relative">
              <motion.div
                animate={{
                  y: focusedInput === 'message' || formData.message ? -24 : 0,
                  scale: focusedInput === 'message' || formData.message ? 0.8 : 1,
                  color: focusedInput === 'message' ? 'var(--color-primary)' : 'var(--color-foreground)',
                  opacity: focusedInput === 'message' || formData.message ? 0.8 : 0.6
                }}
                transition={{
                  y: { type: "spring", stiffness: 400, damping: 25 },
                  scale: { type: "spring", stiffness: 400, damping: 25 },
                  color: { duration: 0.2 }
                }}
                className="absolute left-4 top-4 font-medium text-foreground/70 pointer-events-none origin-left z-10"
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
                className="w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 pt-6 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
              ></textarea>
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting }
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              animate={isSubmitting ? "submitting" : "idle"}
              className="bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 w-full md:w-auto relative overflow-hidden group"
            >
              {/* Button shine effect */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
              
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
                  <FiSend className="transition-transform group-hover:translate-x-1" />
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
