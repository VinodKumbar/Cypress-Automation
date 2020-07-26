/// <reference types="Cypress" />
describe('My Second Test Suit', function(){
    it('My Second Test Case', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // checkbox checked 
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        // Uncheck the checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // select multiple checkbox
        cy.get('input[type="checkbox"]').check(['option1','option2'])

        //static dropdown
        cy.get('select').select('option2').should('have.value','option2')

        //dynamic dropdown
        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($el, index, $list)=> {
            if($el.text()==='India'){
                $el.click()
            }
            })
        cy.get('#autocomplete').should('have.value', 'India')

        // Visible and Invisible 

        // verify text is displayed or not
        cy.get('#displayed-text').should('be.visible')

        // click on Hide button
        cy.get('#hide-textbox').click()

        // verify text is displayed or not
        cy.get('#displayed-text').should('not.be.visible')

        // click on Show button
        cy.get('#show-textbox').click()

        // verify text is displayed or not
        cy.get('#displayed-text').should('be.visible')

    })    
})
