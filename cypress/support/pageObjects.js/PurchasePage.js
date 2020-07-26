class PurchasePage{

    getCountryField(){
        return cy.get('#country')
   }

   getSelectCountryOpt(){
       return cy.get('.suggestions > ul > li > a')
   }

   getCheckbox(){
       return cy.get('#checkbox2') 
   }

   getPurchaseBtn(){
       return cy.get("input[type='submit']")
   }

   getAlertText(){
       return cy.get('.alert')   // derived from cypress
   }

}
export default PurchasePage