import { Page, expect } from '@playwright/test';

export class LogoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Logout from the banking application
    async logout() {
        await this.page
            .locator('#leftPanel')
            .getByRole('link', { name: 'Log Out' })
            .click();
    }

    // Verify user is returned to the login page
    async verifyLoggedOut() {
        await expect(
            this.page.getByRole('button', { name: 'Log In' })
        ).toBeVisible();
    }
}