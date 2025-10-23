import test, { expect } from '@playwright/test';

test.describe('Menu Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playground-drab-six.vercel.app/');
  });

  test('Navigate to HOME', async ({ page }) => {
    await page.getByRole('link', { name: 'HOME' }).click();
    await expect(page).toHaveURL('https://playground-drab-six.vercel.app/');
    await expect(page.getByText('This page was developed by')).toBeVisible();
    await expect(page.getByText('This page was developed by')).toHaveText(
      'This page was developed by the Bug Buster Mentorship team for educational purposes.'
    );
    await expect(
      page.getByRole('heading', { name: 'Available Challenges:' })
    ).toHaveText('Available Challenges:');
    await expect(page.getByText('Login', { exact: true })).toHaveText('Login');
    await expect(page.getByText('Forms')).toHaveText('Forms');
    await expect(page.getByText('Dynamic Table')).toHaveText('Dynamic Table');
    await expect(page.getByText('And much more!')).toHaveText('And much more!')
  });

  test('Navigate to LOGIN', async ({ page }) => {
    await page.getByRole('link', { name: 'LOGIN' }).click();
    await expect(page).toHaveURL(
      'https://playground-drab-six.vercel.app/login');

    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  });

  test('Navigate to FORM', async ({ page }) => {
    await page.getByRole('link', { name: 'FORM' }).click();
    await expect(page.getByRole('heading', { name: 'Form' })).toBeVisible();
  });

    test('Navigate to TABLE)', async ({ page }) => {
    await page.getByRole('link', { name: 'TABLE' }).click();
    await expect(page.getByText('Dynamic Table Instructions')).toBeVisible();
  });

    test('Navigate to TASK', async ({ page }) => {
    await page.getByRole('link', { name: 'TASK' }).click();
    await expect(page.getByRole('heading', { name: 'To do list' })).toBeVisible();
  });
    test('Navigate to STORE', async ({ page }) => {
    await page.getByRole('link', { name: 'Store' }).click();
    await expect(page.getByRole('heading', { name: 'Instructions' })).toBeVisible();
  });

      test('Navigate to ABOUT', async ({ page }) => {
    await page.getByRole('link', { name: 'ABOUT' }).click();
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
  });
});
