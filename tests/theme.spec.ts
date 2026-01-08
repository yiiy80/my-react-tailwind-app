import { test, expect } from '@playwright/test';

test('theme toggle updates document class and localStorage', async ({ page }) => {
  await page.goto('/');

  const toggle = page.getByRole('button', { name: /toggle theme/i });
  await expect(toggle).toBeVisible();

  // Ensure initial theme class exists (either present or not) then toggle
  const initialHasLight = await page.evaluate(() => document.documentElement.classList.contains('theme-light'));

  await toggle.click();

  const afterHasLight = await page.evaluate(() => document.documentElement.classList.contains('theme-light'));
  expect(afterHasLight).toBe(!initialHasLight);

  const stored = await page.evaluate(() => window.localStorage.getItem('site-theme'));
  expect(stored).toBe(afterHasLight ? 'light' : 'dark');

  // Click back to original
  await toggle.click();
  const finalHasLight = await page.evaluate(() => document.documentElement.classList.contains('theme-light'));
  expect(finalHasLight).toBe(initialHasLight);
});
