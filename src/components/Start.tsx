import React from "react";
import { animated } from "@react-spring/web";
import { useTranslation } from "../hooks/useTranslation";

export function Start(props) {
  const { t } = useTranslation();

  return (
    <animated.button
      type="button"
      className="mb-20 h-48 w-48 rounded-full bg-blue-600 p-0 text-4xl font-semibold text-white shadow-xl hover:bg-blue-700 focus:outline-sky-500  md:mb-0"
      {...props}
    >
      {t("start")}
    </animated.button>
  );
}
