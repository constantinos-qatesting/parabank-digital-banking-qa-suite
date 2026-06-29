import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';

test('User can logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const logoutPage = new LogoutPage(page);

    // Login to the banking application
    await loginPage.navigate();
    await loginPage.login('john', 'demo');

    // Logout from the application
    await logoutPage.logout();

    // Verify successful logout
    await logoutPage.verifyLoggedOut();
});