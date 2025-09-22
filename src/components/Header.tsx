import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Search, Settings, LogOut } from 'lucide-react';
import { FloatingTriangle, FloatingCircle, FloatingSquare } from './MemphisShapes';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

export const Header: React.FC = () => {
  const { selectedLanguage, setIsLanguageModalOpen } = useLanguage();
  const { user, logout } = useAuth();

  return (
    <header className="relative bg-gradient-to-r from-memphis-purple via-memphis-blue to-memphis-green p-6 overflow-hidden">
      {/* Floating Memphis shapes */}
      <FloatingTriangle className="top-4 left-10" />
      <FloatingCircle className="top-8 right-20" />
      <FloatingSquare className="bottom-4 left-1/4" />
      <FloatingTriangle className="bottom-6 right-10" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* New Logo */}
            <div className="w-12 h-12 bg-gradient-to-br from-memphis-yellow to-memphis-coral rounded-2xl border-4 border-black flex items-center justify-center transform rotate-12">
              <span className="text-2xl">🏛️</span>
            </div>
            <div>
              <h1 className="font-baloo text-2xl md:text-3xl font-bold text-white">
                Language Guardian
              </h1>
              <p className="font-fredoka text-sm text-white opacity-90">
                Preserving {selectedLanguage.name} Heritage
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Language Selector */}
            <button 
              className="flex items-center space-x-2 p-3 bg-white rounded-full border-2 border-black hover:bg-memphis-yellow transition-colors"
              onClick={() => setIsLanguageModalOpen(true)}
            >
              <Globe className="w-5 h-5 text-memphis-purple" />
              <span className="font-fredoka text-sm font-bold text-memphis-purple">
                {selectedLanguage.flag} {selectedLanguage.name}
              </span>
            </button>

            {user && (
              <>
                <button className="p-3 bg-white rounded-full border-2 border-black hover:bg-memphis-pink transition-colors">
                  <Search className="w-5 h-5 text-memphis-purple" />
                </button>
                <button className="p-3 bg-white rounded-full border-2 border-black hover:bg-memphis-pink transition-colors">
                  <Settings className="w-5 h-5 text-memphis-purple" />
                </button>
                <button 
                  onClick={logout}
                  className="p-3 bg-memphis-coral rounded-full border-2 border-black hover:bg-memphis-pink transition-colors"
                >
                  <LogOut className="w-5 h-5 text-white" />
                </button>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10 memphis-pattern" />
    </header>
  );
};
