describe('nop commerce', () => {

    beforeEach(() => {
        cy.login("bilalnadeem11@gmail.com", "bilal2468")
      })

    it('Search Product', () =>{
        cy.get('[placeholder="Search store"]').type('MacBook{enter}')
    })

    it('Add to Cart', () => {
        cy.get('[data-productid="4"]').click()
        cy.get('.product-review-links').children().eq(0).click()
        cy.go('back')
        cy.contains('button', 'Add to wishlist').click()
        cy.get('#product_enteredQuantity_4').clear().type('4')
        cy.wait(5000)
        cy.get('#add-to-cart-button-4').click()
        cy.wait(5000)
    })

  })