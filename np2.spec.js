

describe('Teste UI no site Store', () => {
    it('Visitando a pagina e fazendo sing up', () => {
        cy.visit("https://www.demoblaze.com/index.html");
        login()
    
    })
    it('Fazendo Login', () => {
        cy.visit("https://www.demoblaze.com/index.html");
        cy.get('#login2').click();
        cy.get('#loginusername').type("Andressa")
        cy.get('#loginpassword').type("123456")
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
     
    })
  
    it('Verificando se a pagina do Nokia Lumia contém a palavra Iphone', () => {
        cy.visit("https://www.demoblaze.com/prod.html?idp_=2");
        cy.get('#more-information > p').should('contain.text','Iphone')
    })
    
   
   
})





function login() {

    cy.visit("https://www.demoblaze.com/index.html")
    cy.get('#signin2').click();
    cy.get('#sign-username').type("Andressa")
    cy.get('#sign-password').type("123456")
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    return ;
}