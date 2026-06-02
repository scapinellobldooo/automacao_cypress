describe('Teste 09: Cadastro sem credenciais fornecidas', () => {
  it('Cadastro sem sucesso - sem credenciais fornecidas', () => {
    cy.intercept('POST', '**/usuarios').as('Cadastro_Usuario')
    cy.visit('/cadastrarusuarios')
    cy.get('[data-testid="cadastrar"]').click()

    cy.contains('Nome é obrigatório').should('be.visible')
    cy.contains('Email é obrigatório').should('be.visible')
    cy.contains('Password é obrigatório').should('be.visible')
    cy.wait('@Cadastro_Usuario').its('response.statusCode').should('eq', 400)
  })
})
