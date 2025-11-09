import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { translations, Language, TranslationKey } from '@/lib/translations';

interface TranslationOptions {
  returnObjects?: boolean;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  // Overloads for the t function
  t: {
    (key: TranslationKey, options?: { returnObjects: false }): string;
    <T>(key: TranslationKey, options: { returnObjects: true }): T;
  };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en'); // Explicitly set type to Language

  useEffect(() => {
    // Set initial language based on browser or localStorage if preferred
    const storedLang = localStorage.getItem('sidra-med-lang') as Language;
    if (storedLang && translations[storedLang]) {
      setLanguage(storedLang);
    } else {
      const browserLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
      setLanguage(browserLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sidra-med-lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Implementation of the t function with overloads
  const t = ((key: TranslationKey, options?: TranslationOptions) => {
    const currentTranslation = translations[language][key];
    const defaultTranslation = translations['en'][key];

    if (options?.returnObjects) {
      // If returnObjects is true, return the raw object/array
      return currentTranslation || defaultTranslation || key;
    } else {
      // Otherwise, expect a string. If it's not a string, fall back to key as string.
      const result = currentTranslation || defaultTranslation || key;
      return typeof result === 'string' ? result : String(key);
    }
  }) as LanguageContextType['t']; // Cast to the overloaded type

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};