import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TransferFundsPage } from '../pages/TransferFundsPage';

test('@regression @ui User can transfer funds successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const transferFundsPage = new TransferFundsPage(page);

    // Login to the banking application
    await loginPage.navigate();

    // Login using credentials stored in the .env file
    await loginPage.login(
        process.env.PARABANK_USERNAME!,
        process.env.PARABANK_PASSWORD!
    );

    // Open Transfer Funds page
    await transferFundsPage.open();

    // Transfer funds between accounts
    await transferFundsPage.transferAmount('50');

    // Verify successful transfer
    await transferFundsPage.verifyTransferCompleted();
});