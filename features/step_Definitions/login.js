const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, until } = require('selenium-webdriver');

async function waitForElementToDisappear(driver, element, timeout) {
  console.log('I wait for button to disappear');
  await driver.wait(until.stalenessOf(element), timeout);
};
async function waitForElementVisible(driver, element, timeout) {
  await driver.wait(until.elementIsVisible(element), timeout);
};
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();
  Given('I am on the login page of the FE application', {timeout: 2 * 5000}, async function () {
    await driver.get('https://uatb2b.macron.com');
    console.log('I opened the link');
  });
  When('I enter valid credentials', {timeout: 2 * 5000}, async function () {
    let email = await driver.findElement(By.id('email'));
    await email.sendKeys('103250');
    let password = await driver.findElement(By.css('#password'));
    await password.sendKeys('Option123');
    console.log('I entered credentials');
  });
  When('I click login button', async function () {
    let loginButton = await driver.findElement(By.css('.MyAccountOverlay-SignInButton'));
    await loginButton.click()
    await waitForElementToDisappear(driver, loginButton, 5000)
    console.log('I clicked on login button');
  });
  Then('Account icon is present', async function () {
    let account = await driver.findElement(By.className('Header-MyAccountContainer'));
    await waitForElementVisible(driver, account, 5000);
    let accountIsDisplayed = await account.isDisplayed();
    assert.strictEqual(accountIsDisplayed, true, "Account icon is displayed");
    await driver.quit();
  });