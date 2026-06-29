import { test, expect } from '@playwright/test';
import { openDatabase } from '../../utils/database';

test('@database Verify all accounts exist in the database', async () => {

    // Open the SQLite database
    const db = await openDatabase();

    // Retrieve all accounts
    const accounts = await db.all(
        'SELECT * FROM Accounts'
    );

    // Display the accounts in the terminal
    console.log(accounts);

    // Verify that accounts were returned
    expect(accounts.length).toBeGreaterThan(0);

    // Close the database connection
    await db.close();

});