describe('Teste 04: Login com senha vazia', () => {
  it('Deve exibir erro ao tentar login sem senha', () => {
    cy.visit('/login')
    cy.get('[data-testid="email"]').type('murilo@gmail.com.br')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').should('contain', 'Password é obrigatório')
  })
})
