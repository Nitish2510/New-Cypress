describe('Login to the app', function(){

it('Login to the app by visiting', function(){

cy.visit('https://the-internet.herokuapp.com/login');
cy.get('#username').type('tomsmith');
cy.get('#password').type('SuperSecretPassword!');
cy.get('.radius').click();
cy.url().should('include', 'secure');





})



})