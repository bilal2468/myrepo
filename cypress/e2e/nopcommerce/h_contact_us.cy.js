describe('nop commerce', () =>{

    it('Contact Us', ()=>{
        cy.login("bilalnadeem11@gmail.com", "bilal2468")
        cy.contains('a', 'Contact us').click()
        cy.get('#Enquiry').type('What are your processes?')
        cy.contains('button', 'Submit').click()
    })

})