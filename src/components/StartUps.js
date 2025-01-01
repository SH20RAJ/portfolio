import React from "react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const startups = [
  {
    name: "Apped",
    description:
      "Apped is a platform that allows you to create and share your own apps",
    image: "https://i.imgur.com/AO3uFOm.png",
    url: "https://apped.me",
    github: "https://github.com/SH20RAJ/Apped",
    technologies: ["Next.js", "Tailwind CSS"],
    status: "live",
  },
  {
    name: "CreoYT",
    description:
      "Welcome to CreoYT, the all-in-one platform to help YouTube creators grow and manage their channels effortlessly! 🚀",
    image: "https://creoyt.netlify.app/og-image.png",
    url: "https://creoyt.netlify.app/",
    github: "https://github.com/SH20RAJ/creoyt",
    technologies: ["NextJS", "MySQL", "AuthJS", "Tailwind CSS"],
    status: "beta",
  },
  {
    name: "Article Shade",
    description:
      "Welcome to article.shade.cool, a free and open-source blogging platform where you can post your articles on various genres and publish them effortlessly. Our platform handles all the subsequent tasks, including classification, audience management, SEO, and outreach, so you can focus solely on expressing yourself.",
    image: "https://i.imgur.com/Y7aQxgh.png",
    url: "https://article.shade.cool",
    github: "https://github.com/SH20RAJ/Article",
    technologies: [
      "Next.js",
      "MDX",
      "Prisma",
      "PostgreSQL",
      "AuthJS",
      "Tailwind CSS",
    ],
    status: "alpha",
  },
];

const OurWork = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Startups
          </h2>
          <p className="mt-4 text-muted-foreground">
            Building innovative solutions to solve real-world problems
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {startups.map((startup, index) => (
            <div
              key={startup.name}
              className="group flex flex-col md:flex-row gap-8 bg-card rounded-xl borders border-border/40 hover:border-border/80 transition-all overflow-hidden"
            >
              {/* Image Section */}
              <div
                className={`md:w-1/2 ${index % 2 === 1 ? "md:order-last" : ""}`}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={
                      startup.image ||
                      "https://cdn.statically.io/og/theme=dark/" +
                        startup.name +
                        ".png"
                    }
                    alt={startup.name}
                    className="object-cover w-full h-full transition duration-300 group-hover:scale-105 rounded-lg shadow-xl"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold">{startup.name}</h3>
                  <span
                    className={`
                                        px-2.5 py-0.5 text-xs font-semibold rounded-full
                                        ${
                                          startup.status === "live"
                                            ? "bg-green-100 text-green-800"
                                            : startup.status === "beta"
                                            ? "bg-blue-100 text-blue-800"
                                            : "bg-orange-100 text-orange-800"
                                        }
                                    `}
                  >
                    {startup.status}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6">
                  {startup.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {startup.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-accent/10 text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={startup.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <IconBrandGithub className="w-4 h-4" />
                    Source
                  </a>
                  <a
                    href={startup.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <IconExternalLink className="w-4 h-4" />
                    Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
