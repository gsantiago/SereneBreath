import React from "react";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";

import { About } from "../About";

test("renders successfuly", () => {
  const { container } = render(<About isVisible />);
  expect(container).toMatchSnapshot();
});
