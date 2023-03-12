import { render, axe } from "@/test-utils";
import { Field } from "@/components/Field";

const setup = () =>
  render(
    <Field
      id="field-id"
      label="Label"
      description="Description"
      bottom={<>bottom</>}
      children={<>children</>}
    />
  );

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});
