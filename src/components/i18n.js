import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTranslations from "./i18n/en.json";
import hiTranslations from "./i18n/hi.json";

//TODO:here we init resourse
const resources = {
  en: {
    translation: { translation: enTranslations },
  },
  hi: {
    translation: { translation: hiTranslations },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
