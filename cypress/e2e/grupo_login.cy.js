describe('Grupo: Testes de Login', () => {
  describe('Teste 01: Login com sucesso - Usuário ADM', () => {
    const emailAdmin = 'admin_teste@qa.com'
    const senhaAdmin = 'teste123'

    before(() => {
      cy.request('POST', 'https://serverest.dev/usuarios', {
        nome: 'Admin Teste',
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

    it('Login com sucesso - Usuário ADM', () => {
      cy.visit('/')
      cy.get('[data-testid="email"]').type(emailAdmin)
      cy.get('[data-testid="senha"]').type(senhaAdmin)
      cy.get('[data-testid="entrar"]').click()

      cy.url().should('eq', 'https://front.serverest.dev/admin/home')
      cy.contains('p', 'Este é seu sistema para administrar seu ecommerce.').should('be.visible')
    })
  })

  describe('Teste 02: Login com sucesso - Usuário Regular', () => {
    const emailUsuario = 'usuario_teste@qa.com'
    const senhaUsuario = 'teste123'

    before(() => {
      cy.request('POST', 'https://serverest.dev/usuarios', {
        nome: 'Usuario Teste',
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

    it('Login com sucesso - Usuário Regular', () => {
      cy.visit('/login')
      cy.get('[data-testid="email"]').type(emailUsuario)
      cy.get('[data-testid="senha"]').type(senhaUsuario)
      cy.get('[data-testid="entrar"]').click()

      cy.url().should('eq', 'https://front.serverest.dev/home')
    })
  })

  describe('Teste 03: Login com email vazio', () => {
    it('Deve exibir erro ao tentar login sem email', () => {
      cy.visit('/login')
      cy.get('[data-testid="senha"]').type('teste')
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert').should('contain', 'Email é obrigatório')
    })
  })

  describe('Teste 04: Login com senha vazia', () => {
    it('Deve exibir erro ao tentar login sem senha', () => {
      cy.visit('/login')
      cy.get('[data-testid="email"]').type('murilo@gmail.com.br')
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert').should('contain', 'Password é obrigatório')
    })
  })

  describe('Teste 05: Login com email inválido', () => {
    it('Deve exibir erro ao tentar login com credenciais inválidas', () => {
      cy.visit('/login')
      cy.get('[data-testid="email"]').type('naoexiste@test.com')
      cy.get('[data-testid="senha"]').type('senhaerrada')
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
    })
  })

  describe('Teste 06: Login com senha errada', () => {
    it('Deve exibir erro ao errar a senha', () => {
      cy.visit('/login')
      cy.get('[data-testid="email"]').type('murilo@gmail.com.br')
      cy.get('[data-testid="senha"]').type('senha_errada')
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
    })
  })
})
