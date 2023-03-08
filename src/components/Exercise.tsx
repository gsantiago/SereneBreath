import React, { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

import { exerciseManager } from "../modules/ExerciseManager";
import { AudioManager } from "../modules/AudioManager";

import { Time } from "./Time";
import { ButtonRound } from "./ButtonRound";
import { StepIndicator } from "./StepIndicator";
import { CircleAnimation } from "./CircleAnimation";

import { Pattern, Settings } from "../config/types";

export interface ExerciseProps {
  guide: Settings["guide"];
  vibrateOnStepChange: Settings["vibration"];
  pattern: Pattern;
  seconds: number;
  onClose: () => void;
}

export function Exercise({
  guide,
  vibrateOnStepChange,
  pattern,
  seconds,
  onClose,
}: ExerciseProps) {
  const [data, setData] = useState({ seconds, step: 0 });

  const audioRef = useRef(new AudioManager(guide));

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
    const audio = audioRef.current;
    const exercise = exerciseManager(seconds, pattern);

    exercise.on("update", setData);

    exercise.on("step", (step) => {
      audioRef.current.playStep(step);

      if (vibrateOnStepChange) {
        navigator.vibrate(200);
      }
    });

    exercise.on("end", () => {
      if (vibrateOnStepChange) {
        navigator.vibrate(2000);
      }

      audio.playBell();

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
          className="absolute flex h-full w-full items-center justify-center text-3xl font-bold"
          style={completeStyle}
        >
          <p>Complete</p>
        </animated.div>
        <animated.div style={contentStyle}>
          <Time seconds={data.seconds} />
          <div className="mt-10 mb-10">
            <CircleAnimation pattern={pattern} currentStep={data.step} />
          </div>
          <StepIndicator step={data.step} />
        </animated.div>
      </div>
      <div className="mt-10 flex justify-center">
        <ButtonRound
          title="Close"
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
        >
          {closeIcon}
        </ButtonRound>
      </div>
    </animated.div>
  );
}

const closeIcon = (
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
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
