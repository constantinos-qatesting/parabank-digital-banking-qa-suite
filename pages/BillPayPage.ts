import { Page, expect } from '@playwright/test';

export class BillPayPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Navigate to Bill Pay page
    async open() {
        await this.page
            .locator('#leftPanel')
            .getByRole('link', { name: 'Bill Pay' })
            .click();
    }

    // Complete bill payment form
    async payBill() {
        await this.page.locator('input[name="payee.name"]').fill('Electricity Company');
        await this.page.locator('input[name="payee.address.street"]').fill('Main Street 10');
        await this.page.locator('input[name="payee.address.city"]').fill('Nicosia');
        await this.page.locator('input[name="payee.address.state"]').fill('Cyprus');
        await this.page.locator('input[name="payee.address.zipCode"]').fill('1010');
        await this.page.locator('input[name="payee.phoneNumber"]').fill('22123456');
        await this.page.locator('input[name="payee.accountNumber"]').fill('123456');
        await this.page.locator('input[name="verifyAccount"]').fill('123456');
        await this.page.locator('input[name="amount"]').fill('75');

        await this.page.getByRole('button', { name: 'Send Payment' }).click();
    }

    // Verify bill payment completed successfully
    async verifyPaymentCompleted() {
        await expect(
            this.page.getByRole('heading', { name: 'Bill Payment Complete' })
        ).toBeVisible();
    }
}