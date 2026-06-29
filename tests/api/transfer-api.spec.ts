import { test, expect } from '@playwright/test';

// Skipped because this endpoint requires an authenticated browser session.
test.skip('@api User can transfer money through the API', async ({ request }) => {

    // Get all customer accounts
    const response = await request.get(
        'https://parabank.parasoft.com/parabank/services/bank/customers/12212/accounts'
    );

    // Verify the Accounts API responded successfully
    expect(response.status()).toBe(200);

    // Read XML response
    const responseBody = await response.text();

    // Extract the first account ID from the XML response
    const accountId = responseBody.match(/<id>(.*?)<\/id>/)?.[1];

    // Print the extracted account ID
    console.log('Account ID:', accountId);

    // Verify an account ID was found
    expect(accountId).toBeDefined();

    // Stop the test if no account ID exists
    if (!accountId) {
        throw new Error('No account ID found in the API response.');
    }

    // Transfer money using the extracted account ID
    const transferResponse = await request.post(
        `https://parabank.parasoft.com/parabank/services_proxy/bank/transfer?fromAccountId=${accountId}&toAccountId=${accountId}&amount=50`
    );

    // Verify the Transfer API responded successfully
    expect(transferResponse.status()).toBe(200);

    // Read transfer response
    const transferResponseBody = await transferResponse.text();

    // Verify transfer confirmation message
    expect(transferResponseBody).toContain('Successfully transferred $50');
});

// TODO:
// Transfer API requires an authenticated session.
// Current standalone API request receives 401 Unauthorized without login cookies.
// This will be implemented later as an advanced authenticated API test.