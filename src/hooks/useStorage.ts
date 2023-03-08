import { useEffect, useState } from "react";
import * as storage from "../modules/storage";

export function useStorage(key: storage.Key) {
  const [value, setValue] = useState(storage.getItem(key));

  useEffect(() => {
    return storage.subscribe(key, setValue);
  }, []);

  return [value, (newValue) => storage.setItem(key, newValue)];
}
