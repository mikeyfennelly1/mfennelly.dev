import { defineConfig } from "vitest/config";
import path from "node:path";

const projectRoot = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
    test: {
        environment: "node",
        include: ["src/**/*.test.ts"],
        // No timeout: test timeouts are wall-clock, so any breakpoint you sit
        // on would fail the test out from under you.
        testTimeout: 0,
        // Keep everything in one process so a single attached debugger hits
        // every breakpoint. Costs nothing at this suite size.
        fileParallelism: false,
    },
    resolve: {
        alias: {
            "@": path.resolve(projectRoot, "./src"),
        },
    },
});
