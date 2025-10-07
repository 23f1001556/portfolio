'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Use framer-motion instead of motion/react

const Projects = () => {
  const [selectedType, setSelectedType] = useState('all');

  const projects = [
    {
      title: 'Portfolio Website',
      type: 'web',
      description: 'A personal developer portfolio built using Next.js and Tailwind CSS.',
      githubLink: 'https://github.com/23f1001556/portfolio',
      appLink:'https://portfolio-r6l4.vercel.app/',
    },
    {
      title: 'Vehicle Parking App',
      type: 'web',
      description: 'A full-stack vehicle parking app powered by Vue.js and Flask.',
      githubLink: 'https://github.com/23f1001556/Vehicle-Parking-App---V2',
    },
    {
      title: 'Quiz Master',
      type: 'web',
      description: 'A full stack quiz app using Flask and Bootstrap supporting multiuser.',
      githubLink: 'https://github.com/23f1001556/quiz-master-v1',
      appLink:'https://quiz-master-v1-dhtr.onrender.com/',
    },
    {
      title: 'AI Chatbot',
      type: 'ai/ml',
      description: 'A chatbot using NLP and Transformer models (Hugging Face).',
      githubLink: 'https://github.com/yourname/ai-chatbot',
    },
    {
      title: 'ML Model Trainer',
      type: 'ai/ml',
      description: 'Train and evaluate models using Scikit-learn and PyTorch.',
      githubLink: 'https://github.com/yourname/ml-trainer',
    },
  ];

  const filteredProjects =
    selectedType === 'all'
      ? projects
      : projects.filter((project) => project.type === selectedType);

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

      {/* Category Selector Buttons */}
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
        {filteredProjects.map(({ title, description, githubLink, appLink }, index) => (
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
      <p className="text-gray-700 font-Ovo text-base mb-6">{description}</p>
    </div>
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-indigo-600 hover:text-indigo-800 font-semibold"
    >
      View Project &rarr;
    </a>

    {appLink && (
      <a
        href={appLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-indigo-600 hover:text-indigo-800 font-semibold mt-2"
      >
        Visit App &rarr;
      </a>
    )}
  </motion.div>
))}

      </motion.div>
    </motion.div>
  );
};

export default Projects;
