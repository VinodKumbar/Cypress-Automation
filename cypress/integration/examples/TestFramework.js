/// <reference types="Cypress" />
// import the HomaPage class then create object for it in it() block
import HomePage from '../../support/pageObjects.js/HomePage'    
import ShopPage from '../../support/pageObjects.js/ShopPage' 
import ProtoCommercePage from '../../support/pageObjects.js/ProtoCommercePage'
import PurchasePage from '../../support/pageObjects.js/PurchasePage'

describe('Cypress Framework', function(){

    before(function(){
        cy.fixture('TestData').then(function(data){
            this.data=data
        })
    })
    it('Test Framework', function(){

        // create object for HomePage
        const homePage = new HomePage()

        // create object for ShopPage
        const shopPage = new ShopPage()

        // create object for ProtoCommercePage
        const protoCommercePage = new ProtoCommercePage()

        // create object for PurchasePage
        const purchasePage = new PurchasePage()

        // // derive base url from cypress.json and concatente with module url

        cy.visit(Cypress.env('url')+"angularpractice/")

        // pass the data from fixtures - TestData
        homePage.getNamefield().type(this.data.name)
        homePage.getGenderfield().select(this.data.gender)

        //verify the name has been entered in Two-way Data Binding example field
        homePage.getTwoWayDataBindingfield().should('have.value',this.data.name)

        // verify the Name filed minimum character 
        homePage.getNamefield().should('have.attr','minlength', '2')

        // verify the Radio button is disbaled or not
        homePage.getEnterprenurRadioButton().should('be.disabled')

        // pause the test and do debug if required - you can do Time Travel
        // once fix the issues then comment it out or remove it
        //cy.pause()

        // click on Shop tab - Cypress CSS
        homePage.getShopTab().click()

        // declared customized function in commands.js 
        // Select common locator for all produst and iterate 

        cy.selectProduct('Blackberry')

        // when you want to select two or multiple products - derive data from TestData
        // itrate to thorough the array and pull all the values from array
        // and repated the selectProduct step in each and every elements present in the array

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)            
        })
        
        // click on the checkout button - ShopPage
        shopPage.getCheckOutBtn().click()

        // declared customized function in commands.js 
        //1. Sum of Products
        // 2. Compare with Total value  
        cy.SumOfProducts()

        // click on the checkout button - ProtoCommercePage
        protoCommercePage.getCheckOutBtn().click()

        // Type India in Country field
        purchasePage.getCountryField().type(this.data.countryName)

        // Select COuntry name from Options
        purchasePage.getSelectCountryOpt().click()

        // select checkbox
        purchasePage.getCheckbox().click({force: true})

        //click on Purchase button
        purchasePage.getPurchaseBtn().click()

        // verify the sucess message
        //purchasePage.getAlertText().should('have.text', '\n          ×\n          Success! Thank you! Your order will be delivered in next few weeks :-).\n        ')

        purchasePage.getAlertText().then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
            
        })


    })    
})