import { FloatingNavDemo } from "@/components/Nav";
import NavBar from "@/components/NavBar";
import { SpotlightPreview } from "@/components/Spot";
import { MySkills } from "@/components/MySkills";
import React from "react";
import { OtherSkills } from "@/components/OtherSkills";
import { Projects } from "@/components/Projects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import { DockDemo } from "@/components/Dock";
export default function page() {
  return (
    <div className="relative">
      <NavBar />
      <SpotlightPreview />
      <Skills />
      
      <div className="flex flex-col gap-4 m-20">
        <h1 className="text-4xl font-bold text-center ">
          Projects{" "}
          <span className="text-primary underline decoration-wavy decoration-blue-500">
            I&apos;ve Worked On
          </span>
        </h1>
        <Projects />
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <DockDemo />
      </div>

      <Footer />
    </div>
  );
}
