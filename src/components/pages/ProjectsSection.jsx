import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code2, Dumbbell, Bot, Newspaper, ExternalLink } from 'lucide-react';
import Synchrofit from '../../assets/previews/SynchroFit.png';
import Socify from '../../assets/previews/Socify-App.png';
import JaunGPT from '../../assets/previews/JaunGPT.png';
import SenseThrough from '../../assets/previews/SenseThrough.png';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProjectDisplay = () => {
  const projects = [
    {
      title: 'Automation Testing Framework',
      tech: 'ASP.NET, .NET MVC, Java, Selenium, MySQL',
      description: 'Developed and maintained a Selenium-based automation testing framework. Integrated the framework into CI/CD pipelines.',
      buttonText: 'Ongoing',
      icon: <Code2 size={24} />,
      color: 'from-green-400 to-green-600',
      status: 'active',
      screenshot: 'https://placehold.co/600x400?text=ongoing'
    },
    {
      title: 'NexLetter - AI Document Generator',
      tech: 'React, Spring Boot, Gemini AI, REST APIs',
      description: 'Developed an AI-powered web application with React and Spring Boot backend, integrating Gemini AI via REST APIs for generating personalized referral emails, messages, and cover letters. Reduced manual writing time by 45% through seamless AI-assisted document generation.',
      buttonText: 'Click here',
      icon: <Bot size={24} />,
      color: 'from-purple-400 to-purple-600',
      status: 'active',
      url: '#',
      screenshot: 'https://placehold.co/600x400?text=NexLetter'
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
      title: 'Socify - Instagram Post downloader',
      tech: 'React, NodeJS',
      description: 'Socify is a web app that allows you to download Instagram posts and videos.',
      buttonText: 'Click here',
      icon: <Bot size={24} />,
      color: 'from-purple-400 to-purple-600',
      status: 'deprecated',
      url: 'https://socify-app.netlify.app/',
      screenshot: Socify
    },
    {
      title: 'JaunGPT - AI Chatbot',
      tech: 'React, NodeJS',
      description: 'JaunGPT is an AI chatbot that becomes your companion, a chatbot inspired by the wit and wisdom of Jaun Elia.',
      buttonText: 'Click here',
      icon: <Bot size={24} />,
      color: 'from-purple-400 to-purple-600',
      status: 'deprecated',
      url: 'https://jaungpt.netlify.app/',
      screenshot: JaunGPT
    },
    {
      title: 'Up Tech - Tech news app',
      tech: 'React, SpringBoot, MySQL',
      description: 'Created a technical news portal with React JS for frontend and Sprintboot MVC for the backend. Integrated News API for content.',
      buttonText: 'Deprecated',
      icon: <Newspaper size={24} />,
      color: 'from-red-400 to-red-600',
      status: 'deprecated',
      screenshot: 'https://placehold.co/600x400?text=need+to+be+fixed'
    },
    {
      title: 'CodeCritique - AI Code Reviewer',
      tech: 'React, SpringBoot, Gemini AI',
      description: 'AI-Powered Code Reviewer. Experience the future of code review with our intelligent AI system that creates perfectly tailored workout and nutrition plans just for you.',
      buttonText: 'Upcoming',
      icon: <Bot size={24} />,
      color: 'from-purple-400 to-purple-600',
      status: 'upcoming',
      screenshot: 'https://placehold.co/600x400?text=upcoming'
    },
    {
      title: 'Accuweather - weather forecast application',
      tech: 'React, SpringBoot, WeatherAPI',
      description: 'Accuweather is a weather forecast app built with React and SpringBoot, utilizing WeatherAPI for accurate, real-time updates. Stay informed with a seamless, user-friendly experience for all your weather needs.',
      buttonText: 'Click here',
      icon: <Dumbbell size={24} />,
      color: 'from-blue-400 to-blue-600',
      status: 'upcoming',
      url: 'Yet to deploy',
      screenshot: 'https://placehold.co/600x400?text=upcoming'
    },
    {
      title: 'SenseThrough - Browser clone using Serper API',
      tech: 'React, API, Serper AI',
      description: 'Add Some Description',
      buttonText: 'Click here',
      icon: <Dumbbell size={24} />,
      color: 'from-blue-400 to-blue-600',
      status: 'deprecated',
      url: 'https://sensethrough.netlify.app/',
      screenshot: SenseThrough
    }
  ];

  const [showAllProjects, setShowAllProjects] = useState(false);

  const activeProjects = projects.filter(project => 
    project.status === 'active' 
  );

  const otherProjects = projects.filter(project => 
    project.status === 'upcoming' || project.status === 'deprecated'|| project.status === 'ongoing'
  );

  const displayedActiveProjects = showAllProjects ? activeProjects : activeProjects.slice(0, 6);
  const displayedOtherProjects = showAllProjects ? otherProjects : otherProjects.slice(0, 2);

  const ProjectCard = ({ project }) => {
    const getTechTags = (techString) => {
      return techString.split(', ').map(tech => tech.trim());
    };

    const statusColors = {
      active: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
      ongoing: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
      upcoming: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
      deprecated: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
    };

    return (
      <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Image Overlay with Button */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          {project.url && project.status !== 'upcoming' && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
            >
              View Project <ExternalLink size={16} />
            </a>
          )}
        </div>

        {/* Project Image */}
        <div className="aspect-video w-full overflow-hidden">
        {project.screenshot ? (
          <img 
            src={project.screenshot} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <Skeleton className="w-full h-full" />
        )}
        </div>

        {/* Project Details */}
        <div className="p-6">
          {/* Header with Icon and Status */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-gray-600 dark:text-gray-400">
                {project.icon}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
              {project.status}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {getTechTags(project.tech).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Active Projects Section */}
      <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>Projects</h1>
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Active Projects
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {activeProjects.length} projects
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedActiveProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Other Projects Section */}
      {otherProjects.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Other Projects
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {otherProjects.length} projects
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedOtherProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Show More/Less Button */}
      {(activeProjects.length > 6 || otherProjects.length > 2) && (
        <button
          onClick={() => setShowAllProjects(!showAllProjects)}
          className="w-full mt-6 py-3 px-4 flex items-center justify-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200"
        >
          {showAllProjects ? (
            <>
              Show Less Projects
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show More Projects
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default ProjectDisplay;
