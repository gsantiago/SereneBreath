import React from "react";
import { Option } from "../config/types";

export interface SelectProps
  extends Omit<React.HTMLProps<HTMLSelectElement>, "onChange"> {
  onChange: (value: string) => void;
  options: Option[];
}

export function Select({ value, onChange, options, ...props }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full cursor-pointer rounded-md border-gray-300 text-sm dark:text-gray-700"
      {...props}
    >
      {options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
