import { render, axe, screen } from "@/test-utils";
import { Time, TimeProps } from "@/components/Time";

const setup = (props?: TimeProps) => render(<Time seconds={100} {...props} />);

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});

test.each([
  { seconds: 0, value: "00:00" },
  { seconds: 5, value: "00:05" },
  { seconds: 45, value: "00:45" },
  { seconds: 60, value: "01:00" },
  { seconds: 125, value: "02:05" },
])("$seconds should be formatted to $value", ({ seconds, value }) => {
  setup({ seconds });

  expect(screen.getByText(value)).toBeInTheDocument();
});
