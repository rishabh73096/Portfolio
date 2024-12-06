import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400">Let's work together on your next project</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:contact@example.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                <Mail className="text-blue-500" size={24} />
                <span>contact@example.com</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                <Linkedin className="text-blue-500" size={24} />
                <span>LinkedIn Profile</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                <Github className="text-blue-500" size={24} />
                <span>GitHub Profile</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                <Twitter className="text-blue-500" size={24} />
                <span>Twitter Profile</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 p-8 rounded-xl"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;