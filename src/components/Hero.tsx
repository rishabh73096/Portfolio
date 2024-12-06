import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Turning Ideas Into
              <span className="text-blue-500"> Digital Reality</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Full-stack developer specializing in building exceptional digital experiences.
              Let's work together to bring your vision to life.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
              >
                View Projects <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 p-6 rounded-xl">
                    <Code2 className="text-blue-500 mb-4" size={32} />
                    <h3 className="text-white font-semibold mb-2">Clean Code</h3>
                    <p className="text-gray-400 text-sm">Writing maintainable and scalable solutions</p>
                  </div>
                  <div className="bg-gray-900/50 p-6 rounded-xl">
                    <Rocket className="text-purple-500 mb-4" size={32} />
                    <h3 className="text-white font-semibold mb-2">Fast Performance</h3>
                    <p className="text-gray-400 text-sm">Optimized for the best user experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;