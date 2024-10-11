import React from "react";
import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between p-4 shadow-lg backdrop-blur-md sticky top-0 z-50">
      <div className="text-lg font-bold">
        <CodeIcon className="mr-2 inline-block" /> SH20RAJ
      </div>
      <div className="flex space-x-4">
        <Button variant="link" className="" asChild>
          <a href="/">Home</a>
        </Button>
        <Button variant="link" className="" asChild>
          <a href="/about">About</a>
        </Button>
        <Button variant="link" className="" asChild>
          <a href="/contact">Contact</a>
        </Button>
      </div>
    </div>
  );
}
