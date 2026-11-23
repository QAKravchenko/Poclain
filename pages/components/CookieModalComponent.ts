import { type Page, type Locator } from '@playwright/test';

export class CookieModalComponent {
    readonly page: Page;
    readonly overlay: Locator;
    readonly modalContainer: Locator;
    readonly title: Locator;
    readonly description: Locator;
    readonly acceptAllButton: Locator;
    readonly dismissButton: Locator;
    readonly configureButton: Locator;
    readonly privacyPolicyLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.overlay = page.locator('#axeptio_overlay');
        this.modalContainer = this.overlay.locator('[data-testid="widget-container"]').first();
        this.title = this.modalContainer.locator('h2, h3, [class*="title"]').first();
        this.description = this.modalContainer.locator('p, [class*="description"], [class*="text"]').first();
        this.acceptAllButton = this.overlay.locator('#axeptio_btn_acceptAll');
        this.dismissButton = this.overlay.locator('#axeptio_btn_dismiss');
        this.configureButton = this.overlay.locator('#axeptio_btn_configure');
        this.privacyPolicyLink = this.modalContainer.locator('a[href*="privacy"]').first();
    }

    async isVisible(): Promise<boolean> {
        return await this.acceptAllButton.isVisible();
    }

    async acceptAll(): Promise<void> {
        if (await this.acceptAllButton.isVisible()) {
            await this.acceptAllButton.click();
            await this.modalContainer.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
        }
    }

    async dismiss(): Promise<void> {
        if (await this.dismissButton.isVisible()) {
            await this.dismissButton.click();
            await this.modalContainer.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
        }
    }

    async configure(): Promise<void> {
        await this.configureButton.click();
    }
}
