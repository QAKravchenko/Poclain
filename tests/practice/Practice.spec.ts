import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('Practice - Slider check', () => {
    let homepage: HomePage;

    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page);
        await homepage.goto();

        const acceptCookies = page.getByRole('button', { name: 'Accept' });
        if (await acceptCookies.isVisible()) await acceptCookies.click();
    });

    test('Check slider button', async ({ page }) => {
        await page.getByRole('button', { name: 'Test' }).click();
    });
});
