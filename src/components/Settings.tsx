import React from "react";

import { Field } from "./Field";
import { Stepper } from "./Stepper";
import { RadioGroup } from "./RadioGroup";
import { Switch } from "./Switch";
import { useStorage } from "../hooks/useStorage";
import { Toggle } from "./Toggle";
import { Popover } from "./Popover";
import { Select } from "./Select";

import { techniques } from "../config/techniques";

export interface SettingsProps {
  isVisible: boolean;
}

const canVibrate = "vibrate" in navigator;

export function Settings({ isVisible }: SettingsProps) {
  const [technique, setTechnique] = useStorage("technique");
  const [time, setTime] = useStorage("time");
  const [vibration, setVibration] = useStorage("vibration");
  const [guide, setGuide] = useStorage("guide");
  const [theme, setTheme] = useStorage("theme");

  return (
    <Popover isVisible={isVisible}>
      <Field
        id="technique"
        label="Technique"
        bottom={
          <Select
            id="technique"
            value={technique}
            onChange={setTechnique}
            options={techniques.map((t) => ({
              label: `${t.name} (${t.pattern.join("-")})`,
              value: t.name,
            }))}
          />
        }
      />
      <Field id="time" label="Time" description="Exercise time in minutes">
        <Stepper min={1} value={time} onChange={setTime} />
      </Field>
      {canVibrate && (
        <Field
          id="vibration"
          label="Vibration"
          description="Vibrate on each step"
        >
          <Switch id="vibration" value={vibration} onChange={setVibration} />
        </Field>
      )}
      <Field
        id="guide"
        label="Guide Breath"
        description={
          guide === "disabled"
            ? "Enable guide breath"
            : "Select your favorite guide"
        }
        children={
          <Switch
            id="guide"
            value={guide !== "disabled"}
            onChange={(selected) => setGuide(selected ? "female" : "disabled")}
          />
        }
        bottom={
          guide !== "disabled" && (
            <RadioGroup
              name="guide"
              value={guide}
              onChange={setGuide}
              options={[
                { label: "Female voice", value: "female" },
                { label: "Male voice", value: "male" },
                { label: "Bell", value: "bell" },
              ]}
            />
          )
        }
      />
      <Field
        id="theme"
        label="Theme"
        bottom={
          <Toggle
            id="theme"
            name="theme"
            value={theme}
            onChange={setTheme}
            options={[
              {
                label: "System",
                value: "system",
              },
              {
                label: "Dark",
                value: "dark",
              },
              {
                label: "Light",
                value: "light",
              },
            ]}
          />
        }
      />
    </Popover>
  );
}
