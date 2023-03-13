import { Radio } from "@/components/Radio";
import { Option } from "@/config/types";

export interface RadioGroup<T> {
  name: string;
  options: Option[];
  value: T;
  onChange: (newValue: T) => void;
}

export function RadioGroup<T extends string = string>(props: RadioGroup<T>) {
  return (
    <>
      {props.options.map((option) => (
        <Radio
          key={option.value}
          name={props.name}
          label={option.label}
          value={option.value}
          checked={option.value === props.value}
          onChange={(e) =>
            props.onChange((e.target as HTMLInputElement).value as T)
          }
        />
      ))}
    </>
  );
}
