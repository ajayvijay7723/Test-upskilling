import { test, expect } from '@playwright/test';

test('Terms of Service link opens correct page', async ({ page }) => {
  await page.goto('https://wepixstudio.app/login');

  await page.getByRole('link', { name: 'Terms of Service' }).click();

  // ASSERT: navigated to Terms page
  await expect(page).toHaveURL(/terms-and-conditions/);

  // ASSERT: page contains terms text (any one of these will work)
 await expect(page.getByRole('heading', { name: /terms & conditions/i })).toBeVisible();

});
