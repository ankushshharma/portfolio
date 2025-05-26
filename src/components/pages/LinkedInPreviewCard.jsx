import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const linkedinUrl = "https://www.linkedin.com/in/ankushshharma/";
import LinkedInPreviewImg from '../../assets/resume/LinkedIn-Preview.png';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } }
};

const LinkedInPreviewCard = () => {
  return (
    <motion.div
      className="flex flex-col items-center py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      {/* Heading with Icon */}
      <div className="flex items-center mb-6">
        <Linkedin className="w-8 h-8 mr-3 text-blue-600 dark:text-blue-400" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center">
          Connect with me on LinkedIn
        </h2>
      </div>
      <div className="relative group w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* LinkedIn Preview Image */}
        <img
          src={LinkedInPreviewImg}
          alt="LinkedIn Profile Preview"
          className="w-full h-auto object-cover"
        />
        {/* Glassmorphism Overlay on Hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/60 dark:bg-gray-800/60 rounded-xl shadow-lg text-blue-700 dark:text-blue-300 font-bold text-lg backdrop-blur-md border border-blue-400 hover:bg-white/80 hover:scale-105 transition-all duration-200"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="inline-flex items-center">
              <Linkedin className="w-5 h-5 mr-2" />
              View on LinkedIn
            </span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default LinkedInPreviewCard; 