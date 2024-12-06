import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Layout, Database, Cloud } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'frontend' | 'fullstack' | 'backend';
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'fullstack'
  },
  {
    title: 'Task Management API',
    description: 'RESTful API for task management with authentication, task CRUD operations, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Express.js', 'PostgreSQL', 'JWT', 'Docker'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'backend'
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with real-time updates, location-based forecasts, and beautiful visualizations.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Weather API'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'frontend'
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
    >
      <div className="relative group">
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
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a 
            href={project.githubUrl}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Github size={16} />
            <span className="text-sm">Code</span>
          </a>
          <a 
            href={project.liveUrl}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
            <span className="text-sm">Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;