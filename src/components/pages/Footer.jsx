import React from 'react';
import { Linkedin, Github, Instagram, Mail, Heart, Code,BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/ankushshharma/",
      icon: Linkedin,
      label: "LinkedIn Profile",
      lightColor: "text-blue-600 hover:text-blue-700",
      darkColor: "dark:text-blue-400 dark:hover:text-blue-300"
    },
    {
      href: "https://github.com/ankushshharma",
      icon: Github,
      label: "GitHub Profile",
      lightColor: "text-gray-700 hover:text-gray-900",
      darkColor: "dark:text-gray-300 dark:hover:text-white"
    },
    {
      href: "https://www.instagram.com/ankushshharma",
      icon: Instagram,
      label: "Instagram Profile",
      lightColor: "text-pink-600 hover:text-pink-700",
      darkColor: "dark:text-pink-400 dark:hover:text-pink-300"
    },
    {
      href: "mailto:contact@ankushsharma.com",
      icon: Mail,
      label: "Email Contact",
      lightColor: "text-green-600 hover:text-green-700",
      darkColor: "dark:text-green-400 dark:hover:text-green-300"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black py-12 mt-auto overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern dark:bg-grid-pattern-dark"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center space-y-8">

          {/* Social Links */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`group relative ${social.lightColor} ${social.darkColor}`}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 dark:from-emerald-500 dark:via-blue-500 dark:to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <social.icon size={28} className="relative transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Pronouns */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="text-xs text-gray-500 dark:text-gray-400 font-mono"
          >
            My pronouns are "Software/Developer" 👨‍💻
          </motion.p>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Ankush Sharma. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 dark:from-emerald-500 dark:via-blue-500 dark:to-purple-500"></div>
    </footer>
  );
};

// Add this to your global CSS or Tailwind config
const styles = `
@layer utilities {
  .bg-grid-pattern {
    background-image: linear-gradient(to right, rgba(0,0,0,.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0,0,0,.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  
  .bg-grid-pattern-dark {
    background-image: linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
}
`;

// Add this to your tailwind.config.js
const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        'gradient-start': {
          light: '#10B981', // emerald-500
          dark: '#059669', // emerald-600
        },
        'gradient-middle': {
          light: '#3B82F6', // blue-500
          dark: '#2563EB', // blue-600
        },
        'gradient-end': {
          light: '#8B5CF6', // purple-500
          dark: '#7C3AED', // purple-600
        },
      },
    },
  },
};

export default Footer;