import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';

test('@smoke @ui User can logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const logoutPage = new LogoutPage(page);

    // Login to the banking application
    await loginPage.navigate();

    // Login using credentials stored in the .env file

    // Login using credentials stored in the .env file
    await loginPage.login(
        process.env.PARABANK_USERNAME!,
        process.env.PARABANK_PASSWORD!
    );
    
    // Logout from the application
    await logoutPage.logout();

    // Verify successful logout
    await logoutPage.verifyLoggedOut();
});