import { render, axe, screen } from "@/test-utils";
import { TextAnimated } from "@/components/TextAnimated";

const setup = () => render(<TextAnimated>One</TextAnimated>);

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});

test("text changing", () => {
  const { rerender } = setup();

  expect(screen.getByText("One")).toBeInTheDocument();

  rerender(<TextAnimated>Two</TextAnimated>);

  expect(screen.getByText("Two")).toBeInTheDocument();
  expect(screen.queryByText("One")).not.toBeInTheDocument();
});
