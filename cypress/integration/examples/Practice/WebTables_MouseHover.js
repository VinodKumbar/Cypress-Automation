/// <reference types="Cypress" />

describe('My Fourth Test Suit', function(){
    it('My Fourth Test Case', function(){
       
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
           
            if(text.includes('Python')){
           
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        }) 
        
        // mouse hover - one way
        cy.get("div mouse-hover-content").invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')

        // mouse hover - another way
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')

    })    
})
