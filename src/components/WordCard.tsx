import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, BookOpen, Star } from 'lucide-react';
import { Word } from '../types';
import { audioService } from '../utils/audioUtils';

interface WordCardProps {
  word: Word;
  onLearn?: (wordId: string) => void;
}

export const WordCard: React.FC<WordCardProps> = ({ word, onLearn }) => {
  const handleListen = () => {
    audioService.speak(word.indigenous);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'greetings': return 'bg-memphis-coral';
      case 'nature': return 'bg-memphis-green';
      case 'people': return 'bg-memphis-purple';
      case 'music': return 'bg-memphis-yellow';
      case 'food': return 'bg-memphis-pink';
      case 'spiritual': return 'bg-memphis-blue';
      default: return 'bg-memphis-lavender';
    }
  };

  return (
    <motion.div
      className="memphis-card bg-gradient-to-br from-white to-memphis-lavender p-6"
      whileHover={{ scale: 1.02, rotate: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold font-fredoka text-white border-2 border-black ${getCategoryColor(word.category)}`}>
          {word.category}
        </span>
        <button
          onClick={handleListen}
          className="p-2 bg-memphis-coral text-white rounded-full border-2 border-black hover:bg-memphis-purple transition-colors"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>

      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold font-baloo text-memphis-purple mb-2">
          {word.indigenous}
        </h3>
        <p className="text-lg font-fredoka text-memphis-green mb-1">
          {word.english}
        </p>
        <p className="text-sm font-fredoka text-gray-600 italic">
          /{word.pronunciation}/
        </p>
      </div>

      <div className="bg-memphis-pink bg-opacity-20 p-3 rounded-lg mb-4">
        <p className="font-fredoka text-sm text-gray-700">
          {word.cultural_context}
        </p>
      </div>

      <button 
        className="w-full memphis-button flex items-center justify-center space-x-2"
        onClick={() => onLearn?.(word.id)}
      >
        <Star className="w-4 h-4" />
        <span>Learn Word</span>
      </button>
    </motion.div>
  );
};
