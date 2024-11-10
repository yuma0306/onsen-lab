import { test, expect } from '@playwright/test';

test('診断結果表示', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'あなたにピッタリの温泉は？Yes・No温泉診断' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await expect(page.getByRole('link', { name: '草津温泉' })).toBeVisible();
});
