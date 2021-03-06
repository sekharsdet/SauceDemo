
import { Given, Then, Before, When, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/HomePage";

const homePage = new HomePage()

Given(`user is on HomePage`, () => {
    cy.visit(Cypress.config().baseUrl);

});


Then('user enters username as {string}', (username: string) => {
    const testData = require('../../fixtures/testData.json')
    homePage.enterUserName(testData[username])
});

Then('user enters password as {string}', (password: string) => {
    const testData = require('../../fixtures/testData.json')
    homePage.enterPassword(testData[password])
});


And('user clicks on login', () => {
    homePage.clickOnLogin()
});

When('user enters {string} and {string}', (username: string, password: string) => {
    const testData = require('../../fixtures/testData.json')
    homePage.loginIntoApplication(testData[username], testData[password])
});

Then('error message {string} should display', (errorMessage: string) => {
    homePage.verifyErrorMessage(errorMessage)
});


When('user closes error message bar', () => {
    homePage.closeTheErrorMessage()
});


Then('error message should disappear', () => {
    homePage.verifyMessageDisappear()
});