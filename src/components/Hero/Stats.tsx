import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket } from 'lucide-react';

const Stats = () => {
  return (
    <div className="relative">
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl">
        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/50 p-6 rounded-xl"
          >
            <Code2 className="text-blue-500 mb-4" size={32} />
            <h3 className="text-white font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-400 text-sm">Writing maintainable and scalable solutions</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/50 p-6 rounded-xl"
          >
            <Rocket className="text-purple-500 mb-4" size={32} />
            <h3 className="text-white font-semibold mb-2">Fast Performance</h3>
            <p className="text-gray-400 text-sm">Optimized for the best user experience</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Stats;