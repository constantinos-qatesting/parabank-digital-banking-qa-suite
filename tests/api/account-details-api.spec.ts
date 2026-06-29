import { test, expect } from '@playwright/test';

test('API returns account details successfully', async ({ request }) => {

    // Get all customer accounts
    const accountsResponse = await request.get(
        'https://parabank.parasoft.com/parabank/services/bank/customers/12212/accounts'
    );

    // Verify the Accounts API responded successfully
    expect(accountsResponse.status()).toBe(200);

    // Read XML response
    const accountsResponseBody = await accountsResponse.text();

    // Extract the first account ID from the XML response
    const accountId = accountsResponseBody.match(/<id>(.*?)<\/id>/)?.[1];

    // Verify an account ID was found
    expect(accountId).toBeDefined();

    // Stop the test if no account ID exists
    if (!accountId) {
        throw new Error('No account ID found in the API response.');
    }

    // Get account details using the extracted account ID
    const accountDetailsResponse = await request.get(
        `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`
    );

    // Verify the Account Details API responded successfully
    expect(accountDetailsResponse.status()).toBe(200);

    // Read account details XML response
    const accountDetailsBody = await accountDetailsResponse.text();

    // Verify account details contain expected banking fields
    expect(accountDetailsBody).toContain(`<id>${accountId}</id>`);
    expect(accountDetailsBody).toContain('<customerId>12212</customerId>');
    expect(accountDetailsBody).toContain('<type>');
    expect(accountDetailsBody).toContain('<balance>');
});