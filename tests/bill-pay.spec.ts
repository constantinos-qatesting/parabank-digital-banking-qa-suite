import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BillPayPage } from '../pages/BillPayPage';

test('@regression @ui User can complete bill payment successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const billPayPage = new BillPayPage(page);

    // Login to the banking application
    await loginPage.navigate();

    // Login using credentials stored in the .env file
    await loginPage.login(
        process.env.PARABANK_USERNAME!,
        process.env.PARABANK_PASSWORD!
    );

    // Open Bill Pay page
    await billPayPage.open();

    // Complete bill payment
    await billPayPage.payBill();

    // Verify successful payment
    await billPayPage.verifyPaymentCompleted();
});