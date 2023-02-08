import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLSValue, setLSValue } from "../app/localStorage";
import en from "./en.json";
import ru from "./ru.json";
import ro from "./ro.json";

export const resources = {
  en: { translation: en },
  ro: { translation: ro },
  ru: {translation: ru}
};
export const getDefaultLanguage = () => {
  return getLSValue("language") || "en";
};

i18n.use(initReactI18next).init({
  lng: getDefaultLanguage(),
  resources,
});

export const languages = Object.keys(resources);

export const changeLanguage = (lng: string) => {
 i18n.changeLanguage(lng);
 setLSValue("language", lng);
}