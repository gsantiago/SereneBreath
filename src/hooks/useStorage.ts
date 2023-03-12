import { useEffect, useState } from "react";
import * as storage from "../modules/storage";

export function useStorage<K extends storage.Key>(
  key: K
): [storage.Value<K>, (newValue: storage.Value<K>) => void] {
  const [value, setValue] = useState<storage.Value<K>>(storage.getItem(key));

  useEffect(() => {
    return storage.subscribe(key, setValue);
  }, []);

  return [
    value,
    (newValue: storage.Value<K>) => storage.setItem(key, newValue),
  ];
}
