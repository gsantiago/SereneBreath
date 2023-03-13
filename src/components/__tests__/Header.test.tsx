import { render, axe, screen, fireEvent } from "@/test-utils";
import { Header, HeaderProps } from "@/components/Header";

const handlers = {
  onToggleSettings: vi.fn(),
};

const setup = (props?: Partial<HeaderProps>) =>
  render(<Header isVisible showSettings={false} {...handlers} {...props} />);

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});

test("settings button", () => {
  setup();

  const button = screen.getByTitle("Settings");
  fireEvent.click(button);

  expect(handlers.onToggleSettings).toHaveBeenCalled();
});
