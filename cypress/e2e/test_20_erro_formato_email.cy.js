describe('Teste 20: Validar erro de credenciais', () => {
  it('Deve exibir erro ao tentar login com senha incorreta', () => {
    cy.visit('/login')
    cy.get('[data-testid="email"]').type('murilo@gmail.com.br')
    cy.get('[data-testid="senha"]').type('senha_incorreta')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
  })
})
