describe('nop commerce', () =>{

    it('Email to Friend', () => {
        cy.login("bilalnadeem11@gmail.com", "bilal2468")
        cy.visit('https://demo.nopcommerce.com/apple-macbook-pro-13-inch')
        cy.contains('button', 'Email a friend').click()
        cy.get('.friend-email').type('bilal.nadeem@devsinc.com')
        cy.get('#PersonalMessage').type('It is very good product')
        cy.contains('button', 'Send email').click()
    })

})