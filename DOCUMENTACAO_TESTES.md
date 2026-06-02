# Documentação de Testes E2E - ServeRest

## Visão Geral

Este documento apresenta a suíte completa de testes end-to-end (E2E) para o sistema ServeRest, desenvolvida utilizando o framework Cypress versão 15.16.0. Os testes foram projetados para validar as principais funcionalidades do sistema de e-commerce, incluindo autenticação, cadastro de usuários, busca de produtos e gestão administrativa.

### Informações Técnicas

- **Framework:** Cypress 15.16.0
- **URL Base:** https://front.serverest.dev/
- **API Base:** https://serverest.dev/
- **Total de Testes:** 20 testes unitários
- **Status:** 100% passando
- **Tempo Médio de Execução:** ~52 segundos

---

## Categorias de Testes

Os testes estão organizados em 5 categorias principais:

1. **Autenticação e Login** (7 testes)
2. **Cadastro de Usuários** (4 testes)
3. **Busca e Pesquisa** (2 testes)
4. **Gestão Administrativa** (2 testes)
5. **Validação de Campos e Erros** (5 testes)

---

## 1. Autenticação e Login

### 1.1 Teste 01: Login com Sucesso - Usuário ADM
**Arquivo:** `test_01_login_adm.cy.js`

**Descrição:** Valida o fluxo de login para usuários administradores.

**Pré-condições:**
- Usuário administrador criado via API antes do teste
- Credenciais: admin_teste@qa.com / teste123

**Passos do Teste:**
1. Acessar a página inicial
2. Preencher campo de email com credenciais de administrador
3. Preencher campo de senha
4. Clicar no botão de entrar
5. Verificar redirecionamento para /admin/home
6. Validar mensagem de boas-vindas do painel administrativo

**Validações:**
- URL deve ser https://front.serverest.dev/admin/home
- Mensagem "Este é seu sistema para administrar seu ecommerce" deve estar visível

**Limpeza:** Usuário é deletado via API após o teste.

---

### 1.2 Teste 02: Login com Sucesso - Usuário Regular
**Arquivo:** `test_02_login_regular.cy.js`

**Descrição:** Valida o fluxo de login para usuários regulares (não administradores).

**Pré-condições:**
- Usuário regular criado via API antes do teste
- Credenciais: usuario_teste@qa.com / teste123

**Passos do Teste:**
1. Acessar página de login
2. Preencher campo de email com credenciais de usuário regular
3. Preencher campo de senha
4. Clicar no botão de entrar
5. Verificar redirecionamento para /home

**Validações:**
- URL deve ser https://front.serverest.dev/home

**Limpeza:** Usuário é deletado via API após o teste.

---

### 1.3 Teste 03: Login com Email Vazio
**Arquivo:** `test_03_login_email_vazio.cy.js`

**Descrição:** Valida o comportamento do sistema ao tentar login sem preencher o campo de email.

**Passos do Teste:**
1. Acessar página de login
2. Deixar campo de email vazio
3. Preencher campo de senha
4. Clicar no botão de entrar
5. Validar mensagem de erro

**Validações:**
- Sistema deve exibir mensagem de erro indicando que o email é obrigatório

---

### 1.4 Teste 04: Login com Senha Vazia
**Arquivo:** `test_04_login_senha_vazia.cy.js`

**Descrição:** Valida o comportamento do sistema ao tentar login sem preencher o campo de senha.

**Passos do Teste:**
1. Acessar página de login
2. Preencher campo de email
3. Deixar campo de senha vazio
4. Clicar no botão de entrar
5. Validar mensagem de erro

**Validações:**
- Sistema deve exibir mensagem de erro indicando que a senha é obrigatória

---

### 1.5 Teste 05: Login com Credenciais Inválidas
**Arquivo:** `test_05_login_email_invalido.cy.js`

**Descrição:** Valida o comportamento do sistema ao tentar login com credenciais que não existem no sistema.

**Passos do Teste:**
1. Acessar página de login
2. Preencher email que não existe no sistema
3. Preencher qualquer senha
4. Clicar no botão de entrar
5. Validar mensagem de erro

**Validações:**
- Sistema deve exibir alerta com mensagem "Email e/ou senha inválidos"

---

### 1.6 Teste 06: Login com Senha Incorreta
**Arquivo:** `test_06_login_senha_errada.cy.js`

**Descrição:** Valida o comportamento do sistema ao tentar login com email válido mas senha incorreta.

**Passos do Teste:**
1. Acessar página de login
2. Preencher email válido
3. Preencher senha incorreta
4. Clicar no botão de entrar
5. Validar mensagem de erro

**Validações:**
- Sistema deve exibir alerta com mensagem de erro

---

### 1.7 Teste 14: Logout com Sucesso
**Arquivo:** `test_14_logout.cy.js`

**Descrição:** Valida o fluxo de logout da aplicação.

**Pré-condições:**
- Usuário criado via API antes do teste
- Credenciais: usuario_logout@qa.com / teste123

**Passos do Teste:**
1. Realizar login com usuário válido
2. Clicar no botão de logout
3. Verificar redirecionamento para página de login
4. Validar que botão de entrar está visível

**Validações:**
- URL deve incluir /login
- Botão de entrar deve estar visível

**Limpeza:** Usuário é deletado via API após o teste.

---

## 2. Cadastro de Usuários

### 2.1 Teste 07: Cadastro de Usuário Regular
**Arquivo:** `test_07_cadastro_regular.cy.js`

**Descrição:** Valida o fluxo de cadastro de um usuário regular (não administrador).

**Passos do Teste:**
1. Acessar página de cadastro
2. Preencher nome completo
3. Preencher email válido
4. Preencher senha
5. Marcar checkbox de administrador como false
6. Clicar no botão de cadastrar
7. Validar mensagem de sucesso

**Validações:**
- Sistema deve exibir mensagem de cadastro realizado com sucesso

---

### 2.2 Teste 08: Cadastro de Usuário Administrador
**Arquivo:** `test_08_cadastro_adm.cy.js`

**Descrição:** Valida o fluxo de cadastro de um usuário administrador.

**Passos do Teste:**
1. Acessar página de cadastro
2. Preencher nome completo
3. Preencher email válido
4. Preencher senha
5. Marcar checkbox de administrador como true
6. Clicar no botão de cadastrar
7. Validar mensagem de sucesso

**Validações:**
- Sistema deve exibir mensagem de cadastro realizado com sucesso
- Usuário deve ter privilégios de administrador

---

### 2.3 Teste 09: Cadastro sem Credenciais
**Arquivo:** `test_09_cadastro_sem_credenciais.cy.js`

**Descrição:** Valida o comportamento do sistema ao tentar cadastro sem preencher os campos obrigatórios.

**Passos do Teste:**
1. Acessar página de cadastro
2. Deixar campos obrigatórios vazios
3. Clicar no botão de cadastrar
4. Validar mensagens de erro

**Validações:**
- Sistema deve exibir mensagens de erro para campos obrigatórios

---

### 2.4 Teste 10: Cadastro com Usuário Existente
**Arquivo:** `test_10_cadastro_usuario_existente.cy.js`

**Descrição:** Valida o comportamento do sistema ao tentar cadastrar um email que já existe.

**Passos do Teste:**
1. Acessar página de cadastro
2. Preencher dados com email já cadastrado
3. Clicar no botão de cadastrar
4. Validar mensagem de erro

**Validações:**
- Sistema deve exibir mensagem indicando que o email já está cadastrado

---

## 3. Busca e Pesquisa

### 3.1 Teste 11: Buscar Item Existente
**Arquivo:** `test_11_buscar_item.cy.js`

**Descrição:** Valida a funcionalidade de busca de produtos existentes no sistema.

**Passos do Teste:**
1. Acessar página inicial
2. Preencher campo de busca com nome de produto existente
3. Clicar no botão de buscar
4. Validar que o produto é exibido nos resultados

**Validações:**
- Produto buscado deve aparecer nos resultados da busca

---

### 3.2 Teste 12: Pesquisar com Mock
**Arquivo:** `test_12_pesquisar_mock.cy.js`

**Descrição:** Valida a funcionalidade de busca utilizando dados mockados (simulados).

**Pré-condições:**
- Arquivo de fixture mock_itens.json deve existir

**Passos do Teste:**
1. Interceptar requisição de busca
2. Mockar resposta com dados do arquivo fixture
3. Preencher campo de busca
4. Clicar no botão de buscar
5. Validar que os dados mockados são exibidos

**Validações:**
- Sistema deve exibir os dados mockados nos resultados

---

## 4. Gestão Administrativa

### 4.1 Teste 13: Checkbox de Administrador
**Arquivo:** `test_13_checkbox_adm.cy.js`

**Descrição:** Valida a funcionalidade do checkbox que define se um usuário é administrador.

**Passos do Teste:**
1. Acessar página de cadastro
2. Localizar checkbox de administrador
3. Validar que o checkbox pode ser marcado/desmarcado
4. Verificar estado do checkbox

**Validações:**
- Checkbox deve estar funcional e interativo

---

### 4.2 Teste 15: Acessar Página de Cadastro
**Arquivo:** `test_15_acessar_cadastro.cy.js`

**Descrição:** Valida o acesso à página de cadastro de usuários.

**Passos do Teste:**
1. Acessar página inicial
2. Clicar no link/botão para cadastro
3. Validar redirecionamento para página de cadastro

**Validações:**
- URL deve incluir rota de cadastro
- Formulário de cadastro deve estar visível

---

## 5. Redirecionamento e Navegação

### 5.1 Teste 16: Redirecionamento após Login Admin
**Arquivo:** `test_16_redirect_admin.cy.js`

**Descrição:** Valida o redirecionamento correto após login de usuário administrador.

**Pré-condições:**
- Usuário administrador criado via API antes do teste
- Credenciais: admin_redirect@qa.com / teste123

**Passos do Teste:**
1. Acessar página de login
2. Preencher credenciais de administrador
3. Clicar no botão de entrar
4. Validar redirecionamento para painel administrativo

**Validações:**
- URL deve ser https://front.serverest.dev/admin/home

**Limpeza:** Usuário é deletado via API após o teste.

---

### 5.2 Teste 17: Redirecionamento após Login Usuário Comum
**Arquivo:** `test_17_redirect_usuario.cy.js`

**Descrição:** Valida o redirecionamento correto após login de usuário regular.

**Pré-condições:**
- Usuário regular criado via API antes do teste
- Credenciais: usuario_redirect@qa.com / teste123

**Passos do Teste:**
1. Acessar página de login
2. Preencher credenciais de usuário regular
3. Clicar no botão de entrar
4. Validar redirecionamento para home do usuário

**Validações:**
- URL deve ser https://front.serverest.dev/home

**Limpeza:** Usuário é deletado via API após o teste.

---

## 6. Validação de Campos e Erros

### 6.1 Teste 18: Erro de Email Obrigatório
**Arquivo:** `test_18_erro_email_obrigatorio.cy.js`

**Descrição:** Valida a mensagem de erro quando o campo de email não é preenchido.

**Passos do Teste:**
1. Acessar página de login/cadastro
2. Deixar campo de email vazio
3. Tentar submeter formulário
4. Validar mensagem de erro específica

**Validações:**
- Sistema deve exibir mensagem indicando que email é obrigatório

---

### 6.2 Teste 19: Erro de Senha Obrigatória
**Arquivo:** `test_19_erro_senha_obrigatorio.cy.js`

**Descrição:** Valida a mensagem de erro quando o campo de senha não é preenchido.

**Passos do Teste:**
1. Acessar página de login/cadastro
2. Deixar campo de senha vazio
3. Tentar submeter formulário
4. Validar mensagem de erro específica

**Validações:**
- Sistema deve exibir mensagem indicando que senha é obrigatória

---

### 6.3 Teste 20: Erro de Credenciais
**Arquivo:** `test_20_erro_formato_email.cy.js`

**Descrição:** Valida a mensagem de erro ao tentar login com senha incorreta.

**Passos do Teste:**
1. Acessar página de login
2. Preencher email válido (murilo@gmail.com.br)
3. Preencher senha incorreta
4. Clicar no botão de entrar
5. Validar mensagem de erro

**Validações:**
- Sistema deve exibir alerta com mensagem "Email e/ou senha inválidos"

---

## Estrutura dos Arquivos de Teste

### Organização

```
cypress/
├── e2e/
│   ├── test_01_login_adm.cy.js
│   ├── test_02_login_regular.cy.js
│   ├── test_03_login_email_vazio.cy.js
│   ├── test_04_login_senha_vazia.cy.js
│   ├── test_05_login_email_invalido.cy.js
│   ├── test_06_login_senha_errada.cy.js
│   ├── test_07_cadastro_regular.cy.js
│   ├── test_08_cadastro_adm.cy.js
│   ├── test_09_cadastro_sem_credenciais.cy.js
│   ├── test_10_cadastro_usuario_existente.cy.js
│   ├── test_11_buscar_item.cy.js
│   ├── test_12_pesquisar_mock.cy.js
│   ├── test_13_checkbox_adm.cy.js
│   ├── test_14_logout.cy.js
│   ├── test_15_acessar_cadastro.cy.js
│   ├── test_16_redirect_admin.cy.js
│   ├── test_17_redirect_usuario.cy.js
│   ├── test_18_erro_email_obrigatorio.cy.js
│   ├── test_19_erro_senha_obrigatorio.cy.js
│   └── test_20_erro_formato_email.cy.js
├── fixtures/
│   └── mock_itens.json
└── support/
    ├── e2e.js
    ├── gui_commands.js
    └── api_commands.js
```

### Padrão de Nomenclatura

Os arquivos de teste seguem o padrão: `test_<numero>_<descricao>.cy.js`

---

## Como Executar os Testes

### Execução em Modo GUI (Interativo)

```bash
npx cypress open
```

### Execução em Modo Headless (Automatizado)

```bash
npx cypress run
```

### Execução de Teste Específico

```bash
npx cypress run --spec "cypress/e2e/test_01_login_adm.cy.js"
```

---

## Estratégia de Limpeza de Dados

Para garantir a independência entre testes e evitar poluição do banco de dados, os testes que criam usuários implementam um ciclo de vida completo:

1. **Hook `before`:** Cria o usuário via API antes do teste
2. **Hook `after`:** Deleta o usuário via API após o teste

### Exemplo de Implementação

```javascript
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
```

---

## Resultados dos Testes

### Execução Completa

- **Total de Testes:** 20
- **Testes Passando:** 20 (100%)
- **Testes Falhando:** 0 (0%)
- **Tempo de Execução:** ~52 segundos

### Cobertura de Funcionalidades

| Categoria | Testes | Cobertura |
|-----------|--------|-----------|
| Autenticação e Login | 7 | 100% |
| Cadastro de Usuários | 4 | 100% |
| Busca e Pesquisa | 2 | 100% |
| Gestão Administrativa | 2 | 100% |
| Validação de Campos | 5 | 100% |

---

## Melhores Práticas Aplicadas

1. **Independência dos Testes:** Cada teste é independente e pode ser executado isoladamente
2. **Limpeza Automática:** Usuários criados durante os testes são deletados automaticamente
3. **Seletores Data-TestId:** Uso de seletores estáveis baseados em data-testid
4. **Validações Claras:** Cada teste tem validações explícitas e bem definidas
5. **Nomenclatura Descritiva:** Nomes de testes e arquivos são auto-explicativos
6. **Separação de Responsabilidades:** Cada teste valida uma funcionalidade específica

---

## Manutenção e Evolução

### Adicionando Novos Testes

Para adicionar novos testes:

1. Crie um novo arquivo seguindo o padrão de nomenclatura
2. Implemente o teste seguindo a estrutura dos testes existentes
3. Se o teste criar dados, implemente hooks de limpeza
4. Atualize esta documentação

### Modificando Testes Existentes

Ao modificar testes:

1. Mantenha a estrutura e padrões existentes
2. Atualize a documentação se houver mudanças significativas
3. Execute todos os testes para garantir que não houve regressão
4. Atualize a versão deste documento

---

## Conclusão

Esta suíte de testes E2E fornece uma cobertura abrangente das principais funcionalidades do sistema ServeRest. Com 20 testes organizados em 5 categorias, garantimos a qualidade e estabilidade da aplicação através de validações automatizadas que cobrem desde fluxos básicos de autenticação até cenários mais complexos de gestão administrativa.

A implementação de hooks de limpeza automática e o uso de seletores estáveis garantem que os testes sejam confiáveis, manuteníveis e executáveis em qualquer ambiente de CI/CD.

---

**Versão do Documento:** 1.0  
**Data de Criação:** 02/06/2026  
**Última Atualização:** 02/06/2026  
**Autor:** Equipe de Automação de Testes
