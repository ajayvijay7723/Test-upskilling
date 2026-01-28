import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://wepixstudio.app/');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Forgot your password?' }).click();
  await page.getByRole('heading', { name: 'Forgot password?' }).click();
});