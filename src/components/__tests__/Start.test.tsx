import { render, axe, screen, fireEvent } from "@/test-utils";
import { Start } from "@/components/Start";

const handlers = { onClick: vi.fn() };

const setup = () => render(<Start {...handlers} />);

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});

test("click", () => {
  setup();

  const button = screen.getByText("Start");
  fireEvent.click(button);

  expect(handlers.onClick).toHaveBeenCalled();
});
