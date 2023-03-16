import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

import { createExercise } from "@/modules/exercise";

import { StepIndicator } from "@/components/StepIndicator";
import { CircleAnimation } from "@/components/CircleAnimation";
import { Close } from "@/components/Close";

import { Pattern, Settings } from "@/config/types";
import { useTranslation } from "@/hooks/useTranslation";

export interface PracticeProps {
  guide: Settings["guide"];
  vibrateOnStepChange: Settings["vibration"];
  pattern: Pattern;
  seconds: number;
  onClose: () => void;
}

export function Practice({
  guide,
  vibrateOnStepChange,
  pattern,
  seconds,
  onClose,
}: PracticeProps) {
  const { t } = useTranslation();

  const [data, setData] = useState({ seconds, step: 0 });

  const [containerStyle, containerSpring] = useSpring(() => ({
    from: {
      opacity: 0,
      scale: 1,
    },
    to: {
      opacity: 1,
      scale: 1,
    },
  }));

  const [contentStyle, contentSpring] = useSpring(() => ({
    from: {
      opacity: 1,
    },
  }));

  const [completeStyle, completeSpring] = useSpring(() => ({
    from: {
      opacity: 0,
      scale: 0,
    },
  }));

  useEffect(() => {
    const exercise = createExercise({
      seconds,
      pattern,
      vibration: vibrateOnStepChange,
      guide,
    });

    exercise.on("update", setData);

    exercise.on("end", () => {
      contentSpring.start({
        to: {
          opacity: 0,
        },
        onResolve: () =>
          completeSpring.start({
            to: {
              opacity: 1,
              scale: 1,
            },
          }),
      });
    });

    exercise.start();

    return () => exercise.destroy();
  }, []);

  return (
    <animated.div
      className="flex h-full w-full flex-col items-center justify-center"
      style={containerStyle}
    >
      <div className="relative">
        <animated.div
          className="absolute flex h-full w-full items-center justify-center text-3xl font-bold dark:text-white"
          style={completeStyle}
        >
          <p>{t("complete")}</p>
        </animated.div>
        <animated.div style={contentStyle}>
          <StepIndicator step={data.step} />
          <div className="mt-20 mb-20">
            <CircleAnimation pattern={pattern} currentStep={data.step} />
          </div>
        </animated.div>
      </div>
      <Close
        seconds={data.seconds}
        duration={seconds * 1000}
        onClick={() =>
          containerSpring.start({
            from: {
              opacity: 1,
              scale: 1,
            },
            to: {
              opacity: 0,
              scale: 1,
            },
            onResolve: () => onClose(),
          })
        }
      />
    </animated.div>
  );
}
