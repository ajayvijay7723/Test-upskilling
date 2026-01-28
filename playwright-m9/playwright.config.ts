// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: ['**/*.spec.js'],

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [['html', { open: 'never', outputFolder: 'playwright-report' }]],

  use: {
    trace: 'on-first-retry',
    headless: false, // visible execution
    launchOptions: {
      slowMo: 200,
    },
  },

  // ONLY CHROME (Chromium)
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
