import data from '../../../fixtures/users.json'
///<reference types="cypress"/>
describe('varify the functionality for contactus form along with nevigation', function () {
//let data

    it('same testcase with obj', function () {
       // cy.fixture('users').then((data)=>{

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data.firstname)
        cy.get('input[name="last_name"]').type(data.lastname)
        cy.get('input[name="email"]').type(data.email)
        cy.get('textarea[name="message"]').type(data.message)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('be.visible').and('have.text', 'Thank You for your Message!')

        })
    })
// })
// })