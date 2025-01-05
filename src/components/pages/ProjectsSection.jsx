import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Dumbbell, Newspaper, Bot } from 'lucide-react'; // Import icons for projects
import Synchrofit from '../../assets/previews/SynchroFit.png';

const ProjectsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);

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

  const projects = [
    {
      title: 'Automation Testing Framework',
      tech: 'ASP.NET, .NET MVC, Java, Selenium, MySQL',
      description: 'Developed and maintained a Selenium-based automation testing framework. Integrated the framework into CI/CD pipelines.',
      buttonText: 'Ongoing',
      icon: <Code2 size={24} />,
      color: 'from-green-400 to-green-600',
      status: 'ongoing',
      screenshot: 'path/to/automation_testing_framework_screenshot.png'
    },
    {
      title: 'SynchroFit - Workout & Diet Planner',
      tech: 'React, SpringBoot, API, Gemini AI',
      description: 'AI-Powered Fitness Revolution. Experience the future of fitness with our intelligent AI system that creates perfectly tailored workout and nutrition plans just for you.',
      buttonText: 'Click here',
      icon: <Dumbbell size={24} />,
      color: 'from-blue-400 to-blue-600',
      status: 'active',
      url: 'https://synchrofit.netlify.app/',
      screenshot: Synchrofit
    },
    {
      title: 'Up Tech - Tech news app',
      tech: 'React, SpringBoot, MySQL',
      description: 'Created a technical news portal with React JS for frontend and Sprintboot MVC for the backend. Integrated News API for content.',
      buttonText: 'Deprecated',
      icon: <Newspaper size={24} />,
      color: 'from-red-400 to-red-600',
      status: 'deprecated',
      screenshot: 'path/to/up_tech_screenshot.png'
    },
    {
      title: 'CodeCritique - AI Code Reviewer',
      tech: 'React, SpringBoot, Gemini AI',
      description: 'AI-Powered Code Reviewer. Experience the future of code review with our intelligent AI system that creates perfectly tailored workout and nutrition plans just for you.',
      buttonText: 'Upcoming',
      icon: <Bot size={24} />,
      color: 'from-purple-400 to-purple-600',
      status: 'upcoming',
      screenshot: 'path/to/code_critique_screenshot.png'
    }
  ];

  const getStatusStyles = (status) => {
    switch(status) {
      case 'ongoing':
        return 'bg-green-600 hover:bg-green-700';
      case 'active':
        return 'bg-blue-600 hover:bg-blue-700';
      case 'deprecated':
        return 'bg-red-600 hover:bg-red-700';
      case 'upcoming':
        return 'bg-purple-600 hover:bg-purple-700';
      default:
        return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.section 
      id="projects"
      className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      onMouseMove={handleMouseMove}
    >
      <div className="w-full">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          variants={fadeIn}
        >
          Projects
        </motion.h2>
        
        <div className="relative">
          {/* Curved Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50 dark:from-gray-800 dark:via-blue-900/20 dark:to-gray-800 -skew-y-3 transform rounded-3xl -z-10"></div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ 
                  scale: 1.03,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden relative group border border-gray-100 dark:border-gray-700"
              >
                {/* Top Gradient Bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />
                
                <div className="p-6 space-y-4">
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex-grow">
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-2 rounded-full bg-gray-50 dark:bg-gray-700`}
                    >
                      {project.icon}
                    </motion.div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>

                  {/* Button - Reveals on Hover */}
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button 
                      className={`w-full px-6 py-2 text-white rounded-lg transition-colors text-sm ${getStatusStyles(project.status)}
                        ${project.status !== 'active' ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      disabled={project.status !== 'active'}
                      onMouseEnter={() => handleMouseEnter(project)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => {
                        if (project.status === 'active') {
                          window.open(project.url, '_blank');
                        }
                      }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        {project.buttonText}
                        {project.status === 'active' && (
                          <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            →
                          </motion.span>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {isHovered && hoveredProject && (
        <div
          style={{
            position: 'fixed',
            top: cursorPosition.y + 20,
            left: cursorPosition.x + 20,
            zIndex: 1000,
            pointerEvents: 'none',
          }}
        >
          <img
            src={hoveredProject.screenshot}
            alt={`${hoveredProject.title} screenshot`}
            className="w-64 h-40 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
    </motion.section>
  );
};

export default ProjectsSection;