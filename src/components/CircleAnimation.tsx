import React, { useEffect, useState } from "react";
import { AnimationProps } from "../config/types";

const WIDTH = 200;
const HEIGHT = 200;
const RADIUS = 100;
const CENTER = {
  x: WIDTH / 2,
  y: HEIGHT / 2,
};

/**
 * Default animation
 */
export function CircleAnimation({ currentStep, pattern }: AnimationProps) {
  const minRadius = RADIUS - 80;
  const maxRadius = RADIUS - 10;

  const [radius, setRadius] = useState(minRadius);

  const styles = [maxRadius, maxRadius, minRadius, minRadius];

  useEffect(() => {
    setRadius(styles[currentStep]);
  }, [currentStep]);

  return (
    <svg width={WIDTH} height={HEIGHT}>
      <circle cx={CENTER.x} cy={CENTER.y} r={RADIUS} className="fill-sky-400" />
      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={RADIUS / 2}
        style={{
          transition: `r ${pattern[currentStep]}s linear`,
          // @ts-ignore
          r: radius,
        }}
        className="fill-sky-100"
      />
    </svg>
  );
}
