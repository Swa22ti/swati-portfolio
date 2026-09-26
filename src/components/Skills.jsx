import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Java", "Python", "JavaScript"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "MERN Stack"]
    },
    {
      title: "Testing Skills",
      skills: ["Manual Testing", "Integration testing", "Bug detection", "API testing"]
    },
    {
      title: "Core Subjects",
      skills: ["DBMS", "MySQL", "OOPS"]
    },
    {
      title: "Soft Skills",
      skills: ["Team collaboration", "adaptability", "quick learner"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-[#13161c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Skills</h2>
            <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-white border-b border-slate-700 pb-2">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-slate-800/80 text-slate-300 text-sm rounded-md border border-slate-700 hover:border-blue-500/50 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
