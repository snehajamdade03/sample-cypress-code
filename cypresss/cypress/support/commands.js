// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
Cypress.Commands.add('login',(username,password)=>{
     cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('#submit').click()
})
Cypress.Commands.add('contactus',(first_name,last_name,email,message)=>{
    //cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('input[name="first_name"]').type(first_name)
    cy.get('input[name="last_name"]').type(last_name)
    cy.get('input[name="email"]').type(email)
    cy.get('textarea[name="message"]').type(message)
    //cy.get('input[value="SUBMIT"]').click()
})
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
