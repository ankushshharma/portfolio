import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProfessionalTimeline = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      period: 'Feb 2024 - Present',
      title: 'Associate Software Testing Engineer - QA',
      company: 'TalentNeuron, Chennai',
      responsibilities: [
        'Developed and maintained automation testing frameworks',
        'Created and modified scripts for performance testing using JMeter',
        'Enhanced and modified Java Selenium code for automated testing',
        'Managed databases for automation executions on the Automation Portal',
        'Handled Dynatrace Synthetic Monitors for application performance monitoring',
        'Collaborated closely with the Data Harvesting team to ensure accurate data collection and analysis',
        'Worked closely with the DAAS team on API testing, ensuring seamless integration and high-quality API performance'
      ]
    },
    {
      period: 'Sep 2023 - Dec 2023',
      title: 'Associate Software Testing Engineer - Intern',
      company: 'TalentNeuron, Chennai',
      responsibilities: [
        'Executed manual test cases and reported defects, contributing to the improvement of software quality',
        'Performed black-box testing to ensure compliance with specified requirements',
        'Collaborated with developers to clarify requirements and expected outcomes',
        'Assisted in the development of test plans and test cases, ensuring thorough test coverage'
      ]
    },
    {
      period: 'Feb 2023 - June 2023',
      title: 'Full Stack Web Developer',
      company: 'Koskill Education, Bangalore',
      responsibilities: [
        'Developed an RSS news aggregator using the MERN stack (MongoDB, Express.js, React.js, Node.js)',
        'Collaborated with senior developers to improve code quality and project efficiency',
        'Applied best practices in web development, resulting in a project that met deadlines and client expectations'
      ]
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section 
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <motion.h2 
        className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        variants={fadeIn}
      >
        Professional Experience
      </motion.h2>
      
      <div className="relative">
        {/* Timeline center line with gradient */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400" />
        
        {/* Experience items */}
        {experiences.map((experience, index) => (
          <div 
            key={index}
            id={`experience-${index}`}
            data-animate
            className={`relative flex md:items-center mb-16`}
          >
            <motion.div 
              className={`flex items-start md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-[50%]'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible[`experience-${index}`] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div 
                className={`bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full relative cursor-pointer
                  border border-gray-100 dark:border-gray-700 transition-all duration-300
                  ${hoveredCard === index ? 'shadow-2xl dark:shadow-indigo-500/20 transform scale-105' : 'shadow-md'}`}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Experience dot marker */}
                <div className={`absolute top-10 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 
                  ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`} 
                />
                
                {/* Header content with proper alignment */}
                <div className={`flex flex-col ${index % 2 === 0 ? 'items-end' : 'items-start'}`}>
                  <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {experience.period}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                    {experience.company}
                  </h4>
                </div>
                
                {/* Responsibilities with hover effect */}
                <motion.div 
                  className="overflow-hidden mt-4"
                  initial={false}
                  animate={{ 
                    height: hoveredCard === index ? 'auto' : '0',
                    opacity: hoveredCard === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className={`text-gray-600 dark:text-gray-400 text-sm space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700
                    ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {experience.responsibilities.map((responsibility, idx) => (
                      <motion.li 
                        key={idx} 
                        className={`list-none transform transition-all duration-300 ease-in-out
                          ${index % 2 === 0 ? 'flex flex-row-reverse items-center' : 'flex items-center'}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        animate={hoveredCard === index ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <span className={`flex-shrink-0 ${index % 2 === 0 ? 'ml-2' : 'mr-2'}`}>•</span>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Hover instruction */}
                {hoveredCard !== index && (
                  <div className={`text-sm text-gray-400 dark:text-gray-500 mt-4 italic
                    ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    Hover to see details
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProfessionalTimeline;