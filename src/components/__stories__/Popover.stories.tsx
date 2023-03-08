import React from "react";
import { Popover } from "../Popover";

export default {
  title: "Components/Popover",
  component: Popover,
};

export const Top = {
  args: {
    isVisible: true,
    position: "top",
    children: <p>Content</p>,
  },
};

export const Bottom = {
  args: {
    isVisible: true,
    position: "bottom",
    children: <p>Content</p>,
  },
};
