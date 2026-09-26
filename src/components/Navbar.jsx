import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, FileText } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#5b5cf5] rounded-xl flex items-center justify-center text-white font-bold text-lg">
              SP
            </div>
            <span className="text-white font-bold text-xl hidden sm:block tracking-wide">Swati Prakash</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-sm font-medium text-slate-300 hover:text-white cursor-pointer transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <a
              href="/Swati_Prakash_Resume.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden glass-nav absolute w-full top-full left-0 border-b border-white/5">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/Swati_Prakash_Resume.pdf"
              download
              className="flex items-center justify-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-base font-medium transition-all"
            >
              <FileText size={18} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
