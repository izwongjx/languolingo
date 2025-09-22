import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Volume2, CheckCircle, RotateCcw } from 'lucide-react';
import { Word } from '../types';

interface DailyWordProps {
  word: Word;
  onComplete?: (wordId: string) => void;
}

export const DailyWord: React.FC<DailyWordProps> = ({ word, onComplete }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    onComplete?.(word.id);
  };

  const handleReset = () => {
    setShowAnswer(false);
    setIsCompleted(false);
  };

  return (
    <motion.div
      className="memphis-card bg-gradient-to-br from-memphis-yellow to-memphis-orange p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center">
            <Calendar className="w-6 h-6 text-memphis-purple" />
          </div>
          <div>
            <h2 className="font-baloo text-xl font-bold text-white">Daily Word Challenge</h2>
            <p className="font-fredoka text-sm text-white opacity-90">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>

        {isCompleted && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <CheckCircle className="w-8 h-8 text-memphis-green" />
          </motion.div>
        )}
      </div>

      <div className="bg-white rounded-2xl p-6 border-2 border-black mb-4">
        <div className="text-center mb-4">
          <h3 className="font-baloo text-3xl font-bold text-memphis-purple mb-2">
            {word.orang_asli}
          </h3>
          
          <button className="flex items-center space-x-2 mx-auto text-memphis-coral hover:text-memphis-purple transition-colors">
            <Volume2 className="w-5 h-5" />
            <span className="font-fredoka text-sm">/{word.pronunciation}/</span>
          </button>
        </div>

        {!showAnswer ? (
          <div className="text-center">
            <p className="font-fredoka text-gray-600 mb-4">
              What does this word mean?
            </p>
            <button 
              className="memphis-button"
              onClick={() => setShowAnswer(true)}
            >
              Reveal Meaning
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-4">
              <h4 className="font-baloo text-2xl font-bold text-memphis-green mb-2">
                {word.english}
              </h4>
              <span className="memphis-badge">{word.category}</span>
            </div>

            <div className="bg-memphis-lavender p-4 rounded-lg border-2 border-black mb-4">
              <h5 className="font-baloo font-bold text-memphis-purple mb-2">Cultural Context</h5>
              <p className="font-fredoka text-sm text-gray-700">
                {word.cultural_context}
              </p>
            </div>

            <div className="flex space-x-3">
              {!isCompleted ? (
                <button 
                  className="flex-1 memphis-button"
                  onClick={handleComplete}
                >
                  Mark as Learned (+50 XP)
                </button>
              ) : (
                <button 
                  className="flex-1 bg-memphis-green text-white font-fredoka py-3 px-6 rounded-full border-2 border-black"
                  disabled
                >
                  Completed! ✨
                </button>
              )}
              
              <button 
                className="p-3 bg-memphis-blue text-white rounded-full border-2 border-black hover:bg-memphis-purple transition-colors"
                onClick={handleReset}
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <div className="text-center">
        <p className="font-fredoka text-sm text-white opacity-90">
          Come back tomorrow for a new word challenge!
        </p>
      </div>
    </motion.div>
  );
};
