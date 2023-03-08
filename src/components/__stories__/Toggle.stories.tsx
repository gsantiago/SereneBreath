import { Toggle } from "../Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
};

export const FirstSelected = {
  args: {
    name: "theme",
    value: "system",
    options: [
      { label: "System", value: "system" },
      { label: "Light", value: "light" },
      { label: "Dark", value: "dark" },
    ],
    onChange: () => {},
  },
};

export const MiddleSelected = {
  args: {
    name: "theme",
    value: "light",
    options: [
      { label: "System", value: "system" },
      { label: "Light", value: "light" },
      { label: "Dark", value: "dark" },
    ],
    onChange: () => {},
  },
};

export const LastSelected = {
  args: {
    name: "theme",
    value: "dark",
    options: [
      { label: "System", value: "system" },
      { label: "Light", value: "light" },
      { label: "Dark", value: "dark" },
    ],
    onChange: () => {},
  },
};
