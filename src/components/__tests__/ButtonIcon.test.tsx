import { render, axe } from "@/test-utils";
import { ButtonIcon } from "@/components/ButtonIcon";

const setup = () =>
  render(
    <ButtonIcon title="Home">
      <span id="home-icon" />
    </ButtonIcon>
  );

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});
