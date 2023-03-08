export type Settings = {
  technique: string;
  time: number;
  vibration: boolean;
  guide: "female" | "male" | "bell" | "disabled";
  theme: "system" | "light" | "dark";
};

// inhale, hold, exhale, hold
export type Pattern = [number, number, number, number];

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
