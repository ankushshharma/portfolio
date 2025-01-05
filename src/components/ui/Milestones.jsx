import React, { useEffect, useState } from 'react';

const Milestones = ({ milestones, className = '' }) => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 ${className}`}>
      <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
      <div className="relative">
        {/* Timeline center line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-400" />
        
        {/* Milestone items */}
        {milestones.map((milestone, index) => (
          <div 
            key={index}
            id={`milestone-${index}`}
            data-animate
            className={`relative flex md:items-center mb-12 transform transition-all duration-700 delay-${index * 200} 
              ${isVisible[`milestone-${index}`] ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
          >
            <div className={`flex items-center md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-[50%]'}`}>
              <div className={`bg-white p-6 rounded-lg shadow-lg w-full relative ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                {/* Milestone dot marker */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 
                  ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`} 
                />
                <div className="text-2xl font-bold text-blue-500 mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;