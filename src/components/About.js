import React from "react";

export default function About() {
  return (
    <section id="about" className="group w-full min-h-screen flex flex-col justify-center items-center px-8 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="w-full max-w-3xl">
        <h2 className="section-title group-hover:animate-title text-4xl font-extrabold text-white mb-10 text-center md:text-left">About Me</h2>
        <h2 className="section-title group-hover:animate-title text-3xl font-bold text-white mb-8 text-center md:text-left">Education</h2>
        <p className="text-gray-200 mb-8 text-center md:text-left">
          <span className="text-gray-200">Bachelor of Technology in Computer Science and Engineering</span> <br/>
          <span className="text-gray-200">CMR Institute of Technology, Bangalore, Karnataka</span> <br/>
          <span className="text-gray-200">Aug 2023 - Sep 2027</span>
        </p>
        <h2 className="section-title group-hover:animate-title text-3xl font-bold text-white mb-4 text-center md:text-left">Certifications</h2>
        <ul className="list-disc list-inside text-gray-300 ml-4 mb-8">
          <li>Become SQL Champion – Udemy (Apr 2025)</li>
          <li>Deloitte Australia- Data Analytics Job Simulation – Forage (Apr 2025)</li>
          <li>Goldman Sachs Software Engineering – Goldman Sachs (Feb 2025)</li>
        </ul>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-6 justify-center md:justify-start">
          <a
            href="/Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gradient-to-r from-white via-gray-300 to-gray-500 text-gray-900 font-bold rounded-xl shadow-lg border-2 border-gray-700 hover:from-gray-700 hover:to-gray-900 hover:text-white hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
          <span className="text-gray-400 text-sm">Last updated: June 2025</span>
        </div>
      </div>
    </section>
  );
}
