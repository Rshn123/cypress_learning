declare namespace Cypress {
    interface Chainable {
        /**
         * visit homepage
         */

        visitHomepage(): Chainable<Element>

        /**
         * login
         * @param username - takes username or id
         * @param password - takes password
         */

        login(username: string, password: string): Chainable<Element>
    }
}

Cypress.Commands.add("visitHomepage", () => {
    cy.visit("/")
})