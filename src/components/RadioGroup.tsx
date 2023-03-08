import React from "react";
import { Radio } from "./Radio";
import { Option } from "../config/types";

export interface RadioGroup {
  name: string;
  options: Option[];
  value: string;
  onChange: (newOption: string) => void;
}

export function RadioGroup(props: RadioGroup) {
  return (
    <>
      {props.options.map((option) => (
        <Radio
          key={option.value}
          name={props.name}
          label={option.label}
          value={option.value}
          checked={option.value === props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      ))}
    </>
  );
}
