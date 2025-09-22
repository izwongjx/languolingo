import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, Heart, Star, Lightbulb, BookOpen } from 'lucide-react';
import { audioService } from '../utils/audioUtils';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'greeting' | 'help' | 'cultural' | 'language';
}

interface AIChatProps {
  onClose: () => void;
}

export const AIChat: React.FC<AIChatProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Selamat datang! I\'m your AI language guardian. I\'m here to help you learn indigenous languages, understand cultural stories, and answer any questions about Malaysian Orang Asli heritage. How can I assist you today?',
      sender: 'ai',
      timestamp: new Date(),
      type: 'greeting'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Language learning responses
    if (lowerMessage.includes('learn') || lowerMessage.includes('teach') || lowerMessage.includes('word')) {
      return `Great question! I can help you learn indigenous words. For example, in Temiar, "water" is "tɔːʔ" (pronounced "toh"), which means "essential life source, sacred in rituals." Would you like to learn more words or practice pronunciation?`;
    }
    
    // Cultural responses
    if (lowerMessage.includes('story') || lowerMessage.includes('culture') || lowerMessage.includes('tradition')) {
      return `I love sharing cultural stories! The Orang Asli have beautiful traditions passed down through generations. Each story teaches important values like respecting nature and living in harmony. Would you like me to tell you about the Guardian of Ancient Tree or the Singing River?`;
    }
    
    // Pronunciation help
    if (lowerMessage.includes('pronounce') || lowerMessage.includes('sound') || lowerMessage.includes('say')) {
      return `Pronunciation is key to honoring these languages! I can help you with that. Try breaking words into syllables and practice slowly. For example, "kaːw" (tree in Temiar) is pronounced "kah-aw" with emphasis on the first syllable. Would you like me to speak it aloud?`;
    }
    
    // Quiz help
    if (lowerMessage.includes('quiz') || lowerMessage.includes('test') || lowerMessage.includes('practice')) {
      return `The daily quiz is a great way to practice! Each question is designed to help you remember words and their cultural meanings. If you make mistakes, don't worry - that's how we learn! Check the "AI For You" section to review and retry questions with my guidance.`;
    }
    
    // Encouragement
    if (lowerMessage.includes('difficult') || lowerMessage.includes('hard') || lowerMessage.includes('struggle')) {
      return `Learning a new language is challenging, but you're doing amazing! Remember, every indigenous language learner is helping preserve these beautiful cultures. Take it one word at a time, and celebrate small victories. I'm here to support you every step of the way! 🌟`;
    }
    
    // General help
    if (lowerMessage.includes('help') || lowerMessage.includes('how') || lowerMessage.includes('what')) {
      return `I'm here to help with anything related to indigenous languages and culture! I can:
      
      🌟 Teach you new words and their meanings
      📚 Share traditional stories and their morals  
      🎯 Help you practice pronunciation
      💡 Explain cultural contexts behind words
      🔄 Review your quiz mistakes with easier explanations
      
      What would you like to explore today?`;
    }
    
    // Default responses
    const responses = [
      `That's interesting! Indigenous languages are full of wisdom. Each word carries deep cultural meaning that connects us to nature and community values.`,
      `I appreciate your curiosity! Learning these languages helps preserve the rich heritage of Malaysian Orang Asli communities for future generations.`,
      `Wonderful question! The beauty of indigenous languages is how they reflect the close relationship between people and their natural environment.`,
      `Thank you for engaging with this important cultural preservation work! Every learner makes a difference in keeping these languages alive.`
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date(),
        type: 'help'
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: "Teach me new words", icon: BookOpen, color: "from-blue-400 to-blue-600" },
    { text: "Tell me a story", icon: Heart, color: "from-pink-400 to-pink-600" },
    { text: "Help with pronunciation", icon: Lightbulb, color: "from-yellow-400 to-yellow-600" },
    { text: "Explain cultural meaning", icon: Star, color: "from-purple-400 to-purple-600" }
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white border-4 border-black rounded-3xl w-full max-w-2xl h-[80vh] flex flex-col"
        style={{ filter: 'drop-shadow(8px 8px 0px #000)' }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-400 to-pink-400 border-b-4 border-black rounded-t-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-full border-2 border-black">
              <Bot className="text-purple-600" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black text-white">AI Language Guardian</h2>
              <p className="text-purple-100 text-sm font-bold">Your cultural learning companion</p>
            </div>
          </div>
          <motion.button
            onClick={onClose}
            className="p-2 bg-white rounded-full border-2 border-black text-gray-600 hover:text-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className={`flex items-start gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`p-2 rounded-full border-2 border-black ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-blue-400 to-blue-600' 
                      : 'bg-gradient-to-r from-purple-400 to-pink-400'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="text-white" size={16} />
                    ) : (
                      <Bot className="text-white" size={16} />
                    )}
                  </div>
                  
                  <div className={`p-3 rounded-2xl border-2 border-black ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-100 to-blue-200'
                      : 'bg-gradient-to-r from-purple-50 to-pink-50'
                  }`} style={{ filter: 'drop-shadow(2px 2px 0px #000)' }}>
                    <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
                      {message.text}
                    </p>
                    <div className="text-xs text-gray-500 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start gap-2">
                <div className="p-2 rounded-full border-2 border-black bg-gradient-to-r from-purple-400 to-pink-400">
                  <Bot className="text-white" size={16} />
                </div>
                <div className="p-3 rounded-2xl border-2 border-black bg-gradient-to-r from-purple-50 to-pink-50"
                     style={{ filter: 'drop-shadow(2px 2px 0px #000)' }}>
                  <div className="flex space-x-1">
                    <motion.div
                      className="w-2 h-2 bg-purple-600 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-purple-600 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-purple-600 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t-2 border-gray-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                onClick={() => setInputText(action.text)}
                className={`p-2 bg-gradient-to-r ${action.color} text-white rounded-lg border-2 border-black font-bold text-xs flex items-center gap-2`}
                style={{ filter: 'drop-shadow(2px 2px 0px #000)' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <action.icon size={14} />
                {action.text}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t-4 border-black bg-gray-50 rounded-b-2xl">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about indigenous languages, culture, or stories..."
              className="flex-1 p-3 border-2 border-black rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
              style={{ filter: 'drop-shadow(2px 2px 0px #000)' }}
            />
            <motion.button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="p-3 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-lg border-2 border-black disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ filter: 'drop-shadow(2px 2px 0px #000)' }}
              whileHover={{ scale: inputText.trim() ? 1.05 : 1 }}
              whileTap={{ scale: inputText.trim() ? 0.95 : 1 }}
            >
              <Send size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
