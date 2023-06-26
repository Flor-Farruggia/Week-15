import LoginPage from '../pageobjects/loginPage.js';
import allItems from '../pageobjects/allItems.js';
import homeHeaderFooter from '../pageobjects/homePage.js';
import logOutPage from '../pageobjects/logOutPage.js';
import cartPage from '../pageobjects/cartPage.js';

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
        await expect(allItems.firstItemTitle).toHaveTextContaining('Sauce Labs Backpack');
        await expect(allItems.firstItemImg).toBeDisplayed();
        await expect(allItems.firstItemImg).toHaveAttribute('alt', 'Sauce Labs Backpack');
        await expect(allItems.firstItemImg).toHaveAttribute('src', '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg');
        await expect(allItems.firstItemPrice).toBeDisplayed();
        await expect(allItems.firstItemAddButton).toBeDisplayed();
        await expect(allItems.firstItemAddButton).toBeClickable();
        await expect(allItems.secondItemTitle).toHaveTextContaining('Sauce Labs Bike Light');
        await expect(allItems.secondItemImg).toBeDisplayed();
        await expect(allItems.secondItemImg).toHaveAttribute('alt', 'Sauce Labs Bike Light');
        await expect(allItems.secondItemImg).toHaveAttribute('src', '/static/media/bike-light-1200x1500.37c843b0.jpg');
        await expect(allItems.secondItemPrice).toBeDisplayed();
        await expect(allItems.secondItemAddButton).toBeDisplayed();
        await expect(allItems.secondItemAddButton).toBeClickable();
        await allItems.secondItemButtonClick();
        await expect(allItems.secondItemRemoveButton).toBeDisplayed();
        await allItems.secondItemRemoveButtonClick();
        await expect(allItems.thirdItemTitle).toHaveTextContaining('Sauce Labs Bolt T-Shirt');
        await expect(allItems.thirdItemImg).toBeDisplayed();
        await expect(allItems.thirdItemImg).toHaveAttribute('alt', 'Sauce Labs Bolt T-Shirt')
        await expect(allItems.thirdItemImg).toHaveAttribute('src', '/static/media/bolt-shirt-1200x1500.c2599ac5.jpg')
        await expect(allItems.thirdItemPrice).toBeDisplayed();
        await expect(allItems.thirdItemAddButton).toBeDisplayed();
        await expect(allItems.thirdItemAddButton).toBeClickable();
        await allItems.thirdItemButtonClick();
        await expect(allItems.thirdItemRemoveButton).toBeDisplayed();
        await allItems.thirdItemRemoveButtonClick();
        await expect(allItems.fourthItemTitle).toHaveTextContaining('Sauce Labs Fleece Jacket');
        await expect(allItems.fourthItemImg).toBeDisplayed();
        await expect(allItems.fourthItemImg).toHaveAttribute('alt', 'Sauce Labs Fleece Jacket');
        await expect(allItems.fourthItemImg).toHaveAttribute('src', '/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg');
        await expect(allItems.fourthItemPrice).toBeDisplayed();
        await expect(allItems.fourthItemAddButton).toBeDisplayed();
        await expect(allItems.fourthItemAddButton).toBeClickable();
        await allItems.fourthItemButtonClick();
        await expect(allItems.fourthItemRemoveButton).toBeDisplayed();
        await allItems.fourthItemRemoveButtonClick();
        await expect(allItems.fifthItemTitle).toHaveTextContaining('Sauce Labs Onesie');
        await expect(allItems.fifthItemImg).toBeDisplayed();
        await expect(allItems.fifthItemImg).toHaveAttribute('alt', 'Sauce Labs Onesie');
        await expect(allItems.fifthItemImg).toHaveAttribute('src', '/static/media/red-onesie-1200x1500.2ec615b2.jpg');
        await expect(allItems.fifthItemPrice).toBeDisplayed();
        await expect(allItems.fifthItemAddButton).toBeDisplayed();
        await expect(allItems.fifthItemAddButton).toBeClickable();
        await allItems.fifthItemButtonClick();
        await expect(allItems.fifthItemRemoveButton).toBeDisplayed();
        await allItems.fifthItemRemoveButtonClick();
        await expect(allItems.sixthItemTitle).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)');
        await expect(allItems.sixthItemImg).toBeDisplayed();
        await expect(allItems.sixthItemImg).toHaveAttribute('alt', 'Test.allTheThings() T-Shirt (Red)');
        await expect(allItems.sixthItemImg).toHaveAttribute('src', '/static/media/red-tatt-1200x1500.30dadef4.jpg');
        await expect(allItems.sixthItemPrice).toBeDisplayed();
        await expect(allItems.sixthItemAddButton).toBeDisplayed();
        await expect(allItems.sixthItemAddButton).toBeClickable();
        await allItems.sixthItemButtonClick();
        await expect(allItems.sixthItemRemoveButton).toBeDisplayed();
        await allItems.sixthItemRemoveButtonClick();
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
