import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Java Full Stack",
      issuer: "Eduskills Academy",
      date: "March 2025"
    },
    {
      title: "Web Development",
      issuer: "Eduskills Academy",
      date: "March 2025"
    },
    {
      title: "DBMS Oracle Course Certificate",
      issuer: "Oracle",
      date: "January 2024"
    },
    {
      title: "AWS AI-ML Virtual Internship",
      issuer: "AICTE",
      date: "November 2023"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative bg-[#13161c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Certifications</h2>
            <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-colors flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-purple-900/30 transition-all duration-300">
                  <Award size={24} className="text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">{cert.issuer}</p>
                <span className="text-xs font-mono bg-slate-800/80 px-2 py-1 rounded text-slate-300 w-full">
                  {cert.date}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
