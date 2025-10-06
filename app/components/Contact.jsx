import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="w-full px-[8%] py-20 bg-gray-50 scroll-mt-20">
      {/* Section Heading */}
      <h4 className="text-center text-lg text-gray-500 font-Ovo mb-2">Let's Connect</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo text-gray-900 mb-16">
        Contact Me
      </h2>

      {/* Contact Items */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-800 text-lg font-Ovo">

        {/* Email */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-start gap-4 hover:scale-[1.02] transition-transform duration-200"
        >
          <FaEnvelope className="text-blue-500 mt-1" size={22} />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <a href="mailto:sidhantsksk@gmail.com" className="hover:underline break-words">
              sidhantsksk@gmail.com
            </a>
          </div>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-start gap-4 hover:scale-[1.02] transition-transform duration-200"
        >
          <FaLinkedin className="text-blue-700 mt-1" size={22} />
          <div>
            <p className="text-sm text-gray-500">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/sidhantkumarsk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-words"
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
          className="flex items-start gap-4 hover:scale-[1.02] transition-transform duration-200"
        >
          <FaGithub className="text-gray-700 mt-1" size={22} />
          <div>
            <p className="text-sm text-gray-500">GitHub</p>
            <a
              href="https://github.com/23f1001556"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-words"
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
