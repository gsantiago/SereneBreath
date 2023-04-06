import { animated, SpringValue, useSpring } from "@react-spring/web";

import { AnimationContainer } from "@/components/AnimationContainer";
import { AnimationProps, AnimationCardProps } from "@/config/types";

export function LotusAnimation({
  state,
  pattern,
  currentStep,
}: AnimationProps) {
  const { progress } = useSpring({
    from: {
      progress: 0,
    },
    to: {
      progress: state === "inhaling" ? 1 : 0,
    },
    config: {
      duration: pattern[currentStep] * 1000,
    },
  });

  return <LotusAnimationBase progress={progress} />;
}

interface LotusAnimationBaseProps {
  progress: SpringValue<number>;
}

function LotusAnimationBase({ progress }: LotusAnimationBaseProps) {
  return (
    <AnimationContainer>
      <svg
        width="200"
        height="150"
        viewBox="0 0 183 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <animated.stop offset="0%" stopColor="#7dd3fc" />
            <animated.stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <animated.path
          className="stroke-sky-400 dark:stroke-sky-100"
          d="M88.2799 131.62C66.1362 105.842 35.7926 43.5984 91.5683 0.851567C135.465 37.2362 136.987 110.988 88.2799 131.62Z"
          id="shape_5"
          fill="url(#grad1)"
          style={{
            transformOrigin: "center",
            scale: progress.to([0, 1], [1, 0.5]),
          }}
        />
        <animated.path
          className="stroke-sky-400 dark:stroke-sky-100"
          d="M91.5997 132.769C99.3222 99.6746 97.4628 30.4537 28.245 18.3248C6.13423 70.8784 38.8707 136.984 91.5997 132.769Z"
          id="shape_4"
          fill="url(#grad1)"
          style={{
            transformOrigin: "bottom",
            rotate: progress.to([0, 1], ["0deg", "20deg"]),
            scale: progress.to([0, 0.5, 1], [1, 1, 0.5]),
            y: progress.to([0, 0.5, 1], [0, 0, -10]),
          }}
        />
        <animated.path
          className="stroke-sky-400 dark:stroke-sky-100"
          d="M90.9292 132.769C83.2066 99.6746 85.066 30.4537 154.284 18.3248C176.395 70.8784 143.658 136.984 90.9292 132.769Z"
          id="shape_3"
          fill="url(#grad1)"
          style={{
            transformOrigin: "bottom",
            rotate: progress.to([0, 1], ["0deg", "-20deg"]),
            scale: progress.to([0, 0.5, 1], [1, 1, 0.5]),
            y: progress.to([0, 0.5, 1], [0, 0, -10]),
          }}
        />
        <animated.path
          d="M91.6374 136.549C90.5298 102.584 70.8151 36.2037 0.816978 42.4061C-6.93598 98.892 41.7969 154.27 91.6374 136.549Z"
          id="shape_2"
          fill="url(#grad1)"
          className="stroke-sky-400 dark:stroke-sky-100"
          style={{
            transformOrigin: "bottom",
            rotate: progress.to([0, 1], ["0deg", "40deg"]),
            x: progress.to([0, 1], [0, -5]),
            y: -1,
          }}
        />
        <animated.path
          d="M92 136.549C93.1076 102.584 112.822 36.2037 182.82 42.4061C190.573 98.892 141.84 154.27 92 136.549Z"
          id="shape_1"
          fill="url(#grad1)"
          className="stroke-sky-400 dark:stroke-sky-100"
          style={{
            transformOrigin: "bottom",
            rotate: progress.to([0, 1], ["0deg", "-40deg"]),
            y: -1,
          }}
        />
      </svg>
    </AnimationContainer>
  );
}

export function LotusAnimationCard({ isActive }: AnimationCardProps) {
  const { progress } = useSpring({
    progress: isActive ? 0 : 1,
  });

  return <LotusAnimationBase progress={progress} />;
}
