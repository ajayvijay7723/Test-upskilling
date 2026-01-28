import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://wepixstudio.app/login');

  await page.getByRole('textbox', { name: 'Email' }).fill('ajay.b@icrewsystems.com');

  await page.getByRole('button', { name: /^Login$/ }).click();

});
