class LoginPage
{

    visit()
    { cy.visit('https://www.demoblaze.com/');
    }
clickaddtocart()
    {

        const button= cy.xpath("//a[normalize-space()='Add to cart']")
       button.click()
    }
clickoncart()
    {

       const button= cy.xpath("//a[@id='cartur']")
       button.click()
    }
    
    clickonplaceorder()
    {

       const button= cy.xpath("(//button[normalize-space()='Place Order'])[1]")
       button.click()
   }


   clickonpurchase()
    {

       const button= cy.xpath("//button[normalize-space()='Purchase']")
       button.click()
   }

   clickonok()
    {

       const button= cy.xpath("//button[normalize-space()='OK']")
       button.click()
   }



}


export default new LoginPage()