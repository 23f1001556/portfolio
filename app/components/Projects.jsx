'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: 'Portfolio Website',
      type: 'web',
      description: 'A personal developer portfolio built using Next.js and Tailwind CSS.',
      details:
        'This portfolio showcases my projects, skills, and experience. It is built with Next.js for server-side rendering and Tailwind CSS for responsive design. It includes animations using Framer Motion and is fully deployed on Vercel.',
      stacks: 'Next.js, Tailwind CSS, Framer Motion, Vercel',
      githubLink: 'https://github.com/23f1001556/portfolio',
      appLink: 'https://portfolio-r6l4.vercel.app/',
    },
    {
      title: 'Vehicle Parking App',
      type: 'web',
      description: 'A full-stack vehicle parking app powered by Vue.js and Flask.',
      details:
        'Developed a multi-user parking management application with dashboards for both admin and users. Includes real-time tracking, booking, CSV exports, and background tasks via Celery. Performance is enhanced with caching and live dashboards.',
      stacks:
        'Flask (API), Vue.js (Frontend), SQLite, Redis + Celery, Bootstrap, HTML, CSS, JavaScript',
      githubLink: 'https://github.com/23f1001556/Vehicle-Parking-App---V2',
    },
    {
      title: 'Quiz Master',
      type: 'web',
      description: 'A full stack quiz app using Flask and Bootstrap supporting multiuser.',
      details:
        'A multi-user exam preparation app with separate dashboards for admins and users. Admins can manage subjects, chapters, and quizzes. Includes scoring, quiz history, and analytics built with Flask and SQLite.',
      stacks: 'Flask, Jinja2, HTML, CSS, Bootstrap, SQLite, Matplotlib',
      githubLink: 'https://github.com/23f1001556/quiz-master-v1',
      appLink: 'https://quiz-master-v1-dhtr.onrender.com/',
    },
    {
      title: 'Loop',
      type: 'ai/ml',
      description: 'A full stack SaaS + Ai app fror communication',
      details:
        'Developing a full-stack SaaS platform for university students to manage campus resources, communication, and AI-assisted tools. Includes real-time messaging, analytics, and authentication.',
      stacks:
        'Frontend: Next.js, React, Tailwind CSS, Shadcn/UI\nBackend: Next.js API, Prisma, Neon Postgres\nAuth: Kinde, Arcjet\nRealtime: Cloudflare Durable Objects\nDeployment: Vercel\nExtras: Chart.js, Uploadthing, Zod',
      githubLink: 'https://github.com/23f1001556/Loop',
    },
  ];

  const filteredProjects =
    selectedType === 'all'
      ? projects
      : projects.filter((project) => project.type === selectedType);

  const toggleExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[8%] py-16 scroll-mt-20 bg-white"
    >
      <h4 className="text-center text-lg text-gray-500 font-Ovo">Works</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo mb-10">Projects</h2>

      {/* Category Selector */}
      <div className="flex justify-center gap-4 mb-10">
        {['all', 'web', 'ai/ml'].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-5 py-2 rounded-full border border-gray-300 font-Ovo transition-all duration-300 ${
              selectedType === type
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map(
          ({ title, description, details, stacks, githubLink, appLink }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-gray-300 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between bg-white hover:bg-pink-100"
            >
              <div>
                <h3 className="text-xl font-semibold font-Ovo mb-3">{title}</h3>
                <p className="text-gray-700 font-Ovo text-base mb-4">{description}</p>

                {/* Always Visible Links */}
                <div className="flex flex-col gap-1 mb-3">
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-green-800 font-semibold"
                  >
                    View on GitHub →
                  </a>
                  {appLink && (
                    <a
                      href={appLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-green-800 font-semibold"
                    >
                      Visit App →
                    </a>
                  )}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-indigo-600 hover:text-green-800 font-semibold"
                >
                  {expandedProject === index ? 'Hide Details ↑' : 'View Details ↓'}
                </button>

                {/* Expandable Section */}
                <AnimatePresence>
                  {expandedProject === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden mt-4 border-t border-gray-300 pt-3 text-gray-700 font-Ovo"
                    >
                      <p className="mb-4">{details}</p>

                      {stacks && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800">Tech Stack:</h4>
                          <pre className="whitespace-pre-wrap text-sm text-gray-700">{stacks}</pre>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
