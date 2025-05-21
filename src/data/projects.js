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
    description: "A collaborative note-taking application with real-time updates",
    category: "fullstack",
    tech: ["Next.js", "React", "MongoDB"],
    github: "https://github.com/SH20RAJ/notesflow",
    live: null,
    image: "/projects/notesflow.jpg"
  },
  {
    name: "Reflecto",
    description: "A journaling platform with mood analysis and insights",
    category: "fullstack",
    tech: ["React", "Node.js", "Express"],
    github: "https://github.com/SH20RAJ/reflecto",
    live: null,
    image: "/projects/reflecto.jpg"
  },
  {
    name: "SketchFlow",
    description: "Collaborative digital whiteboard for brainstorming",
    category: "fullstack",
    tech: ["JavaScript", "Canvas API", "WebSockets"],
    github: "https://github.com/SH20RAJ/sketchflow",
    live: null,
    image: "/projects/sketchflow.jpg"
  },
  {
    name: "PlayTube",
    description: "Video sharing and streaming platform",
    category: "fullstack",
    tech: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/SH20RAJ/playtube",
    live: null,
    image: "/projects/playtube.jpg"
  },
  {
    name: "Scaleboard",
    description: "Analytics dashboard with customizable widgets",
    category: "fullstack",
    tech: ["React", "Chart.js", "Firebase"],
    github: "https://github.com/SH20RAJ/scaleboard",
    live: null,
    image: "/projects/scaleboard.jpg"
  },
  {
    name: "AayeChup",
    description: "Chat application with focus on privacy",
    category: "fullstack",
    tech: ["React", "Socket.io", "Express"],
    github: "https://github.com/SH20RAJ/aayechup",
    live: null,
    image: "/projects/aayechup.jpg"
  },
  {
    name: "CreoYT",
    description: "YouTube video creation tools and analytics",
    category: "fullstack",
    tech: ["Vue.js", "YouTube API", "Node.js"],
    github: "https://github.com/SH20RAJ/creoyt",
    live: null,
    image: "/projects/creoyt.jpg"
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
    description: "URL shortener with analytics",
    category: "websites",
    tech: ["JavaScript", "API", "CSS"],
    github: "https://github.com/SH20RAJ/bitsyll",
    live: null,
    image: "/projects/bitsyll.jpg"
  },
  {
    name: "PeerDrop",
    description: "Peer-to-peer file sharing web application",
    category: "websites",
    tech: ["WebRTC", "JavaScript", "P2P"],
    github: "https://github.com/SH20RAJ/peerdrop",
    live: null,
    image: "/projects/peerdrop.jpg"
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
    description: "Advanced HTML5 video player framework",
    category: "jsframeworks",
    tech: ["JavaScript", "HTML5 Video", "CSS"],
    github: "https://github.com/SH20RAJ/Sopplayer",
    live: null,
    image: "/projects/sopplayer.jpg"
  },
  {
    name: "SoundWave",
    description: "Audio visualization and manipulation library",
    category: "jsframeworks",
    tech: ["JavaScript", "Web Audio API", "Canvas"],
    github: "https://github.com/SH20RAJ/soundwave",
    live: null,
    image: "/projects/soundwave.jpg"
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
    description: "UI component library for web applications",
    category: "jsframeworks",
    tech: ["JavaScript", "CSS", "Web Components"],
    github: "https://github.com/SH20RAJ/steamlit",
    live: null,
    image: "/projects/steamlit.jpg"
  },
  {
    name: "OctoPress",
    description: "Static site generator for blogging",
    category: "jsframeworks",
    tech: ["JavaScript", "Markdown", "Static Sites"],
    github: "https://github.com/SH20RAJ/OctoPress",
    live: null,
    image: "/projects/octopress.jpg"
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
    description: "Code search and navigation extension for VS Code",
    category: "vscode",
    tech: ["TypeScript", "VS Code API"],
    github: "https://github.com/SH20RAJ/CodeSeek",
    live: null,
    image: "/projects/codeseek.jpg"
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
    description: "AI-powered personal assistant mobile app",
    category: "mobile",
    tech: ["React Native", "AI", "Mobile Development"],
    github: "https://github.com/SH20RAJ/AuraAI",
    live: null,
    image: "/projects/auraai.jpg"
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
