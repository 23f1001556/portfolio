'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import Certification from "./components/Certification";
export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Projects/>
    <Certification/>
    <Contact/>
    </>


  );
}
