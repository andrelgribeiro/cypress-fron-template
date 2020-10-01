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

    it.skip('O gateway deve estar em apenas um datacenter', () => {
    });

    it.skip('As URLs devem ser válidas', () => {
    });

    it.skip('O gateway pode ser ativado / inativado', () => {
    });

    it.skip('Os gateways podem ser agrupados por datacenter', () => {
    });

    it.skip('O gateway não pode ser excluído se estiver sendo usado por algum serviço', () => {
    });
});

