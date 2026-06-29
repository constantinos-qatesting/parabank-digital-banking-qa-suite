import { test, expect } from '@playwright/test';
import { openDatabase } from '../../utils/database';

test('@database Verify transfer transaction exists in the database', async () => {

    // Open the SQLite database
    const db = await openDatabase();

    // Retrieve transfer transaction
    const transaction = await db.get(`
        SELECT *
        FROM Transactions
        WHERE transaction_type = 'TRANSFER'
    `);

    // Verify transfer transaction data
    expect(transaction).toBeDefined();
    expect(transaction.account_id).toBe(12345);
    expect(transaction.amount).toBe(-50);
    expect(transaction.transaction_type).toBe('TRANSFER');

    // Close the database connection
    await db.close();
});