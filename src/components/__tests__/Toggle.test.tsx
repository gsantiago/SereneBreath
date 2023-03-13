import { render, axe, screen, fireEvent } from "@/test-utils";
import { Toggle } from "@/components/Toggle";

const fruits = ["Apple", "Banana", "Orange"];
const options = fruits.map((o) => ({ label: o, value: o }));

const handlers = { onChange: vi.fn() };

const setup = () =>
  render(
    <Toggle id="fruit" name="fruit" value="" options={options} {...handlers} />
  );

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});

test("select an option", () => {
  setup();

  const fruit = "Orange";
  const option = screen.getByText(fruit);
  fireEvent.click(option);

  expect(handlers.onChange).toHaveBeenCalledWith(fruit);
});
