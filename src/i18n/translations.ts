import en from "./languages/en";
import es from "./languages/es";
import fr from "./languages/fr";

// Function to get translations based on language
export const useTranslation = (language: 'fr' | 'en' | 'es') => {
  switch (language) {
    case 'fr':
      return fr;
    case 'en':
      return en;
    case 'es':
      return es;
    default:
      return fr;
  }
};
