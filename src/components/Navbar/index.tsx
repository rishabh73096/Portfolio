import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <Logo />
            <NavLinks />
            <MobileMenu />
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Navbar;