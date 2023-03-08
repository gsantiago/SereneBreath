import mitt from "mitt";
import { Pattern } from "../config/types";

const SECOND = 1000;

type Events = {
  update: { seconds: number; step: number };
  step: number;
  end: undefined;
};

export function exerciseManager(seconds: number, pattern: Pattern) {
  const emitter = mitt<Events>();

  let intervalId;
  let step = 0;
  let patternCount = 0;

  const tick = () => {
    seconds -= 1;
    patternCount += 1;

    const previousStep = step;
    const currentStepSeconds = pattern[step];

    if (patternCount === currentStepSeconds) {
      step = (step + 1) % 4;
      patternCount = 0;

      if (pattern[step] === 0) {
        step = (step + 1) % 4;
      }
    }

    emitter.emit("update", {
      seconds,
      step,
    });

    if (step !== previousStep) {
      emitter.emit("step", step);
    }

    if (seconds === 0) {
      emitter.emit("end");
      clearInterval(intervalId);
    }
  };

  return {
    start: () => {
      intervalId = setInterval(tick, SECOND);
      emitter.emit("step", step);
    },
    on: emitter.on,
    destroy: () => clearInterval(intervalId),
  };
}
