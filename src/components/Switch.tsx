import React from "react";

export interface SwitchProps {
  id: string;
  value: boolean;
  onChange: (newValue: boolean) => void;
}

export function Switch({ id, value, onChange }: SwitchProps) {
  return (
    <div className="relative inline-flex cursor-pointer items-center">
      <input
        id={id}
        type="checkbox"
        checked={value}
        onChange={() => onChange(!value)}
        className="peer sr-only"
      />
      <button
        onClick={() => onChange(!value)}
        className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
      ></button>
    </div>
  );
}
