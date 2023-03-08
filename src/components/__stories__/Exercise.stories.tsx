import { Exercise } from "../Exercise";

export default {
  title: "Components/Exercise",
  component: Exercise,
};

export const Default = {
  args: {
    guide: "male",
    vibrateOnStepChange: true,
    pattern: [4, 4, 4, 4],
    seconds: 60,
  },
};
