import { useStorage } from "./useStorage";
import { translate } from "../modules/i18n";

export function useTranslation() {
  useStorage("language");

  return { t: translate };
}
