import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;