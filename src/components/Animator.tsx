import React, { useEffect, useState } from "react";
import { AnimationProps } from "@/config/types";

export interface AnimatorProps extends Omit<AnimationProps, "state"> {
  animation: React.FC<AnimationProps>;
}

export function Animator({
  animation: Animation,
  currentStep,
  pattern,
}: AnimatorProps) {
  const [state, setState] = useState<AnimationProps["state"]>("idle");

  useEffect(() => {
    if (currentStep === 0 || currentStep === 1) {
      setState("inhaling");
    } else {
      setState("exhaling");
    }
  }, [currentStep]);

  return (
    <Animation currentStep={currentStep} pattern={pattern} state={state} />
  );
}
