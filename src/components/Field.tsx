import React from "react";

export interface FieldProps {
  id: string;
  label: string;
  description?: string;
  children?: React.ReactNode;
  bottom?: React.ReactNode;
}

export function Field({
  id,
  label,
  description,
  children,
  bottom,
}: FieldProps) {
  return (
    <div className="px-5 py-2">
      <div className="grid grid-cols-6 items-end">
        <div className="col-span-4">
          <label
            htmlFor={id}
            className="text-sm font-medium text-gray-800 dark:text-white"
          >
            {label}
          </label>
          {description && (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
        <div className="col-span-2 text-right">{children}</div>
      </div>
      {bottom && <div className="mt-2">{bottom}</div>}
    </div>
  );
}
