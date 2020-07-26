/// <reference types="Cypress" />

describe('My First Test Suit', function(){
    it('My First Test Case', function(){
        
        // derive base url from cypress.json and concatente with module url
        cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
        cy.get(".search-keyword").type('Ca')
        cy.wait(2000)
        cy.get(".product:visible").should('have.length', 4)
       
        //parent child chaining

        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)

        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('sf')
        }) 
        
        // using each loop and iterate every product then click on the required element

        cy.get('@productLocator').find('.product').each(($el, index, $list)=> {

            const VegText= $el.find('h4.product-name').text()
            if(VegText.includes('Cashews')){
                $el.find('button').click()
            }
        })
        
        // assert if logo text is correctly displayed 
        cy.get('.brand').should('have.text', 'GREENKART')

        // this is to print in logs
        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text())

        })
    })    
})