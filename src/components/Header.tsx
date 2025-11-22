import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Tours', to: '/tours' },
  { name: 'Events', to: '/events' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Start Your Trip', to: '/tour-registration' },
  { name: 'Trusted Partners', to: '/stays' },
  { name: 'Book Now', to: '/contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkBaseClass = "transition-all duration-300 ease-in-out uppercase tracking-[0.5px] font-normal";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-theme-light-bg ${
        isScrolled || isMenuOpen ? 'shadow-md' : ''
      }`}
    >
      <div className="w-full flex justify-between items-center px-6 md:px-10 py-2">
        <Link to="/" className="flex items-center cursor-pointer">
          <img src="https://iili.io/KpSYT3F.png" alt="Bharatescapes Logo" className="h-14 w-auto" />
        </Link>
        <div>
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `${navLinkBaseClass} ${
                    isActive
                      ? 'bg-active-nav-gradient text-white font-medium rounded-[10px] px-[14px] py-[8px] shadow-sm'
                      : 'text-theme-text-dark hover:text-theme-accent-orange-end px-[14px] py-[8px]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-theme-text-dark z-50">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: '100vh' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-theme-light-bg absolute top-0 left-0 w-full"
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `${navLinkBaseClass} text-xl ${
                    isActive
                      ? 'bg-active-nav-gradient text-white font-medium rounded-[10px] px-[18px] py-[8px] shadow-sm'
                      : 'text-theme-text-dark hover:text-theme-accent-orange-end px-[18px] py-[8px]'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
