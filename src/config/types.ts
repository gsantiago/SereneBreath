import { LocaleKey } from "@/config/translations";
import { techniques } from "@/config/techniques";
import * as animations from "@/animations";

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

export type Technique = (typeof techniques)[number];

export interface Option {
  label: string;
  value: string;
}

export interface AnimationProps {
  pattern: Pattern;
  currentStep: number;
  state: "idle" | "inhaling" | "exhaling";
  isHolding: boolean;
}

export interface AnimationCardProps {
  isActive: boolean;
}

export type Animation = keyof typeof animations;
