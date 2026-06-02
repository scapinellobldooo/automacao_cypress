describe('Teste 14: Logout com sucesso', () => {
  const emailUsuario = 'usuario_logout@qa.com'
  const senhaUsuario = 'teste123'

  before(() => {
    // Criar usuário regular via API
    cy.request('POST', 'https://serverest.dev/usuarios', {
      nome: 'Usuario Logout',
      email: emailUsuario,
      password: senhaUsuario,
      administrador: 'false'
    })
  })

  after(() => {
    // Deletar usuário após o teste
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios',
      qs: { email: emailUsuario }
    })
      .then((response) => {
        if (response.body.usuarios.length > 0) {
          cy.request('DELETE', `https://serverest.dev/usuarios/${response.body.usuarios[0]._id}`)
        }
      })
  })

  it('Deve efetuar o logout da conta de usuário com sucesso', () => {
    cy.visit('/login')
    cy.get('[data-testid="email"]').type(emailUsuario)
    cy.get('[data-testid="senha"]').type(senhaUsuario)
    cy.get('[data-testid="entrar"]').click()
    cy.get('[data-testid="logout"]').click()
    cy.url().should('include', '/login')
    cy.get('[data-testid="entrar"]').should('be.visible')
  })
})
