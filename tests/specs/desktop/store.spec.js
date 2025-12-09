import { test } from '@playwright/test';
import { StorePage } from '../../pages/store/store.page';
import { NEW_PRODUCTS, PRODUCTS } from '../../data/store.data';

test.describe('STORE', () => {
  test('Check inventory Lightsaber', async ({ page }) => {
    const store = new StorePage(page);
    await store.navigateToStore();
    const { id, name, price, quantity } = PRODUCTS['lightsaber'];
    console.log(id);
  });
});
