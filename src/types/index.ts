export interface Word {
  id: string;
  indigenous: string;
  english: string;
  pronunciation: string;
  category: string;
  cultural_context: string;
  language: string;
}

export interface Story {
  id: string;
  title: string;
  content: string;
  moral: string;
  category: string;
  difficulty: string;
  language: string;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  type: string;
  xp_reward: number;
  completed: boolean;
  icon: string;
}

export interface UserProgress {
  xp: number;
  level: number;
  words_learned: number;
  stories_unlocked: number;
  daily_streak: number;
  badges: string[];
}

export interface User {
  id: string;
  username: string;
  email: string;
  selectedLanguage: string;
  avatar: string;
}

export interface DictionaryEntry {
  id: string;
  english: string;
  indigenous: string;
  pronunciation: string;
  type: 'vocab' | 'idiom' | 'conversational';
  language: string;
}

export interface Translation {
  original: string;
  translated: string;
  pronunciation: string;
  meaning: string;
  language: string;
}
