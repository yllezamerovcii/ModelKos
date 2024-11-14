const LOCALE = 'locale';
const LANGUAGE = 'language';

export const dataLocalStorage = {
  setLanguage(language) {
    localStorage.setItem('language', language);
  },
  getLanguage() {
    return localStorage.getItem('language') || 'English';
  },
  setLocale(locale) {
    localStorage.setItem('locale', locale);
  },
  getLocale() {
    return localStorage.getItem('locale') || 'en-GB'; // Default locale
  }
};
