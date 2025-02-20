"use client";
import NavBar from "@/components/NavBar";
import { SpotlightPreview } from "@/components/Spot";
import React from "react";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import { DockDemo } from "@/components/Dock";
import Projects from "@/components/Projects";
import OurWork from "@/components/StartUps";
import AnimatedCursor from "react-animated-cursor";
import SplineHero from "@/components/SplineHero";

export default function page() {
  return (
    <div className="relative overflow-hidden">
      <SplineHero />
      {/* <SpotlightPreview /> */}
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      <div className="absolute bottom-0 left-[20%] right-0 top-[60%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      <div className="absolute bottom-0 right-[20%] top-[40%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />

      <div className="flex flex-col gap-4 sm:m-20">
        <h2 className="text-3xl font-bold sm:text-4xl text-center mb-8">
          Tech Stack
        </h2>
        <Skills />
      </div>

      <Projects />

      <OurWork />
      <Footer />

      <div className="fixed bottom-0 left-0 right-0">
        <DockDemo />
      </div>

      <AnimatedCursor
        color="222,222,222"
        innerSize={10}
        outerSize={40}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0.2}
        outerStyle={{
          mixBlendMode: "donut",
        }}
      />
    </div>
  );
}
