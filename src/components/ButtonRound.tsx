import React, { HTMLAttributes } from "react";

export function ButtonRound({
  style,
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-2xl text-white hover:bg-teal-600"
      {...props}
    />
  );
}
