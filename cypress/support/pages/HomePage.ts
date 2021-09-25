export default class HomePage {

    selectors = {
        usernameTextbox: "#user-name",
        passwordTextbox: "#password",
        loginButton: "#login-button",
        errorMessageText: "[data-test='error']",
        errorMessageCloseIcon: ".error-button"

    }


    loginIntoApplication = (username, password) => {
        cy.get(this.selectors.usernameTextbox).type(username)
        cy.get(this.selectors.passwordTextbox).type(password)
        cy.get(this.selectors.loginButton).click()
    }


    verifyErrorMessage = (expectedText) => {
        cy.get(this.selectors.errorMessageText).should('be.visible').should('have.text', expectedText)
    }


    closeTheErrorMessage = () => {
        cy.get(this.selectors.errorMessageCloseIcon).click()
    }

    verifyMessageDisappear = () => {
        cy.get(this.selectors.errorMessageText).should('not.exist')
    }
}