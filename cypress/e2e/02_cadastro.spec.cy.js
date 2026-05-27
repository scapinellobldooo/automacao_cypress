describe('Fluxo 2: Tela de Cadastro', () => {
  const urlLogin = 'https://front.serverest.dev/login';
  const urlApi = 'https://serverest.dev';
  let emailExistente;

  before(() => {
    emailExistente = `existente_${Date.now()}@test.com`;
    cy.request('POST', `${urlApi}/usuarios`, { nome: 'User Fixo', email: emailExistente, password: 'teste', administrador: 'false' });
  });

  beforeEach(() => {
    cy.visit(urlLogin);
    cy.get('[data-testid="cadastrar"]').click();
  });

  it('6. Deve exibir alertas ao tentar cadastrar com campos em branco', () => {
    cy.get('[data-testid="cadastrarUsuario"]').click();
    cy.get('.alert').should('contain', 'Nome é obrigatório').and('contain', 'Email é obrigatório');
  });

  it('7. Deve cadastrar um novo usuário comum via interface', () => {
    const novoEmail = `novo_${Date.now()}@test.com`;
    cy.get('[data-testid="nome"]').type('Membro Novo');
    cy.get('[data-testid="email"]').type(novoEmail);
    cy.get('[data-testid="password"]').type('123456');
    cy.get('[data-testid="cadastrarUsuario"]').click();
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso');
  });

  it('8. Não deve permitir o cadastro de um email já existente', () => {
    cy.get('[data-testid="nome"]').type('Usuario Duplicado');
    cy.get('[data-testid="email"]').type(emailExistente);
    cy.get('[data-testid="password"]').type('123456');
    cy.get('[data-testid="cadastrarUsuario"]').click();
    cy.get('.alert').should('contain', 'Este email já está sendo usado');
  });

  it('9. Deve permitir marcar a opção de administrador no cadastro', () => {
    cy.get('[data-testid="checkbox"]').check();
    cy.get('[data-testid="checkbox"]').should('be.checked');
  });
});