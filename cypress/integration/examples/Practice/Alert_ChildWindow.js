/// <reference types="Cypress" />
 
describe('My Third Test Suite', function() {
    it('My Third case',function() { 
        
        //How to handle Window Alerts
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        
        //window:alert
        cy.on('window:alert',(str)=>{
        
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        
        //window:confirm
        cy.on('window:confirm',(str)=> {
        
        //Mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
 
        // how to handle Child window ?
        // 1. click on link- which take you to child window
        // 2. remove the target attribute using Jquery method - removeAttr()
        // 3. verify the child window in parent winodw screen then go back to parent window page
        
        cy.get('#opentab').invoke('removeAttr','target').click()
 
        cy.url().should('include','qaclickacademy')
 
        cy.go('back')
    })
})