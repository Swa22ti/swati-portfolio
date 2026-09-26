import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#13161c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Let's Connect</h2>
            <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-400 mb-8 max-w-md text-lg">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <a href="mailto:swatiprakashtannu@gmail.com" className="flex items-center gap-5 group w-max">
                  <div className="w-12 h-12 bg-[#1b202d] rounded-xl flex items-center justify-center transition-colors">
                    <Mail size={22} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-500 tracking-wider uppercase mb-1">Email</h4>
                    <p className="text-white text-sm font-medium group-hover:text-indigo-400 transition-colors">swatiprakashtannu@gmail.com</p>
                  </div>
                </a>

                <a href="tel:7633803237" className="flex items-center gap-5 group w-max">
                  <div className="w-12 h-12 bg-[#1b202d] rounded-xl flex items-center justify-center transition-colors">
                    <Phone size={22} className="text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-500 tracking-wider uppercase mb-1">Phone</h4>
                    <p className="text-white text-sm font-medium group-hover:text-emerald-400 transition-colors">+91-7633803237</p>
                  </div>
                </a>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#1b202d] rounded-xl flex items-center justify-center">
                    <MapPin size={22} className="text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-500 tracking-wider uppercase mb-1">Location</h4>
                    <p className="text-white text-sm font-medium">Noida, Uttar Pradesh</p>
                  </div>
                </div>

                <a href="https://github.com/Swa22ti" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group w-max">
                  <div className="w-12 h-12 bg-[#1b202d] rounded-xl flex items-center justify-center transition-colors">
                    <FaGithub size={22} className="text-slate-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-500 tracking-wider uppercase mb-1">GitHub</h4>
                    <p className="text-white text-sm font-medium group-hover:text-slate-300 transition-colors">github.com/Swa22ti</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/swati-prakash-6abb33251/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group w-max">
                  <div className="w-12 h-12 bg-[#1b202d] rounded-xl flex items-center justify-center transition-colors">
                    <FaLinkedin size={22} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-500 tracking-wider uppercase mb-1">LinkedIn</h4>
                    <p className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors">linkedin.com/in/swati-prakash-6abb33251</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-xl border border-slate-700/50">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#0f1115] border border-slate-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#0f1115] border border-slate-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2 mb-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#0f1115] border border-slate-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Hello Swati..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-medium py-3 rounded-md transition-all flex items-center justify-center gap-2 mt-2"
                >
                  {status === 'idle' && <><Send size={18} /> Send Message</>}
                  {status === 'submitting' && <span className="animate-pulse">Sending...</span>}
                  {status === 'success' && <><CheckCircle2 size={18} /> Message Sent!</>}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
