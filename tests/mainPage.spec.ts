import { test, expect } from '@playwright/test';

test('Проверка отображения элементов навигации хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible;
  await expect(page.getByLabel('Main', { exact: true })).toContainText('API');
  await expect(page.getByRole('button', { name: 'Search (Control+k)' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  await page.getByRole('heading', { name: 'Playwright enables reliable' }).click();
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
});

test('Проверка названия элементов навигации хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect
    .soft(page.getByRole('link', { name: 'Playwright logo Playwright' }))
    .toContainText('Playwright');
  await expect.soft(page.getByLabel('Main', { exact: true })).toContainText('Docs');
  await expect.soft(page.getByLabel('Main', { exact: true })).toContainText('MCP');
  await expect.soft(page.getByLabel('Main', { exact: true })).toContainText('CLI');
  await expect.soft(page.getByLabel('Main', { exact: true })).toContainText('API');
  await expect.soft(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
});

test('Проверка атрибутов href элементов навигации хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute(
    'href',
    '/',
  );
  await expect
    .soft(page.getByRole('link', { name: 'Docs' }))
    .toHaveAttribute('href', '/docs/intro');
  await expect
    .soft(page.getByRole('link', { name: 'MCP', exact: true }))
    .toHaveAttribute('href', '/mcp/introduction');
  await expect
    .soft(page.getByRole('link', { name: 'CLI', exact: true }))
    .toHaveAttribute('href', '/agent-cli/introduction');
  await expect
    .soft(page.getByRole('link', { name: 'API', exact: true }))
    .toHaveAttribute('href', '/docs/api/class-playwright');
  await expect
    .soft(page.getByRole('link', { name: 'Discord server' }))
    .toHaveAttribute('href', 'https://aka.ms/playwright/discord');
  await expect
    .soft(page.getByRole('link', { name: 'GitHub repository' }))
    .toHaveAttribute('href', 'https://github.com/microsoft/playwright');
});

test('Проверка переключения лайт мода', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const themeButton = page.getByRole('button', { name: 'Switch between dark and light' });

  await themeButton.click();
  await themeButton.click();

  await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('Проверка загаловка страницы', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect
    .soft(page.getByRole('heading', { name: 'Playwright enables reliable' }))
    .toBeVisible();
  await expect
    .soft(page.getByRole('heading', { name: 'Playwright enables reliable' }))
    .toContainText(
      'Playwright enables reliable web automation for testing, scripting, and AI agents.',
    );
});

test('Проверка кнопки Get Started', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toContainText('Get started1');
  await expect
    .soft(page.getByRole('link', { name: 'Get started' }))
    .toHaveAttribute('href', '/docs/intro');
});
