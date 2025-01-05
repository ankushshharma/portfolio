import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BrainCircuit } from 'lucide-react';
import { FaReact } from 'react-icons/fa';

const MadeWithTech = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 0.3 }
    }
  };

  // Icon configurations
  const icons = [
    {
      component: FaReact,
      animation: {
        rotate: [0, 360]
      },
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      },
      className: "text-blue-500 dark:text-blue-400"
    },
    {
      component: BrainCircuit,
      animation: {
        scale: [1, 1.1, 1]
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      },
      className: "text-purple-500 dark:text-purple-400"
    },
    {
      component: Heart,
      animation: {
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0]
      },
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      },
      className: "text-red-500 dark:text-red-400"
    }
  ];

  // Animated Icon component
  const AnimatedIcon = ({ icon: Icon, animation, transition, className }) => (
    <motion.div
      animate={animation}
      transition={transition}
      className={className}
    >
      <Icon size={24} />
    </motion.div>
  );

  return (
    <section className="py-12 w-full px-4 md:px-8 max-w-7xl mx-auto">
      <div className="madewith text-lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center space-x-4 text-base text-gray-600 dark:text-gray-300"
        >
          <span className="font-medium">Made with</span>
          
          <AnimatedIcon {...icons[0]} /> {/* React */}
          
          <AnimatedIcon {...icons[1]} /> {/* AI */}
          
          <span className="font-medium">and</span>
          
          <AnimatedIcon {...icons[2]} /> {/* Heart */}
        </motion.div>
      </div>
    </section>
  );
};

// // PropTypes for type checking (optional but recommended)
// MadeWithTech.propTypes = {
//   className: PropTypes.string
// };

export default MadeWithTech;