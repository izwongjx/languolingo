import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, CheckCircle, XCircle, Star, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { audioService } from '../utils/audioUtils';
import { indigenousLanguageData } from '../data/indigenousLanguages';

interface Question {
  id: number;
  type: 'translation' | 'pronunciation' | 'meaning' | 'cultural';
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  audio?: string;
}

export const DailyChallenge: React.FC<{ onComplete: (xp: number) => void }> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const { selectedLanguage } = useLanguage();

  const langData = indigenousLanguageData[selectedLanguage.code as keyof typeof indigenousLanguageData];

  const questions: Question[] = [
    {
      id: 1,
      type: 'translation',
      question: 'How do you say "water" in ' + selectedLanguage.name + '?',
      options: [langData?.words.water?.word || 'tɔːʔ', 'api', 'kayu', 'rumah'],
      correct: 0,
      explanation: `"${langData?.words.water?.word || 'tɔːʔ'}" means water and is ${langData?.words.water?.meaning || 'essential for life'}`,
      audio: langData?.words.water?.word || 'tɔːʔ'
    },
    {
      id: 2,
      type: 'pronunciation',
      question: 'Which pronunciation is correct for "hello"?',
      options: ['se-la-mat', 'sa-lam', 'ha-i', 'ta-bik'],
      correct: selectedLanguage.code === 'temiar' ? 0 : selectedLanguage.code === 'semai' ? 1 : selectedLanguage.code === 'jakun' ? 2 : 3,
      explanation: `The correct pronunciation reflects the traditional greeting pattern in ${selectedLanguage.name}`,
      audio: langData?.words.hello?.word || 'selamat'
    },
    {
      id: 3,
      type: 'cultural',
      question: 'What is the cultural significance of "tree" in ' + selectedLanguage.name + ' culture?',
      options: [
        'Just a plant',
        'Home of spirits and ancestors',
        'Building material only',
        'Decoration'
      ],
      correct: 1,
      explanation: 'Trees are considered sacred, housing ancestral spirits and connecting the community to their heritage'
    },
    {
      id: 4,
      type: 'meaning',
      question: 'What does "fire" represent culturally?',
      options: [
        'Danger only',
        'Sacred element for ceremonies',
        'Cooking tool only',
        'Light source'
      ],
      correct: 1,
      explanation: 'Fire is sacred, used in ceremonies to communicate with spirits and bring communities together'
    },
    {
      id: 5,
      type: 'translation',
      question: 'How do you say "thank you"?',
      options: [
        langData?.words['thank you']?.word || 'terima kasih',
        'maaf',
        'selamat',
        'tolong'
      ],
      correct: 0,
      explanation: `"${langData?.words['thank you']?.word || 'terima kasih'}" expresses ${langData?.words['thank you']?.meaning || 'gratitude from the heart'}`,
      audio: langData?.words['thank you']?.word || 'terima kasih'
    },
    {
      id: 6,
      type: 'pronunciation',
      question: 'How is "house" pronounced?',
      options: [
        langData?.words.house?.pronunciation || 'goh',
        'ru-mah',
        'pon-dok',
        'ba-hay'
      ],
      correct: 0,
      explanation: `The pronunciation "${langData?.words.house?.pronunciation || 'goh'}" is traditional to ${selectedLanguage.name}`,
      audio: langData?.words.house?.word || 'gɔːh'
    },
    {
      id: 7,
      type: 'cultural',
      question: 'What role do elders play in ' + selectedLanguage.name + ' community?',
      options: [
        'No special role',
        'Keepers of wisdom and tradition',
        'Just older people',
        'Decision makers only'
      ],
      correct: 1,
      explanation: 'Elders are revered as wisdom keepers, passing down language, stories, and cultural knowledge'
    },
    {
      id: 8,
      type: 'meaning',
      question: 'What does "forest" mean to the ' + selectedLanguage.name + ' people?',
      options: [
        'Resource to exploit',
        'Sacred home of ancestors',
        'Obstacle to development',
        'Tourist attraction'
      ],
      correct: 1,
      explanation: 'The forest is sacred, providing everything needed for life while housing ancestral spirits'
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    setShowResult(true);
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsComplete(true);
      setShowFireworks(true);
      const earnedXP = score * 10 + 50; // Base 50 XP + 10 per correct answer
      setTimeout(() => {
        onComplete(earnedXP);
      }, 3000);
    }
  };

  const handleListen = (text: string) => {
    audioService.speak(text);
  };

  if (isComplete) {
    return (
      <motion.div
        className="bg-gradient-to-br from-memphis-yellow via-memphis-coral to-memphis-purple p-8 rounded-2xl border-4 border-black text-center relative overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        {/* Fireworks Animation */}
        {showFireworks && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-white rounded-full"
                initial={{ 
                  x: '50%', 
                  y: '50%',
                  scale: 0
                }}
                animate={{ 
                  x: `${50 + (Math.random() - 0.5) * 300}%`,
                  y: `${50 + (Math.random() - 0.5) * 300}%`,
                  scale: [0, 1, 0],
                  rotate: 360
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.1,
                  repeat: 3
                }}
              />
            ))}
          </div>
        )}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Trophy className="w-16 h-16 text-white mx-auto mb-4" />
          <h2 className="font-baloo text-3xl font-bold text-white mb-4">
            🎉 Congratulations! 🎉
          </h2>
          <p className="font-fredoka text-lg text-white mb-4">
            You completed today's challenge!
          </p>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-4">
            <p className="font-baloo text-2xl font-bold text-white">
              Score: {score}/8
            </p>
            <p className="font-fredoka text-white">
              XP Earned: +{score * 10 + 50}
            </p>
          </div>
          <p className="font-fredoka text-white">
            Your dedication to preserving {selectedLanguage.name} is inspiring!
          </p>
        </motion.div>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="bg-white rounded-2xl p-6 border-4 border-black">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-baloo text-2xl font-bold text-memphis-purple">
          Daily Challenge
        </h2>
        <div className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-memphis-yellow" />
          <span className="font-fredoka font-bold text-memphis-purple">
            {currentQuestion + 1}/8
          </span>
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-memphis-lavender p-4 rounded-lg border-2 border-black mb-4">
          <h3 className="font-baloo text-lg font-bold text-memphis-purple mb-2">
            {question.question}
          </h3>
          {question.audio && (
            <button
              onClick={() => handleListen(question.audio!)}
              className="flex items-center space-x-2 text-memphis-coral hover:text-memphis-purple transition-colors"
            >
              <Volume2 className="w-4 h-4" />
              <span className="font-fredoka text-sm">Listen</span>
            </button>
          )}
        </div>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              className={`w-full p-3 rounded-lg border-2 border-black font-fredoka text-left transition-all ${
                selectedAnswer === index
                  ? showResult
                    ? index === question.correct
                      ? 'bg-green-100 border-green-500'
                      : 'bg-red-100 border-red-500'
                    : 'bg-memphis-coral text-white'
                  : showResult && index === question.correct
                    ? 'bg-green-100 border-green-500'
                    : 'bg-white hover:bg-memphis-lavender'
              }`}
              onClick={() => !showResult && handleAnswerSelect(index)}
              disabled={showResult}
              whileHover={!showResult ? { scale: 1.02 } : {}}
              whileTap={!showResult ? { scale: 0.98 } : {}}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showResult && (
                  <>
                    {index === question.correct && <CheckCircle className="w-5 h-5 text-green-600" />}
                    {selectedAnswer === index && index !== question.correct && <XCircle className="w-5 h-5 text-red-600" />}
                  </>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {showResult && (
          <motion.div
            className="mt-4 p-4 bg-memphis-yellow bg-opacity-20 rounded-lg border-2 border-black"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="font-fredoka text-sm text-gray-700">
              <strong>Explanation:</strong> {question.explanation}
            </p>
          </motion.div>
        )}
      </div>

      <div className="flex justify-between">
        <div className="flex space-x-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full border border-black ${
                index < currentQuestion
                  ? 'bg-memphis-green'
                  : index === currentQuestion
                    ? 'bg-memphis-coral'
                    : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {!showResult ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            className="memphis-button disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="memphis-button"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Challenge'}
          </button>
        )}
      </div>
    </div>
  );
};
