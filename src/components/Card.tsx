import { useEffect, useState } from "react";

import { Stepper } from "@/components/Stepper";
import { Flipper } from "@/components/Flipper";
import { CustomExerciseSettings } from "@/components/CustomExerciseSettings";

import { useStorage } from "@/hooks/useStorage";
import { useTranslation } from "@/hooks/useTranslation";

import { AnimationCardProps, Pattern } from "@/config/types";

export const WIDTH = 250;
const HEIGHT = "100%";

export interface CardProps {
  title: string;
  description: string;
  pattern: Pattern;
  isActive: boolean;
  animation: React.FC<AnimationCardProps>;
  adjustable: boolean;
}

export function Card({
  title,
  description,
  pattern,
  isActive,
  animation: Animation,
  adjustable,
}: CardProps) {
  const [time, setTime] = useStorage("time");
  const [showSettings, setShowSettings] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (showSettings && !isActive) {
      setShowSettings(false);
    }
  }, [showSettings, isActive]);

  return (
    <Flipper
      className={`relative flex h-full w-full flex-col justify-between rounded-lg bg-white transition-all duration-500 dark:bg-slate-800 dark:text-white dark:shadow-none ${
        isActive && "shadow dark:shadow-gray-500"
      }`}
      style={{
        width: WIDTH,
        height: HEIGHT,
        paddingBottom: 75,
      }}
      flipped={showSettings}
      front={
        <div className="flex h-full w-full flex-col justify-between p-5 pb-0">
          {adjustable && (
            <Control
              isActive={isActive}
              title={t("settings.title")}
              onClick={() => setShowSettings((v) => !v)}
            >
              {adjustmentsIcon}
            </Control>
          )}
          <div>
            <div className="mb-5 flex w-full items-center justify-center">
              <Animation isActive={isActive} />
            </div>
            <h1 className="font-bold sm:text-xl">{title}</h1>
            <p className="my-1 text-xs text-gray-400 dark:text-gray-500">
              {pattern.join("-")}
            </p>
            <p className="text-sm text-gray-800 dark:text-white sm:text-base">
              {description}
            </p>
          </div>
          <div
            className={`mt-5 ${
              isActive ? "px-8 opacity-100" : "px-4 opacity-0"
            } transition-all duration-500`}
          >
            <Stepper min={1} value={time} onChange={setTime} unit="min" />
          </div>
        </div>
      }
      back={
        <div className="relative flex h-full w-full items-center justify-center px-4">
          <Control
            title={t("card.back")}
            isActive={isActive}
            onClick={() => setShowSettings((v) => !v)}
          >
            {backIcon}
          </Control>
          <CustomExerciseSettings />
        </div>
      }
    />
  );
}

interface ControlProps {
  isActive: boolean;
  title: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Control = ({ isActive, ...props }: ControlProps) => (
  <div
    className={`absolute top-2 right-2 z-10 ${
      isActive ? "opacity-100" : "opacity-0"
    } transition-all`}
  >
    <button
      type="button"
      className="p-2 text-gray-700 hover:text-gray-900 dark:text-white"
      {...props}
    />
  </div>
);

const backIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    />
  </svg>
);

const adjustmentsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
    />
  </svg>
);
