


import LoginPage from '../PageObjects/LoginPage'

describe('Login to the app', function(){

    it('valid login test', function(){

       
        LoginPage.visit();
        cy.xpath('//*[@id="tbodyid"]/div[7]/div/div/h4/a').scrollIntoView();
        cy.contains('HTC One M9').click();
        LoginPage.clickaddtocart();
        cy.wait(2000);
        LoginPage.clickoncart();
        cy.wait(2000);
        cy.get('.success > :nth-child(2)').should('have.text', 'HTC One M9');
        cy.wait(2000);
       LoginPage.clickonplaceorder();

     })
}
)

describe('myfixturedata', function(){

beforeEach(function(){

    cy.fixture('example').then(function(data){

    this.data=data
   })

   cy.fixture('location').then(function(data){

    this.obj=data
    })


})


it('fixturedemo',function(){

    cy.xpath(this.obj.name).type(this.data.name);   
    cy.xpath(this.obj.country).type(this.data.country);
    cy.xpath(this.obj.city).type(this.data.city);
    cy.xpath(this.obj.card).type(this.data.card);
    cy.xpath(this.obj.month).type(this.data.month);
    cy.xpath(this.obj.year).type(this.data.year);
    

    LoginPage.clickonpurchase();
    cy.wait(1000);
    LoginPage.clickonok();


})

})

