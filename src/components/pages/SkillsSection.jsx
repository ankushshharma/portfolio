import React from 'react';
import { motion } from 'framer-motion';
import { Code2, TestTube, Bot, Briefcase, Database, Server, Cloud, GitBranch } from 'lucide-react';

const SkillsSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const SkillTag = ({ children, icon: Icon }) => (
    <motion.span 
      className="px-3 py-1.5 bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-white rounded-full text-sm flex items-center gap-1.5 hover:scale-110 transition-transform duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
    >
      {Icon && <Icon size={14} />}
      {children}
    </motion.span>
  );

  const SkillCard = ({ title, icon: Icon, skills }) => (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full md:w-80"
      whileHover={{ 
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 15 }
      }}
    >
      <motion.div 
        className="flex justify-center text-blue-500 mb-3"
        whileHover={{ rotate: 360, transition: { duration: 0.6 }}}
      >
        <Icon size={24} />
      </motion.div>
      <motion.h3 
        className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white"
        whileHover={{
          color: "#3B82F6",
          transition: { duration: 0.2 }
        }}
      >
        {title}
      </motion.h3>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <SkillTag key={index} icon={skill.icon}>
            {skill.name}
          </SkillTag>
        ))}
      </div>
    </motion.div>
  );

  const skillsData = {
    programming: {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Java (Core, Collections, Concurrency, Stream API)", icon: Code2 },
        { name: "JavaScript (ES6+)", icon: Code2 },
        { name: "Data Structures & Algorithms", icon: Code2 }
      ]
    },
    frontend: {
      title: "Frontend Development",
      icon: Server,
      skills: [
        { name: "React", icon: Server },
        { name: "Angular", icon: Server },
        { name: "HTML5 & CSS3", icon: Server },
        { name: "Responsive Design", icon: Server }
      ]
    },
    backend: {
      title: "Backend & Database",
      icon: Database,
      skills: [
        { name: "Spring Boot (Core, Cloud)", icon: Database },
        { name: "RESTful APIs & Microservices", icon: Database },
        { name: "MySQL & PostgreSQL", icon: Database },
        { name: "Query Optimization & Indexing", icon: Database }
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS (EC2, S3)", icon: Cloud },
        { name: "Docker & Kubernetes", icon: Cloud },
        { name: "Jenkins & Git", icon: Cloud },
        { name: "CI/CD Pipelines", icon: Cloud }
      ]
    },
    testing: {
      title: "Testing & Automation",
      icon: TestTube,
      skills: [
        { name: "Selenium", icon: TestTube },
        { name: "JUnit", icon: TestTube },
        { name: "End-to-End Testing", icon: TestTube },
        { name: "TDD & Automation Frameworks", icon: TestTube }
      ]
    },
    ai: {
      title: "AI & Integration",
      icon: Bot,
      skills: [
        { name: "OpenAI API", icon: Bot },
        { name: "Gemini AI", icon: Bot },
        { name: "Claude API", icon: Bot },
        { name: "API Integration", icon: Bot }
      ]
    },
    management: {
      title: "Project Management",
      icon: Briefcase,
      skills: [
        { name: "Jira", icon: Briefcase },
        { name: "Agile (Scrum, Kanban)", icon: Briefcase },
        { name: "SDLC", icon: Briefcase },
        { name: "Team Collaboration", icon: Briefcase }
      ]
    }
  };

  return (
    <motion.section 
      className="py-12 w-full px-4 md:px-8 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="w-full">
        <div className="my-2">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {Object.values(skillsData).map((section, index) => (
              <SkillCard
                key={index}
                title={section.title}
                icon={section.icon}
                skills={section.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;