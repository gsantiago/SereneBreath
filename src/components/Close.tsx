import { useSpring, animated } from "@react-spring/web";
import { Time } from "@/components/Time";

export interface CloseProps {
  onClick: () => void;
  duration: number;
  seconds: number;
}

const WIDTH = 150;
const HEIGHT = 90;

const strokeWidth = 15;

const M = {
  x: strokeWidth,
  y: 80,
};

const A = {
  rx: 30,
  ry: 30,
  axisRotation: 0,
  largeArcFlag: 0,
  sweepFlag: 1,
  x: 150 - strokeWidth,
  y: M.y,
};

const radius = (A.x - M.x) / 2;

const dashArray = 2 * Math.PI * (radius / 2);

const pathProps = {
  d: `M${M.x},${M.y} A${A.rx},${A.ry} ${A.axisRotation} ${A.largeArcFlag},${A.sweepFlag} ${A.x},${A.y}`,
  fill: "none",
  strokeWidth,
  strokeLinecap: "round",
} as const;

export function Close({ onClick, duration, seconds }: CloseProps) {
  const props = useSpring({
    from: {
      progress: dashArray,
    },
    to: {
      progress: 0,
    },
    config: {
      duration,
    },
  });

  return (
    <div className="relative flex flex-col items-center" style={{ width: 190 }}>
      <div>
        <svg
          width={WIDTH}
          height={HEIGHT}
          style={{ backgroundColor: "transparent" }}
        >
          <path className="stroke-sky-200 " {...pathProps} />
          <animated.path
            className="stroke-blue-600 dark:stroke-blue-600"
            {...pathProps}
            strokeDasharray={dashArray}
            strokeDashoffset={props.progress}
          />
        </svg>
        <div className="flex justify-center">
          <button
            className="absolute top-12 flex h-10 w-10 items-center justify-center rounded-full border border-gray-600  hover:opacity-50 dark:border-white dark:text-white"
            title="Close"
            onClick={onClick}
          >
            {closeIcon}
          </button>
        </div>
      </div>
      <div className="mt-2 flex w-full justify-between">
        <Time seconds={seconds} />
        <Time seconds={duration / 1000 - seconds} />
      </div>
    </div>
  );
}

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
