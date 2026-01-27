import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: ".",
  testMatch: ["**/*.spec.ts"],
  snapshotPathTemplate: "baselines{/projectName}/{testFilePath}/{arg}{ext}",
  fullyParallel: true,
  timeout: 100000,
  reporter: "@wopee-io/wopee.pw/wopee-reporter",
  workers: 1,
  use: {
    baseURL: process.env.WOPEE_PROJECT_URL || "http://localhost:3000",
    trace: process.env.CI ? "off" : "on-first-retry",
    video: process.env.CI ? "off" : "on",
    screenshot: "only-on-failure",
    httpCredentials: {
      username: process.env.BASIC_AUTH_USER || "",
      password: process.env.BASIC_AUTH_PASSWORD || "",
    },
  },

  projects: [
    {
      name: "chrome",
      use: {
        headless: true,
        viewport: { width: 1600, height: 1000 },
        channel: "chrome",
      },
    },
  ],
});
