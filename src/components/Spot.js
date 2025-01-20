import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button2 } from "./Button";
import Image from "next/image";
import Link from "next/link";
import HyperText from "./ui/hyper-text";
import { ConfettiButton } from "./ui/confetti";
import { Button } from "./ui/button";
import { User2 } from "lucide-react";

export function SpotlightPreview() {
  return (
    <div
      className="h-[50rem] w-full rounded-md flex md:items-center md:justify-center   antialiased bg-grid-white/[0.02] relative overflow-hidden"
      // style={{
      //   backgroundImage:
      //     "url('https://media.licdn.com/dms/image/v2/D4D16AQFul3_I7fBVYw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1733342156445?e=1741219200&v=beta&t=8grJ0v87aDXELvxn5GjjgaMEMxMPKabIe4SWAqEvAgk')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backdropFilter: "blur(10px)",
      // }}
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 backdrop-blur-sm">
        <div className="flex justify-center mt-4 ">
          <Image
            src="https://media.licdn.com/dms/image/v2/D4D03AQFIkAHICJTVYw/profile-displayphoto-shrink_800_800/B4DZQhkEXAGkAc-/0/1735729938543?e=1741219200&v=beta&t=N1Vbujx_p42Fg21eHbJhU92Y0J6bfH3ID3VBTcHwI8w"
            alt="Logo"
            height="100"
            width="100"
            className="h-40 w-40 rounded-full shadow-lg mx-auto mb-4"
          />
        </div>
        <HyperText className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
          Welcome to My Portfolio
        </HyperText>

        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Discover my journey as a developer, explore my projects, and learn
          about the skills that drive my passion for technology. Let&apos;s
          create something amazing together!
        </p>
        {/* <p className="mt-4 font-normal text-base text-neutral-500 max-w-lg text-center mx-auto">
          This website is under <span className="text-neutral-300">construction</span>.
        </p> */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <ConfettiButton
            className="p-4 bg-transparent hover:bg-transparent"
            options={{
              get angle() {
                return Math.random() * 360;
              },
            }}
          >
            {" "}
            <Link
              className=" p-4"
              href={"https://www.linkedin.com/in/sh20raj/"}
            >
              <Button2 className=" bg-fuchsia-400 "> Connect</Button2>
            </Link>
          </ConfettiButton>

 
            <Link
              className=" p-4"
              href={"/solutions"}
            >
              <Button variant="outline" className="  rounded-lg "> <User2 className="mr-2 h-4 w-4" /> Solutions</Button>
            </Link>

        </div>
      </div>
    </div>
  );
}
