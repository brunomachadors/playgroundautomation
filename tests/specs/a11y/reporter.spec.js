import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { saveA11yReport } from '../../utils/a11yReport';

const pages = ['/', '/login', '/form', '/table', '/tasks', '/store', '/about'];

for (const path of pages) {
  test(`A11y scan for ${path}`, async ({ page }) => {
    await page.goto(path);

    const results = await new AxeBuilder({ page }).analyze();

    saveA11yReport({
      results,
      pagePath: path,
      pageUrl: page.url(),
    });

    expect(results.violations).toEqual([]);
  });
}
