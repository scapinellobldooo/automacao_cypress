describe('Teste 15: Acessar página de cadastro', () => {
  it('Deve acessar a página de cadastro a partir do login', () => {
    cy.visit('/login')
    cy.get('[data-testid="cadastrar"]').click()
    cy.url().should('include', '/cadastrarusuarios')
    cy.get('[data-testid="nome"]').should('be.visible')
  })
})
