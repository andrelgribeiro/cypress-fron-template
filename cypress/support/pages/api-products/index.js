/// <reference types="Cypress" />

const el = require('./elements').ELEMENTS
class Apis {
    acessar(){
        cy.visit("api-products")
        cy.wait(4000)
    }
    clicarCriarApi(){
        cy.get(el.botaoCriarApi).click()
        cy.wait(2000)

    }
    clicarComboCategorias(){
        cy.get(el.comboCategorias).click()
        cy.wait(2000)
    }
    itensComboCategorias(){
        return cy.get(el.itensComboCategorias)
    }
    clicarApiProdutos(email){
        cy.get(el.menuItems).selectNth(1).click()
    }
    clicarApiManagement(senha){
        cy.get(el.menuItems).selectNth(2).click()
    }
    clicarSettings(){
        cy.get(el.menuItems).selectNth(3).click()
    }
    menuLayout(){
        return cy.get(el.menuLayout)
    }
    categoriasMenu(){
        return cy.get(el.categoriasApiProducts)
    }

}
export default new Apis()