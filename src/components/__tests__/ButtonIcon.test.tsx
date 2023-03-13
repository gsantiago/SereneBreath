import { render, axe } from "@/test-utils";
import { ButtonIcon, ButtonIconProps } from "@/components/ButtonIcon";

const setup = (props?: Partial<ButtonIconProps>) =>
  render(
    <ButtonIcon title="Home" {...props}>
      <span id="home-icon" />
    </ButtonIcon>
  );

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("isActive state", () => {
  const { container } = setup({ isActive: true });
  expect(container).toMatchSnapshot();
});

test("bottom position", () => {
  const { container } = setup({ position: "bottom" });
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});
