describe('nop commerce', () =>{

    it('View Digital Downloads', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.contains('a', ' Digital downloads').click()
        cy.get('[data-viewmode="list"]').click()
        cy.contains('a', 'If You Wait (donation)').click()
    })

})