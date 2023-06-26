import LoginPage from '../pageobjects/loginPage.js';
import allItems from '../pageobjects/allItems.js';
import homeHeaderFooter from '../pageobjects/homePage.js';
import logOutPage from '../pageobjects/logOutPage.js';
import cartPage from '../pageobjects/cartPage.js';

it('Check the time of access', async () => {
const endTime = new Date().getTime();
const totalTime = endTime - startTime;
await expect(totalTime).toBeLessThan(2000);
})
describe('Check flow application for "standard_user"', () => {
    let startTime;

    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/');
    });

    it('Display elements and login', async () => {
        await expect (LoginPage.inputUserName).toBeDisplayed();
        await expect (LoginPage.inputPassword).toBeDisplayed();
        await expect (LoginPage.loginButton).toBeDisplayed();
        startTime = new Date().getTime();
        await LoginPage.logIn('standard_user', 'secret_sauce');
        await LoginPage.clickButtonLogin();
        await expect(homeHeaderFooter.logoTitle).toBeDisplayed();
        await expect(homeHeaderFooter.logoTitle).toHaveTextContaining('Swag Labs');
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/inventory.html');
    });
    it('Check the time of access', async () => {
        const endTime = new Date().getTime();
        const totalTime = endTime - startTime;
        await expect(totalTime).toBeLessThan(2000);
        });
    it('Verify the footer icons & functionality', async () => {
        await expect(homeHeaderFooter.twitterIcon).toBeDisplayed();
        await expect(homeHeaderFooter.facebookIcon).toBeDisplayed();
        await expect(homeHeaderFooter.linkedinIcon).toBeDisplayed();
        await expect(homeHeaderFooter.twitterIcon).toBeClickable();
        await expect(homeHeaderFooter.facebookIcon).toBeClickable();
        await expect(homeHeaderFooter.linkedinIcon).toBeClickable();
    });
    it('Verify the load of all products & functionality buttons', async () => {
        await expect(allItems.firstItemTitle).toHaveTextContaining('Sauce Labs Backpack')
        await expect(allItems.firstItemImg).toBeDisplayed();
        await expect(allItems.firstItemImg).toHaveAttribute('alt', 'Sauce Labs Backpack')
        await expect(allItems.firstItemImg).toHaveAttribute('src', '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg')
        await expect(allItems.firstItemPrice).toBeDisplayed();
        await expect(allItems.firstItemAddButton).toBeDisplayed();
        await expect(allItems.firstItemAddButton).toBeClickable();
    })
    it('Verify add and remove of first product', async () => {
        await allItems.firstItemClick();
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/inventory-item.html?id=4');
        await expect(allItems.firstItemAddButton).toBeDisplayed();
        await allItems.firstItemButtonClick();
        await expect(allItems.firstItemRemoveButton).toBeDisplayed();
        await allItems.firstItemRemoveButtonClick();
        await expect(cartPage.backButton).toBeDisplayed();
        await cartPage.backClick();
    })
    it('Verify add and check of products', async () => {
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/inventory.html');
        await expect(allItems.firstItemAddButton).toBeDisplayed();
        await allItems.firstItemButtonClick();
        await expect(homeHeaderFooter.cartIcon).toBeDisplayed();
        await homeHeaderFooter.cartIconClick();
        await expect(cartPage.checkoutButton).toBeDisplayed();
        await cartPage.checkoutClick();
        await expect(cartPage.inputFormName).toBeDisplayed();
        await expect(cartPage.inputFormLastName).toBeDisplayed();
        await expect(cartPage.inputFormZip).toBeDisplayed();
        await expect(cartPage.continueButton).toBeDisplayed();
        await cartPage.formData('Flor', 'Farru', '1234');
        await cartPage.continueButtonClick();
        await expect(cartPage.finishButton).toBeDisplayed();
        await cartPage.finishButtonClick();
        await expect(cartPage.backHomeButton).toBeDisplayed();
        await cartPage.backHomeClick();
    })
    it('Verify log out', async () => {
        await expect(logOutPage.menuButton).toBeDisplayed();
        await logOutPage.menuClick();
        await expect(logOutPage.logOutButton).toBeDisplayed();
        await logOutPage.logOutClick();
    });
});
