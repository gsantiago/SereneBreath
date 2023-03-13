import "vi-canvas-mock";

import * as axeMatchers from "vitest-axe/matchers";
import * as domMatchers from "vitest-dom/matchers";

import { expect } from "vitest";

expect.extend(axeMatchers);
expect.extend(domMatchers);

// @ts-ignore
window.getComputedStyle = () => {};
