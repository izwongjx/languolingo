import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Volume2, Mic, MicOff, Trophy, Star, Brain, RotateCcw } from 'lucide-react';
import { Header } from './components/Header';
import { LanguageCard } from './components/LanguageCard';
import { QuizSection } from './components/QuizSection';
import { StorySection } from './components/StorySection';
import { AIGuardian } from './components/AIGuardian';
import { AIForYou } from './components/AIForYou';
import { AIChat } from './components/AIChat';
import { indigenousLanguageData } from './data/indigenousLanguages';
import { audioService } from './utils/audioUtils';

interface UserProgress {
  totalXP: number;
  streak: number;
  completedQuizzes: number;
  badges: string[];
}

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

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('temiar');
  const [isListening, setIsListening] = useState(false);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    totalXP: 0,
    streak: 0,
    completedQuizzes: 0,
    badges: []
  });
  const [mistakes, setMistakes] = useState<Mistake[]>([]);
  const [showAIChat, setShowAIChat] = useState(false);

  const currentLanguage = indigenousLanguageData[selectedLanguage as keyof typeof indigenousLanguageData];

  const handleQuizComplete = (score: number, totalQuestions: number, incorrectAnswers: any[]) => {
    const xpGained = score * 10;
    setUserProgress(prev => ({
      ...prev,
      totalXP: prev.totalXP + xpGained,
      completedQuizzes: prev.completedQuizzes + 1,
      streak: score === totalQuestions ? prev.streak + 1 : 0
    }));

    // Add mistakes to the AI For You system
    const newMistakes: Mistake[] = incorrectAnswers.map((answer, index) => ({
      id: `mistake-${Date.now()}-${index}`,
      question: answer.question,
      userAnswer: answer.userAnswer,
      correctAnswer: answer.correctAnswer,
      explanation: `The correct answer is "${answer.correctAnswer}". In ${currentLanguage.name}, this word represents ${answer.meaning || 'an important cultural concept'}. Try to remember the cultural context - it helps with memorization!`,
      language: currentLanguage.name,
      difficulty: 'medium' as const,
      retryCount: 0,
      isCompleted: false
    }));

    setMistakes(prev => [...prev, ...newMistakes]);
  };

  const handleRetryMistake = (mistakeId: string) => {
    setMistakes(prev => prev.map(mistake => 
      mistake.id === mistakeId 
        ? { ...mistake, retryCount: mistake.retryCount + 1, isCompleted: true }
        : mistake
    ));

    // Award partial XP for retry success
    setUserProgress(prev => ({
      ...prev,
      totalXP: prev.totalXP + 25
    }));
  };

  const handleClearMistakes = () => {
    setMistakes([]);
  };

  const toggleListening = () => {
    if (isListening) {
      audioService.stopListening();
    } else {
      audioService.startListening((transcript) => {
        console.log('Voice input:', transcript);
      });
    }
    setIsListening(!isListening);
  };

  const guardianMessages = [
    `Selamat datang! I'm here to guide you through the beautiful world of ${currentLanguage.name} language and culture.`,
    `Every word you learn helps preserve the rich heritage of Malaysian indigenous communities.`,
    `Remember, language is not just words - it's culture, wisdom, and connection to ancestors.`,
    `Take your time to understand the cultural meaning behind each word. It makes learning more meaningful!`
  ];

  const [currentGuardianMessage, setCurrentGuardianMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGuardianMessage(prev => (prev + 1) % guardianMessages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [guardianMessages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
      <Header 
        userProgress={userProgress}
        onLanguageChange={setSelectedLanguage}
        selectedLanguage={selectedLanguage}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section with AI Guardian */}
        <motion.section 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <motion.h1 
              className="text-5xl md:text-7xl font-black text-gray-800 mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Language Guardian
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 font-bold max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Keeping Malaysian Indigenous Languages Alive Through AI-Powered Cultural Archiving
            </motion.p>
          </div>

          {/* AI Guardian */}
          <AIGuardian 
            message={guardianMessages[currentGuardianMessage]}
            onInteract={() => setShowAIChat(true)}
          />

          {/* Voice Control */}
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={toggleListening}
              className={`px-6 py-3 rounded-full border-4 border-black font-bold text-lg flex items-center gap-3 mx-auto ${
                isListening 
                  ? 'bg-gradient-to-r from-red-400 to-red-600 text-white' 
                  : 'bg-gradient-to-r from-green-400 to-green-600 text-white'
              }`}
              style={{ filter: 'drop-shadow(4px 4px 0px #000)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isListening ? <MicOff size={24} /> : <Mic size={24} />}
              {isListening ? 'Stop Listening' : 'Start Voice Learning'}
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Language Selection */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-black text-center text-gray-800 mb-8">
            Choose Your Language Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(indigenousLanguageData).map(([key, language]) => (
              <LanguageCard
                key={key}
                language={language}
                isSelected={selectedLanguage === key}
                onClick={() => setSelectedLanguage(key)}
              />
            ))}
          </div>
        </motion.section>

        {/* AI For You Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <AIForYou 
            mistakes={mistakes}
            onRetryMistake={handleRetryMistake}
            onClearMistakes={handleClearMistakes}
          />
        </motion.section>

        {/* Quiz Section */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <QuizSection 
            language={currentLanguage}
            onQuizComplete={handleQuizComplete}
          />
        </motion.section>

        {/* Story Section */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <StorySection language={currentLanguage} />
        </motion.section>

        {/* Progress Stats */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="bg-white border-4 border-black rounded-3xl p-8 inline-block"
               style={{ filter: 'drop-shadow(8px 8px 0px #000)' }}>
            <h3 className="text-2xl font-black text-gray-800 mb-4">Your Learning Journey</h3>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-purple-600">{userProgress.totalXP}</div>
                <div className="text-sm font-bold text-gray-600">Total XP</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-green-600">{userProgress.streak}</div>
                <div className="text-sm font-bold text-gray-600">Day Streak</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-600">{userProgress.completedQuizzes}</div>
                <div className="text-sm font-bold text-gray-600">Quizzes Done</div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* AI Chat Modal */}
      <AnimatePresence>
        {showAIChat && (
          <AIChat onClose={() => setShowAIChat(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
