import { Select } from "@/components/Select";
import { useStorage } from "@/hooks/useStorage";
import { translations, locales, LocaleKey } from "@/config/translations";

const options = locales.map((locale) => ({
  label: translations[locale].language,
  value: locale,
}));

export function LanguageSelect() {
  const [locale, setLocale] = useStorage("locale");

  return (
    <Select<LocaleKey> value={locale} onChange={setLocale} options={options} />
  );
}
