const SPANISH_BUTTON =
  '#cdk-overlay-0 > mat-card > mat-action-list > button:nth-child(2) > span';
const CHINESE_BUTTON =
  '#cdk-overlay-0 > mat-card > mat-action-list > button:nth-child(3) > span';
const ENGLISH_BUTTON =
  '#cdk-overlay-0 > mat-card > mat-action-list > button:nth-child(1) > span';
const PORT_4200 = 'http://localhost:4200';
// ==================================== SELECTORS
const TRANSLATE_BUTTON =
  'body > app-root > app-nav > mat-sidenav-container > mat-sidenav-content > mat-toolbar > div > button.mat-focus-indicator.language-menu.mat-icon-button.mat-button-base.mat-accent > span.mat-button-wrapper > mat-icon';
import { test, expect, Page } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({
  page,
}) => {
  const waitAndClickSelector = async (selector: string, page: Page) => {
    await page.waitForSelector(selector);
    await page.click(selector);
  };
  await page.goto(PORT_4200);
  await waitAndClickSelector(TRANSLATE_BUTTON, page);
  await waitAndClickSelector(CHINESE_BUTTON, page);
  await waitAndClickSelector(CHINESE_BUTTON, page);
  await waitAndClickSelector(ENGLISH_BUTTON, page);
  await page.waitForTimeout(60000 * 10);
});
