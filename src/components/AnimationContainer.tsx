import { animated, SpringValue, useSpringValue } from "@react-spring/web";

export const SIZE = 200;

export interface AnimationContainerProps {
  scale?: SpringValue<number>;
  children: React.ReactNode;
}

export function AnimationContainer({
  scale,
  children,
}: AnimationContainerProps) {
  const defaultScale = useSpringValue(1);

  return (
    <animated.div
      className="flex items-center justify-center "
      style={{ width: SIZE, height: SIZE, scale: scale ?? defaultScale }}
    >
      {children}
    </animated.div>
  );
}
