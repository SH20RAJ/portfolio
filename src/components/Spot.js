import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button2 } from "./Button";

export function SpotlightPreview() {
  return (
    <div
      className="h-[50rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <div className="flex justify-center mt-4">
          <img
            src="https://github.com/sh20raj.png"
            alt="Logo"
            className="h-40 w-40 rounded-full shadow-lg mx-auto mb-4"
          />
        </div>
        <h1
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Welcome to My Portfolio
        </h1>
       
        <p
          className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Discover my journey as a developer, explore my projects, and learn about the skills that drive my passion for technology. Let's create something amazing together!
        </p>
        <div className="flex justify-center mt-4">
          <Button2>Explore</Button2>
        </div>
      </div>
    </div>
  );
}
