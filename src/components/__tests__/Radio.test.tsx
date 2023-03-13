import { render, axe } from "@/test-utils";
import { Radio } from "@/components/Radio";

const setup = () => render(<Radio label="Option" />);

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});
