import { RingAnimation } from "@/animations/RingAnimation";
import { Animator } from "@/components/Animator";
import { Pattern } from "@/config/types";

export const WIDTH = 250;
const HEIGHT = "100%";

export interface CardProps {
  title: string;
  description: string;
  pattern: Pattern;
}

export function Card({ title, description, pattern }: CardProps) {
  return (
    <section
      className="overflow-hidden rounded-lg bg-white"
      style={{ width: WIDTH, height: HEIGHT, paddingBottom: 45 }}
    >
      <div className="flex h-1/2 w-full items-center justify-center bg-orange-100">
        <div style={{ transform: "scale(0.8)" }}>
          <Animator
            currentStep={3}
            pattern={[2, 2, 2, 2]}
            animation={RingAnimation}
          />
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>
        <p className="my-1 text-xs text-gray-400">{pattern.join("-")}</p>
        <p className="text-sm text-gray-800 sm:text-base">{description}</p>
      </div>
    </section>
  );
}
