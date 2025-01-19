"use client";
import { motion } from "framer-motion";
import { IconBuildingSkyscraper } from "@tabler/icons-react";

const startups = [
  {
    title: "Shade Technologies",
    description: "Building developer tools and platforms for the modern web",
    status: "Active",
    year: "2023",
    icon: <IconBuildingSkyscraper />,
  },
  // Add more startups as needed
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-gray-300 text-lg">
          I&apos;m a passionate developer and entrepreneur, focused on creating
          innovative solutions that make a difference. With expertise in
          full-stack development and a keen eye for design, I build tools and
          platforms that empower developers and businesses.
        </p>
      </motion.div>

      {/* Startups Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Startups</h2>
        <div className="grid gap-6">
          {startups.map((startup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="text-blue-400 text-2xl">{startup.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{startup.title}</h3>
                  <p className="text-gray-400">{startup.description}</p>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span className="text-green-400">
                      Status: {startup.status}
                    </span>
                    <span className="text-blue-400">
                      Founded: {startup.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-blue-400 text-2xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
