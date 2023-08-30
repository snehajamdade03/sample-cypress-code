///<reference types="cypress"/>
describe('varify the traversal methods', function () {
    before(function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')

    })
    it('to getting dom element to specify the index to use eq().command', function () {

        cy.get('.traversal-drinks-list').find('li').eq(0).should('have.text', 'Coffee')
    })
    it('to getting dom element to specify the index to use eq().command', function () {

        cy.get('.traversal-drinks-list').find('li').first(0).should('have.text', 'Coffee')
    })
    it('to getting dom element to specify the index to use eq().command', function () {
        cy.get('.traversal-drinks-list').find('li').last(5).should('have.text', 'Sugar')
    })
    it('to getting dom element to specify the index to use eq().command', function () {
        cy.get('.traversal-food-list').children().should('have.length',11)
    })
    it('to getting dom element to specify the index to use eq().command', function () {
        cy.get('#veggie').next().should('have.text','Asparagus')
    })
    it('to getting dom element to specify the index to use eq().command', function () {
        cy.get('#veggie').prev().should('have.text','Figs')
    })
})