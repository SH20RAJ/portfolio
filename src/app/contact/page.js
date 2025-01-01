"use client";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    window.location.href = "https://www.linkedin.com/in/sh20raj/";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg">Redirecting to LinkedIn...</p>
        <p className="mt-2">
          If you are not redirected,{" "}
          <a
            href="https://www.linkedin.com/in/sh20raj/"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
