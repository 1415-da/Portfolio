import React from "react";

export default function ProjectCard({ title, date, image, video, description, technologies, github, demo, blog }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl shadow-2xl p-6 flex flex-col transition-transform duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-gray-900 hover:ring-4 hover:ring-gray-700 border-2 border-gray-900 text-white">
      {/* Image/Video: Only show on md+ */}
      <div className="hidden md:block">
        {video ? (
          <video src={video} controls className="rounded mb-4 w-full h-40 object-cover" />
        ) : (
          <img src={image} alt={title} className="rounded mb-4 w-full h-40 object-cover" />
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      {/* Date: Only show on md+ */}
      <span className="text-gray-400 text-sm mb-2 hidden md:block">{date}</span>
      {/* Description: Only show on md+ */}
      <p className="text-gray-200 mb-4 hidden md:block">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-blue-400 font-semibold rounded shadow hover:bg-blue-800 transition-colors border border-blue-700">
            <i className="fab fa-github"></i>
            GitHub
          </a>
        )}
        {demo && demo !== "#" && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-green-900 text-green-400 font-semibold rounded shadow hover:bg-green-800 transition-colors border border-green-700">
            <i className="fas fa-external-link-alt"></i>
            Demo
          </a>
        )}
        {/* Hide blog link on mobile */}
        <span className="hidden md:flex gap-4">
          {blog && blog !== "#" && (
            <a href={blog} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">Blog</a>
          )}
        </span>
      </div>
    </div>
  );
} 
