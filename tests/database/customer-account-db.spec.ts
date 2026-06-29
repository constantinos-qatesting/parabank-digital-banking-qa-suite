import { test, expect } from '@playwright/test';
import { openDatabase } from '../../utils/database';

test('@database Verify John Smith has a checking account with expected balance', async () => {

    // Open the SQLite database
    const db = await openDatabase();

    // Retrieve John Smith's checking account
    const account = await db.get(`
        SELECT Customers.customer_name, Accounts.account_id, Accounts.balance, Accounts.account_type
        FROM Customers
        JOIN Accounts
        ON Customers.customer_id = Accounts.customer_id
        WHERE Customers.customer_name = 'John Smith'
        AND Accounts.account_type = 'CHECKING'
    `);

    // Verify account data
    expect(account).toBeDefined();
    expect(account.customer_name).toBe('John Smith');
    expect(account.account_id).toBe(12345);
    expect(account.balance).toBe(1000);
    expect(account.account_type).toBe('CHECKING');

    // Close the database connection
    await db.close();
});