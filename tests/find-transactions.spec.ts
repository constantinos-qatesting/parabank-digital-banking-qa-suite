import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { FindTransactionsPage } from '../pages/FindTransactionsPage';

test('@regression @ui User can open Find Transactions page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const findTransactionsPage = new FindTransactionsPage(page);

    // Login to the banking application
    await loginPage.navigate();
    await loginPage.login('john', 'demo');

    // Open Find Transactions page
    await findTransactionsPage.open();

    // Verify page loaded successfully
    await findTransactionsPage.verifyPageLoaded();
});