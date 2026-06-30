import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { FindTransactionsPage } from '../pages/FindTransactionsPage';

test('@regression @ui User can open Find Transactions page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const findTransactionsPage = new FindTransactionsPage(page);

    // Login to the banking application
    await loginPage.navigate();

    // Login using credentials stored in the .env file
    await loginPage.login(
        process.env.PARABANK_USERNAME!,
        process.env.PARABANK_PASSWORD!
    );
    
    // Open Find Transactions page
    await findTransactionsPage.open();

    // Verify page loaded successfully
    await findTransactionsPage.verifyPageLoaded();
});