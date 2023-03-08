import React from "react";

export interface PopoverProps extends React.HTMLProps<HTMLDivElement> {
  isVisible: boolean;
  position?: "top" | "bottom";
}

export function Popover({
  isVisible,
  position = "top",
  ...props
}: PopoverProps) {
  const visibilityClass = isVisible ? "" : "hidden";
  const positionClass =
    position === "top"
      ? "right-0 top-full rounded-tr-none"
      : "right-0 bottom-full rounded-br-none";

  return (
    <div
      className={`absolute  w-full rounded-md  bg-white py-2 shadow-md dark:bg-slate-800 sm:w-80 ${visibilityClass} ${positionClass}`}
      {...props}
    />
  );
}
