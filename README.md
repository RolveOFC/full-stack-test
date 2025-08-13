
# Teste Estágio - Sistema de Autenticação e Listagem de Cervejas

## Descrição

Este projeto implementa um sistema de autenticação com Angular no frontend e Node.js (Express) no backend, utilizando PostgreSQL como banco de dados. O usuário realiza login, acessa uma lista paginada de cervejas da Punk API e pode fazer logout. O acesso à listagem é protegido por autenticação JWT.

---

## Tecnologias utilizadas

- Angular (frontend)
- Node.js + Express (backend)
- PostgreSQL (banco de dados)
- Postman (testes de API)
- JWT (autenticação)
- CSS (estilização)

---

## Como rodar o projeto

### Backend

1. Acesse a pasta do backend.
2. Instale as dependências:
   ```sh
   npm install
   ```
3. O arquivo `.env` já está presente na raiz do backend com as configurações abaixo:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=appdb
   DB_USER=rolveuser
   DB_PASS=1234
   PORT=3000
   JWT_SECRET=4321
   ```
   - Certifique-se de que o PostgreSQL está instalado e rodando localmente.
   - Crie o banco de dados `appdb` e o usuário `rolveuser` com a senha `1234` antes de iniciar o backend.
   - O backend irá rodar na porta `3000`.

4. Inicie o servidor:
   ```sh
   node index.js
   ```

### Frontend

1. Acesse a pasta do frontend.
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor Angular:
   ```sh
   ng s --o
   ```
   O frontend estará disponível em `http://localhost:4200`.

---

## Funcionalidades

- Autenticação de usuário via JWT.
- Proteção de rotas: apenas usuários autenticados acessam a lista de cervejas.
- Listagem paginada de cervejas da Punk API.
- Logout.
- Mensagens de erro para login inválido.
- Estilização responsiva.

---

## Testes de API

- Os endpoints do backend podem ser testados via Postman.
- Exemplo de login:
  ```
  POST http://localhost:3000/user/login
  Body: { "username": "usuario", "password": "senha" }
  ```

---

## Observações

- Para cadastrar usuários, utilize o endpoint de registro do backend (se disponível).
- O projeto demonstra integração entre frontend e backend, autenticação JWT e consumo de API externa.
- O banco de dados utilizado é PostgreSQL; configure os dados de acesso conforme o arquivo `.env` acima.

---

## Punk API

- [https://punkapi.online/v3/beers](https://punkapi.online/v3/beers)

---

## Usuário de teste

- Usuário: **admin**
- Senha: **1234**

---


