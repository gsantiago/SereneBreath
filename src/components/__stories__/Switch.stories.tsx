import { Switch } from "../Switch";

export default {
  title: "Components/Switch",
  component: Switch,
};

export const Unchecked = {
  args: {
    name: "switch",
    value: "1",
    checked: false,
    label: "Option",
    onChange: () => {},
  },
};

export const Checked = {
  args: {
    name: "switch",
    value: "1",
    checked: true,
    label: "Option",
    onChange: () => {},
  },
};
