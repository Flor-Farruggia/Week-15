import LoginPage from '../pageobjects/loginPage.js';
import allItems from '../pageobjects/allItems.js';
import homeHeaderFooter from '../pageobjects/homePage.js';

describe('Check Login application for "problem_user"', () => {
    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/');
    });

    it('Display elements', async () => {
        await expect (LoginPage.inputUserName).toBeDisplayed();
        await expect (LoginPage.inputPassword).toBeDisplayed();
        await expect (LoginPage.loginButton).toBeDisplayed();
        await LoginPage.logIn('problem_user', 'secret_sauce');
        await LoginPage.clickButtonLogin();
        await expect(homeHeaderFooter.logoTitle).toBeDisplayed();
        await expect(homeHeaderFooter.logoTitle).toHaveTextContaining('Swag Labs');
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/inventory.html');
    });
    it('Verify the footer icons & functionality', async () => {
        await expect(homeHeaderFooter.twitterIcon).toBeDisplayed();
        await expect(homeHeaderFooter.facebookIcon).toBeDisplayed();
        await expect(homeHeaderFooter.linkedinIcon).toBeDisplayed();
        await expect(homeHeaderFooter.twitterIcon).toBeClickable();
        await expect(homeHeaderFooter.facebookIcon).toBeClickable();
        await expect(homeHeaderFooter.linkedinIcon).toBeClickable();
    });

    it('Verify the load of the products', async () => {
        await expect(allItems.firstItemTitle).toHaveTextContaining('Sauce Labs Backpack');
        await expect(allItems.firstItemImg).toBeDisplayed();
        await expect(allItems.firstItemImg).toHaveAttribute('alt', 'Sauce Labs Backpack');
        await expect(allItems.firstItemImg).toHaveAttribute('src', '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg');
        await expect(allItems.firstItemPrice).toBeDisplayed();
        await expect(allItems.firstItemAddButton).toBeDisplayed();
        await expect(allItems.firstItemAddButton).toBeClickable();
    })

    it('Verify one product url', async () => {
        await allItems.firstItemClick();
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/inventory-item.html?id=4');
    })
});
