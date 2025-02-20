import React from "react";
import {
  IconBrandGithub,
  IconExternalLink,
  IconTerminal2,
  IconEaseInOut,
  IconArticle,
} from "@tabler/icons-react";

const projects = [
  {
    title: "CoolShade",
    description:
      "Protect Nurture Accessible our heritage and culture | SIH Project",
    image: "https://i.imgur.com/Ug93rCx.png",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/SH20RAJ/CoolShade",
    demo: "https://shade.cool",
    icon: <IconTerminal2 className="w-6 h-6" />,
  },
  {
    title: "Pics",
    description: "Pics - Image Hosting Made Easy",
    image: "https://i.imgur.com/cJpLL1c.png",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/SH20RAJ/Pics",
    demo: "https://pics.shade.cool",
    icon: <IconEaseInOut className="w-6 h-6" />,
  },
  {
    title: "Sopplayer",
    description: "Sopplayer - HTML5 Stylish Video Player",
    image:
      "https://1.bp.blogspot.com/-MXdsGGbh59A/X-cM2B2eQ6I/AAAAAAAAAZU/KLEP-6BI85gMXR-7NjBWIdxnCKyIaNzbACLcBGAsYHQ/w640-h361/sopplayer.JPG",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/SH20RAJ/Sopplayer",
    demo: "https://sh20raj.github.io/Sopplayer/",
    icon: <IconTerminal2 className="w-6 h-6" />,
  },
  {
    title: "BitSyll",
    description:
      "Welcome to the BIT Mesra Study Repository! This repository is designed to provide a centralized location for students to access study materials, resources, and collaborate on projects.",
    image: "https://bitsyll.pages.dev/BITSYLL.png",
    technologies: ["NextJS", "ShadCN", "Tailwind CSS"],
    github: "https://github.com/SH20RAJ/bitsyll",
    demo: "https://bitsyll.pages.dev",
    icon: <IconEaseInOut className="w-6 h-6" />,
  },
  {
    title: "OctoPress",
    description:
      "Transform your GitHub Issues into a powerful CMS for your blog! Built with Next.js, featuring automatic SEO optimization, server-side rendering, and flexible deployment options.",
    image:
      "https://repository-images.githubusercontent.com/908621796/74f23302-57dd-4d04-966c-8fcb678be778",
    technologies: ["Next.js", "GitHub API", "SSR", "SEO"],
    github: "https://github.com/SH20RAJ/OctoPress",
    demo: "https://octopress.netlify.app/",
    icon: <IconArticle className="w-6 h-6" />,
  },
];

export default function Projects() {
  return (
    <section className="py-16 bg-background" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl overflow-hidden border border-border/40 hover:border-border/80 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                {project.icon}
              </div>

              <div className="aspect-video overflow-hidden bg-accent/5">
                <img
                  src={
                    project.image ||
                    "https://cdn.statically.io/og/theme=dark/" +
                      project.title +
                      ".png"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <IconBrandGithub className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <IconExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="group relative bg-card rounded-xl overflow-hidden border border-border/40 hover:border-border/80 transition-all duration-300">
            <div className="h-full flex flex-col items-center justify-center p-6">
              <div className="text-4xl mb-4">👀</div>
              <h3 className="text-xl font-semibold mb-2">See More</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Check out more of my projects on GitHub
              </p>
              <a
                href="https://github.com/SH20RAJ?page=2&tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <IconBrandGithub className="w-4 h-4" />
                View More Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
