import React from "react";

export function Radio({ name, label, value, checked, onChange }) {
  return (
    <div className="flex items-center">
      <input
        id={`option-${value}`}
        name={name}
        value={value}
        type="radio"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 cursor-pointer border-gray-300 text-blue-600 focus:ring-blue-600"
      />
      <label
        htmlFor={`option-${value}`}
        className="text-md block cursor-pointer pl-2 text-xs leading-6 text-gray-700 dark:text-gray-100"
      >
        {label}
      </label>
    </div>
  );
}
