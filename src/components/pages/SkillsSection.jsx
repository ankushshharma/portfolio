import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Book, Bot, Gamepad,User } from 'lucide-react';

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
    specialized: {
      title: "Specialized Skills",
      icon: Globe,
      skills: [
        { name: "Manual Testing (Functional, Regression, Smoke Testing)" },
        { name: "AI-Powered Development Tools: Codeium, Claude AI, Cursor AI, ChatGPT" },
        { name: "Agile Methodologies: Scrum, Kanban" },
        { name: "Cross-Functional Team Collaboration" }
      ]
    },
    hobbies: {
      title: "Hobbies & Interests",
      icon: Book,
      skills: [
        { name: "Reading tech blogs", icon: Book },
        { name: "Exploring AI tools", icon: Bot },
        { name: "Playing Video Games", icon: Gamepad }
      ]
    },
    soft: {
      title: "Soft Skills",
      icon: User,
      skills: [
        { name: "Attention to Detail" },
        { name: "Analytical Thinking" },
        { name: "Problem-Solving" },
        { name: "Communication Skills" },
        { name: "Team Collaboration" }
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
        <div className="my-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            More About Me
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