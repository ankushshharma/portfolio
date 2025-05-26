import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Download, Award } from 'lucide-react';

// Import all certificates
import coursera from '../../assets/certificates/Coursera HLLJN27PEAEE.pdf';
import pythonCert from '../../assets/certificates/python certificate.pdf';
import cCert from '../../assets/certificates/c certificate.pdf';
import html5Cert from '../../assets/certificates/html5 certificate.pdf';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: 'spring',
      stiffness: 80,
      damping: 15
    }
  })
};

const CertificatesPortfolio = ({ darkMode = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Actual certificate data using imported files
  const certificates = [
    {
      id: 1,
      name: 'C++ For C Programmers, Part A',
      institution: 'Coursera',
      date: '06/05/2020',
      fileName: coursera,
      fileNameDisplay: 'Coursera HLLJN27PEAEE.pdf'
    },
    {
      id: 2,
      name: 'Programming for Everybody (Getting Started with Python)',
      institution: 'Coursera',
      date: '06/03/2020',
      fileName: pythonCert,
      fileNameDisplay: 'python certificate.pdf'
    },
    {
      id: 3,
      name: 'C for Everyone: Programming Fundamentals',
      institution: 'Coursera',
      date: '05/30/2020',
      fileName: cCert,
      fileNameDisplay: 'c certificate.pdf'
    },
    {
      id: 4,
      name: 'Introduction to HTML5',
      institution: 'Coursera',
      date: '05/21/2020',
      fileName: html5Cert,
      fileNameDisplay: 'html5 certificate.pdf'
    }
  ];

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const downloadCertificate = (fileName, displayName) => {
    const link = document.createElement('a');
    link.href = fileName;
    link.download = displayName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const viewCertificate = (fileName) => {
    window.open(fileName, '_blank');
  };

  const currentCert = certificates[currentIndex];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <div className="container mx-auto px-4 py-8 lg:py-16">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Award className={`w-8 h-8 mr-3 ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`} />
            <h1 className={`text-3xl lg:text-4xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Certifications
            </h1>
          </div>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Professional development and continuous learning
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
                  : 'bg-white hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {/* Certificate Icon */}
              <div className="flex justify-center -mt-8 mb-2">
                <Award className={`w-12 h-12 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'} drop-shadow-lg`} />
              </div>
              {/* Certificate Preview */}
              <div className="p-6 pt-2">
                <object
                  data={cert.fileName}
                  type="application/pdf"
                  className="w-full h-64 rounded-lg mb-4"
                >
                  <div className={`w-full h-64 flex items-center justify-center rounded-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <Award className={`w-16 h-16 ${
                      darkMode ? 'text-gray-500' : 'text-gray-400'
                    }`} />
                  </div>
                </object>

                <h3 className={`text-xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {cert.name}
                </h3>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {cert.institution} • {cert.date}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => viewCertificate(cert.fileName)}
                    className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      darkMode
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => downloadCertificate(cert.fileName, cert.fileNameDisplay)}
                    className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      darkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesPortfolio;