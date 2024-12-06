import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe2, Laptop, Users } from 'lucide-react';

const stats = [
  {
    icon: Code2,
    value: 'Fresher',
    color: 'text-blue-500'
  },
  {
    icon: Globe2,
    value: '10+',
    label: 'Projects Completed',
    color: 'text-green-500'
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400">Passionate about creating innovative solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="/rishu.jpg"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Software Developer</h3>
            <p className="text-gray-400 leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating
              scalable and efficient solutions using modern technologies. My passion lies in
              building user-friendly applications that solve real-world problems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I have worked with various clients across different industries, helping them
              achieve their digital goals through innovative solutions and clean code
              practices.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 bg-gray-900 rounded-lg"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;