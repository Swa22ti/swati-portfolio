import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const GitHubSection = () => {
  return (
    <section className="py-12 bg-[#13161c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-5 pointer-events-none translate-x-1/4 -translate-y-1/4">
              <FaGithub size={240} />
            </div>
            
            <div className="z-10 text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3">
                <FaGithub size={28} />
                My GitHub
              </h2>
              <p className="text-slate-400 max-w-md">
                Explore my repositories to see the source code for my projects, contributions, and active development work.
              </p>
            </div>
            
            <div className="z-10">
              <a 
                href="https://github.com/Swa22ti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-200 px-6 py-3 rounded-md font-semibold transition-all shadow-lg"
              >
                View GitHub Profile
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
