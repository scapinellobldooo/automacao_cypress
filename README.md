# 🧪 Automação de Testes E2E - ServeRest

[![Cypress](https://img.shields.io/badge/Cypress-15.16.0-17202C?style=flat&logo=cypress)](https://www.cypress.io/)
[![Tests](https://img.shields.io/badge/Tests-20%20Passing-2ECC71?style=flat)](https://github.com/FelipeConstancio/UNICV_Automacao-projeto_Automacao)
[![Status](https://img.shields.io/badge/Status-100%25%20Passing-success)](https://github.com/FelipeConstancio/UNICV_Automacao-projeto_Automacao)

Projeto de automação de testes end-to-end (E2E) para o sistema ServeRest, desenvolvido utilizando o framework Cypress. Esta suíte de testes valida as principais funcionalidades de um e-commerce, incluindo autenticação, cadastro de usuários, busca de produtos e gestão administrativa.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Executar os Testes](#como-executar-os-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Suíte de Testes](#suíte-de-testes)
- [Resultados](#resultados)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

---

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido como parte de um trabalho acadêmico para a UNICV, com o objetivo de demonstrar habilidades em automação de testes E2E utilizando Cypress. A suíte de testes cobre os principais fluxos do sistema ServeRest, garantindo a qualidade e estabilidade da aplicação através de validações automatizadas.

### Características Principais

- ✅ 20 testes unitários independentes e isolados
- ✅ Cobertura completa de funcionalidades críticas
- ✅ Limpeza automática de dados via API
- ✅ Seletores estáveis baseados em data-testid
- ✅ Documentação detalhada de cada teste
- ✅ 100% de taxa de sucesso na execução

### Sistema Alvo

- **Nome:** ServeRest
- **Tipo:** Sistema de E-commerce
- **URL Frontend:** https://front.serverest.dev/
- **URL API:** https://serverest.dev/

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Cypress](https://www.cypress.io/) | 15.16.0 | Framework de automação de testes E2E |
| [Node.js](https://nodejs.org/) | 24.15.0 | Runtime JavaScript |
| [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) | ES6+ | Linguagem de programação |
| [Git](https://git-scm.com/) | Latest | Controle de versão |

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** (geralmente instalado junto com Node.js)
- **Git** (para controle de versão)

### Verificar Instalações

```bash
node --version
npm --version
git --version
```

---

## 🚀 Instalação

### 1. Clone o Repositório

```bash
git clone https://github.com/FelipeConstancio/UNICV_Automacao-projeto_Automacao.git
cd UNICV_Automacao-projeto_Automacao
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Verifique a Instalação

```bash
npx cypress version
```

---

## ▶️ Como Executar os Testes

### Modo Interativo (GUI)

Abre o Cypress Test Runner com interface gráfica, ideal para desenvolvimento e debug:

```bash
npx cypress open
```

No Cypress Test Runner, você pode:
- Visualizar os testes em tempo real
- Ver o navegador executando os testes
- Utilizar o time-travel debugging
- Inspecionar elementos e seletores

### Modo Headless (CLI)

Executa os testes em modo headless (sem interface gráfica), ideal para CI/CD:

```bash
npx cypress run
```

### Executar Teste Específico

Execute um arquivo de teste específico:

```bash
npx cypress run --spec "cypress/e2e/test_01_login_adm.cy.js"
```

### Executar por Padrão

Execute todos os testes que correspondem a um padrão:

```bash
npx cypress run --spec "cypress/e2e/test_0*.cy.js"
```

### Opções Adicionais

```bash
# Executar em navegador específico
npx cypress run --browser chrome

# Gerar vídeo dos testes
npx cypress run --record --key <seu-chave>

# Executar com configuração específica
npx cypress run --config video=false
```

---

## 📁 Estrutura do Projeto

```
UNICV_Automacao-projeto_Automacao/
├── cypress/
│   ├── e2e/                          # Arquivos de teste E2E
│   │   ├── test_01_login_adm.cy.js
│   │   ├── test_02_login_regular.cy.js
│   │   ├── test_03_login_email_vazio.cy.js
│   │   ├── test_04_login_senha_vazia.cy.js
│   │   ├── test_05_login_email_invalido.cy.js
│   │   ├── test_06_login_senha_errada.cy.js
│   │   ├── test_07_cadastro_regular.cy.js
│   │   ├── test_08_cadastro_adm.cy.js
│   │   ├── test_09_cadastro_sem_credenciais.cy.js
│   │   ├── test_10_cadastro_usuario_existente.cy.js
│   │   ├── test_11_buscar_item.cy.js
│   │   ├── test_12_pesquisar_mock.cy.js
│   │   ├── test_13_checkbox_adm.cy.js
│   │   ├── test_14_logout.cy.js
│   │   ├── test_15_acessar_cadastro.cy.js
│   │   ├── test_16_redirect_admin.cy.js
│   │   ├── test_17_redirect_usuario.cy.js
│   │   ├── test_18_erro_email_obrigatorio.cy.js
│   │   ├── test_19_erro_senha_obrigatorio.cy.js
│   │   └── test_20_erro_formato_email.cy.js
│   ├── fixtures/                      # Arquivos de dados mockados
│   │   └── mock_itens.json
│   ├── support/                       # Arquivos de suporte
│   │   ├── e2e.js                    # Configurações globais
│   │   ├── gui_commands.js           # Comandos customizados GUI
│   │   └── api_commands.js           # Comandos customizados API
│   ├── screenshots/                   # Screenshots de falhas (ignorado no Git)
│   └── videos/                        # Vídeos de execução (ignorado no Git)
├── cypress.config.js                  # Configuração do Cypress
├── package.json                       # Dependências do projeto
├── .gitignore                         # Arquivos ignorados pelo Git
├── README.md                          # Este arquivo
└── DOCUMENTACAO_TESTES.md             # Documentação detalhada dos testes
```

---

## 🧪 Suíte de Testes

### Categorias de Testes

Os 20 testes estão organizados em 5 categorias principais:

#### 1. Autenticação e Login (7 testes)
- Login com sucesso como administrador
- Login com sucesso como usuário regular
- Login com email vazio
- Login com senha vazia
- Login com credenciais inválidas
- Login com senha incorreta
- Logout com sucesso

#### 2. Cadastro de Usuários (4 testes)
- Cadastro de usuário regular
- Cadastro de usuário administrador
- Cadastro sem credenciais
- Cadastro com usuário existente

#### 3. Busca e Pesquisa (2 testes)
- Buscar item existente
- Pesquisar com dados mockados

#### 4. Gestão Administrativa (2 testes)
- Validar checkbox de administrador
- Acessar página de cadastro

#### 5. Validação de Campos e Erros (5 testes)
- Erro de email obrigatório
- Erro de senha obrigatória
- Erro de credenciais
- Redirecionamento após login admin
- Redirecionamento após login usuário comum

### Detalhes dos Testes

Para informações detalhadas sobre cada teste, consulte o arquivo [DOCUMENTACAO_TESTES.md](DOCUMENTACAO_TESTES.md).

---

## 📊 Resultados

### Execução Completa

```
✅ Total de Testes: 20
✅ Testes Passando: 20 (100%)
❌ Testes Falhando: 0 (0%)
⏱️ Tempo de Execução: ~52 segundos
```

### Cobertura por Categoria

| Categoria | Testes | Status |
|-----------|--------|--------|
| Autenticação e Login | 7 | ✅ 100% |
| Cadastro de Usuários | 4 | ✅ 100% |
| Busca e Pesquisa | 2 | ✅ 100% |
| Gestão Administrativa | 2 | ✅ 100% |
| Validação de Campos | 5 | ✅ 100% |

---

## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Diretrizes de Contribuição

- Mantenha o código limpo e bem documentado
- Siga os padrões de nomenclatura existentes
- Adicione testes para novas funcionalidades
- Atualize a documentação conforme necessário
- Garanta que todos os testes passem antes de submeter

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---

## 📞 Contato

**Autor:** João Scapinello  
**Email:** joaoscapinello.bldoo@gmail.com  
**Projeto:** https://github.com/scapinellobldooo/automacao_cypress

---

## 📚 Recursos Adicionais

- [Documentação Oficial do Cypress](https://docs.cypress.io/)
- [Documentação do ServeRest](https://serverest.dev/)
- [Melhores Práticas de Testes E2E](https://docs.cypress.io/guides/references/best-practices)

---

## 🎓 Agradecimentos

Este projeto foi desenvolvido como parte do curso da UNICV, com o objetivo de aplicar conceitos de automação de testes em um cenário real de e-commerce.

---

**Última Atualização:** 02/06/2026  
**Versão:** 1.0.0
