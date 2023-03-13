import { About } from "@/components/About";
import { ButtonIcon } from "@/components/ButtonIcon";
import { LanguageSelect } from "@/components/LanguageSelect";
import { useTranslation } from "@/hooks/useTranslation";

export interface FooterProps {
  isVisible: boolean;
  showAbout: boolean;
  onToggleAbout: () => void;
}

export function Footer({ isVisible, showAbout, onToggleAbout }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer
      className={`relative flex w-full justify-between text-xs transition-opacity dark:text-white ${
        isVisible ? "opacity-1" : "opacity-0"
      }`}
    >
      <div className="w-40">
        <LanguageSelect />
      </div>
      <ButtonIcon
        title={t("footer.about")}
        isActive={showAbout}
        position="bottom"
        onClick={onToggleAbout}
      >
        {infoIcon}
      </ButtonIcon>
      <About isVisible={showAbout} />
    </footer>
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
