import React from "react";
import { Select } from "./Select";
import { useStorage } from "../hooks/useStorage";
import { translations, locales } from "../config/translations";

const options = locales.map((locale) => ({
  label: translations[locale].language,
  value: locale,
}));

export function LanguageSelect() {
  const [locale, setLocale] = useStorage("locale");
  return <Select value={locale} onChange={setLocale} options={options} />;
}
