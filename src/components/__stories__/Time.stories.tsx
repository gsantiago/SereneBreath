import { Time } from "../Time";

export default {
  title: "Components/Time",
  component: Time,
};

export const Empty = {
  args: {
    seconds: 0,
  },
};

export const FewSeconds = {
  args: {
    seconds: 5,
  },
};

export const ManySeconds = {
  args: {
    seconds: 30,
  },
};

export const FewMinutes = {
  args: {
    seconds: 100,
  },
};

export const ManyMinutes = {
  args: {
    seconds: 400,
  },
};
