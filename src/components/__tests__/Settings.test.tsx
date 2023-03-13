import { render, axe, screen, fireEvent } from "@/test-utils";
import { Settings, SettingsProps } from "@/components/Settings";

const setup = (props?: Partial<SettingsProps>) =>
  render(<Settings isVisible {...props} />);

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});
