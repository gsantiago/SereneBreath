import { render, axe } from "@/test-utils";
import { TechniqueSelect } from "@/components/TechniqueSelect";

const setup = () => render(<TechniqueSelect />);

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});
