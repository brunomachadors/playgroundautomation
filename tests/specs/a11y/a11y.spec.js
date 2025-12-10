import { test, expect, devices } from '@playwright/test';

import { formatViolations } from '../../utils/violations';
import { AccessibilityPage } from '../../pages/acessibility.page';

const routes = [
  { name: 'home', path: '/' },
  { name: 'login', path: '/login' },
  { name: 'form', path: '/form' },
  { name: 'table', path: '/table' },
  { name: 'tasks', path: '/tasks' },
  { name: 'store', path: '/store' },
  { name: 'about', path: '/about' },
];
test.use({ ...devices['Desktop Chrome'] });

for (const route of routes) {
  test.describe(`ACESSIBILITY `, () => {
    test.skip(`${route.name.toUpperCase()} page`, async ({ page }) => {
      const a11yPage = new AccessibilityPage(page);

      await a11yPage.goto(route.path);

      const results = await a11yPage.scan();

      expect(
        results.violations,
        formatViolations(results.violations, route.path)
      ).toEqual([]);
    });
  });
}
