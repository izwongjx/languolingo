import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Award, Volume2 } from 'lucide-react';
import { Story } from '../types';
import { audioService } from '../utils/audioUtils';

interface StoryCardProps {
  story: Story;
  isUnlocked?: boolean;
  onRead?: (storyId: string) => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, isUnlocked = true, onRead }) => {
  const [isReading, setIsReading] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-memphis-green';
      case 'intermediate': return 'bg-memphis-yellow';
      case 'advanced': return 'bg-memphis-coral';
      default: return 'bg-memphis-purple';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'myth': return '🌟';
      case 'folktale': return '🦋';
      case 'proverb': return '🦉';
      default: return '📚';
    }
  };

  const handleReadAloud = () => {
    audioService.speak(story.content);
  };

  if (!isUnlocked) {
    return (
      <div className="memphis-card bg-gray-200 p-6 opacity-60">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Award className="w-8 h-8 text-gray-600" />
          </div>
          <h3 className="font-baloo text-lg text-gray-600 mb-2">Story Locked</h3>
          <p className="font-fredoka text-sm text-gray-500">
            Complete more quests to unlock this story
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="memphis-card bg-gradient-to-br from-white to-memphis-pink p-6"
      whileHover={{ scale: 1.02, rotate: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{getCategoryIcon(story.category)}</span>
          <span className="memphis-badge capitalize">{story.category}</span>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold font-fredoka text-white border-2 border-black ${getDifficultyColor(story.difficulty)}`}>
          {story.difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold font-baloo text-memphis-purple mb-3">
        {story.title}
      </h3>

      {!isReading ? (
        <>
          <p className="font-fredoka text-sm text-gray-700 mb-4 line-clamp-3">
            {story.content.substring(0, 120)}...
          </p>
          
          <div className="flex space-x-3">
            <button 
              className="flex-1 memphis-button flex items-center justify-center space-x-2"
              onClick={() => {
                setIsReading(true);
                onRead?.(story.id);
              }}
            >
              <Play className="w-4 h-4" />
              <span>Read Story</span>
            </button>
            
            <button 
              className="p-3 bg-memphis-blue text-white rounded-full border-2 border-black hover:bg-memphis-green transition-colors"
              onClick={handleReadAloud}
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="max-h-40 overflow-y-auto mb-4">
            <p className="font-fredoka text-sm text-gray-700 leading-relaxed mb-4">
              {story.content}
            </p>
            
            <div className="bg-memphis-lavender p-3 rounded-lg border-2 border-black">
              <h4 className="font-bold font-baloo text-memphis-purple mb-1">Moral:</h4>
              <p className="font-fredoka text-sm text-gray-700 italic">
                {story.moral}
              </p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button 
              className="flex-1 py-2 px-4 bg-memphis-green text-white font-fredoka rounded-full border-2 border-black hover:bg-memphis-blue transition-colors"
              onClick={() => setIsReading(false)}
            >
              <BookOpen className="w-4 h-4 inline mr-2" />
              Back to Stories
            </button>
            <button 
              className="p-2 bg-memphis-coral text-white rounded-full border-2 border-black hover:bg-memphis-purple transition-colors"
              onClick={handleReadAloud}
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};
