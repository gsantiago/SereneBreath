import mitt from "mitt";
import { Settings } from "../config/types";
import { translations } from "../config/translations";

const STORAGE_VERSION = "0";

const browserLocale = getBrowserLocale().split("-")[0];

export const defaultLocale = (
  Object.keys(translations).includes(browserLocale) ? browserLocale : "en"
) as keyof typeof translations;

const defaultValues: Settings = {
  technique: "Awake",
  time: 1,
  vibration: false,
  guide: "female",
  theme: "system",
  locale: defaultLocale,
};

export type Key = keyof Settings;

export type Value<K extends Key> = Settings[K];

const emitter = mitt<Settings>();

export const getItem = (key: Key) => {
  const data = window.localStorage.getItem(`${STORAGE_VERSION}.${key}`);

  if (data != null) {
    return JSON.parse(data);
  }

  return defaultValues[key];
};

export const setItem = (key: Key, value: Value<Key>) => {
  window.localStorage.setItem(
    `${STORAGE_VERSION}.${key}`,
    JSON.stringify(value)
  );

  emitter.emit(key, value);
};

export const subscribe = (key: Key, callback: (value: Value<Key>) => void) =>
  emitter.on(key, callback);

function getBrowserLocale() {
  if (navigator.languages) {
    return navigator.languages[0];
  }

  return navigator.language;
}
