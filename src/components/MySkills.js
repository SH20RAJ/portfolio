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
    thumbnail: "https://ecodesoft.com/wp-content/uploads/2022/10/react.jpg",
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
      "https://made-byshape.transforms.svdcdn.com/production/uploads/images/tailwind-thumb.jpg?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1609771799&s=f4f2d93d9e2c9cf40b964258bf5cd4b1",
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
      "https://user-images.githubusercontent.com/6633808/160689302-3fe5e5d4-ba24-4525-8ed1-a8351ccbc0ef.png",
  },
  {
    title: "Docker",
    link: "https://www.docker.com",
    thumbnail: "https://logz.io/wp-content/uploads/2016/01/docker-facebook.png",
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
    thumbnail: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg",
  },

  {
    title: "Database",
    link: "https://www.sqlite.org",
    thumbnail: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
  },
  {
    title: "Tensorflow",
    link: "https://www.tensorflow.org",
    thumbnail:
      "https://www.netsolutions.com/insights/wp-content/uploads/2020/04/tensor-flow.webp",
  },
  {
    title: "OpenCV",
    link: "https://opencv.org",
    thumbnail:
      "https://pyimagesearch.com/wp-content/uploads/2018/05/opencv_tutorial_header.jpg",
  },
  {
    title: "NLP",
    link: "https://www.nltk.org",
    thumbnail:
      "https://www.efreeinvoice.com/wp-content/uploads/2023/03/efreeinvoice-logo.png",
  },
];
