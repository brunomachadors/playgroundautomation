import { expect, test } from '@playwright/test';

export class InventoryPage {
  constructor(page) {
    this.page = page;

    // --- FIXED LOCATORS ---
    this.tabInventory = page.getByTestId('store-tab-inventory');
    this.inputName = page.getByTestId('inventory-input-name');
    this.inputPrice = page.getByTestId('inventory-input-price');
    this.inputQuantity = page.getByTestId('inventory-input-quantity');
    this.submitButton = page.getByTestId('inventory-submit-button');

    // Dynamic locators by item id
    this.productName = (id) => page.getByTestId(`inventory-product-name-${id}`);
    this.productPrice = (id) =>
      page.getByTestId(`inventory-product-price-value-${id}`);
    this.productQuantity = (id) =>
      page.getByTestId(`inventory-product-quantity-${id}`);
    this.decreaseButton = (id) =>
      page.getByTestId(`inventory-product-decrease-${id}`);
    this.increaseButton = (id) =>
      page.getByTestId(`inventory-product-increase-${id}`);
  }

  /**
   * Navigate to the Inventory tab in the store.
   * Assumes the test is already on the store page.
   */
  async navigateToInventory() {
    await test.step('Navigate to Inventory tab', async () => {
      await this.page.goto('/store');
      await this.tabInventory.click();
    });
  }

  /**
   * Fill the inventory form fields with item data (without submitting).
   *
   * @param {{ name: string, price: number|string, quantity: number|string }} item
   */
  async fillItemInfo({ name, price, quantity }) {
    await test.step(`Fill item info: ${name}`, async () => {
      await this.inputName.fill(name);
      await this.inputPrice.fill(String(price / 100));
      await this.inputQuantity.fill(String(quantity));
    });
  }

  async submitNewItem() {
    await test.step('Submit item to inventory', async () => {
      await this.submitButton.click();
    });
  }

  async validateItemVisible({ id, name, price, quantity }) {
    await test.step(`Validate item ${id} is visible in the inventory`, async () => {
      await expect(this.productName(id)).toHaveText(name);
      await expect(this.productPrice(id)).toHaveText(
        String((price / 100).toFixed(2))
      );
      await expect(this.productQuantity(id)).toHaveText(String(quantity));
    });
  }

  /**
   * Decrease the quantity of an item by clicking the "-" button.
   * @param {number} id
   * @param {number} times
   */
  async decreaseQuantity(id, times = 1) {
    await test.step(`Decrease quantity for item ${id} (${times} time(s))`, async () => {
      for (let i = 0; i < times; i++) {
        await this.decreaseButton(id).click();
      }
    });
  }

  /**
   * Assert that the quantity of an item matches the expected value.
   * @param {number} id
   * @param {number} expectedQuantity
   */
  async expectQuantity(id, expectedQuantity) {
    await test.step(`Validate quantity for item ${id} is ${expectedQuantity}`, async () => {
      await expect(this.productQuantity(id)).toHaveText(
        String(expectedQuantity)
      );
    });
  }
}
