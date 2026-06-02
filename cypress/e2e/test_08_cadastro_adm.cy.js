describe('Teste 08: Cadastro de usuário ADM com sucesso', () => {
  it('Cadastro de usuário adm com sucesso', () => {
    cy.visit('/cadastrarusuarios')
    cy.get('[data-testid="nome"]').type('Murilo Silva')
    cy.get('[data-testid="email"]').type('murilo_admin@gmail.com.br')
    cy.get('[data-testid="password"]').type('teste123')
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()

    cy.contains('a', 'Cadastro realizado com sucesso').should('be.visible')
    cy.ehAdm('Murilo Silva', 'murilo_admin@gmail.com.br', 'sim')

    cy.deleteUsuario('murilo_admin@gmail.com.br')
  })
})
