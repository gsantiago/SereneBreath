import mitt from "mitt";
import { Pattern, Settings } from "@/config/types";

import * as sounds from "@/modules/sounds";
import { createVibrator } from "@/modules/vibrator";

type Events = {
  update: { seconds: number; step: number };
  step: number;
  end: undefined;
};

interface ExerciseManagerOptions {
  seconds: number;
  pattern: Pattern;
  vibration: boolean;
  guide: Settings["guide"];
}

export function exerciseManager({
  seconds,
  pattern,
  vibration,
  guide,
}: ExerciseManagerOptions) {
  const emitter = mitt<Events>();
  const vibrator = createVibrator({ enabled: vibration });

  sounds.loadGuideTracks(guide);

  let intervalId: NodeJS.Timer;
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

  emitter.on("step", (step) => {
    sounds.playStepGuide(guide, step);
    vibrator.vibrate(200);
  });

  emitter.on("end", () => {
    sounds.playBell();
    vibrator.vibrate(2000);
  });

  return {
    start: () => {
      intervalId = setInterval(tick, 1000);
      emitter.emit("step", step);
    },
    on: emitter.on,
    destroy: () => clearInterval(intervalId),
  };
}
