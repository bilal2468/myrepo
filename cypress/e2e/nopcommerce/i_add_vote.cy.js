describe('nop commerce', () =>{

    it('Add Vote', ()=>{
        cy.login("bilalnadeem11@gmail.com", "bilal2468")
        cy.get('#pollanswers-2').click()
        cy.contains('button', 'Vote').click()
        cy.wait(4000)
    })

    it('View Blog', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.contains('a', 'Blog').click()
    })

})