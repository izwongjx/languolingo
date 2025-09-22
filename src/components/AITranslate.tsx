import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft, Volume2, Copy, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { audioService } from '../utils/audioUtils';

export const AITranslate: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [translation, setTranslation] = useState('');
  const [pronunciation, setPronunciation] = useState('');
  const [meaning, setMeaning] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { selectedLanguage } = useLanguage();

  const mockTranslations: Record<string, any> = {
    'hello': {
      temiar: { text: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi', meaning: 'A traditional greeting used in the morning' },
      semai: { text: 'Salam', pronunciation: 'sa-lam', meaning: 'General greeting used throughout the day' },
      jakun: { text: 'Hai', pronunciation: 'ha-i', meaning: 'Casual greeting similar to English hello' },
      mah_meri: { text: 'Tabik', pronunciation: 'ta-bik', meaning: 'Respectful greeting with cultural significance' }
    },
    'thank you': {
      temiar: { text: 'Terima kasih', pronunciation: 'te-ri-ma ka-sih', meaning: 'Expression of gratitude and appreciation' },
      semai: { text: 'Kamsia', pronunciation: 'kam-si-a', meaning: 'Heartfelt thanks with deep respect' },
      jakun: { text: 'Makasih', pronunciation: 'ma-ka-sih', meaning: 'Casual way to express thanks' },
      mah_meri: { text: 'Syukur', pronunciation: 'syu-kur', meaning: 'Gratitude that connects to spiritual appreciation' }
    },
    'water': {
      temiar: { text: 'Aek', pronunciation: 'ah-ek', meaning: 'Essential element for life, sacred in many rituals' },
      semai: { text: 'Air', pronunciation: 'a-ir', meaning: 'Life-giving liquid, central to community gatherings' },
      jakun: { text: 'Ayer', pronunciation: 'a-yer', meaning: 'Pure water from natural sources' },
      mah_meri: { text: 'Tubig', pronunciation: 'tu-big', meaning: 'Sacred water used in ceremonies' }
    }
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const key = inputText.toLowerCase().trim();
    const translationData = mockTranslations[key];
    
    if (translationData && translationData[selectedLanguage.code]) {
      const data = translationData[selectedLanguage.code];
      setTranslation(data.text);
      setPronunciation(data.pronunciation);
      setMeaning(data.meaning);
    } else {
      // Fallback translation
      setTranslation(`[${inputText} in ${selectedLanguage.name}]`);
      setPronunciation(`[pronunciation guide]`);
      setMeaning(`Translation for "${inputText}" in ${selectedLanguage.name} language.`);
    }
    
    setIsLoading(false);
  };

  const handleListen = (text: string) => {
    audioService.speak(text);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border-4 border-black">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-memphis-purple to-memphis-blue rounded-full border-2 border-black flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-baloo text-2xl font-bold text-memphis-purple">
              AI Translator
            </h2>
            <p className="font-fredoka text-sm text-gray-600">
              English to {selectedLanguage.name}
            </p>
          </div>
        </div>

        {/* Input Section */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-memphis-lavender to-white p-4 rounded-2xl border-2 border-black">
            <label className="block font-fredoka font-bold text-memphis-purple mb-2">
              English Text
            </label>
            <textarea
              className="w-full p-3 border-2 border-black rounded-lg font-fredoka resize-none focus:outline-none focus:border-memphis-coral"
              rows={3}
              placeholder="Type any word or sentence in English..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleTranslate}
              disabled={!inputText.trim() || isLoading}
              className="memphis-button flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                  <span>Translating...</span>
                </>
              ) : (
                <>
                  <ArrowRightLeft className="w-5 h-5" />
                  <span>Translate</span>
                </>
              )}
            </button>
          </div>

          {/* Translation Result */}
          {translation && (
            <motion.div
              className="bg-gradient-to-br from-memphis-yellow to-memphis-coral p-6 rounded-2xl border-2 border-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-start mb-4">
                <label className="font-fredoka font-bold text-white">
                  {selectedLanguage.name} Translation
                </label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleListen(translation)}
                    className="p-2 bg-white text-memphis-purple rounded-full border-2 border-black hover:bg-memphis-lavender transition-colors"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleCopy(translation)}
                    className="p-2 bg-white text-memphis-purple rounded-full border-2 border-black hover:bg-memphis-lavender transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-baloo text-2xl font-bold text-white">
                  {translation}
                </h3>
                
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <p className="font-fredoka text-white font-bold mb-1">Pronunciation:</p>
                  <p className="font-fredoka text-white italic">/{pronunciation}/</p>
                </div>

                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <p className="font-fredoka text-white font-bold mb-1">Cultural Context:</p>
                  <p className="font-fredoka text-white text-sm">{meaning}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Quick Translate Buttons */}
        <div className="mt-6">
          <h3 className="font-baloo font-bold text-memphis-purple mb-3">Quick Translate</h3>
          <div className="flex flex-wrap gap-2">
            {['hello', 'thank you', 'water', 'goodbye', 'please', 'sorry'].map((word) => (
              <button
                key={word}
                onClick={() => {
                  setInputText(word);
                  setTimeout(() => handleTranslate(), 100);
                }}
                className="px-3 py-2 bg-memphis-lavender text-memphis-purple rounded-full border-2 border-black font-fredoka font-bold hover:bg-memphis-pink transition-colors"
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
