import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Volume2, Book, MessageSquare, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { audioService } from '../utils/audioUtils';
import { DictionaryEntry } from '../types';

const mockDictionaryData: DictionaryEntry[] = [
  // Vocabs
  { id: '1', english: 'Water', indigenous: 'Aek', pronunciation: 'ah-ek', type: 'vocab', language: 'temiar' },
  { id: '2', english: 'Fire', indigenous: 'Apuy', pronunciation: 'ah-puy', type: 'vocab', language: 'temiar' },
  { id: '3', english: 'Tree', indigenous: 'Kayu', pronunciation: 'ka-yu', type: 'vocab', language: 'temiar' },
  { id: '4', english: 'House', indigenous: 'Rumah', pronunciation: 'ru-mah', type: 'vocab', language: 'temiar' },
  { id: '5', english: 'Food', indigenous: 'Makanan', pronunciation: 'ma-ka-nan', type: 'vocab', language: 'temiar' },
  { id: '6', english: 'Sun', indigenous: 'Matahari', pronunciation: 'ma-ta-ha-ri', type: 'vocab', language: 'temiar' },
  { id: '7', english: 'Moon', indigenous: 'Bulan', pronunciation: 'bu-lan', type: 'vocab', language: 'temiar' },
  
  // Idioms
  { id: '8', english: 'Like a fish out of water', indigenous: 'Macam ikan keluar air', pronunciation: 'ma-cham i-kan ke-lu-ar a-ir', type: 'idiom', language: 'temiar' },
  { id: '9', english: 'Birds of a feather flock together', indigenous: 'Burung sama bulu berkawan', pronunciation: 'bu-rung sa-ma bu-lu ber-ka-wan', type: 'idiom', language: 'temiar' },
  { id: '10', english: 'The early bird catches the worm', indigenous: 'Siapa cepat dia dapat', pronunciation: 'si-a-pa che-pat di-a da-pat', type: 'idiom', language: 'temiar' },
  
  // Conversational
  { id: '11', english: 'How are you?', indigenous: 'Apa khabar?', pronunciation: 'a-pa kha-bar', type: 'conversational', language: 'temiar' },
  { id: '12', english: 'Thank you very much', indigenous: 'Terima kasih banyak', pronunciation: 'te-ri-ma ka-sih ba-nyak', type: 'conversational', language: 'temiar' },
  { id: '13', english: 'See you later', indigenous: 'Jumpa lagi', pronunciation: 'jum-pa la-gi', type: 'conversational', language: 'temiar' },
  { id: '14', english: 'Excuse me', indigenous: 'Maaf', pronunciation: 'ma-af', type: 'conversational', language: 'temiar' },
  { id: '15', english: 'Where is the bathroom?', indigenous: 'Di mana tandas?', pronunciation: 'di ma-na tan-das', type: 'conversational', language: 'temiar' },
  { id: '16', english: 'I don\'t understand', indigenous: 'Saya tak faham', pronunciation: 'sa-ya tak fa-ham', type: 'conversational', language: 'temiar' },
  { id: '17', english: 'Can you help me?', indigenous: 'Boleh tolong saya?', pronunciation: 'bo-leh to-long sa-ya', type: 'conversational', language: 'temiar' },
];

export const Dictionary: React.FC = () => {
  const [activeType, setActiveType] = useState<'vocab' | 'idiom' | 'conversational'>('vocab');
  const [searchQuery, setSearchQuery] = useState('');
  const { selectedLanguage } = useLanguage();

  const filteredEntries = mockDictionaryData.filter(entry => {
    const matchesType = entry.type === activeType;
    const matchesSearch = entry.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entry.indigenous.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleListen = (text: string) => {
    audioService.speak(text);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'vocab': return <Book className="w-5 h-5" />;
      case 'idiom': return <MessageSquare className="w-5 h-5" />;
      case 'conversational': return <Users className="w-5 h-5" />;
      default: return <Book className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border-4 border-black">
        <h2 className="font-baloo text-2xl font-bold text-memphis-purple mb-4">
          {selectedLanguage.name} Dictionary
        </h2>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search words or phrases..."
            className="w-full pl-10 pr-4 py-3 border-2 border-black rounded-full font-fredoka focus:outline-none focus:border-memphis-coral"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Type Tabs */}
        <div className="flex space-x-2 mb-6">
          {(['vocab', 'idiom', 'conversational'] as const).map((type) => (
            <button
              key={type}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-black font-fredoka font-bold transition-all ${
                activeType === type
                  ? 'bg-memphis-coral text-white'
                  : 'bg-white text-memphis-purple hover:bg-memphis-lavender'
              }`}
              onClick={() => setActiveType(type)}
            >
              {getTypeIcon(type)}
              <span className="capitalize">{type === 'conversational' ? 'Phrases' : type}s</span>
            </button>
          ))}
        </div>

        {/* Dictionary Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredEntries.map((entry) => (
            <motion.div
              key={entry.id}
              className="bg-gradient-to-br from-memphis-lavender to-white p-4 rounded-2xl border-2 border-black"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-baloo text-lg font-bold text-memphis-purple">
                  {entry.english}
                </h3>
                <button
                  onClick={() => handleListen(entry.indigenous)}
                  className="p-2 bg-memphis-coral text-white rounded-full border-2 border-black hover:bg-memphis-purple transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-2">
                <p className="font-baloo text-xl text-memphis-green">
                  {entry.indigenous}
                </p>
                <p className="font-fredoka text-sm text-gray-600 italic">
                  /{entry.pronunciation}/
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredEntries.length === 0 && (
          <div className="text-center py-8">
            <p className="font-fredoka text-gray-500">
              No entries found for "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
