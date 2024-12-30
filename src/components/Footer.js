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
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">
              Stay Connected!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Follow me on social media and let&apos;s connect!
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <a href="https://x.com/sh20raj" target="_blank">
              <button
                className=" text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <IconBrandTwitter />
                </button>
              </a>
              <a href="https://github.com/SH20RAJ" target="_blank">
                <button
                  className=" text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
              >
                <IconBrandGithub />
                </button>
              </a>
              <a href="https://www.linkedin.com/in/sh20raj/" target="_blank">
                <button
                  className=" text-lightBlue-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
              >
                  <IconBrandLinkedin />
                </button>
              </a>
              <a href="https://codepen.io/sh20raj" target="_blank">
                <button
                  className=" text-lightBlue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <IconBrandCodepen />
                </button>
              </a>
              <a href="https://dev.to/sh20raj" target="_blank">
                <button
                  className=" text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <IconCode />
                </button>
              </a>
            </div>
          </div>
          
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2025</span>
              <a
                href="https://github.com/SH20RAJ"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              >
                {" | "}
                SH20RAJ
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
