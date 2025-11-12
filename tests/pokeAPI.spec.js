import { test, expect } from '@playwright/test';
import { TYPES } from './data/pokemon-type.js';

const BASE = 'https://pokeapi.co/api/v2/type/';

test.describe('TYPES', () => {
  for (const typeData of TYPES) {
    test(`Validate TYPE - ${typeData.name}`, async ({ request }) => {
      const response = await request.get(`${BASE}${typeData.name}`);
      expect(response.status()).toBe(200);

      const body = await response.json();
      expect(body.name).toBe(typeData.name);
      expect(body.damage_relations).toBeTruthy();

      const relations = body.damage_relations;

      if (typeData.doubleDamage) {
        const doubleFrom = relations.double_damage_from.map(r => r.name);
        expect(doubleFrom).toContain(typeData.doubleDamage);
      }

      if (typeData.immune) {
        const noDamageFrom = relations.no_damage_from.map(r => r.name);
        expect(noDamageFrom).toContain(typeData.immune);
      }
    });
  }
});
