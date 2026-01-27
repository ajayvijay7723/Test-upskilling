import { test, expect } from '@playwright/test';

test('Dashboard loads after login', async ({ page }) => {
  await page.goto('https://wepixstudio.app/login');

  await page.getByRole('textbox', { name: 'Email' }).fill('ajay.b@icrewsystems.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('ajay.b@icrewsystems.com');

  await page.getByRole('button', { name: /^Login$/ }).click();



  // ASSERT: URL should contain dashboard
  await expect(page).toHaveURL(/dashboard/);

  // ASSERT: word "Dashboard" should be visible
  await expect(page.getByRole('link', { name: 'Dashboard' }).first()).toBeVisible();

});
