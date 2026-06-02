describe('Teste 02: Login com sucesso - Usuário Regular', () => {
  const emailUsuario = 'usuario_teste@qa.com'
  const senhaUsuario = 'teste123'

  before(() => {
    // Criar usuário regular via API
    cy.request('POST', 'https://serverest.dev/usuarios', {
      nome: 'Usuario Teste',
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

  it('Login com sucesso - Usuário Regular', () => {
    cy.visit('/login')
    cy.get('[data-testid="email"]').type(emailUsuario)
    cy.get('[data-testid="senha"]').type(senhaUsuario)
    cy.get('[data-testid="entrar"]').click()

    cy.url().should('eq', 'https://front.serverest.dev/home')
  })
})
