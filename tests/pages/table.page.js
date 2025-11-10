import { expect, test } from '@playwright/test';

export const removeEmptySpace = (name) => name.replace(' ', '');

export class HPTablePage {
  constructor(page) {
    this.page = page;

    this.table = page.locator('#charactersTable');
    this.headers = page.locator('thead th');
    this.rows = page.locator('tbody tr');

    this.imageByAlt = (name) => page.getByRole('img', { name });
    this.nameCell = (name) =>
      page.locator(`#tableCharacterName${removeEmptySpace(name)}`);
    this.houseCell = (name) =>
      page.locator(`#tableCharacterHouse${removeEmptySpace(name)}`);
    this.birthCellByPartial = (partial) =>
      page.getByRole('cell', { name: new RegExp(partial) });
    this.actorCell = (actor) => page.getByRole('cell', { name: actor });
  }

  async navigateToTable() {
    await test.step('Navigate to HP characters table', async () => {
      await this.page.goto('/table');
    });
  }

  async validadeCharacterImage(name) {
    await test.step(`Open character row: ${name}`, async () => {
      const image = this.imageByAlt(name);
      await expect(image).toBeVisible();
    });
  }

  async expectNameAndHouse(name, house) {
    await test.step(`Validate name & house for: ${name}`, async () => {
      await expect(this.nameCell(name)).toHaveText(name);
      await expect(this.houseCell(name)).toHaveText(house);
    });
  }

  async expectBirth(birth) {
    birth = birth ? birth : 'Unknown';
    await test.step(`Validate birth date contains: ${birth}`, async () => {
      await expect(this.birthCellByPartial(birth)).toBeVisible();
      await expect(this.birthCellByPartial(birth)).toHaveText(birth);
    });
  }

  async expectActor(actor) {
    await test.step(`Validate actor: ${actor}`, async () => {
      await expect(this.actorCell(actor)).toBeVisible();
    });
  }
}
