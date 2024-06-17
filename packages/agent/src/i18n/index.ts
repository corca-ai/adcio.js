import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translateEn from "./en/common.json";
import translateKo from "./ko/common.json";

i18n.use(initReactI18next).init({
  lng: "ko",
  resources: {
    en: {
      translation: translateEn,
    },
    ko: {
      translation: translateKo,
    },
  },
});

export default i18n;
