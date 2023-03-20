import { RingAnimation } from "@/animations/RingAnimation";
import { Animator } from "@/components/Animator";

export const WIDTH = 250;
const HEIGHT = "100%";

export interface CardProps {
  title: string;
  description: string;
}

export function Card({ title, description }: CardProps) {
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
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-3 text-gray-800">{description}</p>
      </div>
    </section>
  );
}
