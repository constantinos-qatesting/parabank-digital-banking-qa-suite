import { Page, expect } from '@playwright/test';

export class RequestLoanPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Navigate to Request Loan page
    async open() {
        await this.page
            .locator('#leftPanel')
            .getByRole('link', { name: 'Request Loan' })
            .click();
    }

    // Verify Request Loan page is displayed
    async verifyPageLoaded() {
        await expect(
            this.page.getByRole('heading', { name: 'Apply for a Loan' })
        ).toBeVisible();
    }

    // Submit loan request with amount, down payment and selected account
    async requestLoan(amount: string, downPayment: string) {
        const fromAccount = this.page.locator('#fromAccountId');

        await expect(fromAccount).toBeVisible();

        await this.page.locator('#amount').fill(amount);
        await this.page.locator('#downPayment').fill(downPayment);
        await fromAccount.selectOption({ index: 0 });

        await this.page.getByRole('button', { name: 'Apply Now' }).click();
    }

    // Verify loan request was processed
    async verifyLoanRequestProcessed() {
        await expect(
            this.page.getByRole('heading', { name: 'Loan Request Processed' })
        ).toBeVisible();
    }
}