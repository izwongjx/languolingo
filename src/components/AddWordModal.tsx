import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AddWordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddWord: (word: any) => void;
}

export const AddWordModal: React.FC<AddWordModalProps> = ({ isOpen, onClose, onAddWord }) => {
  const [formData, setFormData] = useState({
    indigenous: '',
    english: '',
    pronunciation: '',
    meaning: '',
    category: 'general'
  });
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    corrections?: any;
    message: string;
  } | null>(null);
  const { selectedLanguage } = useLanguage();

  const validateWithAI = async () => {
    setIsValidating(true);
    
    // Simulate AI validation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock AI validation logic
    const isValid = Math.random() > 0.3; // 70% chance of being valid
    
    if (isValid) {
      setValidationResult({
        isValid: true,
        message: `Great! Your ${selectedLanguage.name} word entry looks accurate. The translation and cultural context are appropriate.`
      });
    } else {
      // Simulate AI corrections
      const corrections = {
        indigenous: formData.indigenous + ' (corrected)',
        pronunciation: formData.pronunciation.replace(/[aeiou]/g, 'ə'),
        meaning: formData.meaning + ' - with deeper cultural significance'
      };
      
      setValidationResult({
        isValid: false,
        corrections,
        message: `I've made some corrections to improve accuracy. The pronunciation and cultural context have been enhanced based on authentic ${selectedLanguage.name} language patterns.`
      });
    }
    
    setIsValidating(false);
  };

  const handleSubmit = () => {
    const finalData = validationResult?.corrections || formData;
    const newWord = {
      id: Date.now().toString(),
      ...finalData,
      language: selectedLanguage.code,
      cultural_context: finalData.meaning
    };
    
    onAddWord(newWord);
    onClose();
    setFormData({
      indigenous: '',
      english: '',
      pronunciation: '',
      meaning: '',
      category: 'general'
    });
    setValidationResult(null);
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
          className="bg-white rounded-2xl p-6 border-4 border-black max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-baloo text-2xl font-bold text-memphis-purple">
              Add New Word
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block font-fredoka font-bold text-memphis-purple mb-2">
                Word in {selectedLanguage.name}
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 border-black rounded-lg font-fredoka focus:outline-none focus:border-memphis-coral"
                value={formData.indigenous}
                onChange={(e) => setFormData({...formData, indigenous: e.target.value})}
                placeholder={`Enter word in ${selectedLanguage.name}`}
              />
            </div>

            <div>
              <label className="block font-fredoka font-bold text-memphis-purple mb-2">
                English Translation
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 border-black rounded-lg font-fredoka focus:outline-none focus:border-memphis-coral"
                value={formData.english}
                onChange={(e) => setFormData({...formData, english: e.target.value})}
                placeholder="Enter English meaning"
              />
            </div>

            <div>
              <label className="block font-fredoka font-bold text-memphis-purple mb-2">
                Pronunciation Guide
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 border-black rounded-lg font-fredoka focus:outline-none focus:border-memphis-coral"
                value={formData.pronunciation}
                onChange={(e) => setFormData({...formData, pronunciation: e.target.value})}
                placeholder="e.g., ah-ek"
              />
            </div>

            <div>
              <label className="block font-fredoka font-bold text-memphis-purple mb-2">
                Cultural Meaning
              </label>
              <textarea
                className="w-full px-3 py-2 border-2 border-black rounded-lg font-fredoka focus:outline-none focus:border-memphis-coral resize-none"
                rows={3}
                value={formData.meaning}
                onChange={(e) => setFormData({...formData, meaning: e.target.value})}
                placeholder="Describe the cultural significance and context"
              />
            </div>

            <div>
              <label className="block font-fredoka font-bold text-memphis-purple mb-2">
                Category
              </label>
              <select
                className="w-full px-3 py-2 border-2 border-black rounded-lg font-fredoka focus:outline-none focus:border-memphis-coral"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="general">General</option>
                <option value="nature">Nature</option>
                <option value="family">Family</option>
                <option value="food">Food</option>
                <option value="spiritual">Spiritual</option>
                <option value="greetings">Greetings</option>
              </select>
            </div>

            {/* AI Validation Section */}
            {!validationResult && (
              <button
                onClick={validateWithAI}
                disabled={isValidating || !formData.indigenous || !formData.english}
                className="w-full memphis-button flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isValidating ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                    <span>AI Validating...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Validate with AI</span>
                  </>
                )}
              </button>
            )}

            {/* Validation Result */}
            {validationResult && (
              <motion.div
                className={`p-4 rounded-lg border-2 border-black ${
                  validationResult.isValid ? 'bg-green-100' : 'bg-yellow-100'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start space-x-2">
                  {validationResult.isValid ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="font-fredoka text-sm text-gray-700 mb-2">
                      {validationResult.message}
                    </p>
                    
                    {validationResult.corrections && (
                      <div className="space-y-2">
                        <h4 className="font-fredoka font-bold text-sm">AI Corrections:</h4>
                        <div className="bg-white p-2 rounded border">
                          <p className="font-fredoka text-xs">
                            <strong>Word:</strong> {validationResult.corrections.indigenous}
                          </p>
                          <p className="font-fredoka text-xs">
                            <strong>Pronunciation:</strong> {validationResult.corrections.pronunciation}
                          </p>
                          <p className="font-fredoka text-xs">
                            <strong>Meaning:</strong> {validationResult.corrections.meaning}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {validationResult && (
              <button
                onClick={handleSubmit}
                className="w-full memphis-button flex items-center justify-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add to Archive</span>
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
