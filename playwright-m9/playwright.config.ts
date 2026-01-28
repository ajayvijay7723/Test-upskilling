// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: ['**/*.spec.js'],

  // GLOBAL TIMEOUTS
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [['html', { open: 'never', outputFolder: 'playwright-report' }]],

  use: {
    trace: 'on-first-retry',

    // LOCAL: visible execution
    // CI: headless
    headless: !!process.env.CI,

    launchOptions: {
      slowMo: process.env.CI ? 0 : 200,
    },
  },

  // ONLY CHROMIUM
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
