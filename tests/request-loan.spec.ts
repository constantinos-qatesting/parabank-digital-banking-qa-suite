import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RequestLoanPage } from '../pages/RequestLoanPage';

test('@regression @ui User can submit a loan request successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const requestLoanPage = new RequestLoanPage(page);

    // Login to the banking application
    await loginPage.navigate();

    // Login using credentials stored in the .env file
    await loginPage.login(
        process.env.PARABANK_USERNAME!,
        process.env.PARABANK_PASSWORD!
    );

    // Open Request Loan page
    await requestLoanPage.open();

    // Verify Request Loan page loaded
    await requestLoanPage.verifyPageLoaded();

    // Submit loan request
    await requestLoanPage.requestLoan('50', '10');

    // Verify loan request was processed
    await requestLoanPage.verifyLoanRequestProcessed();
});