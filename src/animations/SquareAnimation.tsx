import {
  animated,
  SpringValue,
  useSpring,
  useSpringValue,
} from "@react-spring/web";
import { AnimationCardProps, AnimationProps } from "@/config/types";
import { AnimationContainer, SIZE } from "@/components/AnimationContainer";

export function SquareAnimation({
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

  const defaultValue = useSpringValue(1);

  return (
    <SquareAnimationBase
      progress={progress}
      ring={isHolding ? ring : defaultValue}
    />
  );
}

interface SquareAnimationBaseProps {
  progress: SpringValue<number>;
  ring: SpringValue<number>;
}

function SquareAnimationBase({ progress, ring }: SquareAnimationBaseProps) {
  return (
    <AnimationContainer>
      <animated.div
        className="absolute h-full w-full rounded-md bg-sky-300"
        style={{
          scale: ring.to([0, 1], [1, 1.2]),
          opacity: ring.to([0, 1], [1, 0]),
          width: SIZE * 0.75,
          height: SIZE * 0.75,
        }}
      />
      <animated.div
        className="relative top-0 left-0 h-full w-full overflow-hidden rounded-md border-4 border-sky-200 bg-white"
        style={{
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

  const defaultValue = useSpringValue(1);

  return (
    <SquareAnimationBase
      progress={progress}
      ring={isActive ? ring : defaultValue}
    />
  );
}
