'use client';
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

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
    <>
      {/* Background Image */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-30%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      {/* Navbar */}
      <nav className="fixed w-full px-5 lg:px-8 py-4 flex items-center justify-between z-50">
        <a href="#top" className="font-bold text-xl text-gray-800 font-ovo">
          Sidhant
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 
          bg-white/30 backdrop-blur-md shadow-md rounded-full 
          md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
        >
          <li><a href="#top" className="hover:text-indigo-600">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-600">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>

        {/* Hamburger Button */}
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
            className="md:hidden absolute top-16 right-5 w-52 bg-white shadow-lg rounded-lg flex flex-col z-50 animate-fade-in"
          >
            <li>
              <a href="#top" className="block px-6 py-3 hover:bg-indigo-50" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#about" className="block px-6 py-3 hover:bg-indigo-50" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            </li>
            <li>
              <a href="#projects" className="block px-6 py-3 hover:bg-indigo-50" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#contact" className="block px-6 py-3 hover:bg-indigo-50" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
