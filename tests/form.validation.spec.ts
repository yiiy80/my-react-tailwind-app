import { test, expect } from '@playwright/test';

test('shows validation errors and prevents submit for invalid input', async ({ page }) => {
  const messages: string[] = [];
  page.on('console', (msg) => messages.push(msg.text()));

  await page.goto('/');

  // enter invalid email and short password
  await page.getByPlaceholder('邮箱输入框').fill('invalid-email');
  await page.getByPlaceholder('密码输入框').fill('123');
  await page.getByRole('button', { name: /登录/i }).click();

  await expect(page.getByText('请输入有效的邮箱地址')).toBeVisible();
  await expect(page.getByText('密码长度至少 8 位')).toBeVisible();

  // no login attempt logged
  expect(messages.some((m) => m.includes('Login attempt'))).toBeFalsy();

  // when user modifies inputs, corresponding errors should disappear immediately
  await page.getByPlaceholder('邮箱输入框').fill('i');
  await expect(page.getByText('请输入有效的邮箱地址')).not.toBeVisible();
  await page.getByPlaceholder('密码输入框').fill('1');
  await expect(page.getByText('密码长度至少 8 位')).not.toBeVisible();

  // Take screenshot
  await page.screenshot({ path: 'test-results/screenshot.png' });
});

test('submits when input is valid and calls onLogin', async ({ page }) => {
  const messages: string[] = [];
  page.on('console', (msg) => messages.push(msg.text()));

  await page.goto('/');
  await page.getByPlaceholder('邮箱输入框').fill('user@example.com');
  await page.getByPlaceholder('密码输入框').fill('12345678');
  await page.getByRole('button', { name: /登录/i }).click();

  // onLogin logs to console in App
  await expect.poll(() => messages.some((m) => m.includes('Login attempt')), { timeout: 3000 }).toBeTruthy();
});
