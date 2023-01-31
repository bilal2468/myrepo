describe('nop commerce', () =>{

    it('Logout', ()=>{
        cy.login("bilalnadeem11@gmail.com", "bilal2468")
        cy.contains('a', 'Log out').click()
    })

})