import { test, expect } from '@playwright/test';

test('show modal', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: '関東' }).click();
  await expect(page.getByText('草津温泉伊香保温泉有馬温泉')).toBeVisible();
});
