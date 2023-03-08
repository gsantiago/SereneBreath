import React from "react";
import { Popover } from "./Popover";

export function About({ isVisible }) {
  return (
    <Popover isVisible={isVisible} position="bottom">
      <section className="p-3">
        <p>made with love by @gsantiago</p>
      </section>
    </Popover>
  );
}
