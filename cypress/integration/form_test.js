describe("Test form inputs", function () {
    beforeEach(function(){
        cy.visit("http://localhost:3000/")
    })
    it("adds text to name input", function () {
        cy
            .get('[data-cy=name]')
            .type('Hello Worlds')
            .should('have.value', "Hello Worlds");
        cy
            .get('[data-cy=email]')
            .type('hello@world.com')
            .should('have.value', 'hello@world.com')
        cy
            .get('[data-cy=password]')
            .type('I want to help')
            .should('have.value', 'I want to help')
        cy 
            .get('[data-cy=terms]')
            .check()
            .should("be.checked")
        cy
            .contains("Submit")
            .click();
    })
})
