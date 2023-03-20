import { Select } from "@/components/Select";
import { Field } from "@/components/Field";

import { useStorage } from "@/hooks/useStorage";
import { useTranslation } from "@/hooks/useTranslation";

import { translations, locales, LocaleKey } from "@/config/translations";

const options = locales.map((locale) => ({
  label: translations[locale].language,
  value: locale,
}));

export function LanguageSelect() {
  const { t } = useTranslation();
  const [locale, setLocale] = useStorage("locale");

  return (
    <Field
      id="locale"
      label={t("footer.language")}
      bottom={
        <Select<LocaleKey>
          id="locale"
          value={locale}
          onChange={setLocale}
          options={options}
        />
      }
    />
  );
}
