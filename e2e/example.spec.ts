import { test, expect } from '@playwright/test';


//Counter tests
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173');
});

test('Control input initial value', async ({ page }) => {
  await page.locator('#cpt-button');
  await expect(page.locator('#cpt-button')).toHaveText('count is 0');
});

test('Control input value one after one click', async ({ page }) => {
  await page.locator('#cpt-button').click();
  await expect(page.locator('#cpt-button')).toHaveText('count is 1');
});

test('Control input value two after two click', async ({ page }) => {
  await page.locator('#cpt-button').click();
  await page.locator('#cpt-button').click();
  await expect(page.locator('#cpt-button')).toHaveText('count is 2');
});


//Calculator test
