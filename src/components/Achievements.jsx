import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Achievements</h2>
            <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="glass-card border border-amber-500/30 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none group-hover:from-amber-500/20 transition-all duration-500"></div>
            
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-20 h-20 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center mb-6 border border-amber-500/50"
            >
              <Trophy size={40} className="text-amber-400" />
            </motion.div>
            
            <h3 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 mb-4">
              150+
            </h3>
            <p className="text-xl sm:text-2xl text-white font-semibold mb-6">
              Algorithmic Problems Solved
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="bg-[#1e293b] px-4 py-2 rounded-lg border border-slate-700 text-slate-300 font-medium flex items-center gap-2">
                LeetCode
              </span>
              <span className="bg-[#1e293b] px-4 py-2 rounded-lg border border-slate-700 text-slate-300 font-medium flex items-center gap-2">
                GeeksforGeeks
              </span>
              <span className="bg-[#1e293b] px-4 py-2 rounded-lg border border-slate-700 text-slate-300 font-medium flex items-center gap-2">
                HackerRank
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
