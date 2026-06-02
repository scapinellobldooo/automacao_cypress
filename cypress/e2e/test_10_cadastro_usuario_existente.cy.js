describe('Teste 10: Cadastro com usuário já cadastrado', () => {
  it('Cadastro sem sucesso - usuário já cadastrado', () => {
    cy.visit('/cadastrarusuarios')
    cy.get('[data-testid="nome"]').type('Murilo Vinicius Silva')
    cy.get('[data-testid="email"]').type('murilo@gmail.com.br')
    cy.get('[data-testid="password"]').type('teste123')
    cy.intercept('POST', '**/usuarios', {
      statusCode: 400,
      body: {
        message: 'Usuário já cadastrado'
      }
    })
    cy.get('[data-testid="cadastrar"]').click()

    cy.get('.alert-dismissible').should('contain', 'Usuário já cadastrado')
  })
})
