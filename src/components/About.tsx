import { Link } from "@/components/Link";
import { useTranslation } from "@/hooks/useTranslation";

import packageJSON from "../../package.json";

export function About() {
  const { t } = useTranslation();

  return (
    <div className="px-5 py-1 dark:text-white">
      <p className="mt-2 text-xs">{t("about.text1")}</p>
      <p className="mt-2 text-xs">
        {t("about.text2")}{" "}
        <Link href="https://github.com/gsantiago/SereneBreath">
          Github Repo.
        </Link>
      </p>
      <p className="mt-2 text-xs">
        {t("about.text3")}{" "}
        <Link href="https://breathly.app/">Breathly Site.</Link>
      </p>
      <div className="mt-5 text-center">
        <small className="text-xs text-gray-400">v{packageJSON.version}</small>
      </div>
    </div>
  );
}
