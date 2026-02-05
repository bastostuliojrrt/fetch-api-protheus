# 🗂️ Central de Cadastros

Projeto front-end simples para **visualização de Clientes e Fornecedores**, consumindo uma API REST. A aplicação exibe os dados em formato de cards, com navegação entre páginas e carregamento dinâmico via JavaScript.

---

## 🚀 Funcionalidades

* Página inicial com central de navegação
* Listagem de **Clientes**
* Listagem de **Fornecedores**
* Consumo de API REST via `fetch`
* Exibição de dados em **cards dinâmicos**
* Indicador de carregamento
* Interface simples e organizada

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** – Estrutura das páginas
* **CSS3** – Estilização da interface
* **JavaScript (Vanilla)** – Consumo da API e manipulação do DOM
* **API REST** – Fonte de dados (Clientes e Fornecedores)

---

## 📂 Estrutura do Projeto

```text
├── index.html
├── clientes.html
├── fornecedores.html
├── css
│   └── styles.css
├── js
│   ├── cliente_service.js
│   └── fornec_service.js
└── img
    └── back.png
```

---

## ▶️ Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/bastostuliojrrt/fetch-api-protheus.git
```

2. Acesse a pasta do projeto:

```bash
cd fetch-api-protheus
```

3. Abra o arquivo `index.html` no navegador

> ⚠️ **Importante:** é necessário que a API esteja rodando localmente para que os dados sejam carregados corretamente.

---

## 🔗 Configuração da API

A aplicação consome os seguintes endpoints:

* **Clientes**

```text
GET http://localhost:8080/rest/api/crm/v1/customerVendor/1
```

* **Fornecedores**

```text
GET http://localhost:8080/rest/api/crm/v1/customerVendor/2
```

### Autenticação

A requisição utiliza autenticação **Basic Auth** configurada diretamente no JavaScript:

```text
Authorization: Basic YWRtaW46YWRtaW4=
```

---

## 🧠 Como Funciona

1. O usuário acessa a **Central de Cadastros**
2. Escolhe entre Clientes ou Fornecedores
3. A aplicação faz uma requisição `GET` para a API
4. Os dados retornados são percorridos e renderizados dinamicamente em cards
5. Cada card exibe:

   * Código
   * Loja
   * Nome
   * Endereço (quando disponível)

---

## 📌 Possíveis Melhorias Futuras

* Implementar ações reais de **Editar** e **Excluir**
* Adicionar cadastro de novos registros
* Paginação dos resultados
* Busca e filtro
* Tratamento de erros da API
* Remover credenciais fixas do código

---

## 📄 Licença

Projeto livre para fins educacionais e de estudo.

---

## ✨ Autor

Desenvolvido por **Tulio Bastos** 💻🚀
