import { Pattern } from "@/config/types";
import { useStorage } from "@/hooks/useStorage";
import { Stepper } from "./Stepper";

export const WIDTH = 250;
const HEIGHT = "100%";

export interface CardProps {
  title: string;
  description: string;
  pattern: Pattern;
  isActive: boolean;
}

export function Card({ title, description, pattern, isActive }: CardProps) {
  const [time, setTime] = useStorage("time");

  return (
    <section
      className={`flex flex-col justify-between overflow-hidden rounded-lg bg-white p-5 ${
        isActive && "shadow dark:shadow-gray-500"
      }`}
      style={{ width: WIDTH, height: HEIGHT, paddingBottom: 75 }}
    >
      <div>
        <div className="mb-5 flex w-full items-center justify-center">
          <img src="/logo.svg" width={100} />
        </div>
        <h1 className="font-bold sm:text-xl">{title}</h1>
        <p className="my-1 text-xs text-gray-400">{pattern.join("-")}</p>
        <p className="text-sm text-gray-800 sm:text-base">{description}</p>
      </div>
      <div
        className={`mt-5 ${
          isActive ? "px-8 opacity-100" : "px-4 opacity-0"
        } transition-all duration-500`}
      >
        <Stepper min={1} value={time} onChange={setTime} />
      </div>
    </section>
  );
}
