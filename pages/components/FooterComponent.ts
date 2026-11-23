import { type Page, type Locator } from '@playwright/test';

export class FooterComponent {
    readonly page: Page;
    readonly footer: Locator;

    // Социальные сети
    readonly linkedInLink: Locator;
    readonly facebookLink: Locator;
    readonly instagramLink: Locator;
    readonly youtubeLink: Locator;
    readonly weChatLink: Locator;
    readonly tencentVideoLink: Locator;

    // Контакты и сеть
    readonly contactUsLink: Locator;
    readonly discoverSalesNetworkLink: Locator;

    // Основные разделы футера
    readonly productsLink: Locator;
    readonly systemsLink: Locator;
    readonly applicationsLink: Locator;
    readonly servicesSupportLink: Locator;
    readonly resourcesLink: Locator;
    readonly allNewsLink: Locator;
    readonly careersLink: Locator;
    readonly historyLink: Locator;
    readonly valuesLink: Locator;

    // Внешние сайты Poclain (Other websites)
    readonly poclainEshopLink: Locator;
    readonly chineseWebsiteLink: Locator;
    readonly supplierPortalLink: Locator;

    // Нижнее юридическое меню
    readonly siteMapLink: Locator;
    readonly legalInformationLink: Locator;
    readonly privacyLink: Locator;
    readonly cookiesManagementLink: Locator;
    readonly securityIncidentResponseLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.footer = page.locator('footer');

        this.linkedInLink = this.footer.getByRole('link', { name: 'LinkedIn' }).first();
        this.facebookLink = this.footer.getByRole('link', { name: 'Facebook' }).first();
        this.instagramLink = this.footer.getByRole('link', { name: 'Instagram' }).first();
        this.youtubeLink = this.footer.getByRole('link', { name: 'Youtube User' }).first();
        this.weChatLink = this.footer.getByRole('link', { name: 'weChat' }).first();
        this.tencentVideoLink = this.footer.getByRole('link', { name: 'Tencent Video' }).first();

        this.contactUsLink = this.footer.getByRole('link', { name: 'Contact us' });
        this.discoverSalesNetworkLink = this.footer.getByRole('link', { name: 'Discover our sales network' });

        this.productsLink = this.footer.getByRole('link', { name: 'Products', exact: true }).first();
        this.systemsLink = this.footer.getByRole('link', { name: 'Systems', exact: true }).first();
        this.applicationsLink = this.footer.getByRole('link', { name: 'Applications', exact: true }).first();
        this.servicesSupportLink = this.footer.getByRole('link', { name: 'Services & Support', exact: true }).first();
        this.resourcesLink = this.footer.getByRole('link', { name: 'Resources', exact: true }).first();
        this.allNewsLink = this.footer.getByRole('link', { name: 'All our news' }).first();
        this.careersLink = this.footer.getByRole('link', { name: 'Careers' }).first();
        this.historyLink = this.footer.getByRole('link', { name: 'History' }).first();
        this.valuesLink = this.footer.getByRole('link', { name: 'Values' }).first();

        this.poclainEshopLink = this.footer.getByRole('link', { name: 'Poclain eShop' }).first();
        this.chineseWebsiteLink = this.footer.getByRole('link', { name: 'Chinese website' }).first();
        this.supplierPortalLink = this.footer.getByRole('link', { name: 'Supplier Portal' }).first();

        this.siteMapLink = this.footer.getByRole('link', { name: 'Site Map' }).first();
        this.legalInformationLink = this.footer.getByRole('link', { name: 'Legal information' }).first();
        this.privacyLink = this.footer.getByRole('link', { name: 'Privacy' }).first();
        this.cookiesManagementLink = this.footer.getByRole('link', { name: 'Cookies management' }).first();
        this.securityIncidentResponseLink = this.footer.getByRole('link', { name: 'Security Incident Response' }).first();
    }
}
