describe('nop commerce', () =>{

    beforeEach(() => {
        cy.login("bilalnadeem11@gmail.com", "bilal2468")
      })

    it('View Wishlist', ()=>{
        cy.get('.wishlist-label').click()
        cy.wait(3000)
    })

    it('View and Update Shopping Cart', ()=>{
        cy.get('.cart-label').click()
        cy.get('.qty-input').clear().type('5')
        cy.contains('button', 'Update shopping cart').click()
        cy.wait(5000)
        cy.contains('button', 'Continue shopping').click()
    })

})