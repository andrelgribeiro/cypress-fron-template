/// <reference types="Cypress" />

const el = require('./elements').ELEMENTS
class Settings {
    acessar(){
        cy.visit("settings/categories")
    }

    clicarCriarCategoria(){
        cy.contains('button', 'Criar Categoria').click()
    }
    criarCategoria(nome, descricao){
        this.clicarCriarCategoria()
        cy.get(el.campoNome).type(nome)
        cy.get(el.campoDescricao).type(descricao)
        cy.get(el.botaoSalvar).click()
        cy.wait(3000)

    }
    listaCategorias(){
        return cy.get(el.listaCategorias)
    }
    alertaMensagem(){
        return cy.get(el.alerta)
    }
    primeiroNomeListaCategoria(){
        return cy.get(el.firstItemName)
    }
    primeiroBotaoDown(){
        return cy.get(el.firstDownButton)
    }
    primeiraCategoriaFiltro(){
        return cy.get(el.firstCategorieFilter)
    }
    ultimoBotaoDelete(){
        return cy.get(el.lastDeleteButton)
    }
    confirmarDialogo(){
        return cy.get(el.confirmDialog)
    }
    existeAlerta(nome){
        return cy.get(el.alerta).should(($div) => {
            const text = $div.text()
            return text.indexOf(nome)!==-1
          })
    }
    preencherUsuario(email){
        cy.get(el.email).type(email)
    }
    preencherSenha(senha){
        cy.get(el.senha).type(senha)
    }
    clicarBotaoLogin(){
        cy.get(el.botaoLogin).click()
    }
    clicarNaoMostrar(){
        cy.get(el.naoMostrar).click()
    }
    logarUsuario(email, senha){
        this.preencherUsuario(email)
        this.preencherSenha(senha)
        this.clicarBotaoLogin()
    }
}
export default new Settings()