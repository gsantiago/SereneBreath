import {
  animated,
  SpringValue,
  useSpring,
  useSpringValue,
} from "@react-spring/web";

import { AnimationContainer } from "@/components/AnimationContainer";
import { AnimationCardProps, AnimationProps } from "@/config/types";

const CIRCLE_SIZE = 100;
const OFFSET = 15;

export function ClassicAnimation({
  currentStep,
  pattern,
  state,
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

  return <ClassicAnimationBase progress={progress} rotation={progress} scale />;
}

interface ClassicAnimationBaseProps {
  progress: SpringValue<number>;
  rotation: SpringValue<number>;
  scale: boolean;
}

function ClassicAnimationBase({
  progress,
  rotation,
  scale,
}: ClassicAnimationBaseProps) {
  const CIRCLES = [
    {
      x: 0,
      y: CIRCLE_SIZE / 2,
    },
    {
      x: 0,
      y: -(CIRCLE_SIZE / 2),
    },
    {
      x: CIRCLE_SIZE / 2,
      y: 0,
    },
    {
      x: -(CIRCLE_SIZE / 2),
      y: 0,
    },
    {
      x: -CIRCLE_SIZE / 2 + OFFSET,
      y: -(CIRCLE_SIZE / 2) + OFFSET,
    },
    {
      x: CIRCLE_SIZE / 2 - OFFSET,
      y: -(CIRCLE_SIZE / 2) + OFFSET,
    },
    {
      x: CIRCLE_SIZE / 2 - OFFSET,
      y: CIRCLE_SIZE / 2 - OFFSET,
    },
    {
      x: -CIRCLE_SIZE / 2 + OFFSET,
      y: CIRCLE_SIZE / 2 - OFFSET,
    },
  ];

  return (
    <AnimationContainer>
      <animated.div
        className="relative flex items-center justify-center"
        style={{
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          scale: scale ? progress.to([0, 1], [0.5, 1]) : 1,
          rotate: rotation.to([0, 1], ["0deg", "360deg"]),
        }}
      >
        {CIRCLES.map((c, index) => (
          <animated.div
            key={index}
            className="absolute rounded-full bg-sky-500 opacity-30"
            style={{
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              x: progress.to([0, 1], [0, c.x]),
              y: progress.to([0, 1], [0, c.y]),
            }}
          />
        ))}
      </animated.div>
    </AnimationContainer>
  );
}

export function ClassicAnimationCard({ isActive }: AnimationCardProps) {
  const progress = useSpringValue(0.5);
  const zero = useSpringValue(0);

  const { rotation } = useSpring({
    from: {
      rotation: 0,
    },
    to: {
      rotation: isActive ? 1 : 0,
    },
    config: {
      duration: 10000,
    },
    loop: true,
  });

  return (
    <ClassicAnimationBase
      progress={progress}
      rotation={isActive ? rotation : zero}
      scale={false}
    />
  );
}
