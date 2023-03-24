import React from "react";

export interface RadioProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

export function Radio({ name, label, value, checked, onChange }: RadioProps) {
  const id = `option-${name}-${value}`;

  return (
    <div className="flex items-center">
      <input
        id={id}
        name={name}
        value={value}
        type="radio"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 cursor-pointer border-gray-300 text-blue-600 focus:ring-blue-600"
      />
      <label
        htmlFor={id}
        className="text-md block cursor-pointer pl-2 text-xs leading-6 text-gray-700 dark:text-gray-100"
      >
        {label}
      </label>
    </div>
  );
}
