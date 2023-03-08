import React from "react";
import { Countdown } from "../Countdown";

export default {
  title: "Components/Countdown",
  component: Countdown,
};

export const Default = {
  args: {
    children: () => <p>Inner component</p>,
  },
};
