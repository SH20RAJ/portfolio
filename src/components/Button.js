"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export function Button2({ children, clas }) {
  return (
    (<div className=" flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="div"
        className={"dark:bg-black bg-white text-black dark:text-white flex items-center space-x-10"+ clas}>
        <LinkedInLogoIcon className="text-blue-400" />
        <span className="ml-2">{children}</span>
      </HoverBorderGradient>
    </div>)
  );
}

