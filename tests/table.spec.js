import { test } from '@playwright/test';

import hpCharacters from './data/json/hpCharacters.json' assert { type: 'json' };
import { HPTablePage } from './pages/table.page';

test.describe('HP TABLE', () => {
  for (const c of hpCharacters) {
    const title = `${c.name} | ${c.house || 'no-house'} | ${
      c.actor || 'no-actor'
    }`;

    test(`Validate row → ${title}`, async ({ page }) => {
      
      const hp = new HPTablePage(page);
      await hp.navigateToTable();
      await hp.validadeCharacterImage(c.name);
      await hp.expectNameAndHouse(c.name, c.house);
      await hp.expectBirth(c.dateOfBirth);
      await hp.expectActor(c.actor);
    });
  }
});
