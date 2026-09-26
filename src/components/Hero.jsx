import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, ChevronRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
              Available for Opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I’m <br />
              <span className="text-gradient">Swati Prakash</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-slate-300 font-medium mb-6">
              Computer Science Graduate
            </h2>
            <p className="text-slate-400 max-w-xl leading-relaxed mb-8">
              Motivated Computer Science undergraduate with hands-on experience in building scalable web applications using Java, MERN stack, and blockchain technologies. Adept at integrating AI-driven solutions and designing secure, modular backend systems. Passionate about solving complex problems through clean code and efficient system design.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all flex items-center gap-2 group"
              >
                View My Projects
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/Swati_Prakash_Resume.pdf"
                download
                className="bg-transparent border border-slate-600 hover:border-slate-400 text-white px-6 py-3 rounded-md font-medium transition-all flex items-center gap-2"
              >
                <FileText size={18} />
                Download Resume
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a href="https://github.com/Swa22ti" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/swati-prakash-6abb33251/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:swatiprakashtannu@gmail.com" className="text-slate-400 hover:text-white transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Terminal Window Design */}
            <div className="glass-card rounded-xl overflow-hidden shadow-2xl border border-slate-700/50">
              <div className="terminal-header">
                <div className="terminal-dot dot-red"></div>
                <div className="terminal-dot dot-yellow"></div>
                <div className="terminal-dot dot-green"></div>
                <div className="ml-4 text-xs font-mono text-slate-400">swati_portfolio.jsx</div>
              </div>
              <div className="p-6 font-mono text-sm sm:text-base bg-[#0d1117] text-slate-300">
                <div className="flex">
                  <span className="text-blue-400 mr-4">1</span>
                  <span><span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> = {'{'}</span>
                </div>
                <div className="flex">
                  <span className="text-blue-400 mr-4">2</span>
                  <span className="ml-4"><span className="text-sky-300">name</span>: <span className="text-green-300">'Swati Prakash'</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-blue-400 mr-4">3</span>
                  <span className="ml-4"><span className="text-sky-300">role</span>: <span className="text-green-300">'Developer'</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-blue-400 mr-4">4</span>
                  <span className="ml-4"><span className="text-sky-300">education</span>: <span className="text-green-300">'B.Tech CSE'</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-blue-400 mr-4">5</span>
                  <span className="ml-4"><span className="text-sky-300">focus</span>: [</span>
                </div>
                <div className="flex">
                  <span className="text-blue-400 mr-4">6</span>
                  <span className="ml-8 text-green-300">'Java'</span>, <span className="text-green-300">'Web Development'</span>,
                </div>
                <div className="flex">
                  <span className="text-blue-400 mr-4">7</span>
                  <span className="ml-8 text-green-300">'QA'</span>, <span className="text-green-300">'AI'</span>, <span className="text-green-300">'Blockchain'</span>
                </div>
                <div className="flex">
                  <span className="text-blue-400 mr-4">8</span>
                  <span className="ml-4">],</span>
                </div>
                <div className="flex">
                  <span className="text-blue-400 mr-4">9</span>
                  <span className="ml-4"><span className="text-sky-300">problemSolving</span>: <span className="text-green-300">'150+ Algorithmic Problems'</span></span>
                </div>
                <div className="flex">
                  <span className="text-blue-400 mr-4">10</span>
                  <span>{'}'};</span>
                </div>
                <div className="flex mt-4">
                  <span className="text-blue-400 mr-4">11</span>
                  <span><span className="text-purple-400">developer</span>.<span className="text-blue-300">solveProblem</span>();</span>
                </div>
                <div className="flex mt-2 items-center text-green-400">
                  <ChevronRight size={14} className="mr-2" />
                  <span>"Clean code delivered efficiently."</span>
                  <span className="w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
