import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'work' | 'education';
}

const timelineData: TimelineItem[] = [
  {
    year: '2023 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading development of enterprise-scale applications using React, Node.js, and cloud technologies.',
    type: 'work'
  },
  {
    year: '2021 - 2023',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    description: 'Developed and maintained multiple client projects using modern web technologies.',
    type: 'work'
  },
  {
    year: '2020',
    title: 'Master\'s in Computer Science',
    company: 'Tech University',
    description: 'Specialized in Software Engineering and Cloud Computing.',
    type: 'education'
  },
  {
    year: '2018 - 2020',
    title: 'Junior Developer',
    company: 'StartUp Hub',
    description: 'Started career working on innovative startup projects.',
    type: 'work'
  }
];

const TimelineItem: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
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
      className="mb-8 flex w-full items-center justify-between"
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        {item.type === 'work' ? (
          <Briefcase className="w-4 h-4 text-blue-500 mx-auto" />
        ) : (
          <GraduationCap className="w-4 h-4 text-purple-500 mx-auto" />
        )}
      </div>
      <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="font-bold text-white text-xl">{item.title}</h3>
        <h4 className="text-blue-500 font-semibold">{item.company}</h4>
        <p className="text-sm text-gray-300 mt-2">{item.description}</p>
        <span className="text-xs text-gray-400 mt-2 block">{item.year}</span>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <div className="bg-gray-900 py-20">
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

        <div className="relative wrap overflow-hidden p-10">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;