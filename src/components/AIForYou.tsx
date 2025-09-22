import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, RotateCcw, Award, Lightbulb, CheckCircle, XCircle, Star } from 'lucide-react';

interface Mistake {
  id: string;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
  language: string;
  difficulty: 'easy' | 'medium' | 'hard';
  retryCount: number;
  isCompleted: boolean;
}

interface AIForYouProps {
  mistakes: Mistake[];
  onRetryMistake: (mistakeId: string) => void;
  onClearMistakes: () => void;
}

export const AIForYou: React.FC<AIForYouProps> = ({ 
  mistakes, 
  onRetryMistake, 
  onClearMistakes 
}) => {
  const [selectedMistake, setSelectedMistake] = useState<Mistake | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const incompleteMistakes = mistakes.filter(m => !m.isCompleted);
  const completedMistakes = mistakes.filter(m => m.isCompleted);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'from-green-400 to-green-600';
      case 'medium': return 'from-yellow-400 to-yellow-600';
      case 'hard': return 'from-red-400 to-red-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const handleRetry = (mistake: Mistake) => {
    setSelectedMistake(mistake);
    setShowExplanation(true);
    setTimeout(() => {
      onRetryMistake(mistake.id);
      setShowExplanation(false);
      setSelectedMistake(null);
    }, 3000);
  };

  return (
    <div className="bg-white border-4 border-black rounded-3xl p-6 mb-8"
         style={{ filter: 'drop-shadow(8px 8px 0px #000)' }}>
      
      {/* Header */}
      <div className="text-center mb-6">
        <motion.div
          className="inline-flex items-center gap-3 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="p-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-3 border-black">
            <Brain className="text-white" size={32} />
          </div>
          <h2 className="text-4xl font-black text-gray-800">AI For You</h2>
        </motion.div>
        
        <motion.h3
          className="text-2xl font-bold text-purple-600 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          AI Mistake Review
        </motion.h3>
        
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Learn from your mistakes with personalized AI guidance! Review questions you got wrong, 
          understand the explanations, and retry with easier hints. Earn redemption badges and 
          partial XP when you master them!
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <motion.div
          className="bg-gradient-to-r from-red-100 to-red-200 border-3 border-black rounded-2xl p-4 text-center"
          whileHover={{ scale: 1.02 }}
        >
          <XCircle className="mx-auto mb-2 text-red-600" size={24} />
          <div className="text-2xl font-black text-red-600">{incompleteMistakes.length}</div>
          <div className="text-sm font-bold text-red-700">To Review</div>
        </motion.div>
        
        <motion.div
          className="bg-gradient-to-r from-green-100 to-green-200 border-3 border-black rounded-2xl p-4 text-center"
          whileHover={{ scale: 1.02 }}
        >
          <CheckCircle className="mx-auto mb-2 text-green-600" size={24} />
          <div className="text-2xl font-black text-green-600">{completedMistakes.length}</div>
          <div className="text-sm font-bold text-green-700">Mastered</div>
        </motion.div>
        
        <motion.div
          className="bg-gradient-to-r from-yellow-100 to-yellow-200 border-3 border-black rounded-2xl p-4 text-center"
          whileHover={{ scale: 1.02 }}
        >
          <Award className="mx-auto mb-2 text-yellow-600" size={24} />
          <div className="text-2xl font-black text-yellow-600">{completedMistakes.length * 25}</div>
          <div className="text-sm font-bold text-yellow-700">XP Recovered</div>
        </motion.div>
      </div>

      {/* Mistakes to Review */}
      {incompleteMistakes.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <RotateCcw className="text-purple-600" size={20} />
            Ready to Retry
          </h4>
          
          <div className="grid gap-4">
            {incompleteMistakes.map((mistake) => (
              <motion.div
                key={mistake.id}
                className="bg-gradient-to-r from-purple-50 to-pink-50 border-3 border-black rounded-2xl p-4"
                whileHover={{ scale: 1.01 }}
                layout
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 bg-gradient-to-r ${getDifficultyColor(mistake.difficulty)} text-white text-xs font-bold rounded-full border-2 border-black`}>
                        {mistake.difficulty.toUpperCase()}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full border-2 border-black">
                        {mistake.language}
                      </span>
                      {mistake.retryCount > 0 && (
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-bold rounded-full border-2 border-black">
                          Retry #{mistake.retryCount}
                        </span>
                      )}
                    </div>
                    <p className="font-bold text-gray-800 mb-2">{mistake.question}</p>
                    <div className="text-sm">
                      <span className="text-red-600 font-bold">Your answer: {mistake.userAnswer}</span>
                      <br />
                      <span className="text-green-600 font-bold">Correct: {mistake.correctAnswer}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={() => handleRetry(mistake)}
                    className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-lg border-2 border-black font-bold text-sm flex items-center gap-2"
                    style={{ filter: 'drop-shadow(2px 2px 0px #000)' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Lightbulb size={16} />
                    Retry with AI
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Mastered Mistakes */}
      {completedMistakes.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Star className="text-green-600" size={20} />
            Mastered Questions
          </h4>
          
          <div className="grid gap-3">
            {completedMistakes.map((mistake) => (
              <motion.div
                key={mistake.id}
                className="bg-gradient-to-r from-green-50 to-emerald-50 border-3 border-black rounded-2xl p-4 opacity-75"
                layout
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-bold text-gray-700 mb-1">{mistake.question}</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={16} />
                      <span className="text-sm text-green-700 font-bold">Mastered!</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full border-2 border-black">
                        +25 XP
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {mistakes.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Brain className="mx-auto mb-4 text-gray-400" size={64} />
          <h3 className="text-xl font-bold text-gray-600 mb-2">No mistakes yet!</h3>
          <p className="text-gray-500">
            Take some quizzes to start building your personalized learning experience.
          </p>
        </motion.div>
      )}

      {/* Clear All Button */}
      {mistakes.length > 0 && (
        <div className="text-center">
          <motion.button
            onClick={onClearMistakes}
            className="px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded-lg border-2 border-black font-bold"
            style={{ filter: 'drop-shadow(2px 2px 0px #000)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Clear All Mistakes
          </motion.button>
        </div>
      )}

      {/* AI Explanation Modal */}
      {showExplanation && selectedMistake && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white border-4 border-black rounded-3xl p-6 max-w-md w-full"
            style={{ filter: 'drop-shadow(8px 8px 0px #000)' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="text-center mb-4">
              <Brain className="mx-auto mb-2 text-purple-600" size={48} />
              <h3 className="text-xl font-bold text-gray-800">AI Explanation</h3>
            </div>
            
            <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4 mb-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                {selectedMistake.explanation}
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-600 font-bold">
                Preparing easier retry session...
              </p>
              <div className="mt-2 flex justify-center">
                <motion.div
                  className="w-2 h-2 bg-purple-600 rounded-full mx-1"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                />
                <motion.div
                  className="w-2 h-2 bg-purple-600 rounded-full mx-1"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                />
                <motion.div
                  className="w-2 h-2 bg-purple-600 rounded-full mx-1"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
