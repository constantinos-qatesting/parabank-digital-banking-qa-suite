import { test, expect } from '@playwright/test';

test('API returns customer accounts successfully', async ({ request }) => {
    const response = await request.get(
        'https://parabank.parasoft.com/parabank/services/bank/customers/12212/accounts'
    );

    // Verify API response status
    expect(response.status()).toBe(200);

    const responseBody = await response.text();

    // Verify account data is returned
    expect(responseBody).toContain('<account>');
    expect(responseBody).toContain('<customerId>12212</customerId>');
    expect(responseBody).toContain('<type>CHECKING</type>');
    expect(responseBody).toContain('<balance>');
});