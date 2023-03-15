import "vi-canvas-mock";
import { vi } from "vitest";

import * as axeMatchers from "vitest-axe/matchers";
import * as domMatchers from "vitest-dom/matchers";

import { expect } from "vitest";

expect.extend(axeMatchers);
expect.extend(domMatchers);

vi.mock("./package.json", () => ({
  default: {
    version: "0.0.1",
  },
}));
