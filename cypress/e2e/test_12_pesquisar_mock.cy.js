describe('Teste 12: Pesquisar por itens mockados', () => {
  it('Pesquisar por itens mockados', () => {
    const itens = require('../fixtures/mock_itens')
    cy.login_api('murilo@gmail.com', '123456', '/home')
    cy.get('[data-testid="pesquisar"]').type('Logitech')
    cy.intercept(
      'GET',
      'https://serverest.dev/produtos?nome=Logitech',
      { fixture: 'mock_itens' }
    ).as('getItens')
    cy.get('[data-testid="botaoPesquisar"]').click()

    cy.get('.card-body').should('have.length', 4)
    cy.deleteUsuario('murilo@gmail.com')
  })
})
