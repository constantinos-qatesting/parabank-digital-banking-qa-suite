import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://parabank.parasoft.com/parabank/');
    }

    async login(username: string, password: string) {
        await this.page.locator('input[name="username"]').fill(username);
        await this.page.locator('input[name="password"]').fill(password);
        await this.page.getByRole('button', { name: 'Log In' }).click();
    }
}