import { render, axe } from "@/test-utils";
import { Link } from "@/components/Link";

const setup = () => render(<Link href="/path">Click me</Link>);

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});
