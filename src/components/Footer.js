/* eslint-disable react/no-unescaped-entities */
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandCodepen,
  IconCode,
} from "@tabler/icons-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative  bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-900 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-bold tracking-tight text-foreground">
              Let's Connect!
            </h4>
            <p className="mt-2 text-muted-foreground">
              Follow me on social media and let's build something amazing together.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://x.com/sh20raj" 
                target="_blank"
                className="inline-flex items-center justify-center size-10 rounded-full bg-background/95 border shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                <IconBrandTwitter className="size-5" />
              </a>
              
              <a 
                href="https://github.com/SH20RAJ"
                target="_blank" 
                className="inline-flex items-center justify-center size-10 rounded-full bg-background/95 border shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                <IconBrandGithub className="size-5" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/sh20raj/"
                target="_blank"
                className="inline-flex items-center justify-center size-10 rounded-full bg-background/95 border shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                <IconBrandLinkedin className="size-5" />
              </a>
              
              <a 
                href="https://codepen.io/sh20raj"
                target="_blank"
                className="inline-flex items-center justify-center size-10 rounded-full bg-background/95 border shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                <IconBrandCodepen className="size-5" />
              </a>
              
              <a 
                href="https://dev.to/sh20raj"
                target="_blank"
                className="inline-flex items-center justify-center size-10 rounded-full bg-background/95 border shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                <IconCode className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Copyright © {new Date().getFullYear()}{" "}
              <a
                href="https://github.com/SH20RAJ"
                className="font-medium hover:text-foreground transition-colors"
                target="_blank"
              >
                SH20RAJ
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
