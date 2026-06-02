describe('Teste 05: Login com email inválido', () => {
  it('Deve exibir erro ao tentar login com credenciais inválidas', () => {
    cy.visit('/login')
    cy.get('[data-testid="email"]').type('naoexiste@test.com')
    cy.get('[data-testid="senha"]').type('senhaerrada')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
  })
})
