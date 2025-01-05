import { motion } from 'framer-motion';
import { Beaker, Cpu, Trello, Users } from 'lucide-react'; // Import icons from lucide-react

const SpecializedSkills = () => {
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

  const skills = [
    {
      name: "Manual Testing",
      details: "Specialized in Functional, Regression, and Smoke Testing methodologies for comprehensive software quality assurance",
      icon: <Beaker size={32} />,
    },
    {
      name: "AI-Powered Development",
      details: "Proficient in utilizing advanced AI tools including Codeium, Claude AI, Cursor AI, and ChatGPT for enhanced development workflows",
      icon: <Cpu size={32} />,
    },
    {
      name: "Agile Methodologies",
      details: "Experienced in Scrum and Kanban frameworks, ensuring efficient project management and delivery",
      icon: <Trello size={32} />,
    },
    {
      name: "Cross-Functional Collaboration",
      details: "Strong ability to work effectively across teams, fostering productive relationships and achieving shared objectives",
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
          className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white"
          variants={fadeIn}
        >
          Specialized Skills
        </motion.h2>
        
        <div className="relative">
          {/* Curved Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 dark:from-gray-800 dark:via-indigo-900 dark:to-gray-800 -skew-y-3 transform rounded-3xl -z-10"></div>
          
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
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-all border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
              >
                <div className="text-center space-y-4">
                  <motion.div
                    className="mb-4 flex justify-center"
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <span className="text-blue-500">
                      {skill.icon}
                    </span>
                  </motion.div>

                  <motion.h3 
                    className="text-xl font-bold text-gray-800 dark:text-white mb-2"
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