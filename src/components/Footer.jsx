import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#0f1115] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#5b5cf5] rounded-xl flex items-center justify-center text-white font-bold text-lg">
              SP
            </div>
            <span className="text-white font-bold text-xl tracking-wide">Swati Prakash</span>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/Swa22ti" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/swati-prakash-6abb33251/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:swatiprakashtannu@gmail.com" className="text-slate-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Swati Prakash. Built for the web.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
