import { Page, expect } from '@playwright/test';

export class TransferFundsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Navigate to Transfer Funds page
    async open() {
        await this.page
            .locator('#leftPanel')
            .getByRole('link', { name: 'Transfer Funds' })
            .click();
    }

    // Transfer money between available accounts
    async transferAmount(amount: string) {
        const fromAccount = this.page.locator('#fromAccountId');
        const toAccount = this.page.locator('#toAccountId');

        // Verify account dropdowns are displayed
        await expect(fromAccount).toBeVisible();
        await expect(toAccount).toBeVisible();

        // Select available accounts
        await fromAccount.selectOption({ index: 0 });
        await toAccount.selectOption({ index: 0 });

        // Enter transfer amount
        await this.page.locator('#amount').fill(amount);

        // Submit transfer
        await this.page.getByRole('button', { name: 'Transfer' }).click();
    }

    // Verify transfer completed successfully
    async verifyTransferCompleted() {
        await expect(
            this.page.getByRole('heading', { name: 'Transfer Complete!' })
        ).toBeVisible();
    }
}