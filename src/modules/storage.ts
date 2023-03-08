import mitt from "mitt";
import { Settings } from "../config/types";

const STORAGE_VERSION = "0";

const defaultValues: Settings = {
  technique: "Awake",
  time: 1,
  vibration: false,
  guide: "female",
  theme: "system",
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
