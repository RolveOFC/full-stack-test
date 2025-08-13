


# Teste Estágio - Sistema de Autenticação e Listagem de Cervejas

## Descrição
Este projeto implementa um sistema de autenticação com Angular no frontend e Node.js (Express) no backend, utilizando PostgreSQL como banco de dados. O usuário realiza login, acessa uma lista paginada de cervejas da Punk API e pode fazer logout. O acesso à listagem é protegido por autenticação JWT.

## Tecnologias Utilizadas
- Angular (frontend)
- Node.js + Express (backend)
- PostgreSQL (banco de dados)
- JWT (autenticação)
- CSS (estilização)
- Postman (testes de API)

## Como Rodar o Projeto

### Backend
1. Acesse a pasta `backend`.
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure o arquivo `.env`:
   ```env
   PORT=3000
   JWT_SECRET=4321
   DB_PORT=5432
   DB_USER=rolveuser
   DB_PASS=1234
   ```
   - Certifique-se de que o PostgreSQL está instalado e rodando localmente.
   - O backend irá rodar na porta `3000`.
4. Inicie o servidor:
   ```sh
   node index.js
   ```

### Frontend
1. Acesse a pasta `frontend`.
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor Angular:
   ```sh
   ng serve
   ```
   O frontend estará disponível em [http://localhost:4200](http://localhost:4200).

## Configuração do Banco de Dados PostgreSQL

Execute os comandos abaixo para configurar o banco de dados:

```sql
-- Crie a database e o usuário
create database appdb;
create user rolveuser with password '1234';

-- Permissões para o usuário
GRANT CONNECT ON DATABASE appdb TO rolveuser;
GRANT USAGE ON SCHEMA public TO rolveuser;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO rolveuser;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO rolveuser;

-- Crie a tabela de usuários
CREATE TABLE "Users" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

## Funcionalidades
- Autenticação de usuário via JWT
- Proteção de rotas: apenas usuários autenticados acessam a lista de cervejas
- Listagem paginada de cervejas da Punk API
- Logout
- Mensagens de erro para login inválido
- Estilização responsiva

## Testes de API
- Os endpoints do backend podem ser testados via Postman.
- Exemplo de login com curl:
  ```sh
  curl --location 'http://localhost:3000/user' \
    --header 'Content-Type: application/json' \
    --data '{ "username": "usuario1", "password": "senha1" }'
  ```
- Exemplo de login via POST:
  ```
  POST http://localhost:3000/user/login
  Body: { "username": "usuario", "password": "senha" }
  ```

## Observações
- Para cadastrar usuários, utilize o endpoint de registro do backend (se disponível).
- O projeto demonstra integração entre frontend e backend, autenticação JWT e consumo de API externa.
- O banco de dados utilizado é PostgreSQL; configure os dados de acesso conforme o arquivo `.env` acima.

## Punk API
- [https://punkapi.online/v3/beers](https://punkapi.online/v3/beers)

## Usuário de Teste
- Usuário: **admin**
- Senha: **1234**
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
   PORT=3000
   JWT_SECRET=4321
   ```
   - Certifique-se de que o PostgreSQL está instalado e rodando localmente.
   - O backend irá rodar na porta `3000`.
3. Inicie o servidor:
2. Instale as dependências:
   ```sh
   npm install
   ```
curl --location 'http://localhost:3000/user' \
--data '{ "username": "usuario1", "password": "senha1" }'
```

## Observações

- Para cadastrar usuários, utilize o endpoint de registro do backend (se disponível).
- O projeto demonstra integração entre frontend e backend, autenticação JWT e consumo de API externa.
- O banco de dados utilizado é PostgreSQL; configure os dados de acesso conforme o arquivo `.env` acima.
---

## Punk API
---
## Usuário de teste

- Usuário: **admin**



## Punk API


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


