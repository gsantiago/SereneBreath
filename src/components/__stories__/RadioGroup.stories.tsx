import { RadioGroup } from "../RadioGroup";

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
};

export const Default = {
  args: {
    name: "radio",
    options: [
      { label: "Apple", value: "1" },
      { label: "Banana", value: "2" },
      { label: "Orange", value: "3" },
    ],
    value: "2",
    onChange: () => {},
  },
};
