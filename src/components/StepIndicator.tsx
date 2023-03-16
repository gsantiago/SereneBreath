import { TextAnimated } from "@/components/TextAnimated";
import { useTranslation } from "@/hooks/useTranslation";

const STEPS = ["inhale", "hold", "exhale", "hold"] as const;

export function StepIndicator(props: { step: number }) {
  const { t } = useTranslation();

  return (
    <TextAnimated className="text-center text-2xl dark:text-white">
      {t(`steps.${STEPS[props.step]}`)}
    </TextAnimated>
  );
}
