import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Galgotias University, Noida",
      degree: "B.Tech in Computer Science and Engineering",
      date: "Oct 2022 – May 2026",
      score: "CGPA: 8.16"
    },
    {
      institution: "Cambridge School, Nalanda",
      degree: "Intermediate (CBSE) – PCM",
      date: "2020 – 2021",
      score: "75%"
    },
    {
      institution: "Assembly of God School, Bihar",
      degree: "10th (CBSE)",
      date: "2018 – 2019",
      score: "83%"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 relative group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <GraduationCap size={64} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 pr-12">{edu.institution}</h3>
                <p className="text-blue-400 font-medium mb-4">{edu.degree}</p>
                
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-700/50">
                  <span className="text-slate-400 text-sm flex items-center gap-2">
                    {edu.date}
                  </span>
                  <span className="bg-slate-800 text-white px-3 py-1 rounded-md text-sm font-bold shadow-inner">
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
