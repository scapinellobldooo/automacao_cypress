describe('Fluxo 3: Painel Administrativo', () => {
  const urlLogin = 'https://front.serverest.dev/login';
  const urlApi = 'https://serverest.dev';
  let emailAdmin, nomeProduto;

  before(() => {
    const sufixo = Date.now();
    emailAdmin = `admin_painel_${sufixo}@test.com`;
    nomeProduto = `Produto QA ${sufixo}`;

    cy.request('POST', `${urlApi}/usuarios`, { nome: 'Admin Geral', email: emailAdmin, password: 'teste', administrador: 'true' });
  });

  beforeEach(() => {
    cy.visit(urlLogin);
    cy.get('[data-testid="email"]').type(emailAdmin);
    cy.get('[data-testid="senha"]').type('teste');
    cy.get('[data-testid="entrar"]').click();
  });

  it('10. Deve renderizar os menus de gestão administrativa', () => {
    cy.get('[data-testid="cadastrar-usuarios"]').should('be.visible');
    cy.get('[data-testid="listar-produtos"]').should('be.visible');
  });

  it('11. Deve exibir erros ao cadastrar produto com campos vazios', () => {
    cy.get('[data-testid="cadastrar-produtos"]').click();
    cy.get('[data-testid="cadastrarProdutos"]').click();
    cy.get('.alert').should('contain', 'Nome é obrigatório').and('contain', 'Preco é obrigatório');
  });

  it('12. Deve cadastrar um produto com sucesso', () => {
    cy.get('[data-testid="cadastrar-produtos"]').click();
    cy.get('[data-testid="nome"]').type(nomeProduto);
    cy.get('[data-testid="preco"]').type('1500');
    cy.get('[data-testid="descricao"]').type('Descricao produto');
    cy.get('[data-testid="quantity"]').type('10');
    cy.get('[data-testid="cadastrarProdutos"]').click();
    cy.url().should('include', '/admin/listarprodutos');
  });

  it('13. Não deve permitir cadastrar produto com nome duplicado', () => {
    cy.get('[data-testid="cadastrar-produtos"]').click();
    cy.get('[data-testid="nome"]').type(nomeProduto); // Nome já criado no it anterior
    cy.get('[data-testid="preco"]').type('500');
    cy.get('[data-testid="descricao"]').type('Outra descrição');
    cy.get('[data-testid="quantity"]').type('5');
    cy.get('[data-testid="cadastrarProdutos"]').click();
    cy.get('.alert').should('contain', 'Já existe produto com esse nome');
  });

  it('14. Deve listar o produto cadastrado na tabela de relatórios', () => {
    cy.get('[data-testid="listar-produtos"]').click();
    cy.get('table').should('contain', nomeProduto);
  });
});