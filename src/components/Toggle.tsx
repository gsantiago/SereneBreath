import { Option } from "@/config/types";

export interface ToggleProps<T> {
  id: string;
  name: string;
  value: T;
  onChange: (newValue: T) => void;
  options: Option[];
}

export function Toggle<T extends string = string>(props: ToggleProps<T>) {
  return (
    <div className="flex">
      {props.options.map((option) => (
        <label
          key={option.value}
          className={`cursor-pointer border  py-1 px-2 text-xs first:rounded-tl-md first:rounded-bl-md first:border-r-0 last:rounded-tr-md last:rounded-br-md last:border-l-0 hover:border-blue-600 hover:bg-blue-600 hover:text-white ${
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
            onChange={(e) => props.onChange(e.target.value as T)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
