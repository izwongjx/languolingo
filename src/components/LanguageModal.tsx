import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useLanguage, AVAILABLE_LANGUAGES } from '../contexts/LanguageContext';

export const LanguageModal: React.FC = () => {
  const { selectedLanguage, setSelectedLanguage, isLanguageModalOpen, setIsLanguageModalOpen } = useLanguage();

  if (!isLanguageModalOpen) return null;

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
              Choose Your Language
            </h2>
            <button 
              onClick={() => setIsLanguageModalOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            {AVAILABLE_LANGUAGES.map((language) => (
              <motion.button
                key={language.code}
                className={`w-full p-4 rounded-2xl border-2 border-black flex items-center justify-between transition-all ${
                  selectedLanguage.code === language.code
                    ? 'bg-memphis-coral text-white'
                    : 'bg-white hover:bg-memphis-lavender'
                }`}
                onClick={() => {
                  setSelectedLanguage(language);
                  setIsLanguageModalOpen(false);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{language.flag}</span>
                  <div className="text-left">
                    <h3 className="font-baloo font-bold">{language.name}</h3>
                    <p className="font-fredoka text-sm opacity-80">{language.nativeName}</p>
                  </div>
                </div>
                {selectedLanguage.code === language.code && (
                  <Check className="w-5 h-5" />
                )}
              </motion.button>
            ))}
          </div>

          <div className="mt-6 p-4 bg-memphis-lavender rounded-lg border-2 border-black">
            <p className="font-fredoka text-sm text-gray-700">
              <strong>Note:</strong> Changing your language will update all words, stories, and content to your selected indigenous language.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
