import { useEffect } from "react";

import { Settings } from "@/config/types";
import * as storage from "@/modules/storage";

export function useThemeSupport() {
  useEffect(() => {
    const checkTheme = (theme: Settings["theme"]): void => {
      if (theme === "system") {
        return checkTheme(
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
        );
      }

      document.documentElement.classList.toggle("dark", theme === "dark");
    };

    checkTheme(storage.getItem("theme"));

    return storage.subscribe("theme", checkTheme);
  }, []);
}
