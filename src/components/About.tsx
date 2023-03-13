import { Popover } from "@/components/Popover";
import { Link } from "@/components/Link";
import { useTranslation } from "@/hooks/useTranslation";

export interface AboutProps {
  isVisible: boolean;
}

export function About({ isVisible }: AboutProps) {
  const { t } = useTranslation();

  return (
    <Popover isVisible={isVisible} position="bottom">
      <section className="px-3 py-1">
        <h1 className="text-lg font-bold">SereneBreath</h1>
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
          <small className="text-xs text-gray-400">v0.0.1</small>
        </div>
      </section>
    </Popover>
  );
}
