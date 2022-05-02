import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// Importing translation files
import {data} from 'data/Metadata';

//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: data.locales['en-us'],
  },
  ru: {
    translation: data.locales.ru,
  },
};

//i18N Initialization

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  //   `${localStorage.getItem('lang') || 'en'}`, //default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
