import { useStorage } from "@/hooks/useStorage";
import { translate } from "@/modules/i18n";

export function useTranslation() {
  useStorage("locale");

  return { t: translate };
}
