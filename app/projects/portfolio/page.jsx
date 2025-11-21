"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  SiBootstrap, SiHtml5, SiCss3, SiJavascript,
 SiReact, SiSqlite,SiNextdotjs
} from "react-icons/si";


export default function Portfolio() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="px-4 md:px-0 max-w-6xl mx-auto space-y-20">

      {/* Portfolio Hero Image */}
      <motion.section
        className="text-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Image
          src="/portfolio/image2.png"
          alt="Portfolio Screenshot"
          width={780}
          height={680}
          className="rounded-xl border-4 border-gray-200 mx-auto"
        />
        <div className="flex justify-center gap-4 mt-4">
          <span className="bg-green-600 text-white px-4 py-1 rounded">Completed</span>
          <span className="bg-black text-white px-4 py-1 rounded">Hosted on Vercel</span>
        </div>
      </motion.section>

      {/* Title + Info + Buttons */}
      <motion.section
        className="text-center mt-6 space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h1 className="text-3xl font-bold mb-4">My Web Portfolio</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left max-w-4xl mx-auto text-lg">
          <div><p className="font-semibold text-xl">Timeline</p><p>4 days</p></div>
          <div><p className="font-semibold text-xl">Role</p><p>Front-End</p></div>
          <div><p className="font-semibold text-xl">Tech Stack</p><p>Next.js, TailwindCSS, React</p></div>
          <div><p className="font-semibold text-xl">Status</p><p>Completed</p></div>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          {/* Live Demo */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://portfolio-r6l4.vercel.app/"
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-lg font-medium gap-2"
          >
            Live Demo
            <HiArrowNarrowRight className="w-5 h-5" />
          </a>

          {/* Source Code */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/23f1001556/portfolio"
            className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition text-lg font-medium gap-2"
          >
            Source Code
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </motion.section>

      {/* Description */}
      <motion.section
        className="text-center max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <p className="text-xl">
          This portfolio is my first modern React/Next.js project. Built with TailwindCSS, React Icons, and Framer Motion, 
          it visually showcases all my web development projects in an interactive and modern way. 
          It demonstrates my skills in creating responsive and visually appealing web apps.
        </p>
      </motion.section>

      {/* Technology Stack */}
<motion.section
  className="text-center max-w-5xl mx-auto"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={sectionVariants}
>
  <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
  <div className="flex flex-col md:flex-row justify-center gap-20 text-2xl">

    {/* Frontend */}
    <div className="flex flex-col items-center gap-3">
      <h3 className="font-bold mb-3">Frontend</h3>
      <ul className="list-disc list-inside space-y-2 text-xl">
        <li className="flex items-center gap-2"><SiHtml5 className="text-orange-600 text-3xl" /> HTML</li>
        <li className="flex items-center gap-2"><SiCss3 className="text-blue-600 text-3xl" /> CSS</li>
        <li className="flex items-center gap-2"><SiJavascript className="text-yellow-400 text-3xl" /> JavaScript</li>
        <li className="flex items-center gap-2"><SiBootstrap className="text-purple-600 text-3xl" /> TailwindCSS</li>
      </ul>
    </div>

    {/* Framework */}
    <div className="flex flex-col items-center gap-3">
      <h3 className="font-bold mb-3">Framework</h3>
      <ul className="list-disc list-inside space-y-2 text-xl">
        <li className="flex items-center gap-2"><SiNextdotjs className="text-gray-600 text-3xl" /> Next.js</li>
        <li className="flex items-center gap-2"><SiReact className="text-blue-400 text-3xl" /> React</li>
        <li className="flex items-center gap-2"><SiSqlite className="text-teal-600 text-3xl" /> Framer Motion</li>
      </ul>
    </div>

  </div>
</motion.section>


      {/* Key Challenges & Key Learnings */}
      <motion.section
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Key Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Building a fully responsive portfolio from scratch</li>
            <li>Integrating Framer Motion animations with Next.js pages</li>
            <li>Structuring projects and content in a visually appealing way</li>
          </ul>
        </div>

        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Key Learnings</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>React & Next.js fundamentals</li>
            <li>Using TailwindCSS for modern, responsive design</li>
            <li>Implementing interactive icons with React Icons</li>
            <li>Using Framer Motion for smooth animations and transitions</li>
            <li>Deploying projects quickly using Vercel</li>
          </ul>
        </div>
      </motion.section>

      {/* Overview / Features */}
      <motion.section
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Overview</h2>
        <p className="mb-4 text-center text-xl">
          This is a modern, visually appealing portfolio showcasing all my web development projects. 
          It's my first React/Next.js project and demonstrates both front-end and interactive animation skills.
        </p>

        <h3 className="text-2xl font-semibold mb-2">Portfolio Highlights:</h3>
        <ul className="list-disc list-inside max-w-md mx-auto space-y-2 text-lg">
          <li>Interactive project gallery with hover animations</li>
          <li>Responsive layout for mobile, tablet, and desktop</li>
          <li>Live demo links and GitHub source code for each project</li>
          <li>Modern styling using TailwindCSS and React Icons</li>
          <li>Smooth animations using Framer Motion</li>
          <li>Hosted on Vercel for fast, reliable access</li>
        </ul>
      </motion.section>   
    </main>
  );
}
