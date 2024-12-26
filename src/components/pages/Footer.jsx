import React from 'react';
import { Linkedin, Github, Instagram, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/ankushshharma/",
      icon: Linkedin,
      label: "LinkedIn Profile",
      hoverColor: "hover:text-blue-400"
    },
    {
      href: "https://github.com/ankushshharma",
      icon: Github,
      label: "GitHub Profile",
      hoverColor: "hover:text-purple-400"
    },
    {
      href: "https://www.instagram.com/ankushshharma",
      icon: Instagram,
      label: "Instagram Profile",
      hoverColor: "hover:text-pink-400"
    },
    {
      href: "mailto:contact@ankushsharma.com",
      icon: Mail,
      label: "Email Contact",
      hoverColor: "hover:text-green-400"
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="transform transition-all duration-300 hover:scale-110"
              >
                <social.icon
                  size={28}
                  className={`${social.hoverColor} transition-colors duration-300`}
                />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            
            <p className="text-xs text-gray-400 animate-zoom-fade">
              My pronouns are "Software/Developer"
            </p>
            <p className="text-sm text-gray-300 mt-4">
              © {currentYear} Ankush Sharma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Add this CSS to your styles
const styles = `
@keyframes zoomFade {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
}

.animate-zoom-fade {
  animation: zoomFade 2s ease-in-out infinite;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-duration: 5s;
  animation-play-state: running;
  animation-direction: normal;
  animation-delay: 1s;
}
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Footer;