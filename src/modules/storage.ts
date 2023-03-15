import mitt from "mitt";
import { Settings } from "@/config/types";
import { translations, LocaleKey } from "@/config/translations";

const STORAGE_VERSION = "1";

const browserLocale = getBrowserLocale().split("-")[0];

export const defaultLocale = (
  Object.keys(translations).includes(browserLocale) ? browserLocale : "en"
) as LocaleKey;

const defaultValues: Settings = {
  technique: "awake",
  time: 1,
  vibration: false,
  guide: "female",
  theme: "system",
  locale: defaultLocale,
};

export type Key = keyof Settings;

export type Value<K extends Key> = Settings[K];

const emitter = mitt<Settings>();

export function getItem<K extends Key>(key: K): Value<K> {
  const data = window.localStorage.getItem(`${STORAGE_VERSION}.${key}`);

  if (data != null) {
    return JSON.parse(data);
  }

  return defaultValues[key];
}

export function setItem<K extends Key>(key: K, value: Value<K>) {
  window.localStorage.setItem(
    `${STORAGE_VERSION}.${key}`,
    JSON.stringify(value)
  );

  emitter.emit(key, value);
}

export function subscribe<K extends Key>(
  key: K,
  callback: (newValue: Value<K>) => void
) {
  emitter.on(key, callback);
}

function getBrowserLocale() {
  if (navigator.languages) {
    return navigator.languages[0];
  }

  return navigator.language;
}
