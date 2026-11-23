import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home Page - Hero Slider', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goto();
        await homePage.cookieModal.acceptAll();
        await homePage.pauseAutoplay();
    });

    test('переключение слайдов кнопками Next и Previous', async () => {
        const initialIndex = await homePage.getActiveSlideIndex();
        await homePage.clickNextSlide();
        await expect(homePage.activeSlide).not.toHaveAttribute('data-slick-index', initialIndex!);

        await homePage.clickPreviousSlide();
        await expect(homePage.activeSlide).toHaveAttribute('data-slick-index', initialIndex!);
    });

    test('на каждом слайде отображается картинка и блок с текстом', async () => {
        const totalSlides = await homePage.getRealSlidesCount();
        expect(totalSlides).toBeGreaterThan(0);

        for (let i = 0; i < totalSlides; i++) {
            await expect(homePage.activeSlideImage).toBeVisible();
            await expect(homePage.activeSlideImage).toHaveAttribute('src', /.+/);

            await expect(homePage.activeSlideInfoHolder).toBeVisible();
            await expect(homePage.activeSlideTitle).toBeVisible();
            await expect(homePage.activeSlideDesc).toBeVisible();

            const titleText = await homePage.activeSlideTitle.innerText();
            const descText = await homePage.activeSlideDesc.innerText();
            expect(titleText.trim().length).toBeGreaterThan(0);
            expect(descText.trim().length).toBeGreaterThan(0);

            if (await homePage.activeSlideCtaButton.count() > 0) {
                await expect(homePage.activeSlideCtaButton).toBeVisible();
                await expect(homePage.activeSlideCtaButton).toBeEnabled();
            }

            if (i < totalSlides - 1) {
                await homePage.clickNextSlide();
            }
        }
    });

    test('кнопка в блоке с текстом на каждом слайде кликабельна и открывает соответствующую страницу', async ({ page }) => {
        test.slow();
        const totalSlides = await homePage.getRealSlidesCount();
        for (let i = 0; i < totalSlides; i++) {
            await homePage.goto();
            await homePage.cookieModal.acceptAll();
            await homePage.pauseAutoplay();
            await homePage.goToSlide(i);

            if ((await homePage.activeSlideCtaButton.count()) > 0) {
                const ctaButton = homePage.activeSlideCtaButton;
                await expect(ctaButton).toBeVisible();
                await expect(ctaButton).toBeEnabled();

                const targetUrl = await ctaButton.getAttribute('href');
                expect(targetUrl).toBeTruthy();

                await ctaButton.click();
                await page.waitForLoadState('domcontentloaded');
                expect(page.url()).toContain(targetUrl);
            }
        }
    });

    test('картинка на каждом слайде кликабельна и открывает соответствующую страницу', async ({ page }) => {
        test.slow();
        const totalSlides = await homePage.getRealSlidesCount();
        for (let i = 0; i < totalSlides; i++) {
            await homePage.goto();
            await homePage.cookieModal.acceptAll();
            await homePage.pauseAutoplay();
            await homePage.goToSlide(i);

            if ((await homePage.activeSlideImageLink.count()) > 0) {
                const imgLink = homePage.activeSlideImageLink;
                await expect(imgLink).toBeVisible();
                await expect(imgLink).toBeEnabled();

                const targetUrl = await imgLink.getAttribute('href');
                expect(targetUrl).toBeTruthy();

                await imgLink.click();
                await page.waitForLoadState('domcontentloaded');
                expect(page.url()).toContain(targetUrl);
            }
        }
    });
});
