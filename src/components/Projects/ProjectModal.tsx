import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Package, Users, Calendar } from 'lucide-react';
import type { Project } from './types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-gray-800 rounded-xl shadow-xl z-50 overflow-hidden"
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-gray-900/50 backdrop-blur-sm rounded-full text-white hover:bg-gray-900/75 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <Package size={16} />
                  <span className="text-sm">{project.category}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Users size={16} />
                  <span className="text-sm">Team Size: {project.teamSize}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span className="text-sm">{project.duration}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Overview</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href={project.githubUrl}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                <a 
                  href={project.liveUrl}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;