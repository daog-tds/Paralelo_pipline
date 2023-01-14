/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Bienvenido al curso de Cypress seccion 1", () =>{
    it("mi primer Test -> Hola mundo", () =>{
        cy.log("Bienvenido a Cypress")
        cy.visit("https://demoqa.com/text-box")

        cy.get("#userName").type("Diego")
        cy.wait(2000)
    })
    
})  //<--Cierre de describe