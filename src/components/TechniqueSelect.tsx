import { Field } from "@/components/Field";
import { Select } from "@/components/Select";

import { useTranslation } from "@/hooks/useTranslation";
import { useStorage } from "@/hooks/useStorage";

import { techniques } from "@/config/techniques";

export function TechniqueSelect() {
  const { t } = useTranslation();
  const [technique, setTechnique] = useStorage("technique");

  const options = techniques.map((option) => ({
    label: `${t(`techniques.${option.name}.title`)} (${option.pattern.join(
      "-"
    )})`,
    value: option.name,
  }));

  return (
    <Field
      id="technique"
      label={t("settings.technique")}
      bottom={
        <Select
          id="technique"
          value={technique}
          onChange={setTechnique}
          options={options}
        />
      }
    />
  );
}
