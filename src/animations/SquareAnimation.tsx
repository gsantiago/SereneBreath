import { animated, useSpring } from "@react-spring/web";
import { AnimationProps } from "@/config/types";

const SIZE = 200;
const BALL = 16;

export function SquareAnimation({
  currentStep,
  pattern,
  state,
}: AnimationProps) {
  console.log({ currentStep });

  const propsX = useSpring({
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

  const propsY = useSpring({
    from: {
      progress: 0,
    },
    to: {
      progress:
        state === "idle" ? 0 : currentStep === 1 || currentStep === 2 ? 1 : 0,
    },
    config: {
      duration: pattern[currentStep] * 1000,
    },
  });

  const offset = BALL / 2 + 1;

  const x = propsX.progress.to([0, 1], [-offset, SIZE - offset]);
  const y = propsY.progress.to([0, 1], [-offset, SIZE - offset]);

  return (
    <div
      className="relative border border-sky-400"
      style={{ width: SIZE, height: SIZE }}
    >
      <animated.div
        className="rounded-full bg-sky-600 shadow-sm shadow-white"
        style={{
          width: BALL,
          height: BALL,
          x,
          y,
          scale: propsX.progress.to([0, 1], [1, 3]),
        }}
      />
    </div>
  );
}
