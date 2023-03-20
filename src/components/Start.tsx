import { useTranslation } from "@/hooks/useTranslation";

export type StartProps = {
  onClick: () => void;
};

export function Start(props: StartProps) {
  const { t } = useTranslation();

  return (
    <button
      autoFocus
      type="button"
      className="mb-20 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 p-0 text-4xl font-semibold text-white  shadow-xl hover:bg-blue-700 focus:outline-sky-500 md:mb-0"
      title={t("start")}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-12 w-12"
      >
        <path
          fillRule="evenodd"
          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
