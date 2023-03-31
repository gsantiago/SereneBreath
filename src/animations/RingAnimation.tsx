import {
  animated,
  SpringValue,
  useSpring,
  useSpringValue,
} from "@react-spring/web";

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

  const { ring } = useSpring({
    from: {
      ring: 0,
    },
    to: {
      ring: isHolding ? 1 : 0,
    },
    loop: true,
    config: {
      duration: 1000,
    },
  });

  const defaultValue = useSpringValue(0);

  return (
    <RingAnimationBase
      ring={isHolding ? ring : defaultValue}
      progress={progress}
    />
  );
}

export interface RingAnimationBaseProps {
  ring: SpringValue<number>;
  progress: SpringValue<number>;
}

export function RingAnimationBase({ ring, progress }: RingAnimationBaseProps) {
  return (
    <AnimationContainer>
      <svg width={SIZE} height={SIZE}>
        <animated.circle
          r={ring.to([0, 1], [RADIUS, RING_RADIUS])}
          cx={CENTER.x}
          cy={CENTER.y}
          fill="none"
          className="stroke-sky-300"
          style={{
            opacity: ring.to([0, 1], [1, 0]),
          }}
        />
        <animated.circle
          r={ring.to([0, 1], [RADIUS, RING_RADIUS - 15])}
          cx={CENTER.x}
          cy={CENTER.y}
          fill="none"
          className="stroke-sky-300"
          style={{
            opacity: ring.to([0, 1], [1, 0]),
          }}
        />
        <animated.circle
          r={RADIUS}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-500"
        />
        <animated.circle
          r={progress.to([0, 1], [RADIUS * 0.8, RADIUS - 2])}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-400"
        />
        <animated.circle
          r={progress.to([0, 1], [RADIUS * 0.6, RADIUS - 4])}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-300"
        />
        <animated.circle
          r={progress.to([0, 1], [RADIUS * 0.4, RADIUS - 6])}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-200"
        />
        <animated.circle
          r={progress.to([0, 1], [RADIUS * 0.2, RADIUS - 8])}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-100"
        />
        <animated.circle
          r={progress.to([0, 1], [RADIUS * 0.1, RADIUS - 10])}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-50"
        />
      </svg>
    </AnimationContainer>
  );
}

export function RingAnimationCard({ isActive }: AnimationCardProps) {
  const { progress } = useSpring({
    progress: isActive ? 0 : 0.5,
  });

  const { ring } = useSpring({
    from: {
      ring: 0,
    },
    to: {
      ring: isActive ? 1 : 0,
    },
    loop: true,
    config: {
      duration: 1000,
    },
  });

  const defaultValue = useSpringValue(0);

  return (
    <RingAnimationBase
      progress={progress}
      ring={isActive ? ring : defaultValue}
    />
  );
}
