import React from 'react';
import { motion } from 'framer-motion';

export const FloatingTriangle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    className={`absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-memphis-coral ${className}`}
    animate={{ 
      rotate: [0, 360],
      y: [-10, 10, -10]
    }}
    transition={{ 
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export const FloatingCircle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    className={`absolute w-8 h-8 bg-memphis-yellow rounded-full border-2 border-black ${className}`}
    animate={{ 
      scale: [1, 1.2, 1],
      x: [-5, 5, -5]
    }}
    transition={{ 
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export const FloatingSquare: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    className={`absolute w-6 h-6 bg-memphis-green border-2 border-black transform rotate-45 ${className}`}
    animate={{ 
      rotate: [45, 90, 45],
      y: [0, -15, 0]
    }}
    transition={{ 
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export const ZigzagPattern: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`memphis-zigzag opacity-20 ${className}`} />
);
