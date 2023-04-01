import { useState } from "react";
import { Link } from "@/components/Link";
import { useTranslation } from "@/hooks/useTranslation";

import packageJSON from "../../package.json";

export function About() {
  const { t } = useTranslation();
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className="mt-3 px-5 text-right text-gray-600">
        <button
          type="button"
          title={t("about.title")}
          onClick={() => setShowInfo((show) => !show)}
        >
          {infoIcon}
        </button>
      </div>

      {showInfo && (
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
            <small className="text-xs text-gray-400">
              v{packageJSON.version}
            </small>
          </div>
        </div>
      )}
    </>
  );
}

const infoIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
    />
  </svg>
);
