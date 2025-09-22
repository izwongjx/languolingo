import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Volume2, Heart, Sparkles, Star } from 'lucide-react';
import { audioService } from '../utils/audioUtils';

interface AIGuardianProps {
  message: string;
  onInteract?: () => void;
}

export const AIGuardian: React.FC<AIGuardianProps> = ({ message, onInteract }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleListen = () => {
    audioService.speak(message);
  };

  const handleChat = () => {
    onInteract?.();
  };

  return (
    <div className="relative">
      {/* Guardian Character - Small Girl Avatar */}
      <motion.div
        className="relative w-32 h-32 mx-auto cursor-pointer"
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Girl's head */}
        <div className="relative w-20 h-20 mx-auto">
          {/* Face */}
          <div 
            className="w-16 h-16 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full border-3 border-black mx-auto relative"
            style={{ filter: 'drop-shadow(3px 3px 0px #000)' }}
          >
            {/* Hair */}
            <div className="absolute -top-2 -left-2 w-20 h-16 bg-gradient-to-br from-amber-800 to-amber-900 rounded-full border-3 border-black" />
            <div className="absolute
