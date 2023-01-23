///<reference types ="cypress"/>
describe("BDD assertion", () => {
    beforeEach("visit homepage", () => {
        cy.visit('/')
    })
    it("Implicit assertion testing ", () => {
        cy.get("[href='/commands/assertions']").first().click({ force: true })
        cy.get('.assertion-table')
            .find('tbody tr:last')
            .should('have.class', 'success')
            .find('td')
            .first()
            .should('have.text', "Column content")
            .should('match', 'td')
            .invoke('text')
            // match the content using regular expression
            .should('match', /column content/i)

        //better way
        cy.get('.assertion-table')
            .find('tbody tr:last')
            .contains('td', /column content/i)
            .should('be.visible')
        cy.get('.assertions-link')
            .should('have.class', 'active')
            .and('have.attr', 'href')
            .and('include', 'cypress.io')
    })

    it('Explict assertion testing', () => {
        expect(true).to.be.true
        const obj = {
            greet: "hello world"
        }
        expect(obj).to.equal(obj)
        expect(obj).to.not.deep.equal({ greet: "hello wfforld" })
    })
})
