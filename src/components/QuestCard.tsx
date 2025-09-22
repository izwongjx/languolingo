import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Trophy, Calendar, Target } from 'lucide-react';
import { Quest } from '../types';

interface QuestCardProps {
  quest: Quest;
  onComplete?: (questId: string) => void;
}

export const QuestCard: React.FC<QuestCardProps> = ({ quest, onComplete }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'daily': return <Calendar className="w-5 h-5" />;
      case 'weekly': return <Target className="w-5 h-5" />;
      case 'achievement': return <Trophy className="w-5 h-5" />;
      default: return <Circle className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'daily': return 'bg-memphis-coral';
      case 'weekly': return 'bg-memphis-purple';
      case 'achievement': return 'bg-memphis-yellow';
      default: return 'bg-memphis-green';
    }
  };

  return (
    <motion.div
      className={`memphis-card p-4 ${quest.completed ? 'bg-gradient-to-br from-memphis-green to-memphis-lavender' : 'bg-gradient-to-br from-white to-memphis-pink'}`}
      whileHover={{ scale: 1.02, rotate: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{quest.icon}</span>
          <div className={`p-2 rounded-full ${getTypeColor(quest.type)} text-white border-2 border-black`}>
            {getTypeIcon(quest.type)}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {quest.completed ? (
            <CheckCircle className="w-6 h-6 text-memphis-green" />
          ) : (
            <Circle className="w-6 h-6 text-gray-400" />
          )}
        </div>
      </div>

      <h3 className="font-baloo text-lg font-bold text-memphis-purple mb-2">
        {quest.title}
      </h3>

      <p className="font-fredoka text-sm text-gray-700 mb-3">
        {quest.description}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-fredoka text-sm font-bold text-memphis-coral">
            +{quest.xp_reward} XP
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-bold font-fredoka text-white border border-black ${getTypeColor(quest.type)}`}>
            {quest.type}
          </span>
        </div>

        {!quest.completed && (
          <button 
            className="px-4 py-2 bg-memphis-coral text-white font-fredoka rounded-full border-2 border-black hover:bg-memphis-purple transition-colors text-sm"
            onClick={() => onComplete?.(quest.id)}
          >
            Start Quest
          </button>
        )}
      </div>
    </motion.div>
  );
};
