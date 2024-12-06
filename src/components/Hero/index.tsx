import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Stats from './Stats';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Turning Ideas Into
                <span className="text-blue-500"> Digital Reality</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Software developer specializing in building exceptional digital experiences.
                Let's work together to bring your vision to life.
              </p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
                  onClick={() => scrollToSection('#projects')}
                >
                  View Projects <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-700/50 transition-colors"
                  onClick={() => scrollToSection('#contact')}
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Stats />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;