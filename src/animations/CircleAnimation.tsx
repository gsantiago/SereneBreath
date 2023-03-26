import { animated, useSpring } from "@react-spring/web";
import { AnimationProps } from "@/config/types";
import { WIDTH } from "@/components/Card";

const SIZE = 200;
const WAVE_HEIGHT = 29;

export function CircleAnimation({
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

  const waves = useSpring({
    from: {
      x: 0,
    },
    to: {
      x: 1,
    },
    config: {
      duration: 3000,
    },
    loop: true,
  });

  return (
    <div className="relative flex items-center justify-center">
      <animated.div
        className="relative overflow-hidden rounded-full border-4 border-sky-100 shadow outline outline-4 outline-white dark:border-slate-900"
        style={{
          width: SIZE,
          height: SIZE,
          scale: spring.progress.to([0, 1], [0.8, 1]),
        }}
      >
        <animated.div
          className="absolute left-0 bottom-0 bg-gradient-to-b from-sky-400 to-sky-500"
          style={{
            width: WIDTH,
            height: "100%",
            y: spring.progress.to([0, 1], [SIZE + WAVE_HEIGHT, 0]),
          }}
        >
          <animated.div
            className="absolute bottom-full flex"
            style={{
              y: 5,
              x: waves.x.to([0, 1], ["0", "-50%"]),
            }}
          >
            <svg
              width="400"
              height={WAVE_HEIGHT}
              viewBox="0 0 463 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-46.6251 33.1735C-139.264 27.8483 -54.345 4.77239 -46.6251 1.22224C-38.9052 -2.3279 -15.7455 11.8727 -0.30571 11.8727C15.1341 11.8727 30.5739 1.22224 46.0137 1.22224C61.4535 1.22224 76.8933 11.8727 92.3331 11.8727C107.773 11.8727 123.213 1.22224 138.652 1.22224C154.092 1.22224 169.532 11.8727 184.972 11.8727C200.412 11.8727 215.851 1.22224 231.291 1.22224C246.731 1.22224 262.171 11.8727 277.611 11.8727C293.05 11.8727 308.49 1.22224 323.93 1.22224C339.37 1.22224 354.81 11.8727 370.249 11.8727C385.689 11.8727 401.129 1.22224 416.569 1.22224C432.009 1.22224 447.448 11.8727 462.888 11.8727C478.328 11.8727 501.488 -2.3279 509.208 1.22224C516.928 4.77239 601.846 27.8483 509.208 33.1735"
                className="fill-sky-400"
              />
            </svg>
            <svg
              width="400"
              height={WAVE_HEIGHT}
              viewBox="0 0 463 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-46.6251 33.1735C-139.264 27.8483 -54.345 4.77239 -46.6251 1.22224C-38.9052 -2.3279 -15.7455 11.8727 -0.30571 11.8727C15.1341 11.8727 30.5739 1.22224 46.0137 1.22224C61.4535 1.22224 76.8933 11.8727 92.3331 11.8727C107.773 11.8727 123.213 1.22224 138.652 1.22224C154.092 1.22224 169.532 11.8727 184.972 11.8727C200.412 11.8727 215.851 1.22224 231.291 1.22224C246.731 1.22224 262.171 11.8727 277.611 11.8727C293.05 11.8727 308.49 1.22224 323.93 1.22224C339.37 1.22224 354.81 11.8727 370.249 11.8727C385.689 11.8727 401.129 1.22224 416.569 1.22224C432.009 1.22224 447.448 11.8727 462.888 11.8727C478.328 11.8727 501.488 -2.3279 509.208 1.22224C516.928 4.77239 601.846 27.8483 509.208 33.1735"
                className="fill-sky-400"
              />
            </svg>
          </animated.div>
          <animated.svg
            width="463"
            height={WAVE_HEIGHT}
            viewBox="0 0 463 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-full"
            style={{
              y: 5,
              x: waves.x.to([1, 0], [0 - 30, -271 - 30]),
              opacity: 0.6,
            }}
          >
            <path
              d="M-46.6251 33.1735C-139.264 27.8483 -54.345 4.77239 -46.6251 1.22224C-38.9052 -2.3279 -15.7455 11.8727 -0.30571 11.8727C15.1341 11.8727 30.5739 1.22224 46.0137 1.22224C61.4535 1.22224 76.8933 11.8727 92.3331 11.8727C107.773 11.8727 123.213 1.22224 138.652 1.22224C154.092 1.22224 169.532 11.8727 184.972 11.8727C200.412 11.8727 215.851 1.22224 231.291 1.22224C246.731 1.22224 262.171 11.8727 277.611 11.8727C293.05 11.8727 308.49 1.22224 323.93 1.22224C339.37 1.22224 354.81 11.8727 370.249 11.8727C385.689 11.8727 401.129 1.22224 416.569 1.22224C432.009 1.22224 447.448 11.8727 462.888 11.8727C478.328 11.8727 501.488 -2.3279 509.208 1.22224C516.928 4.77239 601.846 27.8483 509.208 33.1735"
              className="fill-sky-400"
            />
          </animated.svg>
        </animated.div>
      </animated.div>
    </div>
  );
}
