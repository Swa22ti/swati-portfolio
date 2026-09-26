import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-[#13161c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Professional Experience</h2>
            <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="relative border-l border-slate-700 ml-3 md:ml-6 lg:w-3/4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 ml-8 md:ml-10 relative"
            >
              <div className="absolute -left-[45px] md:-left-[53px] top-1 bg-blue-900 border border-blue-500 rounded-full p-2">
                <Briefcase size={16} className="text-blue-400" />
              </div>
              
              <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Tech Octanet</h3>
                    <p className="text-blue-400 font-medium">Web Development Intern</p>
                  </div>
                  <span className="text-slate-400 text-sm font-medium bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700 w-max mt-2 md:mt-0">
                    July 2024 – Sep 2024
                  </span>
                </div>
                
                <ul className="list-disc ml-5 space-y-2 text-slate-300 text-sm md:text-base">
                  <li>Developed responsive web pages using HTML, CSS, and JavaScript.</li>
                  <li>Improved UI consistency and cross-device compatibility.</li>
                  <li>Assisted in debugging and deployment processes.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
