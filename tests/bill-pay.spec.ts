import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BillPayPage } from '../pages/BillPayPage';

test('User can complete bill payment successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const billPayPage = new BillPayPage(page);

    // Login to the banking application
    await loginPage.navigate();
    await loginPage.login('john', 'demo');

    // Open Bill Pay page
    await billPayPage.open();

    // Complete bill payment
    await billPayPage.payBill();

    // Verify successful payment
    await billPayPage.verifyPaymentCompleted();
});