import en from "../locales/en.json";
import pt from "../locales/pt.json";

export const translations = { en, pt };

type LocaleKey = keyof typeof translations;

export const locales = Object.keys(translations) as LocaleKey[];
