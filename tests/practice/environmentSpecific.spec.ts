import { test, expect } from '@playwright/test';
import { getTestData } from '../../test-data';

test.describe('Practice - Environment specific tests', () => {
  // Тест запускается ТОЛЬКО на окружении Pre-Prod
  test('Pre-Prod only test: verify staging specific content', { tag: '@pre-prod' }, async ({ page }, testInfo) => {
    const data = getTestData(testInfo.project.name);
    console.log(`Running on: ${data.environmentName}`);
    expect(testInfo.project.name).toBe('pre-prod');
  });

  // Тест запускается ТОЛЬКО на окружении Prod
  test('Prod only test: verify production specific content', { tag: '@prod' }, async ({ page }, testInfo) => {
    const data = getTestData(testInfo.project.name);
    console.log(`Running on: ${data.environmentName}`);
    expect(testInfo.project.name).toBe('prod');
  });
});
