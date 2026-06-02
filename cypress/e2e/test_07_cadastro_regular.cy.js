describe('Teste 07: Cadastro de usuário regular com sucesso', () => {
  it('Cadastro de usuário regular com sucesso', () => {
    cy.visit('/cadastrarusuarios')
    cy.get('[data-testid="nome"]').type('Murilo Silva')
    cy.get('[data-testid="email"]').type('murilo_reg@gmail.com.br')
    cy.get('[data-testid="password"]').type('teste123')
    cy.get('[data-testid="checkbox"]').uncheck()
    cy.get('[data-testid="cadastrar"]').click()

    cy.contains('a', 'Cadastro realizado com sucesso', { timeout: 6000 }).should('be.visible')
    cy.ehAdm('Murilo Silva', 'murilo_reg@gmail.com.br', 'nao')

    cy.deleteUsuario('murilo_reg@gmail.com.br')
  })
})
