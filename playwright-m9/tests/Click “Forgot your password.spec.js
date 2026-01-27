import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://wepixstudio.app/login');
  await page.getByRole('link', { name: 'Forgot your password?' }).click();
});