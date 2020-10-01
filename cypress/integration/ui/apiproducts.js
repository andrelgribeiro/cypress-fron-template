/// <reference types="cypress" />

import apiProduct from '../../support/pages/api-products'

context('Validar API Products', () => {
    let userLogin

    beforeEach(() => {
        cy.fixture('userLogin.json').then(u=>{
            userLogin = u
        })
    });
    beforeEach(() => {
        //cy.login(userLogin.loginAdmin, userLogin.passAdmin)

    });

    it.skip('Validar criação de api', () => {
    });
});

