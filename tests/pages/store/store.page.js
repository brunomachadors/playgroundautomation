import { InventoryPage } from './inventory.page';

export class StorePage {
  constructor(page) {
    this.page = page;
    this.inventory = new InventoryPage(page);
  }

  /**
   * @param {number} projectName
   */
  async navigateToStore() {
    await this.page.goto('/store');
  }
}
