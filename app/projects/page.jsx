
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const [selectedType, setSelectedType] = useState("all");

  const projects = [
    {
      title: "Portfolio Website",
      type: "web",
      description: "A personal developer portfolio built using Next.js and Tailwind CSS.",
      githubLink: "https://github.com/23f1001556/portfolio",
      appLink: "https://portfolio-r6l4.vercel.app/",
      deployed: true,
      route: "/projects/portfolio",
      image: "/portfolio/image2.png",
      stack: ["Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Vehicle Parking App",
      type: "web",
      description: "A full-stack vehicle parking app powered by Vue.js and Flask.",
      githubLink: "https://github.com/23f1001556/Vehicle-Parking-App---V2",
      deployed: false,
      route: "#",
      image: "/diploma_1.png",
      stack: ["Vue.js", "Flask", "SQLite"]
    },
    {
      title: "Quiz Master",
      type: "web",
      description: "A full-stack quiz app supporting multi-user dashboards.",
      githubLink: "https://github.com/23f1001556/quiz-master-v1",
      appLink: "https://quiz-master-v1-dhtr.onrender.com/",
      deployed: true,
      route: "/projects/quiz-master",
      image: "/quizmaster/image1.png",
      stack: ["Flask", "Jinja2", "Bootstrap", "SQLite"]
    },
    {
      title: "Loop",
      type: "ai/ml",
      description: "A SaaS + AI communication platform.",
      githubLink: "https://github.com/23f1001556/Loop",
      deployed: false,
      route: "#",
      image: "/diploma_1.png",
      stack: ["Next.js", "Tailwind", "Prisma", "Neon"]
    },
    {
      title: "LensTales",
      type: "ai/ml",
      description: "AI-powered photography portfolio.",
      githubLink: "https://github.com/23f1001556/LensTales",
      appLink: "#",
      deployed: false,
      route: "#",
      image: "/diploma_1.png",
      stack: ["Vue.js", "Firebase", "Vercel"]
    }
  ];


  const filteredProjects =
    selectedType === "all"
      ? projects
      : projects.filter((p) => p.type === selectedType);

  return (
    <div className="px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-2">Projects</h1>
      <p className="text-center text-gray-800 mb-10">
        Some of my recent works including full-stack and AI projects.
      </p>

      {/* Category Selector */}
      <div className="flex justify-center gap-4 mb-12">
        {["all", "web", "ai/ml"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full border border-gray-400 text-sm font-semibold transition-all duration-300 ${selectedType === type
                ? "bg-indigo-600 text-white"
                : "bg-white/80 text-gray-800 hover:bg-white/90"
              }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Projects Grid with hover effect */}
      <motion.ul
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 "
      >
        {filteredProjects.map(
          ({ title, description, githubLink, appLink, deployed, route, image, stack }, index) => (
            <motion.li
              key={index}
              className="
                border-[0.5px] border-white/50 rounded-xl p-4
                 bg-white/40 backdrop-blur-md
                flex flex-col
                transition-all duration-300
                hover:shadow-lg
                hover:scale-[1.03]
                 hover:bg-pink-100
              "
            >
              {/* Project Image */}
              {image && (
                <div className="w-full h-32 sm:h-40 relative mb-3 rounded-lg overflow-hidden">
                  <Image src={image} alt={title} fill className="object-cover rounded-lg" />
                </div>
              )}

              {/* Status */}
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`h-3 w-3 rounded-full ${deployed ? "bg-green-600" : "bg-red-600"
                    }`}
                ></span>
                <p className="text-xs text-gray-800">{deployed ? "Deployed" : "In Progress"}</p>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-1 text-gray-900">{title}</h3>
              <p className="text-gray-800 text-sm mb-2">{description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 mb-3">
                {stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-100/60 text-gray-900 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub + Visit App + Details */}
              <div className="mt-auto flex justify-between items-center gap-2">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-5 h-5 cursor-pointer hover:text-indigo-600 transition" />
                </a>

                {appLink && (
                  <a
                    href={appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm font-semibold hover:bg-indigo-700 transition"
                  >
                    Visit App
                  </a>
                )}

                <Link
                  href={route}
                  className="px-3 py-1 bg-gray-200/50 text-gray-900 rounded-md text-sm font-semibold hover:bg-gray-300/50 transition"
                >
                  View Details
                </Link>
              </div>
            </motion.li>
          )
        )}
      </motion.ul>
    </div>
  );
}
