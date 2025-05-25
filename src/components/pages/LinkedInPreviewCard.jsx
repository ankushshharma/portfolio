import React from 'react';

const linkedinUrl = "https://www.linkedin.com/in/ankushshharma/";
import LinkedInPreviewImg from '../../assets/resume/LinkedIn-Preview.png';

const LinkedInPreviewCard = () => {
  return (
    <div className="flex justify-center py-12">
      <div className="relative group w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* LinkedIn Preview Image */}
        <img
          src={LinkedInPreviewImg}
          alt="LinkedIn Profile Preview"
          className="w-full h-auto object-cover"
        />
        {/* Glassmorphism Overlay on Hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/60 dark:bg-gray-800/60 rounded-xl shadow-lg text-blue-700 dark:text-blue-300 font-bold text-lg backdrop-blur-md border border-blue-400 hover:bg-white/80 hover:scale-105 transition-all duration-200"
          >
            View on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkedInPreviewCard; 