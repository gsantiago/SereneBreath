import { render, axe } from "@/test-utils";
import { CircleAnimation } from "@/components/CircleAnimation";

const setup = () =>
  render(<CircleAnimation currentStep={0} pattern={[2, 2, 2, 2]} />);

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});
