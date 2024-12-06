import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import type { Project } from './types';

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe', 'JWT', 'Socket.io'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'fullstack',
    teamSize: '3 developers',
    duration: '6 months',
    features: [
      'User authentication and authorization',
      'Real-time inventory management',
      'Secure payment processing',
      'Order tracking and history',
      'Admin dashboard',
      'Product reviews and ratings'
    ]
  },
  {
    title: 'Task Management API',
    description: 'RESTful API for task management with authentication, task CRUD operations, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Express.js', 'PostgreSQL', 'TypeScript', 'JWT', 'Docker', 'Redis', 'Jest'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'backend',
    teamSize: '2 developers',
    duration: '4 months',
    features: [
      'RESTful API endpoints',
      'Role-based access control',
      'Real-time notifications',
      'Data caching',
      'Automated testing',
      'API documentation'
    ]
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with real-time updates, location-based forecasts, and beautiful visualizations.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Chart.js', 'Weather API', 'Geolocation API'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'frontend',
    teamSize: 'Solo project',
    duration: '2 months',
    features: [
      'Real-time weather updates',
      'Interactive weather maps',
      'Location-based forecasts',
      'Weather alerts',
      'Historical weather data',
      'Responsive design'
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="bg-gray-900 py-32">
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
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject!}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;