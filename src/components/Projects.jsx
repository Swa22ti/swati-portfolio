import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Quality Analyst – E-commerce Website Testing",
      date: "Jan 2026 – Mar 2026",
      description: [
        "Executed manual testing on an e-commerce web application covering login, registration, product search and cart.",
        "Designed and executed 100+ test cases, identifying functional, usability, and validation defects.",
        "Logged and tracked defects using Jira, ensuring timely resolution and improved software quality."
      ],
      metrics: ["100+ Test Cases"],
      skills: ["Manual Testing", "Integration testing", "Bug detection", "API testing", "Jira"],
      github: null,
      category: "Quality Assurance"
    },
    {
      title: "Java Servlet Project – Feedback System",
      date: "Aug 2025 – Oct 2025",
      description: [
        "Built a web-based feedback management system using Java Servlets and JSP.",
        "Integrated AI-based API calls to analyze and process user feedback.",
        "Processed 700+ simulated submissions, reducing manual evaluation effort by 60%."
      ],
      metrics: ["700+ Simulated Submissions", "60% Reduced Manual Evaluation Effort"],
      skills: ["Java Servlets", "JSP", "AI-based API integration"],
      github: "https://github.com/Swa22ti", // Link to profile as requested "Link to the matching repository on https://github.com/Swa22ti if verified." (using profile link as placeholder)
      category: "Web Development / AI"
    },
    {
      title: "MERN Project – Blockchain-Based Voting System",
      date: "Mar 2024 – Jun 2024",
      description: [
        "Developed decentralized voting platform using MERN stack and blockchain.",
        "Implemented secure vote storage ensuring immutability and transparency.",
        "Ensured 100% tamper-resistant vote recording for 300+ authenticated test users."
      ],
      metrics: ["300+ Authenticated Test Users", "100% Tamper-Resistant Vote Recording"],
      skills: ["MERN Stack", "Blockchain"],
      github: "https://github.com/Swa22ti",
      category: "Full Stack / Blockchain"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="flex flex-col gap-10">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-8 relative group overflow-hidden border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 p-32 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-blue-500/10 transition-colors"></div>

                <div className="flex flex-col lg:flex-row gap-8 relative z-10">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4 flex-col sm:flex-row sm:items-center gap-2">
                      <div>
                        <span className="text-blue-400 text-sm font-mono tracking-wider mb-2 block">{project.category}</span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">{project.title}</h3>
                      </div>
                      <span className="text-slate-400 text-sm font-medium bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">{project.date}</span>
                    </div>

                    <div className="space-y-2 mb-6">
                      {project.description.map((desc, i) => (
                        <p key={i} className="text-slate-300 leading-relaxed text-sm sm:text-base">
                          {desc}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2 bg-blue-900/20 text-blue-300 px-3 py-1.5 rounded-md border border-blue-500/20 text-sm font-medium">
                          <CheckCircle2 size={14} className="text-blue-400" />
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-1/3 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Technologies</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.skills.map((skill, i) => (
                          <span key={i} className="text-xs font-mono text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {project.github && (
                      <div className="mt-auto">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 px-4 py-2 rounded-md transition-colors w-max"
                        >
                          <Github size={18} />
                          View Source
                          <ExternalLink size={14} className="ml-1 opacity-70" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
