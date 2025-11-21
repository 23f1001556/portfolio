"use client";

import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="w-full px-[8%] py-24 bg-white/20 backdrop-blur-md scroll-mt-20">
      {/* Section Heading */}
      <h4 className="text-center text-lg text-gray-500 font-Ovo mb-2">Let's Connect</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo text-gray-900 mb-16">
        Contact Me
      </h2>

      {/* Contact Items */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Email */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-start gap-4 p-6 rounded-xl bg-white/40 backdrop-blur-sm shadow hover:scale-[1.03] hover:shadow-lg transition-transform duration-300"
        >
          <FaEnvelope className="text-blue-500" size={26} />
          <div>
            <p className="text-sm text-gray-600 uppercase tracking-wide">Email</p>
            <a href="mailto:sidhantsksk@gmail.com" className="text-gray-800 font-medium hover:text-blue-500 transition">
              sidhantsksk@gmail.com
            </a>
          </div>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-start gap-4 p-6 rounded-xl bg-white/40 backdrop-blur-sm shadow hover:scale-[1.03] hover:shadow-lg transition-transform duration-300"
        >
          <FaLinkedin className="text-blue-700" size={26} />
          <div>
            <p className="text-sm text-gray-600 uppercase tracking-wide">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/sidhantkumarsk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-medium hover:text-blue-700 transition"
            >
              linkedin.com/in/sidhantkumarsk
            </a>
          </div>
        </motion.div>

        {/* GitHub */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-start gap-4 p-6 rounded-xl bg-white/40 backdrop-blur-sm shadow hover:scale-[1.03] hover:shadow-lg transition-transform duration-300"
        >
          <FaGithub className="text-gray-700" size={26} />
          <div>
            <p className="text-sm text-gray-600 uppercase tracking-wide">GitHub</p>
            <a
              href="https://github.com/23f1001556"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-medium hover:text-gray-900 transition"
            >
              github.com/23f1001556
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
