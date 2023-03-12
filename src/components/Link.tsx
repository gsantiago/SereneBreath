import React from "react";

export function Link(props: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      target="_blank"
      className="text-blue-600 underline dark:text-sky-300"
      {...props}
    />
  );
}
