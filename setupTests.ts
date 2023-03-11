import "vitest-axe/extend-expect";
import "vi-canvas-mock";

import * as matchers from "vitest-axe/matchers";
import { expect } from "vitest";

expect.extend(matchers);
