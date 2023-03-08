import React from "react";

export interface ButtonIconProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "type"> {
  isActive?: boolean;
  position?: "top" | "bottom";
}

export function ButtonIcon({
  isActive,
  position = "top",
  ...props
}: ButtonIconProps) {
  const positionClass =
    position === "top" ? "rounded-t-md" : "rounded-b-md shadow-md";

  return (
    <button
      type="button"
      className={`px-2 pb-2 pt-2 text-3xl dark:text-white ${
        isActive
          ? `z-20 bg-white dark:bg-slate-800 ${positionClass}`
          : "rounded-md hover:bg-white hover:shadow-sm dark:hover:bg-slate-800"
      }`}
      {...props}
    />
  );
}
