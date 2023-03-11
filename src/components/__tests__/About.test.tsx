import React from "react";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe } from "vitest-axe";

import { About } from "../About";

const setup = () => render(<About isVisible />);

test("renders successfuly", () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});
