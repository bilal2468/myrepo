describe('nop commerce', () =>{

    it('Add new Address', ()=>{
        cy.login("bilalnadeem11@gmail.com", "bilal2468")
        cy.contains('a', 'Addresses').click()
        cy.contains('button', 'Add new').click()
        cy.get('#Address_FirstName').type('Bilal')
        cy.get('#Address_LastName').type('Nadeem')
        cy.get('#Address_Email').type('bilalnadeem102@gmail.com')
        cy.get('#Address_City').type('Lahore')
        cy.get('#Address_Address1').type('hello world')
        cy.get('#Address_ZipPostalCode').type('77886')
        cy.get('#Address_PhoneNumber').type('99999999999')
        cy.get('#Address_CountryId').select('Pakistan').should('have.value', '150')
        cy.contains('button', 'Save').click()
    })

})