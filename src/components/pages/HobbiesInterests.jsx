import { motion } from 'framer-motion';
import { BookOpen, Brain, Gamepad } from 'lucide-react'; // Import relevant icons

const HobbiesInterests = () => {
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

  const hobbies = [
    {
      name: "Reading Tech Blogs",
      details: "Staying updated with latest technology trends and innovations through regular reading of technical blogs and articles",
      icon: <BookOpen size={32} />,
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Exploring AI Tools",
      details: "Experimenting with and learning about various artificial intelligence tools and their practical applications",
      icon: <Brain size={32} />,
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Playing Video Games",
      details: "Enjoying immersive gaming experiences that enhance problem-solving skills and provide creative entertainment",
      icon: <Gamepad size={32} />,
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <motion.section 
      id="hobbies-interests"
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
          Hobbies & Interests
        </motion.h2>
        
        <div className="relative">
          {/* Curved Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-purple-900 dark:to-gray-800 -skew-y-3 transform rounded-3xl -z-10"></div>
          
          {/* Hobbies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4">
            {hobbies.map((hobby, index) => (
              <motion.div   
                key={index}
                variants={fadeIn}
                whileHover={{ 
                  scale: 1.05,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl shadow-lg"></div>
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-all border border-gray-100 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 relative z-10">
                  <div className="text-center space-y-4">
                    <motion.div
                      className="mb-6 flex justify-center"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <span className={`text-purple-500 bg-purple-50 dark:bg-purple-900/30 p-4 rounded-full`}>
                        {hobby.icon}
                      </span>
                    </motion.div>

                    <motion.h3 
                      className="text-xl font-bold text-gray-800 dark:text-white mb-3"
                      whileHover={{
                        color: "#9333EA", // purple-600
                        transition: { duration: 0.2 }
                      }}
                    >
                      {hobby.name}
                    </motion.h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {hobby.details}
                    </p>

                    {/* Decorative Element */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HobbiesInterests;