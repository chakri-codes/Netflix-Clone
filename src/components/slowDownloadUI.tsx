import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SlowTransitionDownloadIcon: React.FC = () => {
  const [currentIcon, setCurrentIcon] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % 3);
    }, 5000); // Change icon every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const icons = [
    // Download Icon
    <svg 
      key="download"
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="#3B82F6" 
      className="w-6 h-6"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" 
      />
    </svg>,
    // Loading Icon
    <motion.div
      key="loading"
      className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />,
    // Checkmark Icon
    <svg 
      key="checkmark"
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="#3B82F6" 
      className="w-6 h-6"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M4.5 12.75l6 6 9-13.5" 
      />
    </svg>
  ];

  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIcon}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {icons[currentIcon]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlowTransitionDownloadIcon;