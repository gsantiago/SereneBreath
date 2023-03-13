import { render, axe, screen, fireEvent } from "@/test-utils";
import { LanguageSelect } from "@/components/LanguageSelect";

const setup = () => render(<LanguageSelect />);

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});
