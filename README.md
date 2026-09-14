# Biblioteca Digital — Aula 04/05

API didática construída progressivamente com **Node.js, Express, MongoDB e Mongoose**.

Nesta continuidade da aula, o projeto passa de um servidor conectado ao MongoDB para uma API capaz de **criar e consultar livros**.

## Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose
- Nodemon

## Estrutura

```text
biblioteca-digital/
├── config/
│   └── config.js
├── models/
│   └── book.js
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## Como executar

### 1. Instalar dependências

```bash
npm install
```

### 2. Iniciar o MongoDB

A aplicação espera o MongoDB local em:

```text
mongodb://127.0.0.1:27017/minhaLivrariaDB
```

### 3. Iniciar a API

```bash
npm start
```

O servidor ficará disponível em:

```text
http://localhost:3000
```

## Endpoint inicial

### GET /

```http
GET http://localhost:3000/
```

Resposta:

```json
{
  "message": "API da Biblioteca Digital funcionando!"
}
```

## Livros

### POST /api/books

Cria um novo livro.

```http
POST http://localhost:3000/api/books
Content-Type: application/json
```

Exemplo:

```json
{
  "title": "O Hobbit",
  "author": "J. R. R. Tolkien",
  "year": 1937,
  "genre": "Fantasia"
}
```

A resposta retorna **201 Created** com o documento criado e seu `_id`.

### GET /api/books

Lista todos os livros:

```http
GET http://localhost:3000/api/books
```

### GET /api/books/:id

Busca um livro pelo `_id`:

```http
GET http://localhost:3000/api/books/SEU_ID
```

Quando o ID é válido, mas não existe, a API retorna:

```json
{
  "error": "Livro não encontrado"
}
```

## Fluxo da aplicação

```text
Cliente HTTP
    ↓
Express
    ↓
Rota
    ↓
Model Book (Mongoose)
    ↓
MongoDB
    ↓
Resposta JSON
```

## Objetivo pedagógico

O projeto acompanha a evolução de uma aplicação real em pequenas entregas: primeiro o servidor, depois a conexão com o banco, o schema/model e, por fim, as operações de criação e leitura.

O próximo passo natural é implementar **UPDATE e DELETE**, seguido por validações e tratamento centralizado de erros.

## Branch desta continuidade

A implementação desta etapa está na branch:

```text
aula-04-05-crud
```
