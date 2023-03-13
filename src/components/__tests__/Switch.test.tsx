import { axe, fireEvent, render, screen } from "@/test-utils";
import { Switch, SwitchProps } from "@/components/Switch";

const handlers = {
  onChange: vi.fn(),
};

const setup = (props?: Partial<SwitchProps>) =>
  render(
    <div>
      <label htmlFor="switch">Switch me</label>
      <Switch id="switch" value={false} {...handlers} {...props} />
    </div>
  );

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("acessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});

test("switch on", () => {
  setup({ value: false });

  const switchUi = screen.getByLabelText("Switch me");
  fireEvent.click(switchUi);

  expect(handlers.onChange).toHaveBeenCalledWith(true);
});

test("switch off", () => {
  setup({ value: true });

  const switchUi = screen.getByLabelText("Switch me");
  fireEvent.click(switchUi);

  expect(handlers.onChange).toHaveBeenCalledWith(false);
});
