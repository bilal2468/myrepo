describe('nop commerce', () => {

    it('Sign Up', () => {
      cy.visit('https://demo.nopcommerce.com/')
      cy.contains('a', 'My account').click()
      cy.contains('button', 'Register').click()
      cy.get('#FirstName').type('Bilal')
      cy.get('#LastName').type('Nadeem')
      cy.get('#Email').type('bilalnadeem11@gmail.com')
      cy.get('#Password').type('bilal2468')
      cy.get('#ConfirmPassword').type('bilal2468')
      cy.get('#register-button').click()
      cy.contains('a','Continue').click()
    })

  })