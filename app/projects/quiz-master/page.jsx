"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import { HiArrowNarrowRight } from "react-icons/hi";
import {
  SiBootstrap, SiHtml5, SiCss3, SiJavascript,
  SiFlask, SiPython, SiSqlite
} from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";

export default function Quizmaster() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [selectedImg, setSelectedImg] = useState(null);

  const diagrams = [
    {
      title: "ER Diagram",
      desc: "This ER diagram represents the core database structure: Users, Subjects, Chapters, Quizzes, Questions, and Scores.",
      src: "/quizmaster/db.png",
    },
    {
      title: "System Architecture Diagram",
      desc: "High-level overview of how users interact with the frontend, backend, and database.",
      src: "/quizmaster/archi.png",
    },
    {
      title: "Sequence Diagram – Quiz Attempt",
      desc: "Sequence of interactions when a student takes a quiz and submits answers.",
      src: "/quizmaster/sequ.png",
    },
    {
      title: "Use Case Diagram",
      desc: "Highlights the core actions available to both Admins and Students.",
      src: "/quizmaster/usecase.png",
    },
    {
      title: "Data Flow Diagram (DFD Level 0)",
      desc: "Shows the movement of data between system components.",
      src: "/quizmaster/dfd.png",
    },
    {
      title: "Route Map",
      desc: "All major Flask routes used for authentication, quizzes, admin operations, and user activities.",
      src: "/quizmaster/route.png",
    },
    {
      title: "Deployment Diagram",
      desc: "Shows how the project is hosted and how services interact.",
      src: "/quizmaster/deploy.png",
    },
  ];

  return (
    <main className="px-4 md:px-0 max-w-6xl mx-auto space-y-20">

      {/* Diploma Image + Status */}
      <motion.section
        className="text-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Image
          src="/quizmaster/image1.png"
          alt="Quiz Master Diploma"
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
        <h1 className="text-3xl font-bold mb-4">Quiz Master V1</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left max-w-4xl mx-auto text-lg">
          <div><p className="font-semibold text-xl">Timeline</p><p>15 days</p></div>
          <div><p className="font-semibold text-xl">Role</p><p>Full Stack</p></div>
          <div><p className="font-semibold text-xl">Team</p><p>Solo</p></div>
          <div><p className="font-semibold text-xl">Status</p><p>Completed</p></div>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          {/* Live Demo */}
          <a
            target="_blank"
            rel="noopener noreferrer"

            href="https://quiz-master-v1-dhtr.onrender.com/"
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-lg font-medium gap-2"
          >
            Live Demo
            <HiArrowNarrowRight className="w-5 h-5" />
          </a>

          {/* Source Code */}
          <a
            target="_blank"
            rel="noopener noreferrer"

            href="https://github.com/23f1001556/quiz-master-v1"
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
          An online platform built to simplify learning and assessment.
          Teachers can create quizzes easily, while students can take exams and track progress.
          Designed to make knowledge testing efficient, interactive, and accessible for everyone.
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

          <div className="flex flex-col items-center gap-3">
            <h3 className="font-bold flex items-center gap-2 mb-3">
              <SiBootstrap className="text-purple-600 text-4xl" /> Frontend
            </h3>
            <ul className="list-disc list-inside space-y-2 text-xl">
              <li className="flex items-center gap-2"><SiHtml5 className="text-orange-600 text-3xl" /> HTML</li>
              <li className="flex items-center gap-2"><SiCss3 className="text-blue-600 text-3xl" /> CSS</li>
              <li className="flex items-center gap-2"><SiJavascript className="text-yellow-400 text-3xl" /> JavaScript</li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-3">
            <h3 className="font-bold flex items-center gap-2 mb-3">
              <SiFlask className="text-gray-600 text-4xl" /> Backend
            </h3>
            <ul className="list-disc list-inside space-y-2 text-xl">
              <li className="flex items-center gap-2"><SiFlask className="text-gray-600 text-3xl" /> Flask</li>
              <li className="flex items-center gap-2"><SiPython className="text-blue-400 text-3xl" /> Jinja2/Python</li>
              <li className="flex items-center gap-2"><SiSqlite className="text-teal-600 text-3xl" /> SQLite</li>
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
            <li>Handling dynamic quiz creation and storage</li>
            <li>Ensuring real-time scoring and feedback for students</li>
            <li>Implementing secure role-based access for teachers and students</li>
          </ul>
        </div>

        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Key Learnings</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Building a full-stack app with Flask & Jinja2 templates</li>
            <li>Integrating Bootstrap for responsive design</li>
            <li>Implementing authentication and SQLite data management</li>
            <li>Improving UX through interactive and instant feedback</li>
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
          Quiz Master is a web-based application where educators can create, manage, and conduct quizzes
          while students can take exams and assess their knowledge.
        </p>

        <h3 className="text-2xl font-semibold mb-2">What Users Can Do:</h3>
        <ul className="list-disc list-inside max-w-md mx-auto space-y-2 text-lg">
          <li>Teachers can create quizzes</li>
          <li>Students can attempt quizzes anytime</li>
          <li>Automatic scoring and instant feedback</li>
          <li>Performance analytics</li>
          <li>Quiz scheduling and deadline management</li>
          <li>Role-based secure login</li>
          <li>Exportable reports</li>
        </ul>
      </motion.section>


      {/* Diagrams Section */}
      <motion.section
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        {diagrams.map((diagram, index) => (
          <motion.div
            key={index}
            className="
            bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedImg(diagram.src)}
          >
            <h3 className="text-2xl font-bold mb-2">{diagram.title}</h3>
            <p className="text-gray-700 mb-4">{diagram.desc}</p>
            <div className="w-full h-48 md:h-60 relative rounded-lg overflow-hidden">
              <Image
                src={diagram.src}
                alt={diagram.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        ))}

        {/* Lightbox Modal */}
        {selectedImg && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImg(null)} // <-- click outside closes
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()} // <-- prevent closing when clicking the image container
            >
              <button
                className="absolute top-2 right-2 text-white text-3xl z-50"
                onClick={() => setSelectedImg(null)}
              >
                <AiOutlineClose />
              </button>
              <div className="w-full aspect-video relative">
                <Image
                  src={selectedImg}
                  alt="Enlarged Diagram"
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        )}

      </motion.section>

    </main>
  );
}
