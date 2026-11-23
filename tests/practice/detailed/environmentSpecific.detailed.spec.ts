// 1. Импортируем тестовые функции test и expect из Playwright
import { test, expect } from '@playwright/test';

// 2. Импортируем хелпер тестовых данных getTestData для загрузки данных активного окружения
import { getTestData } from '../../../test-data';

// 3. Описываем тестовую группу для демонстрации разделения тестов между Pre-Prod и Prod
test.describe('Practice - Environment specific tests', () => {

  // 4. Тест с тегом '@pre-prod': Playwright запустит его ТОЛЬКО на проекте 'pre-prod'
  test('Pre-Prod only test: verify staging specific content', { tag: '@pre-prod' }, async ({ page }, testInfo) => {
    // 5. Получаем тестовые данные для окружения Pre-Prod
    const data = getTestData(testInfo.project.name);

    // 6. Выводим в лог консоли название текущего окружения из данных
    console.log(`Running on: ${data.environmentName}`);

    // 7. Проверяем утверждение: имя запущенного проекта Playwright равно 'pre-prod'
    expect(testInfo.project.name).toBe('pre-prod');
  });

  // 8. Тест с тегом '@prod': Playwright запустит его ТОЛЬКО на проекте 'prod'
  test('Prod only test: verify production specific content', { tag: '@prod' }, async ({ page }, testInfo) => {
    // 9. Получаем тестовые данные для окружения Prod
    const data = getTestData(testInfo.project.name);

    // 10. Выводим в лог консоли название текущего окружения из данных
    console.log(`Running on: ${data.environmentName}`);

    // 11. Проверяем утверждение: имя запущенного проекта Playwright равно 'prod'
    expect(testInfo.project.name).toBe('prod');
  });
});
