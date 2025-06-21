import React from "react";
// Place your avatar image in src/assets/avatar.png and update the import if needed
import avatar from "../assets/avatar.png";

export default function Hero() {
  return (
    <section className="group flex flex-col md:flex-row items-center justify-center gap-12 px-8 py-20 md:py-32 fade-in bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="max-w-xl text-center md:text-left flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hi, I'm <span className="text-gray-300 group-hover:animate-title">Kumar Gaurav</span>
        </h1>
        
        <p className="text-lg text-gray-300 mb-2">
        Driven and detail-oriented Computer Science student with a passion for transforming complex problems into elegant data-driven solutions. A fast learner who thrives in collaborative environments, eagerly embracing new challenges and continuously sharpening skills through self-directed learning and innovative projects.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          Actively building personal projects and improving coding skills through online courses and challenges.
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-gradient-to-r from-white via-gray-300 to-gray-500 text-gray-900 font-bold rounded-xl shadow-lg hover:from-gray-700 hover:to-gray-900 hover:text-white hover:scale-105 transition-all duration-300 border-2 border-gray-700"
        >
          View Projects
        </a>
      </div>
      <div className="flex justify-center items-center flex-1 relative group">
        <img 
          src={avatar} 
          alt="Kumar Gaurav profile photo" 
          className="w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full shadow-2xl border-4 border-blue-200 object-cover ring-4 ring-blue-100 transition-transform duration-300 group-hover:opacity-0 bg-transparent cursor-pointer" 
        />
        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <img 
            src={avatar} 
            alt="Full Kumar Gaurav profile" 
            className="w-[32rem] h-[32rem] md:w-[38rem] md:h-[38rem] rounded-2xl shadow-2xl border-4 border-blue-200 object-contain bg-transparent" 
            style={{boxShadow: '0 8px 32px rgba(0,0,0,0.25)'}}
          />
        </div>
      </div>
    </section>
  );
}
