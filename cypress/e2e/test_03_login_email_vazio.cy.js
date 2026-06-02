describe('Teste 03: Login com email vazio', () => {
  it('Deve exibir erro ao tentar login sem email', () => {
    cy.visit('/login')
    cy.get('[data-testid="senha"]').type('teste')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').should('contain', 'Email é obrigatório')
  })
})
