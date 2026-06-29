import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('@smoke @ui User can login successfully', async ({ page }) => {

    // Create Login Page object
    const loginPage = new LoginPage(page);

    // Open ParaBank homepage
    await loginPage.navigate();

    // Login with valid credentials
    await loginPage.login('john', 'demo');

    // Verify Accounts Overview page is displayed
    await expect(page).toHaveURL(/overview/);
});