import React from "react";
import { Field } from "../Field";

export default {
  title: "Components/Field",
  component: Field,
};

export const Default = {
  args: {
    id: "default",
    label: "Label",
    description: "Some description",
    children: <p>children</p>,
    bottom: <p>bottom</p>,
  },
};
