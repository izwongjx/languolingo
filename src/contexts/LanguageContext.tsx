import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const AVAILABLE_LANGUAGES: Language[] = [
  { code: 'temiar', name: 'Temiar', nativeName: 'Temiar', flag: '🇲🇾' },
  { code: 'semai', name: 'Semai', nativeName: 'Semai', flag: '🇲🇾' },
  { code: 'jakun', name: 'Jakun', nativeName: 'Jakun', flag: '🇲🇾' },
  { code: 'mah_meri', name: 'Mah Meri', nativeName: 'Mah Meri', flag: '🇲🇾' },
];

interface LanguageContextType {
  selectedLanguage: Language;
  setSelectedLanguage: (language: Language) => void;
  isLanguageModalOpen: boolean;
  setIsLanguageModalOpen: (open: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(AVAILABLE_LANGUAGES[0]);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  return (
    <LanguageContext.Provider value={{
      selectedLanguage,
      setSelectedLanguage,
      isLanguageModalOpen,
      setIsLanguageModalOpen
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
