import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountsOverviewPage } from '../pages/AccountsOverviewPage';

test('@regression @ui User can view accounts overview', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const accountsOverviewPage = new AccountsOverviewPage(page);

    // Login to the banking application
    await loginPage.navigate();

    // Login using credentials stored in the .env file
    await loginPage.login(
        process.env.PARABANK_USERNAME!,
        process.env.PARABANK_PASSWORD!
    );

    // Open and verify Accounts Overview
    await accountsOverviewPage.open();
    await accountsOverviewPage.verifyAccountsTableIsVisible();

    // Open and verify Accounts Overview
    await accountsOverviewPage.open();
    await accountsOverviewPage.verifyAccountsTableIsVisible();
    await accountsOverviewPage.verifyAccountExists();

});