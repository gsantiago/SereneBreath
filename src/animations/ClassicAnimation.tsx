import { animated, useSpring } from "@react-spring/web";
import { AnimationProps } from "@/config/types";

export function ClassicAnimation({
  currentStep,
  pattern,
  state,
  size = 100,
  containerSize = 200,
}: AnimationProps & { size?: number; containerSize?: number }) {
  const SIZE = size;
  const OFFSET = 15;
  const CIRCLES = [
    {
      x: 0,
      y: SIZE / 2,
    },
    {
      x: 0,
      y: -(SIZE / 2),
    },
    {
      x: SIZE / 2,
      y: 0,
    },
    {
      x: -(SIZE / 2),
      y: 0,
    },
    {
      x: -SIZE / 2 + OFFSET,
      y: -(SIZE / 2) + OFFSET,
    },
    {
      x: SIZE / 2 - OFFSET,
      y: -(SIZE / 2) + OFFSET,
    },
    {
      x: SIZE / 2 - OFFSET,
      y: SIZE / 2 - OFFSET,
    },
    {
      x: -SIZE / 2 + OFFSET,
      y: SIZE / 2 - OFFSET,
    },
  ];

  const props = useSpring({
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

  return (
    <div style={{ height: containerSize }}>
      <animated.div
        className="relative flex items-center justify-center"
        style={{
          width: containerSize,
          height: containerSize,
          scale: props.progress.to([0, 1], [0.5, 1]),
          rotate: props.progress.to([0, 1], ["0deg", "360deg"]),
        }}
      >
        {CIRCLES.map((c, index) => (
          <animated.div
            key={index}
            className="absolute rounded-full bg-sky-500 opacity-30"
            style={{
              width: SIZE,
              height: SIZE,
              x: props.progress.to([0, 1], [0, c.x]),
              y: props.progress.to([0, 1], [0, c.y]),
            }}
          />
        ))}
      </animated.div>
    </div>
  );
}
