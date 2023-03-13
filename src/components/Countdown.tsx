import { useEffect, useState } from "react";
import { TextAnimated } from "@/components/TextAnimated";

export interface CountdownProps {
  /** Children that will be rendered when the countdown finishes */
  children: () => JSX.Element;
}

/**
 * Countdown component
 */
export function Countdown(props: CountdownProps) {
  const [count, setCount] = useState(3);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let seconds = 3;

    const intervalId = setInterval(() => {
      if (seconds > 0) {
        seconds -= 1;
        setCount(seconds);
      }

      if (seconds === 0) {
        setReady(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (ready) {
    return props.children();
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <TextAnimated className="text-3xl dark:text-white">
        {count.toString()}
      </TextAnimated>
    </div>
  );
}
