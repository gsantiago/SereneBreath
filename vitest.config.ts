/// <reference types="vitest" />
import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [viteTsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
    clearMocks: true,
    mockReset: true,
  },
});
