import objectPath from "object-path";

import { translations } from "@/config/translations";
import { getItem } from "@/modules/storage";

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

type TranslationKey = NestedKeyOf<typeof translations.en>;

export function translate(key: TranslationKey): string {
  const locale = getItem("locale");
  const value = objectPath.get(translations[locale], key);

  if (value) {
    return value;
  }

  return objectPath.get(translations["en"], key, key);
}
