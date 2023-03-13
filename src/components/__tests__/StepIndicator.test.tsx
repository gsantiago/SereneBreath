import { render, screen } from "@/test-utils";
import { StepIndicator } from "@/components/StepIndicator";

const setup = (step: number) => render(<StepIndicator step={step} />);

test.each([
  { step: 0, value: "Inhale" },
  { step: 1, value: "Hold" },
  { step: 2, value: "Exhale" },
  { step: 3, value: "Hold" },
])("step $step renders $value", ({ step, value }) => {
  setup(step);
  expect(screen.getByText(value)).toBeInTheDocument();
});
