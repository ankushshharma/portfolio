import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, TestTube, Cpu, Users, GitBranch } from 'lucide-react';

const SpecializedSkills = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const skills = [
    {
      name: "Full Stack Development",
      details: "Java (Core, Collections, Concurrency), JavaScript (ES6+), React, Angular, Spring Boot with RESTful APIs and Microservices architecture",
      icon: <Code size={32} />,
    },
    {
      name: "Backend & APIs",
      details: "Spring Boot (Core, Cloud), RESTful API development, Microservices design patterns, and scalable backend architecture",
      icon: <Server size={32} />,
    },
    {
      name: "Database Management",
      details: "MySQL, PostgreSQL with advanced query optimization, indexing strategies, and database performance tuning",
      icon: <Database size={32} />,
    },
    {
      name: "Cloud & DevOps",
      details: "AWS (EC2, S3), Docker containerization, Kubernetes orchestration, Jenkins CI/CD pipelines, and Git version control",
      icon: <Cloud size={32} />,
    },
    {
      name: "Testing & Automation",
      details: "Selenium automation, JUnit testing, End-to-End testing strategies, TDD methodology, and comprehensive automation frameworks",
      icon: <TestTube size={32} />,
    },
    {
      name: "AI Integration",
      details: "OpenAI API, Gemini AI, Claude API integration for building intelligent applications and AI-powered solutions",
      icon: <Cpu size={32} />,
    },
    {
      name: "Data Structures & Algorithms",
      details: "Strong foundation in DSA with competitive programming experience on LeetCode, HackerRank, and Codeforces platforms",
      icon: <GitBranch size={32} />,
    },
    {
      name: "Agile Project Management",
      details: "Jira project management, Agile methodologies (Scrum, Kanban), complete SDLC implementation and team collaboration",
      icon: <Users size={32} />,
    }
  ];

  return (
    <motion.section 
      id="specialized-skills"
      className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="w-full">
        <motion.h2 
          className="text-3xl font-bold mb-2 text-center text-gray-900 dark:text-white"
          variants={fadeIn}
        >
          Technical Expertise
        </motion.h2>
        
        <div className="relative">
          {/* Curved Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-indigo-900 dark:to-purple-900 -skew-y-2 transform rounded-3xl -z-10"></div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-4">
            {skills.map((skill, index) => (
              <motion.div   
                key={index}
                variants={fadeIn}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-all border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
              >
                <div className="text-center space-y-4">
                  <motion.div
                    className="mb-4 flex justify-center"
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <span className="text-blue-500 dark:text-blue-400">
                      {skill.icon}
                    </span>
                  </motion.div>

                  <motion.h3 
                    className="text-lg font-bold text-gray-800 dark:text-white mb-3"
                    whileHover={{
                      color: "#3B82F6",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill.name}
                  </motion.h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {skill.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SpecializedSkills;