describe('Teste 19: Validar mensagem de erro senha obrigatório', () => {
  it('Deve exibir mensagem de erro quando senha não é fornecida', () => {
    cy.visit('/login')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').should('contain', 'Password é obrigatório')
  })
})
