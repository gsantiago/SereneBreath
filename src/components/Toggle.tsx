import React from "react";
import { Option } from "../config/types";

export interface ToggleProps {
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}

export function Toggle(props: ToggleProps) {
  return (
    <div className="flex">
      {props.options.map((option) => (
        <label
          key={option.value}
          className={`cursor-pointer border  py-2 px-3 text-xs first:rounded-tl-md first:rounded-bl-md first:border-r-0 last:rounded-tr-md last:rounded-br-md last:border-l-0 hover:border-blue-600 hover:bg-blue-600 hover:text-white ${
            props.value === option.value
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-300 bg-gray-50"
          }`}
        >
          <input
            type="radio"
            value={option.value}
            name={props.name}
            checked={option.value === props.value}
            className="sr-only"
            onChange={(e) => props.onChange(e.target.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
