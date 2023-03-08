import { Select } from "../Select";

export default {
  title: "Components/Select",
  component: Select,
};

export const Default = {
  args: {
    value: "html",
    options: [
      { label: "HTML", value: "html" },
      { label: "CSS", value: "css" },
      { label: "JavaScript", value: "js" },
    ],
    onChange: () => {},
  },
};
