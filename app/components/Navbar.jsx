'use client';
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest("#hamburger-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md px-5 lg:px-8 py-4 flex items-center justify-between z-50">
      {/* Logo */}
      <a href="#top" className="font-bold text-xl text-gray-800 font-ovo">
        Sidhant
      </a>

      {/* Centered Menu */}
      <ul className="hidden md:flex gap-6 lg:gap-8 px-12 py-3 text-gray-700 font-ovo md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
        <li><a href="#top" className="hover:text-indigo-600">Home</a></li>
        <li><a href="#about" className="hover:text-indigo-600">About</a></li>
        <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
      </ul>

      {/* Hamburger (mobile) */}
      <button
        id="hamburger-button"
        className="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={() => setIsMobileMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        {!isMobileMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul
          ref={mobileMenuRef}
          className="absolute top-full left-0 w-full bg-white md:hidden flex flex-col font-ovo"
        >
          <li><a href="#top" className="block px-6 py-3 hover:bg-indigo-50" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" className="block px-6 py-3 hover:bg-indigo-50" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#projects" className="block px-6 py-3 hover:bg-indigo-50" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="block px-6 py-3 hover:bg-indigo-50" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
