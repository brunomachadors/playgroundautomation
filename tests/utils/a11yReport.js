import { createHtmlReport } from 'axe-html-reporter';
import fs from 'fs';

export function saveA11yReport({ results, pagePath, pageUrl }) {
  if (process.env.CI) {
    return;
  }
  fs.mkdirSync('axe-reports', { recursive: true });

  const safeName = pagePath === '/' ? 'home' : pagePath.replace('/', '');

  createHtmlReport({
    violations: results.violations,
    passes: results.passes,
    incomplete: results.incomplete,
    url: pageUrl,
    projectKey: 'PLAYGROUND',
    outputDir: 'axe-reports',
    reportFileName: `a11y-${safeName}.html`,
  });

  console.log(`Generated report: axe-reports/a11y-${safeName}.html`);
}
