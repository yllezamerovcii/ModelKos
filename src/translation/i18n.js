import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en-GB.json';
import sq from './sq-AL.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      sq: { translation: sq }
    },
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Use English if the translation is not available
    interpolation: {
      escapeValue: false // React already protects from XSS
    }
  });

export default i18n;

