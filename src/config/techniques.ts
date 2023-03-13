import { Technique } from "@/config/types";

export const techniques: Technique[] = [
  {
    name: "Square",
    description:
      "Box breathing, also referred to as square breathing, can help you slow down your breathing and reduce stress.",
    pattern: [4, 4, 4, 4],
  },
  {
    name: "Awake",
    description:
      "Use this technique first thing in the morning for quick burst of energy and alertness.",
    pattern: [6, 0, 2, 0],
  },
  {
    name: "Deep Calm",
    description:
      "A natural tranquilizer for the nervous system. Do it at least twice a day.",
    pattern: [4, 7, 8, 0],
  },
  {
    name: "Pranayama",
    description:
      "A main component of yoha, an exercise for physical and mental wellness",
    pattern: [7, 4, 8, 4],
  },
  {
    name: "Ujjayi",
    description:
      "Balance influence on the cardiorespiratory system, release fellings of irritation, and calm the mind and body",
    pattern: [7, 0, 7, 0],
  },
];
