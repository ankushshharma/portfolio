import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    Download, 
    Linkedin, 
    Github, 
    Mail,
    Code,
    TestTube,
    Database,
    Bot,
    Server,
    Book,
    Gamepad,
    Globe,
    LineChart,
    Instagram
} from 'lucide-react';
import '../../../src/App.css';
import Footer from './Footer';
import SkillsSection from './SkillsSection';


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [linksWorking, setLinksWorking] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Function to check if links are working
    const checkLinks = async () => {
      try {
        const responses = await Promise.all([
          fetch('https://www.linkedin.com/in/ankushshharma/'),
          fetch('https://www.instagram.com/ankushshharma'),
          fetch('https://github.com/ankushshharma')
        ]);

        // Log the status of each response
        responses.forEach((response, index) => {
          console.log(`Link ${index + 1} status: ${response.status}`);
        });

        // If any link fails, set linksWorking to false
        setLinksWorking(responses.every(response => response.ok));
      } catch (error) {
        console.error('Error checking links:', error);
        setLinksWorking(false);
      }
    };

    checkLinks();
  }, []);

  const skills = [
    { 
      icon: <Code size={32} className="text-blue-500 hover:text-blue-600 transition-colors" />, 
      name: 'Automation Testing', 
      details: 'Selenium, TestNG, Postman' 
    },
    { 
      icon: <LineChart size={24} className="text-blue-500 hover:text-blue-600 transition-colors" />, 
      name: 'Performance Testing', 
      details: 'JMeter, Dynatrace' 
    },
    { icon: <Server size={24} />, name: 'Web Technologies', details: 'React, ASP.NET, Spring Boot' },
    { icon: <Database size={24} />, name: 'Databases', details: 'MySQL' },
    { icon: <Bot size={24} />, name: 'AI Tools', details: 'Codeium, ChatGPT, Claude AI' }
  ];

  const experienceData = [
    {
      title: "Associate Software Testing Engineer - SDET",
      company: "TalentNeuron, Chennai",
      period: "February 2024 - Present",
      details: [
        "Developed and maintained automation testing frameworks.",
        "Created and modified scripts for performance testing using JMeter.",
        "Enhanced and modified Java Selenium code for automated testing.",
        "Managed databases for automation executions on the Automation Portal.",
        "Handled Dynatrace Synthetic Monitors for application performance monitoring.",
        "Collaborated closely with the Data Harvesting team to ensure accurate data collection and analysis.",
        "Worked closely with the DAAS team on API testing, ensuring seamless integration and high-quality API performance."
      ]
    },
    {
      title: "Associate Software Testing Engineer - Intern",
      company: "TalentNeuron, Chennai",
      period: "September 2023 - February 2024",
      details: [
        "Executed manual test cases and reported defects, contributing to the improvement of software quality.",
        "Performed black-box testing to ensure compliance with specified requirements.",
        "Collaborated with developers to clarify requirements and expected outcomes, enhancing communication and project alignment.",
        "Assisted in the development of test plans and test cases, ensuring thorough test coverage."
      ]
    },
    {
      title: "Full Stack Web Developer - Intern",
      company: "Koskill Education, Bangalore",
      period: "February 2023 -  June 2023",
      details: [
        "Developed an RSS news aggregator using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Collaborated with senior developers to improve code quality and project efficiency.",
        "Applied best practices in web development, resulting in a project that met deadlines and client expectations."
      ]
    }
  ];

  // Define the social links with hover colors
  const socialLinks = [
    {
      href: "mailto:ankushshharma2@gmail.com",
      icon: Mail,
      label: "Email Ankush Sharma",
      hoverColor: "hover:text-green-400"
    },
    {
      href: "https://www.linkedin.com/in/ankushshharma/",
      icon: Linkedin,
      label: "LinkedIn Profile",
      hoverColor: "hover:text-blue-400"
    },
    {
      href: "https://www.instagram.com/ankushshharma",
      icon: Instagram,
      label: "Instagram Profile",
      hoverColor: "hover:text-pink-400"
    },
    {
      href: "https://github.com/ankushshharma",
      icon: Github,
      label: "GitHub Profile",
      hoverColor: "hover:text-purple-400"
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-gray-900">
      
      {/* Home Section */}
      <div id="home" className="w-full min-h-screen items-center px-4 md:px-8 py-16 bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <motion.section 
          className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="w-full max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center">
              <div className="text-center mx-4 flex-grow">
                <div className="whitespace-nowrap mx-12 mb-2">
                  <motion.h1 
                    className={`text-4xl md:text-7xl font-extrabold mb-0 bg-gradient-to-r from-blue-900 to-purple-500 bg-clip-text text-transparent relative ${
                      darkMode ? 'dark-mode-highlight' : ''
                    }`} 
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      textShadow: darkMode ? '0px 2px 2px rgba(255, 255, 255, 0.9)' : 'none'
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    ANKUSH SHARMA
                  </motion.h1>
                  <motion.h2 
                    className="text-2xl md:text-5xl font-semibold mb-8 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      marginBottom: '1rem',
                      lineHeight: 'normal',
                      paddingBottom: '0.2em'
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    SDET - Automation Engineer
                  </motion.h2>
                </div>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 md:space-x-12 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon
                    size={24}
                    className={`text-blue-500 ${link.hoverColor} transition-transform transform hover:scale-110`}
                  />
                </a>
              ))}
            </div>
            <p className="text-lg md:text-xl mb-10 text-gray-600 dark:text-gray-300">
              Crafting robust automation frameworks and ensuring software quality
            </p>    
            {/*Technical Skills Section */}
            <motion.section 
              className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              {/* Icons Section starts here */}
              <div className="relative w-full overflow-hidden">
                {/* Add fog overlays on the sides */}
                <div className="fog-overlay-left"></div>
                <div className="fog-overlay-right"></div>
                
                <div className="flex space-x-6 md:space-x-12 animate-scroll py-2">
                  {/* First set of icons */}
                  <div className="flex space-x-6 md:space-x-12 shrink-0">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain-wordmark.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                  </div>
                  
                  {/* Duplicate set for seamless loop */}
                  <div className="flex space-x-6 md:space-x-12 shrink-0">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain-wordmark.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" className="w-12 h-12 md:w-16 md:h-16 hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>
              </div>

            </motion.section>
            <motion.a 
              href="https://drive.google.com/file/d/1OundTKUpiHwZ_-WmBuzo6ZWOh8ZyfRtQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:text-white transition-all shadow-lg hover:shadow-xl no-underline"
            >
              <Download className="mr-2" size={24} />
              Download Resume
            </motion.a>
          </div>
        </motion.section>

      </div>

      {/* About Section */}
      <motion.section 
        id="about"
        className="py-0 px-4 md:px-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-600 dark:text-gray-300">
            Detail-oriented and enthusiastic <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">QA Automation Engineer</span> with hands-on experience in <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">developing</span> robust automation frameworks, conducting performance testing, and ensuring software quality across multiple platforms. Proficient in <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">Java</span>, <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">.NET</span>, <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">Selenium</span>, TestNG, JMeter, <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">React JS</span>, <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">ASP.NET</span>, <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">Spring Boot</span>, and <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">MySQL</span>. Skilled in <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">integrating AI tools with work</span> to enhance test automation, optimize workflows, and improve overall software quality. Known for strong collaboration across cross-functional teams to drive high-quality software delivery. Eager to bring technical expertise and problem-solving abilities to a dynamic QA Automation Engineer role.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="relative">
            {/* Curved Container */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 dark:from-gray-800 dark:via-indigo-900 dark:to-gray-800 -skew-y-3 transform rounded-3xl -z-10"></div>
            
            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 py-12 px-4">
              {skills.map((skill, index) => (
                <motion.div   
                  key={index}
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
                    <div className="mb-4 flex justify-center">
                      <motion.div
                        className="text-blue-500"
                        whileHover={{ 
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        {skill.icon}
                      </motion.div>
                    </div>
                    <motion.h3 
                      className="text-xl font-bold text-gray-800 dark:text-white mb-2 bg-clip-text"
                      whileHover={{
                        color: "#3B82F6", // blue-500
                        transition: { duration: 0.2 }
                      }}
                    >
                      {skill.name}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {skill.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience"
        className="py-12 w-full px-4 md:px-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experienceData.map((role, index) => (
              <motion.div 
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  flex: 2,
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden relative group"
              >
                <div className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {role.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {role.period}
                    </p>
                  </div>
                  
                  <div className="max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <ul className="mt-4 space-y-2 text-left">
                      {role.details?.map((detail, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 text-sm">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="py-12 w-full px-4 md:px-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Automation Testing Framework',
                tech: 'ASP.NET, .NET MVC, Java, Selenium, MySQL',
                description: 'Developed and maintained a Selenium-based automation testing framework. Integrated the framework into CI/CD pipelines.',
                buttonText: 'Ongoing'
              },
              {
                title: 'SynchroFit - Workout & Diet Planner',
                tech: 'React, SpringBoot,API, Gemini AI',
                description: 'AI-Powered Fitness Revolution. Experience the future of fitness with our intelligent AI system that creates perfectly tailored workout and nutrition plans just for you.',
                buttonText: 'Click here'
              },
              {
                title: 'Up Tech - Tech news app',
                tech: 'React, SpringBoot, MySQL',
                description: 'Created a technical news portal with React JS for frontend and Sprintboot MVC for the backend. Integrated News API for content.',
                buttonText: 'Deprecated'
              },
              {
                title: 'CodeCritique - AI Code Reviewer',
                tech: 'React, SpringBoot, Gemini AI',
                description: 'AI-Powered Code Reviewer. Experience the future of code review with our intelligent AI system that creates perfectly tailored workout and nutrition plans just for you.',
                buttonText: 'Upcoming'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  flex: 2,
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden relative group"
              >
                <div className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-blue-500 dark:text-blue-400">{project.tech}</p>
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  </div>
                  
                  <div className="max-h-0 overflow-hidden group-hover:max-h-48 transition-all duration-300">
                    <div className="text-center mt-4">
                      <button 
                        className={`px-6 py-2 text-white rounded-lg transition-colors text-sm
                          ${project.buttonText === 'Ongoing' 
                            ? 'bg-green-600 hover:bg-gray-500 cursor-not-allowed' 
                            : project.buttonText === 'Click here'
                            ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer' 
                            : 'bg-red-600 hover:bg-gray-500 cursor-not-allowed'}`}
                        disabled={project.buttonText !== 'Click here'}
                        onClick={() => {
                          if (project.buttonText === 'Click here') {
                            // Add your click handler here
                            window.open('your-project-url', '_blank');
                          }
                        }}
                      >
                        {project.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        id="education"
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Education Record
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Bachelor of Technology',
                period: '2019-2023',
                details: 'Majors: Computer Science Engineering - 7.8 CGPA',
                institution: 'Chandigarh Engineering College, Mohali, Punjab'
              },
              {
                title: '12th',
                period: '2018-2019',
                details: 'Senior Secondary - 76%',
                institution: 'Khalsa Public School, Saharanpur, UP - 247001'
              },
              {
                title: '10th',
                period: '2016-2017',
                details: 'Matric - 76%',
                institution: 'Khalsa Public School, Saharanpur, UP - 247001'
              }
            ].map((education, index) => (
              <motion.div 
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 overflow-hidden relative group"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400">
                    {education.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {education.period}
                  </p>
                </div>
                <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <p className="text-gray-600 dark:text-gray-300 mt-4">
                    {education.details}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {education.institution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* More Skills Section */}
      <SkillsSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Portfolio;