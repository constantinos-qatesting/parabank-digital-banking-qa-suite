import { Page, expect } from '@playwright/test';

export class FindTransactionsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Navigate to Find Transactions page
    async open() {
        await this.page
            .locator('#leftPanel')
            .getByRole('link', { name: 'Find Transactions' })
            .click();
    }

    // Verify Find Transactions page is displayed
    async verifyPageLoaded() {
        await expect(
            this.page.getByRole('heading', { name: 'Find Transactions' })
        ).toBeVisible();
    }
}