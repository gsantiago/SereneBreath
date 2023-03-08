import React from "react";
import { ButtonRound } from "../ButtonRound";

export default {
  title: "Components/ButtonRound",
  component: ButtonRound,
};

export const Close = {
  args: {
    title: "Close",
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
  },
};
