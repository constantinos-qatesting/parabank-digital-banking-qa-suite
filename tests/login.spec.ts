import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User can login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login('john', 'demo');

    await expect(page).toHaveURL(/overview/);
});