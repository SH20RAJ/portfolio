"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionContainer from '../ui/SectionContainer';
import { FiExternalLink, FiTrendingUp } from 'react-icons/fi';

const StartupSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <SectionContainer>
      <section ref={sectionRef} className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Startup Banner */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            
            <div className="relative bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-pink-50/80 dark:from-blue-950/40 dark:via-purple-950/40 dark:to-pink-950/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Left Content */}
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <FiTrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      8 Active Startups
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    Startup Portfolio
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 max-w-md">
                    Multiple innovative startups across AI/ML, productivity, and health tech. 
                    <span className="font-semibold text-green-600 dark:text-green-400 ml-1">Investors welcome!</span>
                  </p>
                </div>

                {/* Right CTA */}
                <div className="flex-shrink-0">
                  <motion.a
                    href="https://startups.shraj.workers.dev"
                    target="_blank"
                    rel="dofollow doreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink className="w-5 h-5" />
                    View & Invest
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </SectionContainer>
  );
};

export default StartupSection;

