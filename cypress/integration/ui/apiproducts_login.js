/// <reference types="cypress" />

import apiProduct from '../../support/pages/api-products'

context('Login API Products', () => {
    let userLogin

    beforeEach(() => {
        cy.fixture('userLogin.json').then(u=>{
            userLogin = u
        })
    });
    beforeEach(() => {
        //cy.login(userLogin.loginAdmin, userLogin.passAdmin)

    });

    it('Efetuar login de Producer com sucesso', () => {
        cy.login(userLogin.loginProducer, userLogin.passProducer)
        apiProduct.acessar()
        apiProduct.menuLayout().should(($div) => {
            const text = $div.text()
            expect(text).not.to.include('Admin')
          })

    });

    it('Efetuar login de Consumer com sucesso', () => {
        cy.login(userLogin.loginConsumer, userLogin.passConsumer)
        apiProduct.acessar()
        apiProduct.menuLayout().should(($div) => {
            const text = $div.text()
            expect(text).to.not.include('Admin')
          })
          
    });
    
    it('Efetuar login de Admin com sucesso', () => {
        cy.login(userLogin.loginAdmin, userLogin.passAdmin)
        apiProduct.acessar()
        apiProduct.menuLayout().should(($div) => {
            const text = $div.text()
            expect(text).to.include('Admin')
          })
    });    

});

