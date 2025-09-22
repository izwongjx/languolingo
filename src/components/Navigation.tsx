import React from 'react';
import { motion } from 'framer-motion';
import { Home, BookOpen, Archive, Calendar, Trophy, Book, Languages } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'learn', label: 'Learn', icon: Home },
    { id: 'stories', label: 'Stories', icon: BookOpen },
    { id: 'dictionary', label: 'Dictionary', icon: Book },
    { id: 'translate', label: 'AI Translate', icon: Languages },
    { id: 'archive', label: 'Archive', icon: Archive },
    { id: 'daily', label: 'Daily', icon: Calendar },
    { id: 'quests', label: 'Quests', icon: Trophy },
  ];

  return (
    <nav className="bg-white border-t-4 border-black shadow-lg">
      <div className="max-w-6xl mx-auto px-2">
        <div className="flex justify-around items-center py-2 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <motion.button
                key={tab.id}
                className={`flex flex-col items-center space-y-1 px-2 py-2 rounded-2xl transition-all duration-200 min-w-0 ${
                  isActive 
                    ? 'bg-memphis-coral text-white border-2 border-black' 
                    : 'text-gray-600 hover:text-memphis-purple'
                }`}
                onClick={() => onTabChange(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
                <span className={`font-fredoka text-xs font-bold ${isActive ? 'text-white' : ''} truncate`}>
                  {tab.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
