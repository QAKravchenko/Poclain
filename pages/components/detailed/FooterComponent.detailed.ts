// 1. Импортируем интерфейсы Page и Locator из библиотеки @playwright/test для работы с элементами подвала
import { type Page, type Locator } from '@playwright/test';

// 2. Объявляем класс компонента подвала сайта FooterComponent
export class FooterComponent {
    // 3. Ссылка на объект текущей страницы браузера
    readonly page: Page;
    // 4. Локатор главного контейнера тега <footer> подвала сайта
    readonly footer: Locator;

    // Социальные сети
    // 5. Локатор ссылки профиля компании в LinkedIn
    readonly linkedInLink: Locator;
    // 6. Локатор ссылки страницы компании в Facebook
    readonly facebookLink: Locator;
    // 7. Локатор ссылки профиля компании в Instagram
    readonly instagramLink: Locator;
    // 8. Локатор ссылки канала компании на YouTube
    readonly youtubeLink: Locator;
    // 9. Локатор ссылки аккаунта WeChat
    readonly weChatLink: Locator;
    // 10. Локатор ссылки профиля Tencent Video
    readonly tencentVideoLink: Locator;

    // Контакты и сеть
    // 11. Локатор ссылки страницы контактов Contact us в футере
    readonly contactUsLink: Locator;
    // 12. Локатор ссылки поиска дилерской сети Discover our sales network
    readonly discoverSalesNetworkLink: Locator;

    // Основные разделы футера
    // 13. Локатор ссылки каталога Products в футере
    readonly productsLink: Locator;
    // 14. Локатор ссылки раздела Systems в футере
    readonly systemsLink: Locator;
    // 15. Локатор ссылки раздела отраслей применения Applications в футере
    readonly applicationsLink: Locator;
    // 16. Локатор ссылки сервисного обслуживания Services & Support в футере
    readonly servicesSupportLink: Locator;
    // 17. Локатор ссылки раздела документации Resources в футере
    readonly resourcesLink: Locator;
    // 18. Локатор ссылки на все новости All our news в футере
    readonly allNewsLink: Locator;
    // 19. Локатор ссылки раздела вакансий Careers в футере
    readonly careersLink: Locator;
    // 20. Локатор ссылки страницы истории History в футере
    readonly historyLink: Locator;
    // 21. Локатор ссылки корпоративных ценностей Values в футере
    readonly valuesLink: Locator;

    // Внешние сайты Poclain (Other websites)
    // 22. Локатор ссылки на внешний интернет-магазин Poclain eShop в футере
    readonly poclainEshopLink: Locator;
    // 23. Локатор ссылки на китайский филиал сайта компании
    readonly chineseWebsiteLink: Locator;
    // 24. Локатор ссылки на портал для поставщиков Supplier Portal
    readonly supplierPortalLink: Locator;

    // Нижнее юридическое меню
    // 25. Локатор ссылки карты сайта Site Map
    readonly siteMapLink: Locator;
    // 26. Локатор ссылки юридической информации Legal information
    readonly legalInformationLink: Locator;
    // 27. Локатор ссылки политики конфиденциальности Privacy
    readonly privacyLink: Locator;
    // 28. Локатор ссылки управления cookie-файлами Cookies management
    readonly cookiesManagementLink: Locator;
    // 29. Локатор ссылки службы безопасности Security Incident Response
    readonly securityIncidentResponseLink: Locator;

    // 30. Конструктор компонента футера, принимающий страницу page
    constructor(page: Page) {
        // 31. Сохраняем объект страницы
        this.page = page;
        // 32. Находим контейнер footer на странице
        this.footer = page.locator('footer');

        // 33. Находим ссылку LinkedIn в футере
        this.linkedInLink = this.footer.getByRole('link', { name: 'LinkedIn' }).first();
        // 34. Находим ссылку Facebook в футере
        this.facebookLink = this.footer.getByRole('link', { name: 'Facebook' }).first();
        // 35. Находим ссылку Instagram в футере
        this.instagramLink = this.footer.getByRole('link', { name: 'Instagram' }).first();
        // 36. Находим ссылку Youtube в футере
        this.youtubeLink = this.footer.getByRole('link', { name: 'Youtube User' }).first();
        // 37. Находим ссылку weChat в футере
        this.weChatLink = this.footer.getByRole('link', { name: 'weChat' }).first();
        // 38. Находим ссылку Tencent Video в футере
        this.tencentVideoLink = this.footer.getByRole('link', { name: 'Tencent Video' }).first();

        // 39. Находим ссылку Contact us по ее тексту
        this.contactUsLink = this.footer.getByRole('link', { name: 'Contact us' });
        // 40. Находим ссылку Discover our sales network по ее тексту
        this.discoverSalesNetworkLink = this.footer.getByRole('link', { name: 'Discover our sales network' });

        // 41. Находим точную ссылку Products в футере
        this.productsLink = this.footer.getByRole('link', { name: 'Products', exact: true }).first();
        // 42. Находим точную ссылку Systems в футере
        this.systemsLink = this.footer.getByRole('link', { name: 'Systems', exact: true }).first();
        // 43. Находим точную ссылку Applications в футере
        this.applicationsLink = this.footer.getByRole('link', { name: 'Applications', exact: true }).first();
        // 44. Находим точную ссылку Services & Support в футере
        this.servicesSupportLink = this.footer.getByRole('link', { name: 'Services & Support', exact: true }).first();
        // 45. Находим точную ссылку Resources в футере
        this.resourcesLink = this.footer.getByRole('link', { name: 'Resources', exact: true }).first();
        // 46. Находим ссылку All our news в футере
        this.allNewsLink = this.footer.getByRole('link', { name: 'All our news' }).first();
        // 47. Находим ссылку Careers в футере
        this.careersLink = this.footer.getByRole('link', { name: 'Careers' }).first();
        // 48. Находим ссылку History в футере
        this.historyLink = this.footer.getByRole('link', { name: 'History' }).first();
        // 49. Находим ссылку Values в футере
        this.valuesLink = this.footer.getByRole('link', { name: 'Values' }).first();

        // 50. Находим ссылку Poclain eShop
        this.poclainEshopLink = this.footer.getByRole('link', { name: 'Poclain eShop' }).first();
        // 51. Находим ссылку Chinese website
        this.chineseWebsiteLink = this.footer.getByRole('link', { name: 'Chinese website' }).first();
        // 52. Находим ссылку Supplier Portal
        this.supplierPortalLink = this.footer.getByRole('link', { name: 'Supplier Portal' }).first();

        // 53. Находим ссылку Site Map в нижней строке футера
        this.siteMapLink = this.footer.getByRole('link', { name: 'Site Map' }).first();
        // 54. Находим ссылку Legal information
        this.legalInformationLink = this.footer.getByRole('link', { name: 'Legal information' }).first();
        // 55. Находим ссылку Privacy
        this.privacyLink = this.footer.getByRole('link', { name: 'Privacy' }).first();
        // 56. Находим ссылку Cookies management
        this.cookiesManagementLink = this.footer.getByRole('link', { name: 'Cookies management' }).first();
        // 57. Находим ссылку Security Incident Response
        this.securityIncidentResponseLink = this.footer.getByRole('link', { name: 'Security Incident Response' }).first();
    }
}
