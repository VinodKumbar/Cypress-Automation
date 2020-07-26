class HomePage{

    getNamefield(){
        return cy.get("input[name='name']:nth-child(2)")
    }

    getTwoWayDataBindingfield(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGenderfield(){
        return cy.get('select')
    }

    getEnterprenurRadioButton(){
        return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }

}
export default HomePage