import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Code } from 'lucide-react';
import type { Project } from './types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-xl cursor-pointer group"
      onClick={onClick}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          {project.category === 'frontend' && <Layout className="text-blue-400" size={20} />}
          {project.category === 'backend' && <Database className="text-green-400" size={20} />}
          {project.category === 'fullstack' && <Code className="text-purple-400" size={20} />}
          <span className="text-sm text-gray-400 capitalize">{project.category}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};