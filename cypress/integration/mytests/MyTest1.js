


describe('Login to the app', function(){

    it('Need to visit app', function(){
    
    cy.visit('https://www.demoblaze.com/');
    cy.wait(3000);
    cy.xpath('//*[@id="tbodyid"]/div[7]/div/div/h4/a').scrollIntoView();
    cy.contains('HTC One M9').click();
    cy.contains('Add to cart').click();
    cy.wait(2000);
    cy.contains('Cart').click();
    cy.get('.success > :nth-child(2)').should('have.text', 'HTC One M9')
    cy.contains('Place Order').click();
    cy.wait(2000);
    
      
        
    cy.xpath("//*[@id='name']").type('NITISH');   
    cy.xpath("//*[@id='country']").type('INDIA');
    cy.xpath("//*[@id='city']").type('NOIDA');
    cy.xpath("//*[@id='card']").type('384883848438388383');
    cy.xpath("//*[@id='month']").type('AUGUST');
    cy.xpath("//*[@id='year']").type('2202');
    cy.wait(2000);
   
   
    cy.contains('Purchase').click();
    cy.wait(2000);
    
    cy.contains('OK').click();
        
    



    
        
})

})