'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [videoModal, setVideoModal] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      type: "web",
      description: "A personal developer portfolio built using Next.js and Tailwind CSS.",
      details:
        "This portfolio showcases my projects, skills, and experience. It includes animations, SSR, and deployment on Vercel.",
      stacks: "Next.js, Tailwind CSS, Framer Motion, Vercel",
      githubLink: "https://github.com/23f1001556/portfolio",
      appLink: "https://portfolio-r6l4.vercel.app/",
      deployed: true,
      video: "/videos/portfolio_sample.mp4",
      route: "/projects/portfolio"
    },
    {
      title: "Vehicle Parking App",
      type: "web",
      description: "A full-stack vehicle parking app powered by Vue.js and Flask.",
      details:
        "Multi-user parking management with dashboards, booking, CSV export, and Celery background tasks.",
      stacks: "Flask, Vue.js, SQLite, Redis, Celery",
      githubLink: "#",
      deployed: false,
      video: "/sample.mp4",
      route: "#"
    },
    {
      title: "Quiz Master",
      type: "web",
      description: "A full-stack quiz app supporting multi-user dashboards.",
      details:
        "Admin panel, analytics, scoring system and history, built on Flask.",
      stacks: "Flask, Jinja2, Bootstrap, SQLite, Matplotlib",
      githubLink: "https://github.com/23f1001556/quiz-master-v1",
      appLink: "https://quiz-master-v1-dhtr.onrender.com/",
      deployed: true,
      video: "/videos/quizmaster_sample.mp4",
      route: "/projects/quiz-master"
    },

  ];

  const filteredProjects =
    selectedType === "all"
      ? projects
      : projects.filter((p) => p.type === selectedType);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="projects"
        className="w-full px-[8%] py-16 bg-white"
      >
        <h4 className="text-center text-lg text-gray-500 font-Ovo">Works</h4>
        <h2 className="text-center text-4xl sm:text-5xl font-Ovo mb-10">
          Projects
        </h2>

        {/* Category Selector */}
        <div className="flex justify-center gap-4 mb-10">
          {["all", "web", "ai/ml"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-5 py-2 rounded-full border border-gray-300 font-Ovo transition-all duration-300 ${selectedType === type
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(
            (
              { title, description, githubLink, appLink, deployed, video, route },
              index
            ) => (
              <motion.div
                key={index}
                className="rounded-xl p-5 bg-white shadow-md hover:shadow-xl transition border border-gray-300 relative"
              >
                {/* Video Thumbnail + Play Button */}
                <div
                  className="w-full h-40 bg-black rounded-lg overflow-hidden mb-4 relative cursor-pointer group"
                  onClick={() => setVideoModal(video)}
                >
                  <video className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition">
                    <source src={video} type="video/mp4" />
                  </video>

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/80 p-3 rounded-full shadow-lg group-hover:scale-110 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-indigo-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`h-3 w-3 rounded-full ${deployed ? "bg-green-500" : "bg-red-500"
                      }`}
                  ></span>
                  <p className="text-sm text-gray-700 font-Ovo">
                    {deployed
                      ? "Application Deployed"
                      : "Application in Building Phase"}
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold font-Ovo">{title}</h3>
                <p className="text-gray-700 mt-2 font-Ovo">{description}</p>

                {/* GitHub + Visit App + Details Route */}
                <div className="mt-4 flex justify-between items-center">
                  <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-6 h-6 cursor-pointer hover:text-indigo-600 transition" />
                  </a>

                  {appLink && (
                    <a
                      href={appLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 font-Ovo hover:text-pink-600 text-sm"
                    >
                      Visit App →
                    </a>
                  )}

                  <Link
                    href={route}
                    className="text-indigo-600 font-Ovo hover:text-pink-600 text-sm"
                  >
                    View Details →
                  </Link>
                </div>


              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>

      {/* VIEW ALL PROJECTS BUTTON */}
      <div className="flex justify-center mt-12 relative -top-4 bg-white p-1 rounded-md border-l border-r border-black">
        <Link
          href="/projects"
          className="px-5 py-2 font-Ovo text-base text-black
               bg-gradient-to-r from-gray-200 to-gray-400
               rounded-md shadow-md
               hover:from-gray-300 hover:to-gray-500
               transition-all duration-300 block text-center"
        >
          View All Projects →
        </Link>
      </div>
      {/* VIDEO MODAL */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoModal(null)}
          >
            <motion.div
              className="bg-black rounded-lg overflow-hidden max-w-3xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video src={videoModal} controls autoPlay className="w-full h-auto" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
