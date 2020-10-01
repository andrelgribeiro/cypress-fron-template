/// <reference types="cypress" />

import categorias from '../../support/pages/categorias'
import apiProduct from '../../support/pages/api-products'


cy.faker = require('faker');

context('Login API Products', () => {
    let userLogin

    beforeEach(() => {
        cy.fixture('userLogin.json').then(u=>{
            userLogin = u
            cy.login(userLogin.loginAdmin, userLogin.passAdmin)
            categorias.acessar()
        })
    });

    it('Validar criação de categoria com sucesso', () => {
        let newName = `Aut-${cy.faker.commerce.department()}-${cy.faker.random.number()}`
        let newDescription = cy.faker.commerce.productDescription()
        categorias.criarCategoria(newName, newDescription)
        categorias.listaCategorias().invoke('text').then((text1) =>{expect(text1).to.contain(newName)})
    })

    it('Validar o nome deve ser único', () => {
        let newName = `Aut-${cy.faker.commerce.department()}-${cy.faker.random.number()}`
        let newDescription = cy.faker.commerce.productDescription()
        categorias.criarCategoria(newName, newDescription)
        categorias.listaCategorias().invoke('text').then((text1) =>{expect(text1).to.contain(newName)})
        categorias.criarCategoria(newName, newDescription)
        categorias.listaCategorias().invoke('text').then((text1) =>{expect(text1).to.contain(newName)})
        categorias.alertaMensagem().should('be.visible')
    });

    it('Validar categorias usadas para montar o menu de navegação dos API Products', () => {
        let newName = `Aut-${cy.faker.commerce.department()}-${cy.faker.random.number()}`
        let newDescription = cy.faker.commerce.productDescription()
        categorias.criarCategoria(newName, newDescription)
        apiProduct.acessar()
        apiProduct.categoriasMenu().should(($div) => {
            const text = $div.text()
            expect(text).to.include(newName)
          })        
    });
    
    it('Validar ordenação deve refletir no menu', () => {
        categorias.primeiroNomeListaCategoria().invoke('text').then((text1) =>{
            categorias.primeiroBotaoDown().click()
            cy.wait(2000)
            apiProduct.acessar()
            cy.wait(3000)
            categorias.primeiraCategoriaFiltro().invoke('text').then((text2) =>{expect(text2.trim()).to.contain(text1.trim())})
        })

    });    

    it('Validar categorias inativas não devem aparecer no menu', () => {
        let newName = `Aut-${cy.faker.commerce.department()}-${cy.faker.random.number()}`
        let newDescription = cy.faker.commerce.productDescription()
        categorias.criarCategoria(newName, newDescription)
        cy.wait(3000)
        categorias.ultimoBotaoDelete().click()
        categorias.confirmarDialogo().click()
        apiProduct.acessar()
        apiProduct.categoriasMenu().should(($div) => {
            const text = $div.text()
            expect(text).not.to.include(newName)
          })  

    });    

    it('Validar são usadas no cadastro de API Product', () => {
        let newName = `Aut-${cy.faker.commerce.department()}-${cy.faker.random.number()}`
        let newDescription = cy.faker.commerce.productDescription()
        categorias.criarCategoria(newName, newDescription)
        cy.wait(3000)
        apiProduct.acessar()
        apiProduct.clicarCriarApi()
        apiProduct.itensComboCategorias().invoke('text').then((text1) =>{expect(text1).to.contain(newName)})

    });    


});

