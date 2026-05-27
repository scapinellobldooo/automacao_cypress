describe('Fluxo 4: Loja e Carrinho de Compras', () => {
  const urlLogin = 'https://front.serverest.dev/login';
  const urlApi = 'https://serverest.dev';
  let emailComum, nomeProduto;

  before(() => {
    const sufixo = Date.now();
    emailComum = `user_loja_${sufixo}@test.com`;
    nomeProduto = `Item Loja ${sufixo}`;

    // Cadastra usuário comum via API
    cy.request('POST', `${urlApi}/usuarios`, { nome: 'Comprador QA', email: emailComum, password: 'teste', administrador: 'false' });
    
    // Cadastra um produto via API para garantir que a loja tenha o item para o teste do carrinho
    cy.request('POST', `${urlApi}/produtos`, { nome: nomeProduto, preco: 250, descricao: 'Item de Teste', quantidade: 99 })
      .then((response) => {
        expect(response.status).to.eq(201);
      });
  });

  beforeEach(() => {
    cy.visit(urlLogin);
    cy.get('[data-testid="email"]').type(emailComum);
    cy.get('[data-testid="senha"]').type('teste');
    cy.get('[data-testid="entrar"]').click();
  });

  it('15. Deve exibir a barra de pesquisa na home da loja', () => {
    cy.get('[data-testid="pesquisar"]').should('be.visible');
  });

  it('16. Deve buscar por um produto específico na barra de pesquisa', () => {
    cy.get('[data-testid="pesquisar"]').type(nomeProduto);
    cy.get('[data-testid="botaoPesquisar"]').click();
    cy.get('.card').should('contain', nomeProduto);
  });

  it('17. Deve adicionar um produto ao carrinho', () => {
    cy.get('[data-testid="pesquisar"]').type(nomeProduto);
    cy.get('[data-testid="botaoPesquisar"]').click();
    cy.get('[data-testid="adicionarNaLista"]').first().click();
    cy.url().should('include', '/carrinho');
    cy.get('[data-testid="shopping-cart-product-name"]').should('contain', nomeProduto);
  });

  it('18. Deve aumentar a quantidade do produto no carrinho', () => {
    cy.get('[data-testid="pesquisar"]').type(nomeProduto);
    cy.get('[data-testid="botaoPesquisar"]').click();
    cy.get('[data-testid="adicionarNaLista"]').first().click();
    cy.get('[data-testid="product-increase-button"]').click();
    cy.get(':nth-child(3) > p').should('contain', '2');
  });

  it('19. Deve limpar o carrinho com sucesso', () => {
    cy.get('[data-testid="pesquisar"]').type(nomeProduto);
    cy.get('[data-testid="botaoPesquisar"]').click();
    cy.get('[data-testid="adicionarNaLista"]').first().click();
    cy.get('[data-testid="limparLista"]').click();
    cy.get('[data-testid="shopping-cart-empty-message"]').should('contain', 'Seu carrinho está vazio');
  });

  it('20. Deve efetuar o logout da conta de usuário com sucesso', () => {
    cy.get('[data-testid="logout"]').click();
    cy.url().should('include', '/login');
    cy.get('[data-testid="entrar"]').should('be.visible');
  });
});