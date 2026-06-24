import { Page, expect } from '@playwright/test';

export class AccountsOverviewPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Navigate to Accounts Overview page
    async open() {
        await this.page.getByRole('link', { name: 'Accounts Overview' }).click();
    }

    // Verify that the accounts table is visible
    async verifyAccountsTableIsVisible() {
        await expect(this.page.locator('#accountTable')).toBeVisible();
    }
    // Verify that at least one account number is displayed
    async verifyAccountExists() {
        await expect(
            this.page.locator('#accountTable a').first()
        ).toBeVisible();
    }
}