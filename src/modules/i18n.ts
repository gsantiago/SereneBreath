import objectPath from "object-path";
import { translations } from "../config/translations";

import { getItem, subscribe } from "./storage";

export const i18n = {
  locale: getItem("language"),
};

subscribe("language", (newLocale) => {
  i18n.locale = newLocale;
});

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

type TranslationKey = NestedKeyOf<typeof translations.en>;

export function translate(key: TranslationKey) {
  const value = objectPath.get(translations[i18n.locale], key);

  if (value) {
    return value;
  }

  return objectPath.get(translations["en"], key, key);
}
