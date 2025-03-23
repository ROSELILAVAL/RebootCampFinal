
import { create } from 'zustand';

export type Language = 'fr' | 'en' | 'es';

type TranslationStore = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const useLanguageStore = create<TranslationStore>((set) => ({
  language: 'fr',
  setLanguage: (language) => set({ language }),
}));

export const getLanguageFromBrowser = (): Language => {
  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'fr') return 'fr';
  if (browserLang === 'es') return 'es';
  return 'en'; // Default to English for other languages
};

