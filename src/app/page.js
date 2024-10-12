import { FloatingNavDemo } from "@/components/Nav";
import NavBar from "@/components/NavBar";
import { SpotlightPreview } from "@/components/Spot";
import { MySkills } from "@/components/MySkills";
import React from "react";
import { OtherSkills } from "@/components/OtherSkills";
import { Projects } from "@/components/Projects";
import Footer from "@/components/Footer";
export default function page() {
  return (
    <div>
      <NavBar />
      <SpotlightPreview />
      <div className="flex flex-col gap-4 m-20">
        <MySkills />
      </div>
      <div className="flex flex-col gap-4 m-20">
        <h1 className="text-4xl font-bold text-center ">Other <span className="text-primary underline decoration-wavy decoration-blue-500">Skills</span></h1>
        <OtherSkills />
      </div>
      <div className="flex flex-col gap-4 m-20">
        <h1 className="text-4xl font-bold text-center ">Projects <span className="text-primary underline decoration-wavy decoration-blue-500">I've Worked On</span></h1>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
