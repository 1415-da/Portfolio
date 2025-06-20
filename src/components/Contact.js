import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    // Here you would typically send the form data to a backend or email service
  }

  return (
    <section id="contact" className="group w-full min-h-screen flex flex-col justify-center items-center px-8 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="w-full max-w-4xl">
        <h2 className="section-title group-hover:animate-title text-3xl font-bold text-white mb-6 text-center">Contact Me</h2>
        <div className="flex flex-col md:flex-row gap-12">
          {!submitted ? (
            <form
              className="flex-1 space-y-4"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                aria-label="Your Name"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                aria-label="Your Email"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={5}
                required
                aria-label="Your Message"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-white via-gray-300 to-gray-500 text-gray-900 font-bold rounded-xl shadow-lg border-2 border-gray-700 hover:from-gray-700 hover:to-gray-900 hover:text-white hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="flex-1 flex flex-col justify-center items-center">
              <p className="text-green-400 text-xl mt-2">Thank you! I'll get back to you soon.</p>
            </div>
          )}
          <div className="flex-1 flex flex-col gap-4">
            <span className="text-gray-200 font-medium">Phone: 08766313590</span>
            <a
              href="mailto:kg15072004@gmail.com"
              className="text-blue-400 hover:underline"
              aria-label="Email"
            >
              kg15072004@gmail.com
            </a>
            <div className="flex gap-4 text-2xl mt-2">
              <a href="https://www.linkedin.com/in/kumar-gaurav-5bb64728a/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn" className="text-blue-400 hover:text-blue-300">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/1415-da" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub" className="text-gray-100 hover:text-gray-400">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
