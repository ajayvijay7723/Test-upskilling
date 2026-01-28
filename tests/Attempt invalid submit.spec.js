import { test, expect } from '@playwright/test';

test('Invalid login shows error message', async ({ page }) => {
  await page.goto('https://wepixstudio.app/login');

  await page.getByRole('textbox', { name: 'Email' }).fill('ajay.b@icre1wsystems.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('ajay.b@icr2ewsystems.com');

 await page.getByRole('button', { name: /^Login$/ }).click();


  await expect(page.getByText('These credentials do not match our records.')).toBeVisible();
});
