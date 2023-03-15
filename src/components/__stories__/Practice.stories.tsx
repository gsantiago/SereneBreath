import { Practice } from "../Practice";

export default {
  title: "Components/Practice",
  component: Practice,
};

export const Default = {
  args: {
    guide: "male",
    vibrateOnStepChange: true,
    pattern: [4, 4, 4, 4],
    seconds: 60,
  },
};
