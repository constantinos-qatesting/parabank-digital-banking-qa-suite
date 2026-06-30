import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('@smoke @ui User can login successfully', async ({ page }) => {

    // Create Login Page object
    const loginPage = new LoginPage(page);

    // Open ParaBank homepage
    await loginPage.navigate();

    // Login using credentials stored in the .env file
    await loginPage.login(
        process.env.PARABANK_USERNAME!,
        process.env.PARABANK_PASSWORD!
    );

    // Verify Accounts Overview page is displayed
    await expect(page).toHaveURL(/overview/);
});