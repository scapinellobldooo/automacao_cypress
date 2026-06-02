describe('Teste 13: Validar checkbox de administrador', () => {
  it('Deve permitir marcar a opção de administrador no cadastro', () => {
    cy.visit('/cadastrarusuarios')
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="checkbox"]').should('be.checked')
  })
})
