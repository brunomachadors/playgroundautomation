import { test } from '@playwright/test';
import { InventoryPage } from '../../pages/store/inventory.page';
import { NEW_PRODUCTS, PRODUCTS } from '../../data/store.data';

test('Add item to inventory', async ({ page }) => {
  const inventory = new InventoryPage(page);
  const item = NEW_PRODUCTS['masterball'];
  await inventory.navigateToInventory();
  await inventory.fillItemInfo(item);
  await inventory.submitNewItem();
  await inventory.validateItemVisible(item);
});

test('Remove item from stock', async ({ page }) => {
  const inventory = new InventoryPage(page);
  const item = PRODUCTS['rubberDuck'];
  await inventory.navigateToInventory();
  await inventory.validateItemVisible(item);
});
