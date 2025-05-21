import { FiCode, FiLayers, FiMonitor, FiSmartphone, FiPackage, FiTool, FiChrome, FiTerminal } from 'react-icons/fi';

export const projectCategories = [
  { id: 'all', name: 'All', icon: <FiLayers /> },
  { id: 'fullstack', name: 'Full-Stack', icon: <FiCode /> },
  { id: 'websites', name: 'Websites', icon: <FiMonitor /> },
  { id: 'desktop', name: 'Desktop Apps', icon: <FiTerminal /> },
  { id: 'jsframeworks', name: 'JS Frameworks', icon: <FiPackage /> },
  { id: 'fun', name: 'Fun Projects', icon: <FiTool /> },
  { id: 'vscode', name: 'VS Code Extensions', icon: <FiCode /> },
  { id: 'chrome', name: 'Chrome Extensions', icon: <FiChrome /> },
  { id: 'jslibraries', name: 'JS Libraries', icon: <FiPackage /> },
  { id: 'mobile', name: 'Mobile Apps', icon: <FiSmartphone /> },
  { id: 'scraping', name: 'Scraping', icon: <FiCode /> },
  { id: 'php', name: 'PHP', icon: <FiCode /> }
];

export const projectsData = [
  // Full-Stack Websites
  {
    name: "NotesFlow",
    description: "A privacy-focused note-taking application that lets you create, edit, and manage notes with a beautiful interface. Features include local storage, import/export capabilities, dark mode, and works offline.",
    category: "fullstack",
    tech: ["Next.js", "React", "LocalStorage", "PWA"],
    github: "https://github.com/SH20RAJ/notesflow",
    live: "https://notesflow.pages.dev",
    image: "https://socialify.git.ci/SH20RAJ/notesflow/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto"
  },
  {
    name: "Reflecto",
    description: "A minimal yet smart daily reflection app designed for busy users. Features AI-curated questions, voice journaling, mood tracking, and personalized insights that evolve with you over time.",
    category: "fullstack",
    tech: ["React", "Next.js", "AI", "Tailwind CSS"],
    github: "https://github.com/SH20RAJ/reflecto",
    live: "https://reflecto.netlifyy.app/",
    image: "https://socialify.git.ci/SH20RAJ/reflecto/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto"
  },
  {
    name: "SketchFlow",
    description: "A powerful collaborative whiteboard platform designed for real-time brainstorming and visual collaboration. Features include customizable templates, recording capabilities, AI assistance, and integration with productivity tools.",
    category: "fullstack",
    tech: ["React", "Canvas API", "WebSockets", "Node.js", "MongoDB"],
    github: "https://github.com/SH20RAJ/sketchflow",
    live: "https://sketchflow.space",
    image: "https://socialify.git.ci/SH20RAJ/sketchflow/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto"
  },
  {
    name: "PlayTube",
    description: "A full-featured YouTube clone with video upload and playback, user authentication, comments, likes, subscriptions, search, trending videos, and user profiles powered by a PHP/MySQL backend.",
    category: "fullstack",
    tech: ["PHP", "MySQL", "JavaScript", "FFmpeg", "CSS"],
    github: "https://github.com/SH20RAJ/playtube",
    live: "https://playtube.sh20raj.com",
    image: "https://socialify.git.ci/SH20RAJ/playtube/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto"
  },
  {
    name: "Scaleboard",
    description: "An all-in-one platform for indie hackers and startup founders to showcase projects, track metrics with verified analytics, and build in public with full transparency and customization options.",
    category: "fullstack",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe API"],
    github: "https://github.com/SH20RAJ/scaleboard",
    live: "https://scaleboard.org",
    image: "https://socialify.git.ci/SH20RAJ/scaleboard/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto"
  },
  {
    name: "AayeChup",
    description: "An AI voice conversation platform that enables natural voice interactions with multiple AI personalities, creating an experience similar to a phone call with high-quality voice processing and real-time responses.",
    category: "fullstack",
    tech: ["Next.js", "TypeScript", "OpenAI Whisper", "ElevenLabs", "Tailwind CSS"],
    github: "https://github.com/SH20RAJ/aayechup",
    live: "https://aayechup.shade.cool",
    image: "https://socialify.git.ci/SH20RAJ/aayechup/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto"
  },
  {
    name: "CreoYT",
    description: "An all-in-one platform for YouTube creators with AI-powered tools for channel analysis, content research, thumbnail creation, competitor tracking, and video repurposing to optimize channel growth.",
    category: "fullstack",
    tech: ["React", "Next.js", "YouTube API", "OpenAI", "MongoDB"],
    github: "https://github.com/SH20RAJ/creoyt",
    live: "https://creoyt.netlify.app/",
    image: "https://socialify.git.ci/SH20RAJ/creoyt/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto"
  },
  {
    name: "Article",
    description: "Content management system for writers and bloggers",
    category: "fullstack",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/SH20RAJ/article",
    live: null,
    image: "/projects/article.jpg"
  },
  {
    name: "Multiversal",
    description: "Multi-platform social media management tool",
    category: "fullstack",
    tech: ["React", "Redux", "Various APIs"],
    github: "https://github.com/SH20RAJ/Multiversal",
    live: null,
    image: "/projects/multiversal.jpg"
  },
  
  // Websites
  {
    name: "Bitsyll",
    description: "A comprehensive platform for BIT Mesra students that provides centralized access to study materials, lecture notes, assignments, and previous year question papers to enhance the learning experience.",
    category: "websites",
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/SH20RAJ/bitsyll",
    live: "https://bitsyll.pages.dev/",
    image: "https://socialify.git.ci/SH20RAJ/bitsyll/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto"
  },
  {
    name: "PeerDrop",
    description: "A privacy-focused, peer-to-peer file sharing app that enables secure, serverless file transfers. Files are end-to-end encrypted via WebRTC and never touch any third-party server.",
    category: "websites",
    tech: ["WebRTC", "JavaScript", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/SH20RAJ/peerdrop",
    live: "https://peerdrop.sh20raj.com/",
    image: "https://socialify.git.ci/SH20RAJ/peerdrop/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto"
  },
  {
    name: "GitProxy",
    description: "GitHub API proxy and wrapper",
    category: "websites",
    tech: ["Node.js", "Express", "GitHub API"],
    github: "https://github.com/SH20RAJ/gitproxy",
    live: null,
    image: "/projects/gitproxy.jpg"
  },
  {
    name: "Image BG Remover",
    description: "Background removal tool for images",
    category: "websites",
    tech: ["JavaScript", "Canvas API", "ML"],
    github: "https://github.com/SH20RAJ/image-bg-remover",
    live: null,
    image: "/projects/image-bg-remover.jpg"
  },
  {
    name: "DevArt React",
    description: "Creative coding platform for developers",
    category: "websites",
    tech: ["React", "Canvas API", "WebGL"],
    github: "https://github.com/SH20RAJ/devart-react",
    live: null,
    image: "/projects/devart-react.jpg"
  },
  {
    name: "Waitlist.js",
    description: "Tool for creating and managing waitlists",
    category: "websites",
    tech: ["JavaScript", "Firebase", "Email API"],
    github: "https://github.com/SH20RAJ/waitlist.js",
    live: null,
    image: "/projects/waitlist.jpg"
  },
  {
    name: "SocialScribe",
    description: "Social media content scheduler and manager",
    category: "websites",
    tech: ["React", "Social APIs", "Node.js"],
    github: "https://github.com/SH20RAJ/SocialScribe",
    live: null,
    image: "/projects/socialscribe.jpg"
  },
  
  // Desktop Apps
  {
    name: "TubeSonic",
    description: "Desktop YouTube music player with enhanced features",
    category: "desktop",
    tech: ["Electron", "YouTube API", "React"],
    github: "https://github.com/SH20RAJ/TubeSonic",
    live: null,
    image: "/projects/tubesonic.jpg"
  },
  {
    name: "NoMouse",
    description: "Keyboard-only navigation tool for desktop",
    category: "desktop",
    tech: ["Electron", "JavaScript", "Accessibility"],
    github: "https://github.com/SH20RAJ/nomouse",
    live: null,
    image: "/projects/nomouse.jpg"
  },
  
  // JS Frameworks
  {
    name: "SopPlayer",
    description: "A sleek and feature-rich HTML5 video player that enhances the visual experience of videos on web pages. Offers compatibility across devices and browsers with intuitive controls and customizable options.",
    category: "jsframeworks",
    tech: ["JavaScript", "HTML5 Video", "CSS", "Media API"],
    github: "https://github.com/SH20RAJ/Sopplayer",
    live: "https://sh20raj.github.io/Sopplayer/",
    image: "https://socialify.git.ci/SH20RAJ/Sopplayer/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto"
  },
  {
    name: "SoundWave",
    description: "A modern and customizable HTML5 audio player library with advanced features including waveform visualization, volume/speed controls, loop functionality, and theming support for creating sleek audio experiences.",
    category: "jsframeworks",
    tech: ["JavaScript", "Web Audio API", "HTML5", "CSS"],
    github: "https://github.com/SH20RAJ/soundwave",
    live: "https://sh20raj.github.io/soundwave/",
    image: "https://socialify.git.ci/SH20RAJ/soundwave/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto"
  },
  {
    name: "Vibly",
    description: "Interactive animations and transitions framework",
    category: "jsframeworks",
    tech: ["JavaScript", "CSS Animations", "DOM"],
    github: "https://github.com/SH20RAJ/vibly",
    live: null,
    image: "/projects/vibly.jpg"
  },
  {
    name: "MarkMind Editor",
    description: "Markdown editor with mind-mapping features",
    category: "jsframeworks",
    tech: ["JavaScript", "Markdown", "SVG"],
    github: "https://github.com/SH20RAJ/markmind-editor",
    live: null,
    image: "/projects/markmind-editor.jpg"
  },
  {
    name: "SteamLit",
    description: "A lightweight Node.js framework for building reactive, data-driven web applications with minimal effort. Features include reactive components, easy API, data visualization tools, and customizable extensions.",
    category: "jsframeworks",
    tech: ["JavaScript", "Node.js", "Web Components", "Data Visualization"],
    github: "https://github.com/SH20RAJ/steamlit",
    live: "https://sh20raj.github.io/steamlit/",
    image: "https://socialify.git.ci/SH20RAJ/steamlit/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto"
  },
  {
    name: "OctoPress",
    description: "A modern blogging platform that turns GitHub Issues into a CMS for your blog, featuring a beautiful UI with dark mode, SEO optimization, and customizable settings through a simple configuration file.",
    category: "jsframeworks",
    tech: ["Next.js", "GitHub API", "React", "JavaScript", "CSS"],
    github: "https://github.com/SH20RAJ/OctoPress",
    live: "https://octopress.netlify.app",
    image: "https://socialify.git.ci/SH20RAJ/OctoPress/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto"
  },
  {
    name: "YouTube Remote Uploader",
    description: "Remote upload and management tool for YouTube",
    category: "jsframeworks",
    tech: ["JavaScript", "YouTube API", "Node.js"],
    github: "https://github.com/SH20RAJ/youtube-remote-uploader",
    live: null,
    image: "/projects/youtube-remote-uploader.jpg"
  },
  
  // Fun Projects
  {
    name: "Sequence Game",
    description: "Pattern recognition and memory game",
    category: "fun",
    tech: ["JavaScript", "Canvas", "Game Development"],
    github: "https://github.com/SH20RAJ/sequence-game",
    live: null,
    image: "/projects/sequence-game.jpg"
  },
  {
    name: "SopGame",
    description: "HTML5 game development framework",
    category: "fun",
    tech: ["JavaScript", "Canvas", "Game Development"],
    github: "https://github.com/SH20RAJ/sopgame",
    live: null,
    image: "/projects/sopgame.jpg"
  },
  
  // VS Code Extensions
  {
    name: "CodeSeek",
    description: "AI-powered coding assistant for VS Code with DeepSeek integration. Features intelligent code completion, chat assistance, name suggestions, and README generation for a supercharged coding workflow.",
    category: "vscode",
    tech: ["JavaScript", "VS Code API", "DeepSeek AI", "Extensions"],
    github: "https://github.com/SH20RAJ/CodeSeek",
    live: "https://marketplace.visualstudio.com/items?itemName=sh20raj.codeseek-shade",
    image: "https://socialify.git.ci/SH20RAJ/CodeSeek/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto"
  },
  
  // Chrome Extensions
  {
    name: "Toggle Search Engine",
    description: "Quickly switch between search engines in Chrome",
    category: "chrome",
    tech: ["JavaScript", "Chrome API"],
    github: "https://github.com/SH20RAJ/toggle-search-engine",
    live: null,
    image: "/projects/toggle-search-engine.jpg"
  },
  
  // JS Libraries
  {
    name: "SafeStore",
    description: "Secure client-side storage library with encryption",
    category: "jslibraries",
    tech: ["JavaScript", "Encryption", "Storage APIs"],
    github: "https://github.com/SH20RAJ/SafeStore",
    live: null,
    image: "/projects/safestore.jpg"
  },
  {
    name: "Create TanStack App",
    description: "CLI tool for starting TanStack projects",
    category: "jslibraries",
    tech: ["JavaScript", "Node.js", "CLI"],
    github: "https://github.com/SH20RAJ/create-tanstack-app",
    live: null,
    image: "/projects/create-tanstack-app.jpg"
  },
  {
    name: "Create-GI",
    description: "Generate interactive documentation for GitHub projects",
    category: "jslibraries",
    tech: ["JavaScript", "Markdown", "GitHub API"],
    github: "https://github.com/SH20RAJ/create-gi",
    live: null,
    image: "/projects/create-gi.jpg"
  },
  {
    name: "BitPlayer",
    description: "Lightweight audio player library",
    category: "jslibraries",
    tech: ["JavaScript", "Web Audio API"],
    github: "https://github.com/SH20RAJ/bitplayer",
    live: null,
    image: "/projects/bitplayer.jpg"
  },
  {
    name: "SheetFlow",
    description: "Library for working with spreadsheet data in JavaScript",
    category: "jslibraries",
    tech: ["JavaScript", "Data Manipulation"],
    github: "https://github.com/SH20RAJ/SheetFlow",
    live: null,
    image: "/projects/sheetflow.jpg"
  },
  {
    name: "Sanskrit",
    description: "Library for Sanskrit text processing and transliteration",
    category: "jslibraries",
    tech: ["JavaScript", "NLP", "Linguistics"],
    github: "https://github.com/SH20RAJ/sanskrit",
    live: null,
    image: "/projects/sanskrit.jpg"
  },
  
  // Mobile Apps
  {
    name: "AuraAI",
    description: "A next-generation smart keyboard app built with React Native and Expo, featuring AI-powered text prediction, multiple themes, customization options, and haptic feedback for an enhanced typing experience.",
    category: "mobile",
    tech: ["React Native", "Expo", "AI", "TypeScript"],
    github: "https://github.com/SH20RAJ/AuraAI",
    live: "https://sh20raj.github.io/AuraAI/",
    image: "https://socialify.git.ci/SH20RAJ/AuraAI/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto"
  },
  
  // Scraping & Reverse Engineering
  {
    name: "OpenDictionaryAPI",
    description: "Free dictionary API created by scraping various sources",
    category: "scraping",
    tech: ["JavaScript", "Web Scraping", "API Development"],
    github: "https://github.com/SH20RAJ/OpenDictionaryAPI",
    live: null,
    image: "/projects/opendictionaryapi.jpg"
  },
  {
    name: "AISanta",
    description: "AI-powered holiday gift recommendation system",
    category: "scraping",
    tech: ["Python", "ML", "Web Scraping"],
    github: "https://github.com/SH20RAJ/aisanta",
    live: null,
    image: "/projects/aisanta.jpg"
  },
  {
    name: "Instagram Downloader Web",
    description: "Web-based Instagram media downloader",
    category: "scraping",
    tech: ["JavaScript", "API", "Media Processing"],
    github: "https://github.com/SH20RAJ/instagram-downloader-web",
    live: null,
    image: "/projects/instagram-downloader.jpg"
  },
  
  // PHP
  {
    name: "PHPGram",
    description: "Instagram-like social platform built with PHP",
    category: "php",
    tech: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/SH20RAJ/phpgram",
    live: null,
    image: "/projects/phpgram.jpg"
  },
  {
    name: "AppPages",
    description: "PHP framework for quick application development",
    category: "php",
    tech: ["PHP", "MVC", "Web Development"],
    github: "https://github.com/SH20RAJ/AppPages",
    live: null,
    image: "/projects/apppages.jpg"
  }
];
