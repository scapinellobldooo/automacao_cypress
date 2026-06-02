describe('Teste 01: Login com sucesso - Usuário ADM', () => {
  const emailAdmin = 'admin_teste@qa.com'
  const senhaAdmin = 'teste123'

  before(() => {
    // Criar usuário admin via API
    cy.request('POST', 'https://serverest.dev/usuarios', {
      nome: 'Admin Teste',
      email: emailAdmin,
      password: senhaAdmin,
      administrador: 'true'
    })
  })

  after(() => {
    // Deletar usuário admin após o teste
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios',
      qs: { email: emailAdmin }
    })
      .then((response) => {
        if (response.body.usuarios.length > 0) {
          cy.request('DELETE', `https://serverest.dev/usuarios/${response.body.usuarios[0]._id}`)
        }
      })
  })

  it('Login com sucesso - Usuário ADM', () => {
    cy.visit('/')
    cy.get('[data-testid="email"]').type(emailAdmin)
    cy.get('[data-testid="senha"]').type(senhaAdmin)
    cy.get('[data-testid="entrar"]').click()

    cy.url().should('eq', 'https://front.serverest.dev/admin/home')
    cy.contains('p', 'Este é seu sistema para administrar seu ecommerce.').should('be.visible')
  })
})
