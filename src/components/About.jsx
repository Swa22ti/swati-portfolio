import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, TestTube, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400 leading-relaxed">
            <div>
              <p className="mb-4">
                I am a motivated Computer Science undergraduate at Galgotias University, passionate about solving complex problems through clean code and efficient system design.
              </p>
              <p className="mb-4">
                My technical journey involves building scalable web applications with hands-on experience in Java, the MERN stack, and blockchain technologies. I take pride in designing secure, modular backend systems and integrating AI-driven solutions to enhance functionality and user experience.
              </p>
              <p>
                Alongside development, I have a strong foundation in software testing and quality assurance, ensuring that the applications I build are robust, reliable, and user-friendly. I am a quick learner and highly adaptable, always eager to embrace new challenges and collaborate effectively within a team environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-lg border border-slate-700/50">
                <Code className="text-blue-400 mb-3" size={28} />
                <h3 className="text-white font-semibold mb-2">Web Development</h3>
                <p className="text-sm">Responsive applications using modern MERN stack and Java Servlets.</p>
              </div>
              <div className="glass-card p-5 rounded-lg border border-slate-700/50">
                <Server className="text-purple-400 mb-3" size={28} />
                <h3 className="text-white font-semibold mb-2">System Design</h3>
                <p className="text-sm">Building secure, modular backend systems and integrating APIs.</p>
              </div>
              <div className="glass-card p-5 rounded-lg border border-slate-700/50">
                <TestTube className="text-green-400 mb-3" size={28} />
                <h3 className="text-white font-semibold mb-2">Quality Assurance</h3>
                <p className="text-sm">Manual testing, integration testing, and bug detection methodologies.</p>
              </div>
              <div className="glass-card p-5 rounded-lg border border-slate-700/50">
                <Lightbulb className="text-yellow-400 mb-3" size={28} />
                <h3 className="text-white font-semibold mb-2">Emerging Tech</h3>
                <p className="text-sm">Integrating AI-driven solutions and blockchain technologies.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
