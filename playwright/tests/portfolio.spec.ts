const PORT_4200 = 'http://localhost:4200';
// ==================================== SELECTORS
const TRANSLATE_BUTTON =
  'body > app-root > app-nav > mat-sidenav-container > mat-sidenav-content > mat-toolbar > div > button.mat-focus-indicator.language-menu.mat-icon-button.mat-button-base.mat-accent > span.mat-button-wrapper > mat-icon';
import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({
  page,
}) => {
  await page.goto(PORT_4200);

  const translateButton = page.locator(TRANSLATE_BUTTON);

  await page.waitForSelector(TRANSLATE_BUTTON);
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
