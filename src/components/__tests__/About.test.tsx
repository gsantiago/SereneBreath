import React from "react";
import { test, expect } from "vitest";

import { render, axe } from "../../../test-utils";

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
