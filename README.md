# Modern Portfolio Website

![Modern Portfolio Website](https://img.shields.io/badge/Portfolio-2025-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)
![Cloudflare](https://img.shields.io/badge/Cloudflare-D1-orange)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, sleek, and performant portfolio website built with Next.js, TailwindCSS, Framer Motion, and Cloudflare workers. This portfolio is designed to showcase your projects, skills, and experience with beautiful animations and a responsive design.

## 👨‍💻 About Me
Hi, I'm Shaswat Raj — a developer, designer, and dreamer.

I build thoughtful digital experiences and powerful tools that merge creativity with code. From crafting seamless UIs to launching AI-driven products and open-source projects, I love turning ideas into reality.

## 🛠️ Skills & Technologies

**Programming Languages**: JavaScript, TypeScript, PHP, Python, C, C++

**Frameworks & Libraries**: Next.js, React, Laravel, Remix

**Tools & Platforms**: GitHub, Docker, Visual Studio Code

**Specializations**: Open-source platforms, Web and App Development, Multimedia Tools

**Other Technologies**: RESTful APIs, Web Scraping, Blogging Platforms, DevOps, AWS, MySQL, DeploymentIntro
Hi, I’m Shaswat Raj — a developer, designer, and dreamer.

I build thoughtful digital experiences and powerful tools that merge creativity with code. From crafting seamless UIs to launching AI-driven products and open-source projects, I love turning ideas into reality.

# Can do 
**Programming Languages**: JavaScript, TypeScript, PHP, Python, C, C++

**Frameworks &amp; Libraries**: Next.js, React, Laravel, Remix

**Tools &amp; Platforms**: GitHub, Docker, Visual Studio Code

**Specializations**: Open-source platforms, Web and App Development, Multimedia Tools

**Other Technologies**: RESTful APIs, Web Scraping, Blogging Platforms, DevOps, AWS, MySQL, Deployment



# 🌐 Social

[![GitHub](https://img.shields.io/badge/GitHub-SH20RAJ-181717?logo=github&style=for-the-badge)](https://github.com/SH20RAJ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-sh20raj-0A66C2?logo=linkedin&style=for-the-badge)](https://linkedin.com/in/sh20raj)
[![Twitter](https://img.shields.io/badge/Twitter-SH20RAJ-1DA1F2?logo=twitter&style=for-the-badge)](https://twitter.com/SH20RAJ)


## ✨ Portfolio Features

- **Modern Design**: Clean, minimalist design with a focus on content
- **Fully Responsive**: Works flawlessly on all device sizes
- **Interactive UI**: Micro-interactions and smooth animations
- **Parallax Effects**: Subtle parallax effects in the About section
- **Dark Mode Support**: Automatic and manual theme switching
- **Cloudflare Integration**: Backend powered by Cloudflare Workers and D1 Database
- **SEO Optimized**: Meta tags, OpenGraph, and proper semantic HTML
- **Performance Focused**: Optimized assets and fast page loads
- **Accessibility**: Built with accessibility in mind, including reduced motion preferences

## 🧩 Website Sections

- **Hero**: Professional introduction with animated elements
- **About**: Personal bio with parallax animations
- **Experience**: Work experience timeline
- **Skills**: Technical skills and competencies
- **Projects**: Portfolio of completed projects with consistent aspect ratios
- **Blog**: Recent blog posts and articles
- **Contact**: Contact form with Cloudflare D1 database integration

## 🚀 Tech Stack

- **Frontend**:
  - Next.js 15.3.2
  - React 19
  - TailwindCSS 4
  - Framer Motion
  - Three.js for 3D effects

- **Backend/Deployment**:
  - Cloudflare Workers
  - Cloudflare D1 Database
  - OpenNext for Cloudflare integration

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Cloudflare account (for deployment and D1 database)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SH20RAJ/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Cloudflare D1 Setup

To configure the contact form with Cloudflare D1:

1. Make sure you're logged in to Cloudflare:
   ```bash
   npx wrangler login
   ```

2. Run the setup script:
   ```bash
   npm run setup-d1
   ```

3. The script will:
   - Create a new D1 database named "portfolio_db"
   - Update your wrangler.jsonc with the database ID
   - Run the migration to create the necessary tables

4. For local development with D1:
   ```bash
   npm run d1-local
   ```

5. For production database migrations:
   ```bash
   npm run d1-prod
   ```

### Cloudflare D1 Database Integration

The portfolio site uses Cloudflare D1 (SQLite at the edge) to store contact form submissions:

- **Schema Definition**: Located in `/migrations/0000_create_contacts_table.sql`
- **API Endpoint**: The `/api/contact` route handles form submissions 
- **Environment Configuration**: Defined in `cloudflare-env.d.ts` for type safety
- **Error Handling**: Robust error handling with fallback mechanisms
- **Local Development**: Support for both local and production environments

The contact form automatically detects whether the D1 database is available and falls back to a mailto link if needed, ensuring users can always send messages.

## 📦 Project Structure

```
├── public/             # Static assets
├── migrations/         # D1 database migrations
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── api/        # API routes for Cloudflare
│   │   ├── projects/   # Projects page 
│   │   └── ...         # Other pages
│   ├── components/     # React components
│   │   ├── sections/   # Page sections
│   │   └── ui/         # Reusable UI components
│   ├── data/           # Static data
│   └── utils/          # Utility functions
├── scripts/            # Helper scripts
├── cloudflare-env.d.ts # Cloudflare environment types
└── wrangler.jsonc      # Cloudflare configuration
```

## 🎨 Notable Features

### Modern Navbar with Micro-interactions

The navbar features:
- Smooth transitions between transparent and glassmorphic backgrounds based on scroll position
- Active link indicators with Framer Motion animations and layoutId for smooth transitions
- Hover glow effects with scaling and color transitions
- Mouse hover tracking with subtle animations
- Mobile-friendly drawer menu with staggered animations for each menu item
- Enhanced visual feedback for interactive elements

### Parallax Effects

The About section includes:
- Mouse-movement tracking effects that respond to cursor position
- Multiple layered elements moving at different speeds for depth
- Accessibility considerations via the `prefers-reduced-motion` media query
- Subtle background gradient animations with Framer Motion
- Performance optimizations to ensure smooth animation even on lower-end devices

### Contact Form with D1 Database

The contact form includes:
- Cloudflare D1 database integration for storing submissions at the edge
- Improved input field animations with clean floating labels (no blur effect)
- Spring-based animations for smoother, more natural movement
- Enhanced form validation with helpful error messages
- Fallback to email if database connection fails
- Success/error status indicators with animated transitions

### Responsive Grid Layout

Projects are displayed with:
- Consistent aspect ratios (16:9) achieved through proper CSS techniques
- Padding-bottom technique to maintain proportions across all screen sizes
- Optimized image loading with proper sizing and formats
- Smooth hover animations with subtle scale effects
- Uniform card heights for visual consistency
- Increased spacing between grid items for better visual separation

## 🚢 Deployment

This portfolio is optimized for deployment on Cloudflare Pages:

```bash
npm run deploy
```

## 🔄 Recent Updates (May 2025)

### 1. Modernized Navbar
- Added micro-interactions to menu items
- Improved glassmorphism effect with enhanced transitions
- Added hover glow effects and visual feedback
- Optimized mobile drawer menu animations

### 2. Cloudflare D1 Database Integration
- Integrated contact form with D1 database for submission storage
- Added proper environment detection and fallback mechanisms
- Created migration scripts for setting up D1 database
- Implemented error handling and validation

### 3. Form Field Improvements
- Removed blur from form field labels
- Enhanced animations with smoother spring physics
- Improved accessibility and visual clarity
- Optimized focus states and transitions

## 📝 License

This project is MIT licensed. 

## 🙏 Credits

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Deployment using [OpenNext](https://open-next.js.org/)

---

Created with ❤️ by [Shaswat Raj](https://github.com/SH20RAJ)
- [LinkedIn](https://www.linkedin.com/in/sh20raj/)

- [Resume](https://docs.google.com/document/d/1_c8_1teca5JlCIFnsSC0rqoHcvxD5VJrlE-DeKZSXf4/edit?usp=sharing)

- [Portfolio](https://shaswat.live/)

- [Codepen](https://codepen.io/sh20raj)

- [Email](mailto:sh20raj@gmail.com)

- [Twitter](https://x.com/SH20RAJ/)

- [Dev Community](https://dev.to/sh20raj)
- github - https://github.com/sh20raj

















# Projects






# Full-Stack Websites
https://github.com/SH20RAJ/notesflow

https://github.com/SH20RAJ/reflecto

https://github.com/SH20RAJ/sketchflow

https://github.com/SH20RAJ/playtube

https://github.com/SH20RAJ/scaleboard

https://github.com/SH20RAJ/aayechup

https://github.com/SH20RAJ/creoyt

https://github.com/SH20RAJ/article

https://github.com/SH20RAJ/Multiversal





# Websites
https://github.com/SH20RAJ/bitsyll

https://github.com/SH20RAJ/peerdrop

https://github.com/SH20RAJ/gitproxy

https://github.com/SH20RAJ/image-bg-remover

https://github.com/SH20RAJ/devart-react

https://github.com/SH20RAJ/waitlist.js

https://github.com/SH20RAJ/SocialScribe











# Desktop Apps
https://github.com/SH20RAJ/TubeSonic

https://github.com/SH20RAJ/nomouse







# JS Frameworks
https://github.com/SH20RAJ/Sopplayer

https://github.com/SH20RAJ/soundwave

https://github.com/SH20RAJ/vibly

https://github.com/SH20RAJ/markmind-editor

https://github.com/SH20RAJ/steamlit

https://github.com/SH20RAJ/OctoPress

https://github.com/SH20RAJ/youtube-remote-uploader







# Fun Projects
https://github.com/SH20RAJ/sequence-game

https://github.com/SH20RAJ/sopgame









# VS Code Extensions
https://github.com/SH20RAJ/CodeSeek



# Chrome Extensions
https://github.com/SH20RAJ/toggle-search-engine





# JS Libraries
https://github.com/SH20RAJ/SafeStore

https://github.com/SH20RAJ/create-tanstack-app

https://github.com/SH20RAJ/create-gi

https://github.com/SH20RAJ/bitplayer

https://github.com/SH20RAJ/SheetFlow

https://github.com/SH20RAJ/sanskrit



# Mobile Apps
https://github.com/SH20RAJ/AuraAI





# Scrapping &amp; Reverse Engineering
https://github.com/SH20RAJ/OpenDictionaryAPI

https://github.com/SH20RAJ/aisanta

https://github.com/SH20RAJ/instagram-downloader-web



# Php
https://github.com/SH20RAJ/phpgram

https://github.com/SH20RAJ/AppPages













# Skills


  const skillImages = {
    js: "https://www.svgrepo.com/show/452045/js.svg",
    next: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png",
    react: "https://www.svgrepo.com/show/452092/react.svg",
    node: "https://www.svgrepo.com/show/376337/node-js.svg",
    python: "https://www.svgrepo.com/show/452091/python.svg",
    html: "https://www.svgrepo.com/show/452228/html-5.svg",
    css: "https://www.svgrepo.com/show/452185/css-3.svg",
    php: "https://www.svgrepo.com/show/373969/php2.svg",
    mysql: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
    mongodb: "https://www.svgrepo.com/show/303232/mongodb-logo.svg",
    git: "https://www.svgrepo.com/show/452210/git.svg",
    github: "/icons/github.gif",
    cloudflare: "https://www.svgrepo.com/show/353564/cloudflare.svg",
    aws: "https://www.svgrepo.com/show/373458/aws.svg",
    telegram: "https://www.svgrepo.com/show/452115/telegram.svg",
    discord: "https://www.svgrepo.com/show/331368/discord-v2.svg",
    whatsapp: "https://www.svgrepo.com/show/475692/whatsapp-color.svg",
  };




---

profile photo - https://media.licdn.com/dms/image/v2/D4D03AQFIkAHICJTVYw/profile-displayphoto-shrink_800_800/B4DZQhkEXAGkAc-/0/1735729938543?e=1753315200&v=beta&t=GptGGwd6YA17Nn8fyoUd50mp-7axqaOEELY-Z7kfOSA



