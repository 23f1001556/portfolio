import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import {
  FaCode,
  FaServer,
  FaRobot,
} from "react-icons/fa";



// Updated infoList with only 3 cards
const infoList = [
  {
    icon: <FaCode className="text-3xl text-blue-600 mb-4" />,
    title: "Frontend",
    description: "Experienced in Vue.js, Next.js, HTML, CSS, and Tailwind CSS.",
  },
  {
    icon: <FaServer className="text-3xl text-green-600 mb-4" />,
    title: "Backend",
    description: "Skilled in Flask, PostgreSQL, and MySQL for server-side development.",
  },
  {
    icon: <FaRobot className="text-3xl text-red-600 mb-4" />,
    title: "AI & ML",
    description: "Hands-on experience with Python, TensorFlow, and ML models.",
  },
];

// Tools list



const About = () => {
  return (
    <div id="about" className="w-full px-[8%] py-16 scroll-mt-20 bg-white">
      {/* Heading */}
      <h4 className="text-center text-lg text-gray-500 font-Ovo">Introduction</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo mb-16">About Me</h2>

      <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
        {/* Profile Image */}
        <div className="w-60 sm:w-72 rounded-full overflow-hidden">
          <Image
            src={assets.myphoto}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bio, Education & Skills */}
        <div className="flex-1">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed font-Ovo">
            I'm a Full Stack Developer who loves building clean, modern, and
            performant web applications. I'm experienced in both frontend and
            backend technologies, and I enjoy solving real-world problems
            through code.
          </p>

          {/* Education */}
          <h3 className="text-2xl font-semibold mb-6 font-Ovo text-gray-800">Education</h3>
          <ul className="space-y-2 text-gray-700 font-Ovo text-base mb-12">
            <li>
              🎓 <strong>B.S. in Data Science and Programming</strong> — Indian
              Institute Of Technology Madras (2023–2027)
            </li>
            <li>
              🎓 <strong>B.Tech in CSE-AI</strong> — Techno India University
              (2022–2026)
            </li>
          </ul>

          {/* Skills Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-300 rounded-xl p-6 hover:shadow-md hover:scale-[1.02] transition-all duration-300 bg-white"
              >
                <div>{icon}</div>
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default About;
