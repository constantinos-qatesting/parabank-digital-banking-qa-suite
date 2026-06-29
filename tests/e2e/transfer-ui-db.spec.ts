import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { TransferFundsPage } from '../../pages/TransferFundsPage';
import { openDatabase } from '../../utils/database';

test('User can transfer funds and verify transaction in database', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const transferFundsPage = new TransferFundsPage(page);

    // Login to the banking application
    await loginPage.navigate();
    await loginPage.login('john', 'demo');

    // Transfer funds through the UI
    await transferFundsPage.open();
    await transferFundsPage.transferAmount('50');
    await transferFundsPage.verifyTransferCompleted();

    // Open the SQLite database
    const db = await openDatabase();

    // Verify transfer transaction exists in the database
    const transaction = await db.get(`
        SELECT *
        FROM Transactions
        WHERE account_id = 12345
        AND amount = -50
        AND transaction_type = 'TRANSFER'
    `);

    expect(transaction).toBeDefined();

    // Close the database connection
    await db.close();
});