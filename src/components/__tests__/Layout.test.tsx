import { render, axe, screen } from "@/test-utils";
import { Layout, LayoutProps } from "@/components/Layout";

const setup = (props?: Partial<LayoutProps>) =>
  render(
    <Layout showHeaderAndFooter {...props}>
      content
    </Layout>
  );

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});

test("does not show header and footer", () => {
  setup({ showHeaderAndFooter: false });

  expect(screen.getByTestId("header")).not.toBeVisible();
  expect(screen.getByTestId("footer")).toHaveClass("opacity-0");
});
