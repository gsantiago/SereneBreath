import React from "react";
import { Select } from "./Select";
import { useStorage } from "../hooks/useStorage";
import { translations } from "../config/translations";

const options = Object.keys(translations).map((key) => ({
  label: translations[key].language,
  value: key,
}));

export function LanguageSelect() {
  const [locale, setLocale] = useStorage("locale");
  return <Select value={locale} onChange={setLocale} options={options} />;
}
