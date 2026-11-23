// 1. Импортируем типы Page и Locator из библиотеки @playwright/test для взаимодействия с элементами окна
import { type Page, type Locator } from '@playwright/test';

// 2. Объявляем класс компонента модального окна согласия на cookie Axeptio
export class CookieModalComponent {
    // 3. Ссылка на объект текущей страницы браузера
    readonly page: Page;
    // 4. Локатор корневого оверлея виджета согласия на cookie (#axeptio_overlay)
    readonly overlay: Locator;
    // 5. Локатор контейнера диалогового окна с кнопками и текстом
    readonly modalContainer: Locator;
    // 6. Локатор заголовка окна согласия (Do you accept cookies ?)
    readonly title: Locator;
    // 7. Локатор текста описания политики сбора cookie
    readonly description: Locator;
    // 8. Локатор кнопки принятия всех cookie "OK" (#axeptio_btn_acceptAll)
    readonly acceptAllButton: Locator;
    // 9. Локатор кнопки отклонения cookie "No, thanks" (#axeptio_btn_dismiss)
    readonly dismissButton: Locator;
    // 10. Локатор кнопки выборочной настройки "I want to choose" (#axeptio_btn_configure)
    readonly configureButton: Locator;
    // 11. Локатор ссылки на политику конфиденциальности
    readonly privacyPolicyLink: Locator;

    // 12. Конструктор компонента инициализирует локаторы через переданный объект page
    constructor(page: Page) {
        // 13. Сохраняем объект страницы
        this.page = page;
        // 14. Находим корневой элемент Axeptio
        this.overlay = page.locator('#axeptio_overlay');
        // 15. Находим контейнер диалога по атрибуту data-testid
        this.modalContainer = this.overlay.locator('[data-testid="widget-container"]').first();
        // 16. Находим заголовок окна согласия
        this.title = this.modalContainer.locator('h2, h3, [class*="title"]').first();
        // 17. Находим текст пояснения
        this.description = this.modalContainer.locator('p, [class*="description"], [class*="text"]').first();
        // 18. Находим кнопку принятия всех cookie по уникальному ID
        this.acceptAllButton = this.overlay.locator('#axeptio_btn_acceptAll');
        // 19. Находим кнопку отклонения cookie по уникальному ID
        this.dismissButton = this.overlay.locator('#axeptio_btn_dismiss');
        // 20. Находим кнопку детальной настройки cookie по уникальному ID
        this.configureButton = this.overlay.locator('#axeptio_btn_configure');
        // 21. Находим ссылку на подробности политики приватности
        this.privacyPolicyLink = this.modalContainer.locator('a[href*="privacy"]').first();
    }

    // 22. Асинхронный метод проверки видимости модального окна согласия
    async isVisible(): Promise<boolean> {
        // 23. Проверяем, видна ли на экране кнопка принятия cookie
        return await this.acceptAllButton.isVisible();
    }

    // 24. Асинхронный метод для принятия всех cookie (нажатие "OK")
    async acceptAll(): Promise<void> {
        // 25. Если кнопка согласия отображается на странице
        if (await this.acceptAllButton.isVisible()) {
            // 26. Нажимаем кнопку "OK"
            await this.acceptAllButton.click();
            // 27. Ожидаем скрытия диалогового окна с таймаутом до 5 секунд
            await this.modalContainer.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
        }
    }

    // 28. Асинхронный метод для отклонения cookie (нажатие "No, thanks")
    async dismiss(): Promise<void> {
        // 29. Если кнопка отклонения отображается на странице
        if (await this.dismissButton.isVisible()) {
            // 30. Нажимаем кнопку "No, thanks"
            await this.dismissButton.click();
            // 31. Ожидаем скрытия диалогового окна
            await this.modalContainer.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
        }
    }

    // 32. Асинхронный метод открытия детальных настроек cookie (нажатие "I want to choose")
    async configure(): Promise<void> {
        // 33. Нажимаем кнопку "I want to choose"
        await this.configureButton.click();
    }
}
