import React from "react";
import { Option } from "../config/types";

export interface SelectProps<T>
  extends Omit<React.HTMLProps<HTMLSelectElement>, "onChange" | "value"> {
  value: T;
  onChange: (value: T) => void;
  options: Option[];
}

export function Select<T extends string = string>({
  value,
  onChange,
  options,
  ...props
}: SelectProps<T>) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
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
