import React from 'react';
import { motion } from 'framer-motion';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const NavLinks = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          className="text-gray-300 hover:text-white transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector(link.href);
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {link.name}
        </motion.a>
      ))}
    </nav>
  );
};

export default NavLinks;