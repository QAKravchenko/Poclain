// 1. Импортируем типы Page и Locator, а также функцию проверок expect из библиотеки @playwright/test
import { type Page, type Locator, expect } from '@playwright/test';
// 2. Импортируем компонент шапки сайта HeaderComponent
import { HeaderComponent } from '../components/HeaderComponent';
// 3. Импортируем компонент подвала сайта FooterComponent
import { FooterComponent } from '../components/FooterComponent';
// 4. Импортируем компонент модального окна согласия на cookie CookieModalComponent
import { CookieModalComponent } from '../components/CookieModalComponent';

// 5. Объявляем экспортируемый класс Page Object для главной страницы https://poclain.com/
export class HomePage {
    // 6. Ссылка на объект текущей страницы браузера Playwright
    readonly page: Page;

    // Глобальные сквозные компоненты
    // 7. Экземпляр компонента шапки сайта (навигация, меню, поиск, логотип)
    readonly header: HeaderComponent;
    // 8. Экземпляр компонента подвала сайта (соцсети, контакты, ссылки)
    readonly footer: FooterComponent;
    // 9. Экземпляр компонента модального окна согласия на cookie Axeptio
    readonly cookieModal: CookieModalComponent;

    // =========================================================================
    // 1. HERO SLIDER (Главный слайдер / карусель)
    // =========================================================================
    // 10. Локатор главного контейнера слайдера Slick (.slick-slider)
    readonly heroSlider: Locator;
    // 11. Локатор всех элементов слайдов (.slick-slide)
    readonly slides: Locator;
    // 12. Локатор текущего активного слайда (.slick-current)
    readonly activeSlide: Locator;
    // 13. Локатор кнопки переключения на предыдущий слайд Previous
    readonly sliderPrevButton: Locator;
    // 14. Локатор кнопки переключения на следующий слайд Next
    readonly sliderNextButton: Locator;
    // 15. Локатор всех кнопок призыва к действию внутри текстовых блоков слайдов
    readonly slideCtaButtons: Locator;
    // 16. Локатор всех ссылок-изображений на слайдах
    readonly slideImageLinks: Locator;
    // 17. Локатор картинки текущего активного слайда
    readonly activeSlideImage: Locator;
    // 18. Локатор ссылки-картинки активного слайда
    readonly activeSlideImageLink: Locator;
    // 19. Локатор текстового информационного блока (.info-holder) активного слайда
    readonly activeSlideInfoHolder: Locator;
    // 20. Локатор заголовка активного слайда
    readonly activeSlideTitle: Locator;
    // 21. Локатор описания активного слайда
    readonly activeSlideDesc: Locator;
    // 22. Локатор кнопки призыва к действию на активном слайде
    readonly activeSlideCtaButton: Locator;

    // =========================================================================
    // 2. PRODUCTS & SYSTEMS CATEGORIES (Категории продуктов и систем)
    // =========================================================================
    // 23. Локатор заголовка секции категорий продукции второго уровня
    readonly productsSectionHeading: Locator;

    // Карточка: Hydraulic Motors
    // 24. Локатор ссылки в заголовке карточки Hydraulic Motors
    readonly hydraulicMotorsHeadingLink: Locator;
    // 25. Локатор ссылки по изображению гидромотора
    readonly hydraulicMotorsImageLink: Locator;
    // 26. Локатор ссылки перехода ко всем моторам See all motors
    readonly seeAllMotorsLink: Locator;

    // Карточка: Hydraulic Pumps
    // 27. Локатор ссылки в заголовке карточки Hydraulic Pumps
    readonly hydraulicPumpsHeadingLink: Locator;
    // 28. Локатор ссылки по изображению гидронасоса
    readonly hydraulicPumpsImageLink: Locator;
    // 29. Локатор ссылки перехода ко всем насосам See all pumps
    readonly seeAllPumpsLink: Locator;

    // Карточка: Hydraulic Valves
    // 30. Локатор ссылки в заголовке карточки Hydraulic Valves
    readonly hydraulicValvesHeadingLink: Locator;
    // 31. Локатор ссылки по изображению клапанов
    readonly hydraulicValvesImageLink: Locator;
    // 32. Локатор ссылки перехода ко всем клапанам See all valves
    readonly seeAllValvesLink: Locator;

    // Карточка: Systems
    // 33. Локатор ссылки в заголовке карточки Systems
    readonly systemsHeadingLink: Locator;
    // 34. Локатор ссылки по изображению систем
    readonly systemsImageLink: Locator;
    // 35. Локатор ссылки перехода ко всем системам See all systems
    readonly seeAllSystemsLink: Locator;

    // =========================================================================
    // 3. APPLICATIONS (Секция «Отрасли применения»)
    // =========================================================================
    // 36. Локатор заголовка секции Applications
    readonly applicationsSectionHeading: Locator;
    // 37. Локатор ссылки строительного оборудования Construction
    readonly constructionAppLink: Locator;
    // 38. Локатор заголовка карточки строительного оборудования
    readonly constructionAppHeading: Locator;
    // 39. Локатор ссылки дорожной техники Road Machinery
    readonly roadMachineryAppLink: Locator;
    // 40. Локатор заголовка карточки дорожной техники
    readonly roadMachineryAppHeading: Locator;
    // 41. Локатор ссылки сельскохозяйственной техники Agriculture
    readonly agricultureAppLink: Locator;
    // 42. Локатор заголовка карточки сельскохозяйственной техники
    readonly agricultureAppHeading: Locator;
    // 43. Локатор ссылки промышленной техники Industrial
    readonly industrialAppLink: Locator;
    // 44. Локатор заголовка карточки промышленной техники
    readonly industrialAppHeading: Locator;
    // 45. Локатор ссылки горнодобывающей техники Mining
    readonly miningAppLink: Locator;
    // 46. Локатор заголовка карточки горнодобывающей техники
    readonly miningAppHeading: Locator;

    // =========================================================================
    // 4. NEWS & VIDEOS (Секция «Новости и Видео»)
    // =========================================================================
    // 47. Локатор заголовка секции новостей News
    readonly newsSectionHeading: Locator;
    // 48. Локатор ссылки перехода ко всем новостям All news
    readonly allNewsLink: Locator;
    // 49. Локатор заголовка секции видеороликов Videos
    readonly videosSectionHeading: Locator;
    // 50. Локатор ссылки перехода ко всем видео All videos
    readonly allVideosLink: Locator;

    // =========================================================================
    // 5. ELECTRIFICATION (Секция «Электрификация»)
    // =========================================================================
    // 51. Локатор главного заголовка секции электрификации
    readonly electrificationSectionHeading: Locator;
    // 52. Локатор изображения секции электрификации
    readonly electrificationImage: Locator;
    // 53. Локатор ссылки ознакомления с решениями электрификации
    readonly discoverElectrificationLink: Locator;

    // =========================================================================
    // 6. POCLAIN ALL OVER THE WORLD (Секция «Poclain по всему миру»)
    // =========================================================================
    // 54. Локатор заголовка секции глобального присутствия Poclain all over the world
    readonly worldwideSectionHeading: Locator;
    // 55. Локатор ссылки поиска представительств Find our location
    readonly findOurLocationLink: Locator;
    // 56. Локатор интерактивной карты мира
    readonly worldMapImage: Locator;

    // =========================================================================
    // 7. TRUSTED PARTNER (Секция «Poclain Hydraulics, a trusted partner»)
    // =========================================================================
    // 57. Локатор заголовка секции доверенного партнерства
    readonly trustedPartnerSectionHeading: Locator;
    // 58. Локатор ссылки вакансий Job opportunities
    readonly jobOpportunitiesLink: Locator;
    // 59. Локатор ссылки корпоративных обязательств Our commitments
    readonly ourCommitmentsLink: Locator;
    // 60. Локатор ссылки ключевых ценностей Our values
    readonly ourValuesLink: Locator;
    // 61. Локатор ссылки перехода к форме обратной связи Contact
    readonly trustedPartnerContactLink: Locator;

    // 62. Конструктор класса HomePage, инициализирующий компоненты и уникальные локаторы
    constructor(page: Page) {
        // 63. Сохраняем объект текущей страницы браузера
        this.page = page;

        // 64. Инициализируем компонент шапки сайта
        this.header = new HeaderComponent(page);
        // 65. Инициализируем компонент подвала сайта
        this.footer = new FooterComponent(page);
        // 66. Инициализируем компонент модального окна согласия на cookie
        this.cookieModal = new CookieModalComponent(page);

        // 67. Находим слайдер Slick
        this.heroSlider = page.locator('.slick-slider').first();
        // 68. Находим коллекцию слайдов
        this.slides = page.locator('.slick-slide');
        // 69. Находим текущий активный слайд
        this.activeSlide = page.locator('.slick-slide.slick-current');
        // 70. Находим кнопку переключения назад Previous
        this.sliderPrevButton = page.getByRole('button', { name: 'Previous' });
        // 71. Находим кнопку переключения вперед Next
        this.sliderNextButton = page.getByRole('button', { name: 'Next' });
        // 72. Находим коллекцию кнопок внутри слайдов
        this.slideCtaButtons = page.locator('.slick-slide .info-holder a');
        // 73. Находим коллекцию картинок-ссылок внутри слайдов
        this.slideImageLinks = page.locator('.slick-slide .img-holder a');
        // 74. Находим картинку на активном слайде
        this.activeSlideImage = this.activeSlide.locator('.img-holder img');
        // 75. Находим ссылку картинки на активном слайде
        this.activeSlideImageLink = this.activeSlide.locator('.img-holder a');
        // 76. Находим блок описания на активном слайде
        this.activeSlideInfoHolder = this.activeSlide.locator('.info-holder');
        // 77. Находим заголовок на активном слайде
        this.activeSlideTitle = this.activeSlide.locator('.info-holder__title');
        // 78. Находим описание на активном слайде
        this.activeSlideDesc = this.activeSlide.locator('.info-holder__desc');
        // 79. Находим кнопку на активном слайде
        this.activeSlideCtaButton = this.activeSlide.locator('.info-holder a');

        // 80. Находим заголовок секции категорий продукции
        this.productsSectionHeading = page.getByRole('heading', { name: 'Our products & systems categories', level: 2 });
        // 81. Находим заголовок карточки гидромоторов
        this.hydraulicMotorsHeadingLink = page.getByRole('heading', { name: 'Hydraulic Motors', level: 3 }).getByRole('link');
        // 82. Находим изображение карточки гидромоторов
        this.hydraulicMotorsImageLink = page.getByRole('link', { name: 'our hydraulic motor' });
        // 83. Находим ссылку перехода ко всем гидромоторам
        this.seeAllMotorsLink = page.getByRole('link', { name: 'See all motors' });

        // 84. Находим заголовок карточки гидронасосов
        this.hydraulicPumpsHeadingLink = page.getByRole('heading', { name: 'Hydraulic Pumps', level: 3 }).getByRole('link');
        // 85. Находим изображение карточки гидронасосов
        this.hydraulicPumpsImageLink = page.getByRole('link', { name: 'HP-Hydraulic-Pump-300x210' });
        // 86. Находим ссылку перехода ко всем гидронасосам
        this.seeAllPumpsLink = page.getByRole('link', { name: 'See all pumps' });

        // 87. Находим заголовок карточки гидроклапанов
        this.hydraulicValvesHeadingLink = page.getByRole('heading', { name: 'Hydraulic Valves', level: 3 }).getByRole('link');
        // 88. Находим изображение карточки гидроклапанов
        this.hydraulicValvesImageLink = page.getByRole('link', { name: 'our hydraulic valves' });
        // 89. Находим ссылку перехода ко всем гидроклапанам
        this.seeAllValvesLink = page.getByRole('link', { name: 'See all valves' });

        // 90. Находим заголовок карточки систем
        this.systemsHeadingLink = page.getByRole('heading', { name: 'Systems', level: 3 }).getByRole('link');
        // 91. Находим изображение карточки систем
        this.systemsImageLink = page.getByRole('link', { name: 'Systems-300x210' });
        // 92. Находим ссылку перехода ко всем системам
        this.seeAllSystemsLink = page.getByRole('link', { name: 'See all systems' });

        // 93. Находим заголовок секции Applications
        this.applicationsSectionHeading = page.getByRole('heading', { name: 'Applications', level: 2 });
        // 94. Находим ссылку отрасли Construction
        this.constructionAppLink = page.locator('main a[href="/applications/construction"]');
        // 95. Находим заголовок отрасли Construction
        this.constructionAppHeading = page.getByRole('heading', { name: 'Construction & Material Handling', level: 3 });
        // 96. Находим ссылку отрасли Road Machinery
        this.roadMachineryAppLink = page.locator('main a[href="/applications/road-machinery"]');
        // 97. Находим заголовок отрасли Road Machinery
        this.roadMachineryAppHeading = page.getByRole('heading', { name: 'Road Machinery', level: 3 });
        // 98. Находим ссылку отрасли Agriculture
        this.agricultureAppLink = page.locator('main a[href="/applications/agriculture"]');
        // 99. Находим заголовок отрасли Agriculture
        this.agricultureAppHeading = page.getByRole('heading', { name: 'Agriculture & Forestry', level: 3 });
        // 100. Находим ссылку отрасли Industrial
        this.industrialAppLink = page.locator('main a[href="/applications/industrial"]');
        // 101. Находим заголовок отрасли Industrial
        this.industrialAppHeading = page.getByRole('heading', { name: 'Environment & Industrial', level: 3 });
        // 102. Находим ссылку отрасли Mining
        this.miningAppLink = page.locator('main a[href="/applications/mining"]');
        // 103. Находим заголовок отрасли Mining
        this.miningAppHeading = page.getByRole('heading', { name: 'Drilling & Mining', level: 3 });

        // 104. Находим заголовок секции новостей News
        this.newsSectionHeading = page.locator('main').getByRole('heading', { name: 'News', level: 2 });
        // 105. Находим ссылку All news
        this.allNewsLink = page.getByRole('link', { name: 'All news' });
        // 106. Находим заголовок секции видео Videos
        this.videosSectionHeading = page.getByRole('heading', { name: 'Videos', level: 2 });
        // 107. Находим ссылку All videos
        this.allVideosLink = page.getByRole('link', { name: 'All videos' });

        // 108. Находим заголовок секции электрификации
        this.electrificationSectionHeading = page.getByRole('heading', {
            name: 'Electrification, Innovation Made Easy for Efficient & Sustainable Future',
            level: 2,
        });
        // 109. Находим изображение секции электрификации
        this.electrificationImage = page.getByRole('img', { name: 'Electrification HP Zoom' });
        // 110. Находим ссылку перехода к решениям электрификации
        this.discoverElectrificationLink = page.getByRole('link', {
            name: 'Discover our electrification solutions today!',
        });

        // 111. Находим заголовок присутствия по всему миру
        this.worldwideSectionHeading = page.getByRole('heading', { name: 'Poclain all over the world', level: 2 });
        // 112. Находим ссылку поиска локаций Find our location
        this.findOurLocationLink = page.getByRole('link', { name: 'Find our location' });
        // 113. Находим изображение карты мира
        this.worldMapImage = page.getByRole('img', { name: 'map HP' });

        // 114. Находим заголовок секции доверенного партнерства
        this.trustedPartnerSectionHeading = page.getByRole('heading', {
            name: 'Poclain Hydraulics, a trusted partner',
            level: 2,
        });
        // 115. Находим ссылку Job opportunities
        this.jobOpportunitiesLink = page.getByRole('link', { name: 'Job opportunities' });
        // 116. Находим ссылку Our commitments
        this.ourCommitmentsLink = page.getByRole('link', { name: 'Our commitments' });
        // 117. Находим ссылку Our values
        this.ourValuesLink = page.getByRole('link', { name: 'Our values' });
        // 118. Находим точную ссылку Contact в теле страницы
        this.trustedPartnerContactLink = page.locator('main').getByRole('link', { name: 'Contact', exact: true });
    }

    // =========================================================================
    // МЕТОДЫ СТРАНИЦЫ (Actions)
    // =========================================================================

    // 119. Асинхронный метод для перехода на главную страницу сайта
    async goto() {
        // 120. Переходим по относительному адресу '/' (базовый URL берется из настроек конфигурации)
        await this.page.goto('/');
    }

    // 121. Асинхронный метод для подсчета количества реальных слайдов в карусели
    async getRealSlidesCount(): Promise<number> {
        // 122. Возвращаем количество элементов слайдов, исключая клонированные (.slick-cloned)
        return await this.heroSlider.locator('.slick-slide:not(.slick-cloned)').count();
    }

    // 123. Асинхронный метод получения индекса текущего видимого слайда
    async getActiveSlideIndex(): Promise<string | null> {
        // 124. Ожидаем видимости активного слайда
        await expect(this.activeSlide).toBeVisible();
        // 125. Считываем значение атрибута data-slick-index
        return await this.activeSlide.getAttribute('data-slick-index');
    }

    // 126. Асинхронный метод приостановки автопрокрутки слайдера карусели
    async pauseAutoplay() {
        // 127. Наводим курсор на область слайдера
        await this.heroSlider.hover().catch(() => {});
        // 128. Вызываем slickPause в контексте браузера для остановки таймера слайдера
        await this.page.evaluate(() => {
            const el = document.querySelector('.slick-slider');
            if (el && (window as any).jQuery) {
                (window as any).jQuery(el).slick('slickPause');
            }
        }).catch(() => {});
    }

    // 129. Асинхронный метод переключения на следующий слайд
    async clickNextSlide() {
        // 130. Нажимаем кнопку Next
        await this.sliderNextButton.click();
        // 131. Ожидаем завершения анимации прокрутки (600 мс)
        await this.page.waitForTimeout(600);
        // 132. Подтверждаем видимость активного слайда
        await expect(this.activeSlide).toBeVisible();
    }

    // 133. Асинхронный метод переключения на предыдущий слайд
    async clickPreviousSlide() {
        // 134. Нажимаем кнопку Previous
        await this.sliderPrevButton.click();
        // 135. Ожидаем завершения анимации перехода (600 мс)
        await this.page.waitForTimeout(600);
        // 136. Подтверждаем видимость активного слайда
        await expect(this.activeSlide).toBeVisible();
    }

    // 136.1. Асинхронный метод для последовательного перехода к указанному слайду по его порядковому номеру
    async goToSlide(slideIndex: number) {
        // 136.2. Кликаем кнопку Next нужное количество раз от нулевого слайда до целевого
        for (let step = 0; step < slideIndex; step++) {
            await this.clickNextSlide();
        }
    }

    // 137. Асинхронный метод клика по первой доступной CTA-кнопке слайда
    async clickFirstSlideCtaButton(): Promise<string> {
        // 138. Находим кнопку действия на активном слайде
        const activeSlideButton = this.activeSlide.locator('.info-holder a');
        // 139. Если на текущем слайде кнопки нет, переключаемся на следующий
        if ((await activeSlideButton.count()) === 0) {
            await this.clickNextSlide();
        }
        // 140. Ожидаем видимости кнопки
        await expect(activeSlideButton).toBeVisible();
        // 141. Считываем целевой URL из атрибута href
        const targetUrl = await activeSlideButton.getAttribute('href');
        // 142. Проверяем утверждение: адрес ссылки не является пустым
        expect(targetUrl).toBeTruthy();
        // 143. Выполняем клик по кнопке
        await activeSlideButton.click();
        // 144. Возвращаем полученный целевой URL
        return targetUrl!;
    }
}
