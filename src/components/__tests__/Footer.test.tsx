import { render, axe, screen, fireEvent } from "@/test-utils";
import { Footer, FooterProps } from "@/components/Footer";

const handlers = {
  onToggleAbout: vi.fn(),
};

const setup = (props?: Partial<FooterProps>) =>
  render(<Footer isVisible showAbout={false} {...handlers} {...props} />);

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});

test("about button", () => {
  setup();

  const button = screen.getByTitle("About");
  fireEvent.click(button);

  expect(handlers.onToggleAbout).toHaveBeenCalled();
});
