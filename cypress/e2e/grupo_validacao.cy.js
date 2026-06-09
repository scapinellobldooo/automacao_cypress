describe('Grupo: Testes de Validação de Erros', () => {
  describe('Teste 18: Validar mensagem de erro email obrigatório', () => {
    it('Deve exibir mensagem de erro quando email não é fornecido', () => {
      cy.visit('/login')
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert').should('contain', 'Email é obrigatório')
    })
  })

  describe('Teste 19: Validar mensagem de erro senha obrigatório', () => {
    it('Deve exibir mensagem de erro quando senha não é fornecida', () => {
      cy.visit('/login')
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert').should('contain', 'Password é obrigatório')
    })
  })

  describe('Teste 20: Validar erro de credenciais', () => {
    it('Deve exibir erro ao tentar login com senha incorreta', () => {
      cy.visit('/login')
      cy.get('[data-testid="email"]').type('murilo@gmail.com.br')
      cy.get('[data-testid="senha"]').type('senha_incorreta')
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
    })
  })
})
