import { axe, fireEvent, render, screen } from "@/test-utils";
import { Stepper, StepperProps } from "@/components/Stepper";

const handlers = {
  onChange: vi.fn(),
};

const setup = (props?: Partial<StepperProps>) =>
  render(<Stepper {...handlers} unit="min" value={1} {...props} />);

test("acessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});

test("increase", () => {
  setup();

  const increase = screen.getByTitle("Increase");
  fireEvent.click(increase);

  expect(handlers.onChange).toHaveBeenCalledWith(2);
});

test("decrease", () => {
  setup();

  const decrease = screen.getByTitle("Decrease");
  fireEvent.click(decrease);

  expect(handlers.onChange).toHaveBeenCalledWith(0);
});

test("increase limit", () => {
  setup({ value: 10, max: 10 });

  const increase = screen.getByTitle("Increase");
  fireEvent.click(increase);

  expect(handlers.onChange).not.toHaveBeenCalled();
});

test("decrease limit", () => {
  setup({ value: 0, min: 0 });

  const decrease = screen.getByTitle("Decrease");
  fireEvent.click(decrease);

  expect(handlers.onChange).not.toHaveBeenCalled();
});
