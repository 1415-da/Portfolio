import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-6 px-8 flex flex-col md:flex-row justify-between items-center shadow-inner mt-8 rounded-t-2xl">
      <span>&copy; {new Date().getFullYear()} Kumar Gaurav. All rights reserved.</span>
      <nav className="flex gap-4 mt-2 md:mt-0" aria-label="Footer Navigation">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <a href="https://www.linkedin.com/in/kumar-gaurav-5bb64728a/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        <a href="https://github.com/1415-da" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
      </nav>
    </footer>
  );
}
