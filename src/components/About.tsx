import React from "react";
import { Popover } from "./Popover";
import { Link } from "./Link";

export function About({ isVisible }) {
  return (
    <Popover isVisible={isVisible} position="bottom">
      <section className="px-3 py-1">
        <h1 className="text-lg font-bold">SereneBreath</h1>
        <p className="mt-2 text-xs">
          Tiny app to help you train your breathing and managing your stress.
        </p>
        <p className="mt-2 text-xs">
          This project is open source and open for new contributions. Check out
          its <Link href="https://github.com/gsantiago/SereneBreath">repo</Link>{" "}
          for more info.
        </p>
        <p className="mt-2 text-xs">
          English and bell audio files are from the great{" "}
          <Link href="https://breathly.app/">Breatly</Link> app, which also
          inspired this app.
        </p>
        <div className="mt-5 text-center">
          <small className="text-xs text-gray-400">v0.0.1</small>
        </div>
      </section>
    </Popover>
  );
}
