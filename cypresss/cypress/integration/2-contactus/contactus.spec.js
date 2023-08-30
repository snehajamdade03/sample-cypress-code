///<reference types="cypress"/>
describe('varify the functionality for contactus form along with nevigation', function () {
    beforeEach(function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('.section_header').should('be.visible').and('have.text', 'CONTACT US')
    })

    it('varify the functionality for contactus form-submit button', function () {
        // cy.get('input[name="first_name"]').type('sneha')
        // cy.get('input[name="last_name"]').type('jamdade')
        // cy.get('input[name="email"]').type('sneha@gmail.com')
        // cy.get('textarea[name="message"]').type('love u')
        cy.contactus('sneha','jamdade','sneha@gmail.com','hiii')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('be.visible').and('have.text','Thank You for your Message!')

    })
    it('varify the functionality for contactus form-reset button', function () { 
//  cy.get('input[name="first_name"]').type('sneha')
//     cy.get('input[name="last_name"]').type('jamdade')
//     cy.get('input[name="email"]').type('snehagmail.com')
//     cy.get('textarea[name="message"]').type('love u')
cy.contactus('sneha','jamdade','sneha@gmail.com','hiii')
    cy.get('input[value="RESET"]').click()

//     //validate after reset
//     cy.get('input[name="first_name"]').should('have.text',"")
//     cy.get('input[name="last_name"]').should('have.text',"")
//     cy.get('input[name="email"]').should('have.text',"")
//     cy.get('textarea[name="message"]').should('have.text',"")
   
//     })
//     it.only('varify the functionality for contactus form-invalid credential', function () {
//         cy.get('input[name="first_name"]').type('sneha')
//         cy.get('input[name="last_name"]').type('jamdade')
//         cy.get('input[name="email"]').type('snehagmail.com')
//         cy.get('textarea[name="message"]').type('love u')
//         cy.get('input[value="SUBMIT"]').click()
//         cy.get('body').should('contain','Error: Invalid email address')

   })
})