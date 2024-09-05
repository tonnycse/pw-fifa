import { test, expect } from '@playwright/test';

test('Open home page and verify title', async ({ page }) => {
  await page.goto('https://www.fifa.com/en/home');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('FIFA | The Home of Football');
});

test('Verify logo is visible and has the alt title', async ({ page }) => {
  await page.goto('https://www.fifa.com/en/home');

  const logo = page.locator('[href="/en/home"] img');

  await expect(logo).toBeVisible();
  await expect(logo).toHaveAttribute('title', 'FIFA');
});

test('Verify navigation links', async ({ page }) => {
  const expectedLinks = [
"TOURNAMENTS",
"MATCH CENTRE",
"NEWS",
"RANKINGS",
"WATCH ON FIFA+",
"PLAY",
"SHOP",
"INSIDE FIFA"
  ]
  await page.goto('https://www.fifa.com/en/home');

  const navLinks = page.locator ('#mainLinksID'); 

  await page.waitForTimeout(3000)

  //expect(await navLinks.allInnerTexts()).toEqual(expectedLinks);
  const receivedLinks = (await navLinks.allInnerTexts())[0].split('\n');
  expect(receivedLinks).toEqual(expectedLinks);

});









