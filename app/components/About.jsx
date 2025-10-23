import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { FaCode, FaServer, FaRobot } from "react-icons/fa";
import { motion } from "motion/react";


// toolsData.js


export const toolsData = [
  assets.python,
  assets.flask,
  assets.vue, 
  assets.postgres,
  assets.github,
  assets.mongodb,
  assets.express,
  assets.next, 
  assets.react,
  assets.node, 
  assets.django,
  assets.linux,
  assets.java,
  assets.js,
  assets.git,
  assets.api,
  assets.typescript
];


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
    description:
      "Skilled in Flask, PostgreSQL, and MySQL for server-side development.",
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[8%] py-16 scroll-mt-20 bg-white"
    >
      {/* Heading */}
      <h4 className="text-center text-lg text-gray-500 font-Ovo">
        Introduction
      </h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo mb-16">
        About Me
      </h2>

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
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-700 mb-8 leading-relaxed font-Ovo"
          >
            I'm a Full Stack Developer who loves building clean, modern, and
            performant web applications. I'm experienced in both frontend and
            backend technologies, and I enjoy solving real-world problems
            through code.
          </motion.p>

          {/* Education */}
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl font-semibold mb-6 font-Ovo text-gray-800"
          >
            Education
          </motion.h3>
          <motion.ul
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-2 text-gray-700 font-Ovo text-base mb-12"
          >
            <li>
              🎓 <strong>B.S. in Data Science and Programming</strong> — Indian
              Institute Of Technology Madras (2023–2026)
              <a
                href="https://ds.study.iitm.ac.in/student/23F1001556"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block ml-2"
              >
                <Image
                  src={assets.arrow_icon}
                  alt="IITM Profile Photo"
                  width={15} // You can change size
                  height={5}
                  className="rounded-full hover:scale-200 transition duration-300"
                />
              </a>
            </li>
            <li>
              🎓 <strong>B.Tech in CSE-AI</strong> — Techno India University
              (2022–2026)
            </li>
          </motion.ul>

          {/* Skills Cards */}
          <motion.ul
            initial={{ y: +20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-300 rounded-xl p-6 
  hover:shadow-md hover:scale-[1.02] hover:bg-pink-100 
  transition-all duration-300 bg-white"
              >
                <div>{icon}</div>
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </motion.ul>
          <div>
            <motion.h3
             initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl font-semibold mb-4 text-gray-800 font-Ovo">
              Tech Stacks I Use
            </motion.h3>
            <div
             className="flex flex-wrap gap-6 items-center">
              {toolsData.map((tool, index) => (
                <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
                  key={index}
                  className="w-12 h-12 sm:w-14 sm:h-14 relative hover:scale-110 transition-transform"
                >
                  <Image
                    src={tool}
                    alt={`Tool ${index}`}
                    layout="fill"
                    objectFit="contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default About;
