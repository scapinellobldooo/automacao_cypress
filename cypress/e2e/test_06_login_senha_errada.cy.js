describe('Teste 06: Login com senha errada', () => {
  it('Deve exibir erro ao errar a senha', () => {
    cy.visit('/login')
    cy.get('[data-testid="email"]').type('murilo@gmail.com.br')
    cy.get('[data-testid="senha"]').type('senha_errada')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
  })
})
