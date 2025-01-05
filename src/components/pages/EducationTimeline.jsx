import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react'; // Import education-related icons

const EducationTimeline = () => {
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

  const education = [
    {
      period: '2019-2023',
      degree: 'Bachelor of Technology',
      major: 'Computer Science Engineering',
      grade: '7.8 CGPA',
      institution: 'Chandigarh Engineering College',
      location: 'Mohali, Punjab',
      icon: <GraduationCap size={24} />,
      color: 'from-blue-400 to-blue-600'
    },
    {
      period: '2018-2019',
      degree: '12th (Senior Secondary)',
      grade: '76%',
      institution: 'Khalsa Public School',
      location: 'Saharanpur, UP - 247001',
      icon: <School size={24} />,
      color: 'from-purple-400 to-purple-600'
    },
    {
      period: '2016-2017',
      degree: '10th (Matric)',
      grade: '76%',
      institution: 'Khalsa Public School',
      location: 'Saharanpur, UP - 247001',
      icon: <BookOpen size={24} />,
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <motion.section 
      id="education"
      className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="w-full">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          variants={fadeIn}
        >
          Education
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 dark:from-blue-500 dark:via-purple-500 dark:to-green-500"></div>
          
          {/* Education Items */}
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400 z-10"></div>
              
              {/* Content card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <motion.div
                  whileHover={{ 
                    scale: 1.03,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }
                  }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
                >
                  {/* Top Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}`}></div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {edu.major}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 rounded-full bg-gray-50 dark:bg-gray-700 text-blue-500 dark:text-blue-400"
                    >
                      {edu.icon}
                    </motion.div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        {edu.period}
                      </span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">
                        {edu.grade}
                      </span>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-gray-800 dark:text-gray-200 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {edu.location}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EducationTimeline;