import { animated, useSpring } from "@react-spring/web";
import { AnimationProps } from "@/config/types";

const SIZE = 260;
const RING_RADIUS = 130;
const RADIUS = 100;
const CENTER = {
  x: SIZE / 2,
  y: SIZE / 2,
};

export function RingAnimation({ currentStep, pattern, state }: AnimationProps) {
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
      progress: currentStep === 1 || currentStep === 3 ? 1 : 0,
    },
    loop: true,
    config: {
      duration: 1000,
    },
  });

  return (
    <div>
      <svg width={SIZE} height={SIZE}>
        <animated.circle
          r={ringSpring.progress.to([0, 1], [RADIUS, RING_RADIUS])}
          cx={CENTER.x}
          cy={CENTER.y}
          fill="none"
          className="stroke-sky-300"
          style={{
            opacity: ringSpring.progress.to([0, 1], [1, 0]),
          }}
        />
        <animated.circle
          r={ringSpring.progress.to([0, 1], [RADIUS, RING_RADIUS - 15])}
          cx={CENTER.x}
          cy={CENTER.y}
          fill="none"
          className="stroke-sky-300"
          style={{
            opacity: ringSpring.progress.to([0, 1], [1, 0]),
          }}
        />
        <animated.circle
          r={RADIUS}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-500"
        />
        <animated.circle
          r={spring.progress.to([0, 1], [RADIUS * 0.8, RADIUS - 2])}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-400"
        />
        <animated.circle
          r={spring.progress.to([0, 1], [RADIUS * 0.6, RADIUS - 4])}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-300"
        />
        <animated.circle
          r={spring.progress.to([0, 1], [RADIUS * 0.4, RADIUS - 6])}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-200"
        />
        <animated.circle
          r={spring.progress.to([0, 1], [RADIUS * 0.2, RADIUS - 8])}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-100"
        />
        <animated.circle
          r={spring.progress.to([0, 1], [RADIUS * 0.1, RADIUS - 10])}
          cx={CENTER.x}
          cy={CENTER.y}
          className="fill-sky-50"
        />
      </svg>
    </div>
  );
}
