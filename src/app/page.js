import NavBar from "@/components/NavBar";
import { SpotlightPreview } from "@/components/Spot";
import React from "react";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import { DockDemo } from "@/components/Dock";
export default function page() {
  return (
    <div className="relative">
      <NavBar />
      <SpotlightPreview />
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      <div className="absolute bottom-0 left-[20%] right-0 top-[60%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      <div className="absolute bottom-0 right-[20%] top-[40%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />

      <div className="flex flex-col gap-4 sm:m-20">
        <Skills />
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <DockDemo />
      </div>

      <Footer />
    </div>
  );
}
