import { LocaleKey } from "@/config/translations";
import { techniques } from "@/config/techniques";

export type Settings = {
  technique: (typeof techniques)[number]["name"];
  time: number;
  vibration: boolean;
  guide: "female" | "male" | "bell" | "disabled";
  theme: "system" | "light" | "dark";
  locale: LocaleKey;
};

// inhale, hold, exhale, hold
export type Pattern = readonly [number, number, number, number];

export interface Technique {
  name: string;
  description: string;
  pattern: Pattern;
}

export interface Option {
  label: string;
  value: string;
}

export interface AnimationProps {
  pattern: Pattern;
  currentStep: number;
}
