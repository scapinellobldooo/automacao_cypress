describe('Fluxo 1: Tela de Login', () => {
  const urlLogin = 'https://front.serverest.dev/login';
  const urlApi = 'https://serverest.dev';
  let emailAdmin, emailComum;

  before(() => {
    const sufixo = Date.now();
    emailAdmin = `admin_login_${sufixo}@test.com`;
    emailComum = `user_login_${sufixo}@test.com`;

    // Criação rápida via API para garantir que as credenciais existem
    cy.request('POST', `${urlApi}/usuarios`, { nome: 'Admin Login', email: emailAdmin, password: 'teste', administrador: 'true' });
    cy.request('POST', `${urlApi}/usuarios`, { nome: 'User Login', email: emailComum, password: 'teste', administrador: 'false' });
  });

  beforeEach(() => {
    cy.visit(urlLogin);
  });

  it('1. Deve exibir mensagens de erro com campos vazios', () => {
    cy.get('[data-testid="entrar"]').click();
    cy.get('.alert').should('contain', 'Email é obrigatório').and('contain', 'Password é obrigatório');
  });

  it('2. Deve validar formato de email inválido', () => {
    cy.get('[data-testid="email"]').type('emailInvalido');
    cy.get('[data-testid="senha"]').type('123456');
    cy.get('[data-testid="entrar"]').click();
    cy.get('.alert').should('contain', 'Email deve ser um email válido');
  });

  it('3. Deve exibir erro ao errar a senha', () => {
    cy.get('[data-testid="email"]').type(emailAdmin);
    cy.get('[data-testid="senha"]').type('senha_errada');
    cy.get('[data-testid="entrar"]').click();
    cy.get('.alert').should('contain', 'Email e/ou senha inválidos');
  });

  it('4. Deve realizar login com sucesso como Administrador', () => {
    cy.get('[data-testid="email"]').type(emailAdmin);
    cy.get('[data-testid="senha"]').type('teste');
    cy.get('[data-testid="entrar"]').click();
    cy.get('h1').should('contain', 'Bem vindo');
    cy.get('[data-testid="logout"]').should('be.visible');
  });

  it('5. Deve realizar login com sucesso como Usuário Comum', () => {
    cy.get('[data-testid="email"]').type(emailComum);
    cy.get('[data-testid="senha"]').type('teste');
    cy.get('[data-testid="entrar"]').click();
    cy.get('h1').should('contain', 'Serverest Store');
  });
});