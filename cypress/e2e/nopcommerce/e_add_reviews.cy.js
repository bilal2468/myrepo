describe('nop commerce', () =>{
    
    it('Add Reviews', ()=>{
        cy.login("bilalnadeem11@gmail.com", "bilal2468")
        cy.visit('https://demo.nopcommerce.com/apple-macbook-pro-13-inch')
        cy.contains('a', 'Add your review').click()
        cy.get('#AddProductReview_Title').type("Good Product")
        cy.get('#AddProductReview_ReviewText').type('It is very good product')
        cy.get('#addproductrating_4').click()
        cy.contains('button', 'Submit review').click()
    })
})