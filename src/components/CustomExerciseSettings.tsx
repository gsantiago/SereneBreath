import { STEPS } from "@/config/constants";
import { useStorage } from "@/hooks/useStorage";
import { useTranslation } from "@/hooks/useTranslation";
import { Stepper } from "./Stepper";

export function CustomExerciseSettings() {
  const { t } = useTranslation();
  const [customPattern, setCustomPattern] = useStorage("customPattern");

  return (
    <div>
      {STEPS.map((step, index) => (
        <div
          key={index}
          className="mb-8 flex flex-col items-center justify-center"
        >
          <p className="mb-2 text-lg font-bold">{t(`steps.${step}`)}</p>
          <div className="w-36">
            <Stepper
              onChange={(newValue) => {
                const newPattern: [number, number, number, number] = [
                  ...customPattern,
                ];
                newPattern[index] = newValue;
                setCustomPattern(newPattern);
              }}
              value={customPattern[index]}
              min={step === "hold" ? 0 : 1}
              unit={t("card.sec")}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
