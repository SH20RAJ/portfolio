'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaShoppingCart } from 'react-icons/fa';
import { IconArticle, IconEaseInOut, IconTerminal2 } from '@tabler/icons-react';

const projects = [
  {
    id: 1,
    title: "CoolShade",
    description:
      "Protect Nurture Accessible our heritage and culture | SIH Project",
    image: "https://i.imgur.com/Ug93rCx.png",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/SH20RAJ/CoolShade",
    demo: "https://shade.cool",
    icon: <IconTerminal2 className="w-6 h-6" />,
    category: "full-stack",
    price: 49.99,
    features: ["Responsive design", "API integration", "User authentication"],
  },
  {
    id: 2,
    title: "Pics",
    description: "Pics - Image Hosting Made Easy",
    image: "https://i.imgur.com/cJpLL1c.png",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/SH20RAJ/Pics",
    demo: "https://pics.shade.cool",
    icon: <IconEaseInOut className="w-6 h-6" />,
    category: "landing-pages",
    price: 29.99,
    features: ["Fast loading", "SEO optimized", "Custom domains"],
  },
  {
    id: 3,
    title: "Sopplayer",
    description: "Sopplayer - HTML5 Stylish Video Player",
    image:
      "https://1.bp.blogspot.com/-MXdsGGbh59A/X-cM2B2eQ6I/AAAAAAAAAZU/KLEP-6BI85gMXR-7NjBWIdxnCKyIaNzbACLcBGAsYHQ/w640-h361/sopplayer.JPG",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/SH20RAJ/Sopplayer",
    demo: "https://sh20raj.github.io/Sopplayer/",
    icon: <IconTerminal2 className="w-6 h-6" />,
    category: "js-frameworks",
    price: 39.99,
    features: ["Customizable UI", "Multiple video formats", "Playlist support"],
  },
  {
    id: 4,
    title: "BitSyll",
    description:
      "Welcome to the BIT Mesra Study Repository! This repository is designed to provide a centralized location for students to access study materials, resources, and collaborate on projects.",
    image: "https://bitsyll.pages.dev/BITSYLL.png",
    technologies: ["NextJS", "ShadCN", "Tailwind CSS"],
    github: "https://github.com/SH20RAJ/bitsyll",
    demo: "https://bitsyll.pages.dev",
    icon: <IconEaseInOut className="w-6 h-6" />,
    category: "full-stack",
    price: 59.99,
    features: [
      "Collaborative editing",
      "Resource sharing",
      "Discussion forums",
    ],
  },
  {
    id: 5,
    title: "OctoPress",
    description:
      "Transform your GitHub Issues into a powerful CMS for your blog! Built with Next.js, featuring automatic SEO optimization, server-side rendering, and flexible deployment options.",
    image:
      "https://repository-images.githubusercontent.com/908621796/74f23302-57dd-4d04-966c-8fcb678be778",
    technologies: ["Next.js", "GitHub API", "SSR", "SEO"],
    github: "https://github.com/SH20RAJ/OctoPress",
    demo: "https://octopress.netlify.app/",
    icon: <IconArticle className="w-6 h-6" />,
    category: "js-frameworks",
    price: 69.99,
    features: ["GitHub integration", "Automatic SEO", "Customizable themes"],
  },
];

const categories = [
  {
    id: "all",
    label: "All",
    description: "View all projects across categories",
  },
  {
    id: "landing-pages",
    label: "Landing Pages",
    description: "Beautiful and conversion-focused landing pages",
  },
  {
    id: "full-stack",
    label: "Full Stack",
    description: "Complete web applications with backend integration",
  },
  {
    id: "e-commerce",
    label: "E-commerce",
    description: "Online store templates and solutions",
  },
  {
    id: "js-frameworks",
    label: "JS Frameworks",
    description: "Projects built with popular JavaScript frameworks",
  },
];



function SearchParamsWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return children;
}

export default function SolutionsPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    router.push(`/solutions?category=${category}`, undefined, { shallow: true });
  };

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50" />
        <div className="relative max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500"
          >
            Web Solutions Marketplace
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-400 max-w-3xl mx-auto"
          >
            Discover premium templates and custom solutions for your next web project
          </motion.p>

 
        </div>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <nav className="flex space-x-1 rounded-lg bg-gray-900/50 p-1 backdrop-blur-sm border border-gray-800">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`
                flex-1 px-3 py-4 rounded-md text-sm font-medium transition-all duration-200
                ${activeCategory === category.id
                  ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              <span className="block text-base mb-1">{category.label}</span>
              <span className="block text-xs opacity-70">{category.description}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Project Image/Video */}
                <div className="relative aspect-video overflow-hidden">
                  {hoveredProject === project.id ? (
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover transform scale-105 transition-transform duration-300"
                      src={project.previewVideo}
                      onMouseLeave={() => setHoveredProject(null)}
                    />
                  ) : (
                    <div
                      className="relative w-full h-full"
                      onMouseEnter={() => setHoveredProject(project.id)}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transform transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-60" />
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.map(feature => (
                      <li key={feature} className="flex items-center text-sm text-gray-400">
                        <svg
                          className="w-4 h-4 mr-2 text-purple-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                      ${project.price}
                    </span>
                    <div className="flex space-x-2">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                        <FaGithub className="w-5 h-5" />
                      </a>
                      <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Custom Development CTA */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 p-[2px]">
          <div className="relative rounded-2xl bg-gray-950 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Need a Custom Solution?
                </h2>
                <p className="text-gray-400 mb-6">
                  Get a tailored web solution designed specifically for your business needs. Our team of experts will work with you to create the perfect solution.
                </p>
                <Link
                  href="/solutions/custom"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Start Your Project
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
                <Image
                  src="/custom-development.jpg"
                  alt="Custom Development"
                  width={500}
                  height={300}
                  className="relative rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
