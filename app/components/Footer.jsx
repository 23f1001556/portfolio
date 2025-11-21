"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-white/20 backdrop-blur-md py-5 pt-5 mt-1 flex flex-col items-center justify-center">
      
      {/* Bhagavad Gita Quote */}
      <p className="text-gray-800 text-sm sm:text-base italic text-center max-w-xl px-4">
        "You have the right to work, but never to the fruits of work." — <span className="font-semibold">Bhagavad Gita 2.47</span>
      </p>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <a href="https://github.com/23f1001556" className="text-gray-700 hover:text-indigo-600 transition">GitHub</a>
        <a href="https://www.linkedin.com/in/sidhantkumarsk/" className="text-gray-700 hover:text-indigo-600 transition">LinkedIn</a>
        <a href="/" className="text-gray-700 hover:text-indigo-600 transition">Portfolio</a>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-xs mt-4">
        © {new Date().getFullYear()} Sidhant Kumar. All rights reserved.
      </p>
    </footer>
  );
}
