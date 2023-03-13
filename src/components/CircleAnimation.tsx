import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

import { AnimationProps } from "@/config/types";

const WIDTH = 200;
const HEIGHT = 200;
const RADIUS = 100;
const CENTER = {
  x: WIDTH / 2,
  y: HEIGHT / 2,
};

/**
 * Default animation
 */
export function CircleAnimation({ currentStep, pattern }: AnimationProps) {
  const minRadius = RADIUS - 80;
  const maxRadius = RADIUS - 10;

  const [step, setStep] = useState("");

  const props = useSpring({
    from: { r: minRadius },
    to: {
      r: step === "inhale" ? maxRadius : minRadius,
    },
    config: {
      duration: pattern[currentStep] * 1000,
    },
  });

  useEffect(() => {
    if (currentStep === 0 || currentStep === 1) {
      setStep("inhale");
    } else {
      setStep("exhale");
    }
  }, [currentStep]);

  return (
    <svg width={WIDTH} height={HEIGHT}>
      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={RADIUS}
        className="fill-blue-600"
      />
      <animated.circle
        cx={CENTER.x}
        cy={CENTER.y}
        className="fill-sky-100 dark:fill-slate-900"
        r={props.r}
      />
    </svg>
  );
}
