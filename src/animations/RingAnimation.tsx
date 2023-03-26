import { animated, SpringValue, useSpring } from "@react-spring/web";

import { AnimationContainer, SIZE } from "@/components/AnimationContainer";
import { AnimationProps, AnimationCardProps } from "@/config/types";

const RING_RADIUS = SIZE / 2;
const RADIUS = RING_RADIUS * 0.7;
const CENTER = {
  x: SIZE / 2,
  y: SIZE / 2,
};

export function RingAnimation({
  currentStep,
  pattern,
  state,
  isHolding,
}: AnimationProps) {
  const spring = useSpring({
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

  const ringSpring = useSpring({
    from: {
      progress: 0,
    },
    to: {
      progress: isHolding ? 1 : 0,
    },
    loop: true,
    config: {
      duration: 1000,
    },
  });

  return (
    <RingAnimationBase
      ringProgress={ringSpring.progress}
      circleProgress={spring.progress}
    />
  );
}

export interface RingAnimationBaseProps {
  ringProgress: SpringValue<number>;
  circleProgress: SpringValue<number>;
}

export function RingAnimationBase({
  ringProgress,
  circleProgress,
}: RingAnimationBaseProps) {
  return (
    <AnimationContainer>
      <svg width={SIZE} height={SIZE}>
        <animated.circle
          r={ringProgress.to([0, 1], [RADIUS, RING_RADIUS])}
          cx={CENTER.x}
          cy={CENTER.y}
          fill="none"
          className="stroke-sky-300"
          style={{
            opacity: ringProgress.to([0, 1], [1, 0]),
          }}
        />
        <animated.circle
          r={ringProgress.to([0, 1], [RADIUS, RING_RADIUS - 15])}
          cx={CENTER.x}
          cy={CENTER.y}
          fill="none"
          className="stroke-sky-300"
          style={{
            opacity: ringProgress.to([0, 1], [1, 0]),
          }}
        />
        <animated.circle
          r={RADIUS}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-500"
        />
        <animated.circle
          r={circleProgress.to([0, 1], [RADIUS * 0.8, RADIUS - 2])}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-400"
        />
        <animated.circle
          r={circleProgress.to([0, 1], [RADIUS * 0.6, RADIUS - 4])}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-300"
        />
        <animated.circle
          r={circleProgress.to([0, 1], [RADIUS * 0.4, RADIUS - 6])}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-200"
        />
        <animated.circle
          r={circleProgress.to([0, 1], [RADIUS * 0.2, RADIUS - 8])}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-100"
        />
        <animated.circle
          r={circleProgress.to([0, 1], [RADIUS * 0.1, RADIUS - 10])}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-50"
        />
      </svg>
    </AnimationContainer>
  );
}

export function RingAnimationCard({ isActive }: AnimationCardProps) {
  const circleSpring = useSpring({
    progress: isActive ? 0 : 0.5,
  });

  const ringSpring = useSpring({
    from: {
      progress: 0,
    },
    to: {
      progress: isActive ? 1 : 0,
    },
    loop: true,
    config: {
      duration: 1000,
    },
  });

  return (
    <RingAnimationBase
      circleProgress={circleSpring.progress}
      ringProgress={ringSpring.progress}
    />
  );
}
