import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button2 } from "./Button";
import Image from "next/image";
import Link from "next/link";

export function SpotlightPreview() {
  return (
    <div
      className="h-[50rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
      style={{
        backgroundImage: "url('/intro-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(10px)'
      }}
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 backdrop-blur-sm">
        <div className="flex justify-center mt-4 ">
          <Image
            src="https://github.com/sh20raj.png"
            alt="Logo"
            height="100"
            width="100"
            className="h-40 w-40 rounded-full shadow-lg mx-auto mb-4"
          />
        </div>
        <h1
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
          Welcome to <span className="text-fuchsia-400">My Portfolio</span>
        </h1>
       
        <p
          className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Discover my journey as a developer, explore my projects, and learn about the skills that drive my passion for technology. Let&apos;s create something amazing together!
        </p>
        {/* <p className="mt-4 font-normal text-base text-neutral-500 max-w-lg text-center mx-auto">
          This website is under <span className="text-neutral-300">construction</span>.
        </p> */}
        <div className="flex justify-center gap-4 mt-4">
          <Link href={"#explore"}><Button2>Explore</Button2></Link>
          <Link className="" href={"https://docs.google.com/document/d/1_c8_1teca5JlCIFnsSC0rqoHcvxD5VJrlE-DeKZSXf4/edit?usp=sharing"}><Button2 clas=" bg-fuchsia-400">Resume</Button2></Link>
        </div>
      </div>
    </div>
  );
}
