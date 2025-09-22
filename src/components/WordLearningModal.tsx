import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, BookOpen, Lightbulb, Star } from 'lucide-react';
import { Word } from '../types';
import { audioService } from '../utils/audioUtils';
import { useLanguage } from '../contexts/LanguageContext';
import { indigenousLanguageData } from '../data/indigenousLanguages';

interface WordLearningModalProps {
  word: Word;
  isOpen: boolean;
  onClose: () => void;
  onComplete: (wordId: string) => void;
}

export const WordLearningModal: React.FC<WordLearningModalProps> = ({ 
  word, 
  isOpen, 
  onClose, 
  onComplete 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showFireworks, setShowFireworks] = useState(false);
  const { selectedLanguage } = useLanguage();

  const langData = indigenousLanguageData[selectedLanguage.code as keyof typeof indigenousLanguageData];
  const wordData = langData?.words[word.english.toLowerCase()];

  const steps = [
    {
      title: 'Word Introduction',
      icon: <BookOpen className="w-6 h-6" />,
      content: (
        <div className="text-center space-y-4">
          <h3 className="font-baloo text-3xl font-bold text-memphis-purple">
            {wordData?.word || word.indigenous}
          </h3>
          <p className="font-fredoka text-lg text-memphis-green">
            {word.english}
          </p>
          <p className="font-fredoka text-sm text-gray-600 italic">
            /{wordData?.pronunciation || word.pronunciation}/
          </p>
          <button
            onClick={() => audioService.speak(wordData?.word || word.indigenous)}
            className="memphis-button flex items-center space-x-2 mx-auto"
          >
            <Volume2 className="w-4 h-4" />
            <span>Listen</span>
          </button>
        </div>
      )
    },
    {
      title: 'Cultural Meaning',
      icon: <Lightbulb className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <h4 className="font-baloo text-xl font-bold text-memphis-purple">Cultural Context</h4>
          <p className="font-fredoka text-sm text-gray-700 leading-relaxed">
            {wordData?.meaning || word.cultural_context}
          </p>
          <div className="bg-memphis-lavender p-4 rounded-lg border-2 border-black">
            <h5 className="font-baloo font-bold text-memphis-purple mb-2">Example Usage:</h5>
            <p className="font-fredoka text-sm">
              "This {word.english.toLowerCase()} is sacred" → 
              "Ini {wordData?.word || word.indigenous} suci"
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Practice',
      icon: <Star className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <h4 className="font-baloo text-xl font-bold text-memphis-purple">Let's Practice!</h4>
          <div className="bg-gradient-to-br from-memphis-yellow to-memphis-coral p-6 rounded-2xl border-2 border-black text-center">
            <p className="font-fredoka text-white mb-4">
              Repeat after me:
            </p>
            <h3 className="font-baloo text-2xl font-bold text-white mb-4">
              {wordData?.word || word.indigenous}
            </h3>
            <button
              onClick={() => audioService.speak(wordData?.word || word.indigenous)}
              className="bg-white text-memphis-purple px-6 py-3 rounded-full border-2 border-black font-fredoka font-bold hover:bg-memphis-lavender transition-colors"
            >
              <Volume2 className="w-4 h-4 inline mr-2" />
              Practice Pronunciation
            </button>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowFireworks(true);
      setTimeout(() => {
        onComplete(word.id);
        onClose();
        setCurrentStep(0);
        setShowFireworks(false);
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl p-6 border-4 border-black max-w-md w-full mx-4 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          {/* Fireworks Animation */}
          {showFireworks && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-memphis-yellow rounded-full"
                  initial={{ 
                    x: '50%', 
                    y: '50%',
                    scale: 0
                  }}
                  animate={{ 
                    x: `${50 + (Math.random() - 0.5) * 200}%`,
                    y: `${50 + (Math.random() - 0.5) * 200}%`,
                    scale: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: 2
                  }}
                />
              ))}
            </div>
          )}

          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-memphis-coral to-memphis-purple rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-black">
              {steps[currentStep].icon}
            </div>
            <h2 className="font-baloo text-2xl font-bold text-memphis-purple">
              {steps[currentStep].title}
            </h2>
          </div>

          <div className="mb-6">
            {steps[currentStep].content}
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-2 rounded-full border border-black ${
                    index <= currentStep ? 'bg-memphis-coral' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-full memphis-button py-3"
            disabled={showFireworks}
          >
            {currentStep < steps.length - 1 ? 'Next' : 'Complete Learning!'}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
