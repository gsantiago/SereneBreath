import { render, axe } from "@/test-utils";
import { Popover, PopoverProps } from "@/components/Popover";

const setup = (props?: Partial<PopoverProps>) =>
  render(
    <Popover isVisible {...props}>
      content
    </Popover>
  );

test("renders successfuly at top position", () => {
  const { container } = setup({ position: "top" });

  expect(container).toMatchSnapshot();
  expect(container.firstChild).not.toHaveClass("hidden");
});

test("renders successfuly at bottom position", () => {
  const { container } = setup({ position: "bottom" });

  expect(container).toMatchSnapshot();
  expect(container.firstChild).not.toHaveClass("hidden");
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});

test("popover is hidden", () => {
  const { container } = setup({ isVisible: false });

  expect(container.firstChild).toHaveClass("hidden");
});
