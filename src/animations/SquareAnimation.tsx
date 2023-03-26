import { animated, useSpring } from "@react-spring/web";
import { AnimationProps } from "@/config/types";
import { ClassicAnimation } from "./ClassicAnimation";

const SIZE = 200;
const BALL = 20;

export function SquareAnimation({
  currentStep,
  pattern,
  state,
  isHolding,
}: AnimationProps) {
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
        style={{
          x,
          y,
          width: BALL,
          height: BALL,
        }}
      >
        {/* <ClassicAnimation
          currentStep={currentStep}
          pattern={pattern}
          state={state}
          size={BALL}
          containerSize={BALL}
          isHolding={isHolding}
        /> */}
      </animated.div>
    </div>
  );
}
