import { type Page, type Locator, expect } from '@playwright/test';
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import { CookieModalComponent } from './components/CookieModalComponent';

export class HomePage {
    readonly page: Page;

    // Глобальные сквозные компоненты
    readonly header: HeaderComponent;
    readonly footer: FooterComponent;
    readonly cookieModal: CookieModalComponent;

    // =========================================================================
    // 1. HERO SLIDER (Главный слайдер / карусель)
    // =========================================================================
    readonly heroSlider: Locator;
    readonly slides: Locator;
    readonly activeSlide: Locator;
    readonly sliderPrevButton: Locator;
    readonly sliderNextButton: Locator;
    readonly slideCtaButtons: Locator;
    readonly slideImageLinks: Locator;
    readonly activeSlideImage: Locator;
    readonly activeSlideImageLink: Locator;
    readonly activeSlideInfoHolder: Locator;
    readonly activeSlideTitle: Locator;
    readonly activeSlideDesc: Locator;
    readonly activeSlideCtaButton: Locator;

    // =========================================================================
    // 2. PRODUCTS & SYSTEMS CATEGORIES (Категории продуктов и систем)
    // =========================================================================
    readonly productsSectionHeading: Locator;

    // Карточка: Hydraulic Motors
    readonly hydraulicMotorsHeadingLink: Locator;
    readonly hydraulicMotorsImageLink: Locator;
    readonly seeAllMotorsLink: Locator;

    // Карточка: Hydraulic Pumps
    readonly hydraulicPumpsHeadingLink: Locator;
    readonly hydraulicPumpsImageLink: Locator;
    readonly seeAllPumpsLink: Locator;

    // Карточка: Hydraulic Valves
    readonly hydraulicValvesHeadingLink: Locator;
    readonly hydraulicValvesImageLink: Locator;
    readonly seeAllValvesLink: Locator;

    // Карточка: Systems
    readonly systemsHeadingLink: Locator;
    readonly systemsImageLink: Locator;
    readonly seeAllSystemsLink: Locator;

    // =========================================================================
    // 3. APPLICATIONS (Секция «Отрасли применения»)
    // =========================================================================
    readonly applicationsSectionHeading: Locator;
    readonly constructionAppLink: Locator;
    readonly constructionAppHeading: Locator;
    readonly roadMachineryAppLink: Locator;
    readonly roadMachineryAppHeading: Locator;
    readonly agricultureAppLink: Locator;
    readonly agricultureAppHeading: Locator;
    readonly industrialAppLink: Locator;
    readonly industrialAppHeading: Locator;
    readonly miningAppLink: Locator;
    readonly miningAppHeading: Locator;

    // =========================================================================
    // 4. NEWS & VIDEOS (Секция «Новости и Видео»)
    // =========================================================================
    readonly newsSectionHeading: Locator;
    readonly allNewsLink: Locator;
    readonly videosSectionHeading: Locator;
    readonly allVideosLink: Locator;

    // =========================================================================
    // 5. ELECTRIFICATION (Секция «Электрификация»)
    // =========================================================================
    readonly electrificationSectionHeading: Locator;
    readonly electrificationImage: Locator;
    readonly discoverElectrificationLink: Locator;

    // =========================================================================
    // 6. POCLAIN ALL OVER THE WORLD (Секция «Poclain по всему миру»)
    // =========================================================================
    readonly worldwideSectionHeading: Locator;
    readonly findOurLocationLink: Locator;
    readonly worldMapImage: Locator;

    // =========================================================================
    // 7. TRUSTED PARTNER (Секция «Poclain Hydraulics, a trusted partner»)
    // =========================================================================
    readonly trustedPartnerSectionHeading: Locator;
    readonly jobOpportunitiesLink: Locator;
    readonly ourCommitmentsLink: Locator;
    readonly ourValuesLink: Locator;
    readonly trustedPartnerContactLink: Locator;

    constructor(page: Page) {
        this.page = page;

        // Инициализация компонентов
        this.header = new HeaderComponent(page);
        this.footer = new FooterComponent(page);
        this.cookieModal = new CookieModalComponent(page);

        // 1. Hero Slider
        this.heroSlider = page.locator('.slick-slider').first();
        this.slides = page.locator('.slick-slide');
        this.activeSlide = page.locator('.slick-slide.slick-current');
        this.sliderPrevButton = page.getByRole('button', { name: 'Previous' });
        this.sliderNextButton = page.getByRole('button', { name: 'Next' });
        this.slideCtaButtons = page.locator('.slick-slide .info-holder a');
        this.slideImageLinks = page.locator('.slick-slide .img-holder a');
        this.activeSlideImage = this.activeSlide.locator('.img-holder img');
        this.activeSlideImageLink = this.activeSlide.locator('.img-holder a');
        this.activeSlideInfoHolder = this.activeSlide.locator('.info-holder');
        this.activeSlideTitle = this.activeSlide.locator('.info-holder__title');
        this.activeSlideDesc = this.activeSlide.locator('.info-holder__desc');
        this.activeSlideCtaButton = this.activeSlide.locator('.info-holder a');

        // 2. Products & Systems Categories
        this.productsSectionHeading = page.getByRole('heading', { name: 'Our products & systems categories', level: 2 });
        this.hydraulicMotorsHeadingLink = page.getByRole('heading', { name: 'Hydraulic Motors', level: 3 }).getByRole('link');
        this.hydraulicMotorsImageLink = page.getByRole('link', { name: 'our hydraulic motor' });
        this.seeAllMotorsLink = page.getByRole('link', { name: 'See all motors' });

        this.hydraulicPumpsHeadingLink = page.getByRole('heading', { name: 'Hydraulic Pumps', level: 3 }).getByRole('link');
        this.hydraulicPumpsImageLink = page.getByRole('link', { name: 'HP-Hydraulic-Pump-300x210' });
        this.seeAllPumpsLink = page.getByRole('link', { name: 'See all pumps' });

        this.hydraulicValvesHeadingLink = page.getByRole('heading', { name: 'Hydraulic Valves', level: 3 }).getByRole('link');
        this.hydraulicValvesImageLink = page.getByRole('link', { name: 'our hydraulic valves' });
        this.seeAllValvesLink = page.getByRole('link', { name: 'See all valves' });

        this.systemsHeadingLink = page.getByRole('heading', { name: 'Systems', level: 3 }).getByRole('link');
        this.systemsImageLink = page.getByRole('link', { name: 'Systems-300x210' });
        this.seeAllSystemsLink = page.getByRole('link', { name: 'See all systems' });

        // 3. Applications
        this.applicationsSectionHeading = page.getByRole('heading', { name: 'Applications', level: 2 });
        this.constructionAppLink = page.locator('main a[href="/applications/construction"]');
        this.constructionAppHeading = page.getByRole('heading', { name: 'Construction & Material Handling', level: 3 });
        this.roadMachineryAppLink = page.locator('main a[href="/applications/road-machinery"]');
        this.roadMachineryAppHeading = page.getByRole('heading', { name: 'Road Machinery', level: 3 });
        this.agricultureAppLink = page.locator('main a[href="/applications/agriculture"]');
        this.agricultureAppHeading = page.getByRole('heading', { name: 'Agriculture & Forestry', level: 3 });
        this.industrialAppLink = page.locator('main a[href="/applications/industrial"]');
        this.industrialAppHeading = page.getByRole('heading', { name: 'Environment & Industrial', level: 3 });
        this.miningAppLink = page.locator('main a[href="/applications/mining"]');
        this.miningAppHeading = page.getByRole('heading', { name: 'Drilling & Mining', level: 3 });

        // 4. News & Videos
        this.newsSectionHeading = page.locator('main').getByRole('heading', { name: 'News', level: 2 });
        this.allNewsLink = page.getByRole('link', { name: 'All news' });
        this.videosSectionHeading = page.getByRole('heading', { name: 'Videos', level: 2 });
        this.allVideosLink = page.getByRole('link', { name: 'All videos' });

        // 5. Electrification
        this.electrificationSectionHeading = page.getByRole('heading', {
            name: 'Electrification, Innovation Made Easy for Efficient & Sustainable Future',
            level: 2,
        });
        this.electrificationImage = page.getByRole('img', { name: 'Electrification HP Zoom' });
        this.discoverElectrificationLink = page.getByRole('link', {
            name: 'Discover our electrification solutions today!',
        });

        // 6. Poclain all over the world
        this.worldwideSectionHeading = page.getByRole('heading', { name: 'Poclain all over the world', level: 2 });
        this.findOurLocationLink = page.getByRole('link', { name: 'Find our location' });
        this.worldMapImage = page.getByRole('img', { name: 'map HP' });

        // 7. Trusted partner
        this.trustedPartnerSectionHeading = page.getByRole('heading', {
            name: 'Poclain Hydraulics, a trusted partner',
            level: 2,
        });
        this.jobOpportunitiesLink = page.getByRole('link', { name: 'Job opportunities' });
        this.ourCommitmentsLink = page.getByRole('link', { name: 'Our commitments' });
        this.ourValuesLink = page.getByRole('link', { name: 'Our values' });
        this.trustedPartnerContactLink = page.locator('main').getByRole('link', { name: 'Contact', exact: true });
    }

    // =========================================================================
    // МЕТОДЫ СТРАНИЦЫ (Actions)
    // =========================================================================

    async goto() {
        await this.page.goto('/');
    }

    async getRealSlidesCount(): Promise<number> {
        return await this.heroSlider.locator('.slick-slide:not(.slick-cloned)').count();
    }

    async getActiveSlideIndex(): Promise<string | null> {
        await expect(this.activeSlide).toBeVisible();
        return await this.activeSlide.getAttribute('data-slick-index');
    }

    async pauseAutoplay() {
        await this.heroSlider.hover().catch(() => {});
        await this.page.evaluate(() => {
            const el = document.querySelector('.slick-slider');
            if (el && (window as any).jQuery) {
                (window as any).jQuery(el).slick('slickPause');
            }
        }).catch(() => {});
    }

    async clickNextSlide() {
        await this.sliderNextButton.click();
        await this.page.waitForTimeout(600);
        await expect(this.activeSlide).toBeVisible();
    }

    async clickPreviousSlide() {
        await this.sliderPrevButton.click();
        await this.page.waitForTimeout(600);
        await expect(this.activeSlide).toBeVisible();
    }

    async goToSlide(slideIndex: number) {
        for (let step = 0; step < slideIndex; step++) {
            await this.clickNextSlide();
        }
    }

    async clickFirstSlideCtaButton(): Promise<string> {
        const activeSlideButton = this.activeSlide.locator('.info-holder a');
        if ((await activeSlideButton.count()) === 0) {
            await this.clickNextSlide();
        }
        await expect(activeSlideButton).toBeVisible();
        const targetUrl = await activeSlideButton.getAttribute('href');
        expect(targetUrl).toBeTruthy();
        await activeSlideButton.click();
        return targetUrl!;
    }
}
