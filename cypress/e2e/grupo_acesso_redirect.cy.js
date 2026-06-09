describe('Grupo: Testes de Acesso, Redirect e Logout', () => {
  describe('Teste 13: Validar checkbox de administrador', () => {
    it('Deve permitir marcar a opção de administrador no cadastro', () => {
      cy.visit('/cadastrarusuarios')
      cy.get('[data-testid="checkbox"]').check()
      cy.get('[data-testid="checkbox"]').should('be.checked')
    })
  })

  describe('Teste 14: Logout com sucesso', () => {
    const emailUsuario = 'usuario_logout@qa.com'
    const senhaUsuario = 'teste123'

    before(() => {
      cy.request('POST', 'https://serverest.dev/usuarios', {
        nome: 'Usuario Logout',
        email: emailUsuario,
        password: senhaUsuario,
        administrador: 'false'
      })
    })

    after(() => {
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

  describe('Teste 15: Acessar página de cadastro', () => {
    it('Deve acessar a página de cadastro a partir do login', () => {
      cy.visit('/login')
      cy.get('[data-testid="cadastrar"]').click()
      cy.url().should('include', '/cadastrarusuarios')
      cy.get('[data-testid="nome"]').should('be.visible')
    })
  })

  describe('Teste 16: Validar redirecionamento após login admin', () => {
    const emailAdmin = 'admin_redirect@qa.com'
    const senhaAdmin = 'teste123'

    before(() => {
      cy.request('POST', 'https://serverest.dev/usuarios', {
        nome: 'Admin Redirect',
        email: emailAdmin,
        password: senhaAdmin,
        administrador: 'true'
      })
    })

    after(() => {
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

    it('Deve redirecionar para página admin após login como administrador', () => {
      cy.visit('/login')
      cy.get('[data-testid="email"]').type(emailAdmin)
      cy.get('[data-testid="senha"]').type(senhaAdmin)
      cy.get('[data-testid="entrar"]').click()
      cy.url().should('eq', 'https://front.serverest.dev/admin/home')
    })
  })

  describe('Teste 17: Validar redirecionamento após login usuário comum', () => {
    const emailUsuario = 'usuario_redirect@qa.com'
    const senhaUsuario = 'teste123'

    before(() => {
      cy.request('POST', 'https://serverest.dev/usuarios', {
        nome: 'Usuario Redirect',
        email: emailUsuario,
        password: senhaUsuario,
        administrador: 'false'
      })
    })

    after(() => {
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

    it('Deve redirecionar para página home após login como usuário comum', () => {
      cy.visit('/login')
      cy.get('[data-testid="email"]').type(emailUsuario)
      cy.get('[data-testid="senha"]').type(senhaUsuario)
      cy.get('[data-testid="entrar"]').click()
      cy.url().should('eq', 'https://front.serverest.dev/home')
    })
  })
})
