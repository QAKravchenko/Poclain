// 1. Импортируем из библиотеки @playwright/test основные функции: test (объявление теста) и expect (проверки)
import { test, expect } from '@playwright/test';

// 2. Импортируем класс Page Object главной страницы HomePage для взаимодействия с элементами сайта
import { HomePage } from '../../pages/HomePage';

// 3. Создаем группу тестов для блока слайдера (карусели) на главной странице Prod
test.describe('Home Page - Hero Slider', () => {

    // 4. Объявляем переменную homePage с типом HomePage, доступную для всех тестов группы
    let homePage: HomePage;

    // 5. Хук beforeEach выполняется автоматически перед запуском каждого теста в этом блоке
    test.beforeEach(async ({ page }) => {
        // 6. Инициализируем экземпляр Page Object главной страницы, передавая контекст текущей вкладки page
        homePage = new HomePage(page);

        // 7. Открываем главную страницу через метод goto() Page Object (базовый URL берется из настроек проекта)
        await homePage.goto();

        // 8. Принимаем все cookie через вызов метода acceptAll компонента cookieModal
        await homePage.cookieModal.acceptAll();

        // 9. Приостанавливаем автопрокрутку карусели, чтобы слайды не переключались сами во время тестов
        await homePage.pauseAutoplay();
    });

    // 11. Тест №1: проверка переключения слайдов кнопками Next и Previous
    test('переключение слайдов кнопками Next и Previous', async () => {
        // 12. Получаем начальный индекс активного слайда (значение атрибута data-slick-index)
        const initialIndex = await homePage.getActiveSlideIndex();

        // 13. Кликаем по кнопке перехода на следующий слайд
        await homePage.clickNextSlide();

        // 14. Проверяем утверждение: атрибут data-slick-index активного слайда изменился
        await expect(homePage.activeSlide).not.toHaveAttribute('data-slick-index', initialIndex!);

        // 15. Кликаем по кнопке перехода на предыдущий слайд
        await homePage.clickPreviousSlide();

        // 16. Проверяем утверждение: атрибут data-slick-index вернулся к первоначальному значению
        await expect(homePage.activeSlide).toHaveAttribute('data-slick-index', initialIndex!);
    });

    // 17. Тест №2: проверка того, что на каждом слайде отображается картинка и блок с текстом
    test('на каждом слайде отображается картинка и блок с текстом', async () => {
        // 18. Получаем общее количество реальных слайдов в карусели (без учета клонов slick)
        const totalSlides = await homePage.getRealSlidesCount();

        // 19. Проверяем утверждение: слайдер содержит хотя бы один слайд
        expect(totalSlides).toBeGreaterThan(0);

        // 20. Проходим циклом по каждому слайду карусели
        for (let i = 0; i < totalSlides; i++) {
            // 21. Проверяем утверждение: изображение текущего активного слайда отображается
            await expect(homePage.activeSlideImage).toBeVisible();

            // 22. Проверяем утверждение: у картинки есть непустой атрибут src
            await expect(homePage.activeSlideImage).toHaveAttribute('src', /.+/);

            // 23. Проверяем утверждение: информационный блок с текстом (.info-holder) виден
            await expect(homePage.activeSlideInfoHolder).toBeVisible();

            // 24. Проверяем утверждение: заголовок слайда отображается на странице
            await expect(homePage.activeSlideTitle).toBeVisible();

            // 25. Проверяем утверждение: текст описания слайда отображается на странице
            await expect(homePage.activeSlideDesc).toBeVisible();

            // 26. Получаем текстовое содержимое заголовка слайда
            const titleText = await homePage.activeSlideTitle.innerText();

            // 27. Получаем текстовое содержимое описания слайда
            const descText = await homePage.activeSlideDesc.innerText();

            // 28. Проверяем утверждение: заголовок не пустой (длина текста после обрезки пробелов > 0)
            expect(titleText.trim().length).toBeGreaterThan(0);

            // 29. Проверяем утверждение: описание не пустое (длина текста после обрезки пробелов > 0)
            expect(descText.trim().length).toBeGreaterThan(0);

            // 30. Проверяем, предусмотрена ли кнопка в блоке на текущем слайде
            if (await homePage.activeSlideCtaButton.count() > 0) {
                // 31. Проверяем утверждение: кнопка действия отображается
                await expect(homePage.activeSlideCtaButton).toBeVisible();

                // 32. Проверяем утверждение: кнопка действия активна и кликабельна
                await expect(homePage.activeSlideCtaButton).toBeEnabled();
            }

            // 33. Если это не последний слайд, переключаемся на следующий для проверки
            if (i < totalSlides - 1) {
                // 34. Нажимаем кнопку перехода к следующему слайду
                await homePage.clickNextSlide();
            }
        }
    });

    // 35. Тест №3: проверка кликабельности кнопки в блоке с текстом на каждом слайде и перехода на целевую страницу
    test('кнопка в блоке с текстом на каждом слайде кликабельна и открывает соответствующую страницу', async ({ page }) => {
        // 36. Получаем общее количество реальных слайдов в карусели
        const totalSlides = await homePage.getRealSlidesCount();

        // 37. Проходим циклом по каждому слайду
        for (let i = 0; i < totalSlides; i++) {
            // 38. Возвращаемся на главную страницу для чистоты каждого перехода
            await homePage.goto();

            // 39. Принимаем cookie, если всплыло окно
            await homePage.cookieModal.acceptAll();

            // 40. Приостанавливаем автопрокрутку
            await homePage.pauseAutoplay();

            // 41. Переключаем слайдер к текущему слайду по индексу i
            await homePage.goToSlide(i);

            // 42. Проверяем, предусмотрена ли кнопка в текстовом блоке текущего слайда
            if ((await homePage.activeSlideCtaButton.count()) > 0) {
                // 43. Получаем локатор кнопки действия активного слайда
                const ctaButton = homePage.activeSlideCtaButton;

                // 44. Проверяем видимость кнопки на слайде
                await expect(ctaButton).toBeVisible();

                // 45. Проверяем доступность и кликабельность кнопки
                await expect(ctaButton).toBeEnabled();

                // 46. Считываем целевой адрес ссылки (атрибут href) кнопки
                const targetUrl = await ctaButton.getAttribute('href');

                // 47. Проверяем утверждение: адрес targetUrl не пустой
                expect(targetUrl).toBeTruthy();

                // 48. Выполняем клик по кнопке в блоке с текстом
                await ctaButton.click();

                // 49. Ожидаем завершения перехода браузера на целевую страницу
                await page.waitForURL(targetUrl!);

                // 50. Проверяем утверждение: адрес текущей страницы совпадает с ожидаемым
                expect(page.url()).toBe(targetUrl);
            }
        }
    });

    // 51. Тест №4: проверка кликабельности картинки на каждом слайде и перехода на целевую страницу
    test('картинка на каждом слайде кликабельна и открывает соответствующую страницу', async ({ page }) => {
        // 52. Получаем общее количество реальных слайдов карусели
        const totalSlides = await homePage.getRealSlidesCount();

        // 53. Проходим циклом по каждому слайду карусели
        for (let i = 0; i < totalSlides; i++) {
            // 54. Открываем главную страницу заново для независимости каждого перехода
            await homePage.goto();

            // 55. Принимаем cookie
            await homePage.cookieModal.acceptAll();

            // 56. Приостанавливаем автопрокрутку карусели
            await homePage.pauseAutoplay();

            // 57. Переключаем слайдер на слайд с индексом i
            await homePage.goToSlide(i);

            // 58. Проверяем, обернута ли картинка активного слайда в ссылку
            if ((await homePage.activeSlideImageLink.count()) > 0) {
                // 59. Получаем локатор ссылки-изображения
                const imgLink = homePage.activeSlideImageLink;

                // 60. Проверяем видимость картинки-ссылки
                await expect(imgLink).toBeVisible();

                // 61. Проверяем кликабельность картинки-ссылки
                await expect(imgLink).toBeEnabled();

                // 62. Считываем целевой адрес перехода из атрибута href
                const targetUrl = await imgLink.getAttribute('href');

                // 63. Проверяем утверждение: адрес перехода не пустой
                expect(targetUrl).toBeTruthy();

                // 64. Выполняем клик по картинке слайда
                await imgLink.click();

                // 65. Ожидаем завершения перехода браузера на целевую страницу
                await page.waitForURL(targetUrl!);

                // 66. Проверяем утверждение: текущий URL браузера совпадает с целевым адресом
                expect(page.url()).toBe(targetUrl);
            }
        }
    });
});
