import './index.css';
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-[#181818] flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="hidden lg:block">
        <Sidebar isMobile={false} />
      </div>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto bg-[#181818] p-4 lg:p-8 pb-20 lg:pb-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <About />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
