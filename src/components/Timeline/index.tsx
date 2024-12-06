import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'education';
}

const timelineData: TimelineItem[] = [
  {
    year: '2023 - Present',
    title: 'Senior Full Stack Developer',
    organization: 'Tech Innovations Inc.',
    description: 'Leading development of enterprise-scale applications using React, Node.js, and cloud technologies.',
    type: 'work'
  },
  {
    year: '2022',
    title: 'Master\'s in Computer Science',
    organization: 'Tech University',
    description: 'Specialized in Software Engineering and Cloud Computing with a focus on distributed systems.',
    type: 'education'
  },
  {
    year: '2021 - 2022',
    title: 'Full Stack Developer',
    organization: 'Digital Solutions Ltd.',
    description: 'Developed and maintained multiple client projects using modern web technologies.',
    type: 'work'
  },
  {
    year: '2020',
    title: 'Bachelor\'s in Computer Science',
    organization: 'State University',
    description: 'Graduated with honors, specialized in Web Development and Software Engineering.',
    type: 'education'
  },
  {
    year: '2019 - 2020',
    title: 'Junior Developer',
    organization: 'StartUp Hub',
    description: 'Started career working on innovative startup projects.',
    type: 'work'
  },
  {
    year: '2019',
    title: 'Web Development Certification',
    organization: 'Tech Academy',
    description: 'Completed intensive training in modern web development technologies.',
    type: 'education'
  }
];

const TimelineItem: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`mb-8 flex justify-between w-full ${
        isEven ? 'flex-row-reverse' : ''
      }`}
    >
      <div className={`w-5/12 ${isEven ? 'text-right' : ''}`}>
        <div className={`p-6 bg-gray-800 rounded-lg shadow-xl ${
          item.type === 'education' ? 'border-l-4 border-purple-500' : 'border-l-4 border-blue-500'
        }`}>
          <span className="text-sm text-gray-400 block mb-2">{item.year}</span>
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <h4 className={`font-semibold mb-2 ${
            item.type === 'education' ? 'text-purple-500' : 'text-blue-500'
          }`}>
            {item.organization}
          </h4>
          <p className="text-gray-400 text-sm">{item.description}</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-12">
        <div className="h-full w-1 bg-gray-700"></div>
        <div className={`absolute w-8 h-8 rounded-full flex items-center justify-center ${
          item.type === 'education' ? 'bg-purple-500' : 'bg-blue-500'
        }`}>
          {item.type === 'work' ? (
            <Briefcase className="w-4 h-4 text-white" />
          ) : (
            <GraduationCap className="w-4 h-4 text-white" />
          )}
        </div>
      </div>

      <div className="w-5/12"></div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Education</h2>
          <p className="text-gray-400">My professional journey and academic background</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;