export interface TimeProps {
  /** Total of seconds */
  seconds: number;
}

/**
 * Formats seconds to mm:ss format.
 */
export const Time = ({ seconds }: TimeProps) => {
  return (
    <p className="m-0 text-center text-4xl font-semibold dark:text-white">
      {formatSeconds(seconds)}
    </p>
  );
};

const pad = (value: number) => value.toString().padStart(2, "0");

const formatSeconds = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor(seconds / 60) - h * 60;
  const s = Math.floor(seconds - h * 3600 - m * 60);

  return `${pad(m)}:${pad(s)}`;
};
