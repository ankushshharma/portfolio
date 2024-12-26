import React from 'react';

const AnimatedGradient = () => {
  return (
    <div className="absolute top-0 left-0 w-[300px] h-[300px] -translate-x-1/4 -translate-y-1/4">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-indigo-300 to-blue-300 rounded-full opacity-75 blur-3xl animate-gradient" />
      </div>
    </div>
  );
};

const style = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-gradient {
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
  }
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.textContent = style;
document.head.appendChild(styleSheet);

export default AnimatedGradient;