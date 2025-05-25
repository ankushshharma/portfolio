import React, { useState } from 'react';

const LinkedInBrowserPreview = () => {
  const [isLoading, setIsLoading] = useState(true);
  const linkedinUrl = "https://www.linkedin.com/in/ankushshharma/";

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="py-16 w-full px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex justify-center py-8">
        <div className="w-full max-w-5xl">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Connect with me on LinkedIn
          </h2>
          
          {/* Browser Window Container */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-300 dark:border-gray-600">
            {/* Browser Header */}
            <div className="bg-gray-200 dark:bg-gray-700 px-4 py-3 flex items-center space-x-2 border-b border-gray-300 dark:border-gray-600">
              {/* Window Controls */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              {/* Address Bar */}
              <div className="flex-1 mx-4">
                <div className="bg-white dark:bg-gray-600 rounded-md px-3 py-1 flex items-center space-x-2 text-sm">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 font-mono text-xs md:text-sm truncate">
                    {linkedinUrl}
                  </span>
                </div>
              </div>
              
              {/* Browser Controls */}
              <div className="flex space-x-1">
                <button className="p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded">
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Browser Content */}
            <div className="relative bg-white dark:bg-gray-900">
              {/* Loading Indicator */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-10">
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <span className="text-gray-600 dark:text-gray-400">Loading LinkedIn profile...</span>
                  </div>
                </div>
              )}
              
              {/* LinkedIn Profile Iframe */}
              <iframe
                src={linkedinUrl}
                className="w-full h-96 md:h-[600px] border-0"
                title="LinkedIn Profile"
                onLoad={handleIframeLoad}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
              
              {/* Overlay for interaction */}
              <div className="absolute inset-0 bg-transparent pointer-events-none">
                <div className="absolute bottom-4 right-4">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Open in LinkedIn
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fallback Message */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Having trouble viewing the profile? 
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
              >
                Click here to view directly on LinkedIn
              </a>
            </p>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">7,562</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Followers</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Professional Connections</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">2+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInBrowserPreview;