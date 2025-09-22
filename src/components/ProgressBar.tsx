import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Flame } from 'lucide-react';
import { UserProgress } from '../types';

interface ProgressBarProps {
  progress: UserProgress;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const xpToNextLevel = (progress.level * 100) - (progress.xp % 100);
  const currentLevelXP = progress.xp % 100;
  const progressPercentage = (currentLevelXP / 100) * 100;

  return (
    <div className="bg-white rounded-2xl p-6 border-4 border-black shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-memphis-purple to-memphis-blue rounded-full border-2 border-black flex items-center justify-center">
            <span className="font-baloo font-bold text-white text-lg">{progress.level}</span>
          </div>
          <div>
            <h3 className="font-baloo text-lg font-bold text-memphis-purple">
              Language Guardian Level {progress.level}
            </h3>
            <p className="font-fredoka text-sm text-gray-600">
              {xpToNextLevel} XP to next level
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Flame className="w-5 h-5 text-memphis-coral" />
          <span className="font-baloo font-bold text-memphis-coral">
            {progress.daily_streak} day streak
          </span>
        </div>
      </div>

      {/* XP Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-fredoka text-sm text-gray-600">Experience Points</span>
          <span className="font-fredoka text-sm font-bold text-memphis-purple">
            {progress.xp} XP
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 border-2 border-black overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-memphis-coral to-memphis-yellow"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="w-10 h-10 bg-memphis-green rounded-full border-2 border-black flex items-center justify-center mx-auto mb-2">
            <Star className="w-5 h-5 text-white" />
          </div>
          <p className="font-baloo font-bold text-memphis-purple text-lg">{progress.words_learned}</p>
          <p className="font-fredoka text-xs text-gray-600">Words Learned</p>
        </div>
        
        <div className="text-center">
          <div className="w-10 h-10 bg-memphis-yellow rounded-full border-2 border-black flex items-center justify-center mx-auto mb-2">
            <Award className="w-5 h-5 text-black" />
          </div>
          <p className="font-baloo font-bold text-memphis-purple text-lg">{progress.stories_unlocked}</p>
          <p className="font-fredoka text-xs text-gray-600">Stories Unlocked</p>
        </div>
        
        <div className="text-center">
          <div className="w-10 h-10 bg-memphis-coral rounded-full border-2 border-black flex items-center justify-center mx-auto mb-2">
            <span className="text-white font-bold text-sm">{progress.badges.length}</span>
          </div>
          <p className="font-baloo font-bold text-memphis-purple text-lg">{progress.badges.length}</p>
          <p className="font-fredoka text-xs text-gray-600">Badges Earned</p>
        </div>
      </div>

      {/* Recent Badges */}
      {progress.badges.length > 0 && (
        <div>
          <h4 className="font-baloo font-bold text-memphis-purple mb-2">Recent Badges</h4>
          <div className="flex flex-wrap gap-2">
            {progress.badges.slice(0, 3).map((badge, index) => (
              <span 
                key={index}
                className="memphis-badge text-xs"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
