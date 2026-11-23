// 1. Импортируем базовые функции test и expect из пакета @playwright/test
import { test, expect } from '@playwright/test';

// 2. Импортируем класс Page Object HomePage для управления элементами главной страницы сайта
import { HomePage } from '../../../pages/HomePage';

// 3. Создаем тренировочный тестовый набор describe под названием 'Practice - Slider check'
test.describe('Practice - Slider check', () => {

    // 4. Объявляем переменную homepage с типом HomePage для использования внутри тестов этой группы
    let homepage: HomePage;

    // 5. Хук beforeEach выполняется автоматически перед каждым тестом внутри этого блока describe
    test.beforeEach(async ({ page }) => {
        // 6. Создаем экземпляр Page Object главной страницы, передавая контекст текущей вкладки page
        homepage = new HomePage(page);

        // 7. Переходим на главную страницу через метод goto()
        await homepage.goto();

        // 8. Создаем локатор для поиска кнопки согласия на использование cookie с текстом 'Accept'
        const acceptCookies = page.getByRole('button', { name: 'Accept' });

        // 9. Если баннер cookie виден на экране, нажимаем кнопку 'Accept'
        if (await acceptCookies.isVisible()) await acceptCookies.click();
    });

    // 10. Тренировочный тест для проверки клика по кнопке в слайдере
    test('Check slider button', async ({ page }) => {
        // 11. Находим кнопку по роли 'button' с именем 'Test' и нажимаем на неё
        await page.getByRole('button', { name: 'Test' }).click();
    });
});
