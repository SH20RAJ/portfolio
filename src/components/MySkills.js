"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function MySkills() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "React",
    link: "https://react.dev",
    thumbnail:
      "https://ecodesoft.com/wp-content/uploads/2022/10/react.jpg",
  },
  {
    title: "Next.js",
    link: "https://nextjs.org",
    thumbnail:
      "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75",
  },
  {
    title: "Tailwind CSS",
    link: "https://tailwindcss.com",
    thumbnail:
      "https://tailwindcss.com/_next/static/media/card.a1cd9cff.jpg",
  },

  {
    title: "Typescript",
    link: "https://www.typescriptlang.org",
    thumbnail:
      "https://assets-eu-01.kc-usercontent.com/093b835c-5333-0132-0526-5bdca2623961/36961122-2fd0-4bd1-8aad-40c4c5dfa139/benefits_of_typescript_without_typescript_blog_index.webp",
  },
  {
    title: "Python",
    link: "https://www.python.org",
    thumbnail:
      "https://ciracollege.com/wp-content/uploads/2020/11/How-to-Learn-Python.jpg",
  },
  {
    title: "Django",
    link: "https://www.djangoproject.com",
    thumbnail:
      "https://www.djangoproject.com/m/img/logos/django-logo-negative.png",
  },

  {
    title: "Flask",
    link: "https://flask.palletsprojects.com",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:640/1*dKU4uBSnJCs4jzkkuiALoQ.png",
  },
  {
    title: "Git and Github",
    link: "https://github.com",
    thumbnail:
      "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    title: "Docker",
    link: "https://www.docker.com",
    thumbnail:
      "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
  },
  {
    title: "AWS",
    link: "https://aws.amazon.com",
    thumbnail:
      "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  },
  {
    title: "Linux",
    link: "https://www.linux.org",
    thumbnail:
      "https://www.vectorlogo.zone/logos/linux/linux-icon.svg",
  },

  {
    title: "Database",
    link: "https://www.sqlite.org",
    thumbnail:
      "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
  },
  {
    title: "Tensorflow",
    link: "https://www.tensorflow.org",
    thumbnail:
      "https://www.tensorflow.org/images/tf_logo_social.png",
  },
  {
    title: "OpenCV",
    link: "https://opencv.org",
    thumbnail:
      "https://opencv.org/wp-content/uploads/2023/09/opencv-logo-white.png",
  },
  {
    title: "NLP",
    link: "https://www.nltk.org",
    thumbnail:
      "https://www.efreeinvoice.com/wp-content/uploads/2023/03/efreeinvoice-logo.png",
  },
];
