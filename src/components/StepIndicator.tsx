import React from "react";
import { TextAnimated } from "./TextAnimated";

import { useTranslation } from "../hooks/useTranslation";

const STEPS = ["inhale", "hold", "exhale", "hold"] as const;

export function StepIndicator(props: { step: number }) {
  const { t } = useTranslation();

  return (
    <TextAnimated className="text-center dark:text-white">
      {t(`steps.${STEPS[props.step]}`)}
    </TextAnimated>
  );
}
