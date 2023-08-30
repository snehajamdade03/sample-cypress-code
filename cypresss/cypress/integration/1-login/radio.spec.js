///<reference types="cypress"/>
describe('varify the functionality for check box',function(){
    beforeEach(function(){
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })
    it('varify the functionality for dropdown',function(){
cy.get('input[value="option-3"]').should('be.checked')
cy.get('input[value="option-1"]').check().should('be.not.checked')
cy.get('input[value="option-2"]').uncheck()
cy.get('input[value="option-4"]').uncheck()
    })
})