import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Star, CheckCircle } from 'lucide-react';
import { Quest } from '../types';

interface QuestModalProps {
  quest: Quest;
  isOpen: boolean;
  onClose: () => void;
  onComplete: (questId: string, xp: number) => void;
}

export const QuestModal: React.FC<QuestModalProps> = ({ quest, isOpen, onClose, onComplete }) => {
  const [currentTask, setCurrentTask] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [showFireworks, setShowFireworks] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const questTasks = [
    {
      title: 'Learn 3 new words',
      description: 'Master the pronunciation and meaning of 3 words',
      action: 'Practice pronunciation',
      completed: false
    },
    {
      title: 'Cultural understanding',
      description: 'Understand the cultural context of each word',
      action: 'Read cultural notes',
      completed: false
    },
    {
      title: 'Use in sentences',
      description: 'Create sentences using the new words',
      action: 'Practice sentences',
      completed: false
    }
  ];

  const handleTaskComplete = () => {
    const newCompleted = [...completedTasks, currentTask];
    setCompletedTasks(newCompleted);

    if (newCompleted.length === questTasks.length) {
      setIsComplete(true);
      setShowFireworks(true);
      setTimeout(() => {
        onComplete(quest.id, quest.xp_reward);
      }, 2000);
    } else {
      setCurrentTask(currentTask + 1);
    }
  };

  if (!isOpen) return null;

  if (isComplete) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-memphis-yellow via-memphis-coral to-memphis-purple p-8 rounded-2xl border-4 border-black text-center relative overflow-hidden max-w-md w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            {/* Fireworks */}
            {showFireworks && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    initial={{ x: '50%', y: '50%', scale: 0 }}
                    animate={{ 
                      x: `${50 + (Math.random() - 0.5) * 200}%`,
                      y: `${50 + (Math.random() - 0.5) * 200}%`,
                      scale: [0, 1, 0]
                    }}
                    transition={{ duration: 1.5, delay: i * 0.1, repeat: 2 }}
                  />
                ))}
              </div>
            )}

            <Trophy className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className="font-baloo text-3xl font-bold text-white mb-4">
              🎉 Well Done! 🎉
            </h2>
            <p className="font-fredoka text-lg text-white mb-4">
              Quest "{quest.title}" completed!
            </p>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-4">
              <p className="font-baloo text-2xl font-bold text-white">
                +{quest.xp_reward} XP
              </p>
            </div>
            <button
              onClick={onClose}
              className="bg-white text-memphis-purple px-6 py-3 rounded-full border-2 border-black font-fredoka font-bold hover:bg-memphis-lavender transition-colors"
            >
              Continue Journey
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl p-6 border-4 border-black max-w-md w-full mx-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-baloo text-2xl font-bold text-memphis-purple">
              {quest.title}
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">{quest.icon}</span>
              <div>
                <p className="font-fredoka text-sm text-gray-600">{quest.description}</p>
                <p className="font-fredoka text-xs text-memphis-coral">Reward: {quest.xp_reward} XP</p>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-fredoka text-sm font-bold">Progress</span>
                <span className="font-fredoka text-sm">{completedTasks.length}/{questTasks.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 border border-black">
                <div 
                  className="bg-memphis-coral h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(completedTasks.length / questTasks.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Current Task */}
            <div className="bg-memphis-lavender p-4 rounded-lg border-2 border-black">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-5 h-5 text-memphis-yellow" />
                <h3 className="font-baloo font-bold text-memphis-purple">
                  {questTasks[currentTask]?.title || 'All tasks completed!'}
                </h3>
              </div>
              <p className="font-fredoka text-sm text-gray-700 mb-3">
                {questTasks[currentTask]?.description || 'Great job completing all tasks!'}
              </p>
              
              {currentTask < questTasks.length && (
                <button
                  onClick={handleTaskComplete}
                  className="memphis-button w-full"
                >
                  {questTasks[currentTask]?.action}
                </button>
              )}
            </div>

            {/* Task List */}
            <div className="mt-4 space-y-2">
              {questTasks.map((task, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 p-2 rounded-lg ${
                    completedTasks.includes(index) 
                      ? 'bg-green-100 border border-green-300' 
                      : index === currentTask
                        ? 'bg-memphis-yellow bg-opacity-20 border border-memphis-yellow'
                        : 'bg-gray-50'
                  }`}
                >
                  {completedTasks.includes(index) ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                  )}
                  <span className={`font-fredoka text-sm ${
                    completedTasks.includes(index) ? 'text-green-700 line-through' : 'text-gray-700'
                  }`}>
                    {task.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
