describe('Teste 11: Buscar por item existente', () => {
  it('Buscar por item existente', () => {
    cy.cadastraUsuario('Murilo', 'murilo@gmail.com', '123456', 'false')
    cy.login_api('murilo@gmail.com', '123456', '/home')
    cy.get('[data-testid="pesquisar"]').type('Logitech MX Vertical')
    cy.get('[data-testid="botaoPesquisar"]').click()

    cy.get('.card-body').should('have.length', 1)
    cy.contains('Logitech MX Vertical').should('be.visible')
  })
})
