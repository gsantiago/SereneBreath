import { render, axe, screen, fireEvent } from "@/test-utils";
import { Select } from "@/components/Select";

const fruits = ["Apple", "Banana", "Orange"];
const options = fruits.map((o) => ({ label: o, value: o }));

const handlers = { onChange: vi.fn() };

const setup = () =>
  render(
    <div>
      <label htmlFor="selectFruit">Select fruit:</label>
      <Select
        id="selectFruit"
        name="fruit"
        value=""
        options={options}
        {...handlers}
      />
    </div>
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

  const fruit = "Banana";
  const select = screen.getByLabelText("Select fruit:");

  fireEvent.change(select, { target: { value: fruit } });

  expect(handlers.onChange).toHaveBeenCalledWith(fruit);
});
