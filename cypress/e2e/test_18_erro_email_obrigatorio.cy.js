describe('Teste 18: Validar mensagem de erro email obrigatório', () => {
  it('Deve exibir mensagem de erro quando email não é fornecido', () => {
    cy.visit('/login')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').should('contain', 'Email é obrigatório')
  })
})
