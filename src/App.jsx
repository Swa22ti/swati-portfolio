import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-[#f8fafc] font-sans selection:bg-blue-500/30">
      <Navbar />
      <main className="flex flex-col gap-24 pb-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubSection />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
