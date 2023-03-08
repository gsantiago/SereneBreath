import { Radio } from "../Radio";

export default {
  title: "Components/Radio",
  component: Radio,
};

export const Unchecked = {
  args: {
    name: "radio",
    value: "1",
    checked: false,
    label: "Option",
    onChange: () => {},
  },
};

export const Checked = {
  args: {
    name: "radio",
    value: "1",
    checked: true,
    label: "Option",
    onChange: () => {},
  },
};
