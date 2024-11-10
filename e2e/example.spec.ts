import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('トップページが正しく表示されることを確認', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/温泉ラボ/);
});

test('診断テスト', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'あなたにピッタリの温泉は？Yes・No温泉診断' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
});

test('トップページ：モーダル表示', async ({ page }) => {
  // ページに移動
  await page.goto('/');
  // ボタンのセレクタを取得
  const button = page.locator('button[data-area="kantou"]');
  // ボタンをクリック
  await button.click();
  // モーダルのセレクタを取得
  const modal = page.locator('section').filter({ hasText: '都道府県から温泉を探す関東北海道・東北草津温泉伊香保温泉有馬温泉' });
  // モーダルが表示されるか確認
  await expect(modal).toBeVisible();
});


