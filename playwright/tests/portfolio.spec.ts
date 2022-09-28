const FOOTER_TEXT = '#footer > p';
const DEGREES =
  'body > app-root > app-nav > mat-sidenav-container > mat-sidenav > div > mat-nav-list > a:nth-child(4) > span';
const CERTIFICATIONS =
  'body > app-root > app-nav > mat-sidenav-container > mat-sidenav > div > mat-nav-list > a:nth-child(3) > span';
const PROJECTS =
  'body > app-root > app-nav > mat-sidenav-container > mat-sidenav > div > mat-nav-list > a:nth-child(2) > span';
const HOME =
  'body > app-root > app-nav > mat-sidenav-container > mat-sidenav > div > mat-nav-list > a:nth-child(1) > span';
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
  const footerTextLocator = page.locator(FOOTER_TEXT);
  const waitAndClickSelector = async (selector: string, page: Page) => {
    await page.waitForSelector(selector);
    await page.click(selector);
  };
  const goToFooter = async () => {
    await footerTextLocator.scrollIntoViewIfNeeded();
    await footerTextLocator.hover();
  };
  await page.waitForTimeout(60000 * 3);
  const travelEntireWebsite = async (page: Page) => {
    await page.click(PROJECTS);
    await goToFooter();
    await page.click(CERTIFICATIONS);
    await goToFooter();
    await page.click(DEGREES);
    await goToFooter();
    await page.click(HOME);
    await goToFooter();
  };
  await page.goto(PORT_4200);
  await waitAndClickSelector(TRANSLATE_BUTTON, page);
  await waitAndClickSelector(SPANISH_BUTTON, page);
  await travelEntireWebsite(page);
  await page.waitForTimeout(60000 * 0.5);
  await page.click(TRANSLATE_BUTTON);
  await waitAndClickSelector(CHINESE_BUTTON, page);
  await page.click(TRANSLATE_BUTTON);
  await waitAndClickSelector(ENGLISH_BUTTON, page);
});
