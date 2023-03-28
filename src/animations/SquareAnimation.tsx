import { animated, SpringValue, useSpring } from "@react-spring/web";
import { AnimationCardProps, AnimationProps } from "@/config/types";
import { AnimationContainer, SIZE } from "@/components/AnimationContainer";

export function SquareAnimation({
  currentStep,
  pattern,
  state,
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

  return <SquareAnimationBase progress={spring.progress} />;
}

interface SquareAnimationBaseProps {
  progress: SpringValue<number>;
}

function SquareAnimationBase({ progress }: SquareAnimationBaseProps) {
  return (
    <AnimationContainer>
      <animated.div
        className="relative top-0 left-0 h-full w-full overflow-hidden rounded-md border-4 border-sky-200"
        style={{
          scale: progress.to([0, 1], [0.8, 1]),
          width: SIZE * 0.75,
          height: SIZE * 0.75,
        }}
      >
        <animated.div
          className="absolute left-0 bottom-0 h-full w-full bg-gradient-to-b from-sky-400 to-sky-500"
          style={{ y: progress.to([1, 0], ["0%", "100%"]) }}
        />
      </animated.div>
    </AnimationContainer>
  );
}

export function SquareAnimationCard({ isActive }: AnimationCardProps) {
  const { progress } = useSpring({
    progress: isActive ? 1 : 0.5,
  });

  return <SquareAnimationBase progress={progress} />;
}
