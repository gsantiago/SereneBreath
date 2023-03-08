import React from "react";
import { animated } from "@react-spring/web";

export function Start(props) {
  return (
    <animated.button
      type="button"
      className="mb-20 h-48 w-48 rounded-full bg-blue-600 p-0 text-4xl font-semibold text-white shadow-xl hover:bg-blue-700 focus:outline-sky-500 dark:bg-slate-800 md:mb-0"
      {...props}
    >
      Start
    </animated.button>
  );
}
