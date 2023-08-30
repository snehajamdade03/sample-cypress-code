describe('varify the login functionality', function () {
    it('validate login for correct credenial', function () {
        // cy.visit('https://practicetestautomation.com/practice-test-login/')
        // cy.get('#username').type('student')
        // cy.get('#password').type('Password123')
        // cy.get('#submit').click()
        cy.login('student','Password123')
       cy.get('h1[class="post-title"]').should('be.visible').and('contain','Logged In')
    })
    it('validate login for incorrect credenial', function () {
    
        // cy.visit('https://practicetestautomation.com/practice-test-login/')
        // cy.get('#username').type('student')
        // cy.get('#password').type('Password13')
        // cy.get('#submit').click()
        cy.login('student','Password13')
     cy.get('#error').should('be.visible').and('have.text','Your password is invalid!')
     
    })
})