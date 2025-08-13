# Sistema de Autenticação de Cervejas

Uma aplicação web full-stack que implementa autenticação de usuários com tokens JWT e exibe uma lista paginada de cervejas da Punk API. Desenvolvida com Angular no frontend, Node.js/Express no backend e banco de dados PostgreSQL.

## 🚀 Funcionalidades

- **Autenticação JWT**: Sistema seguro de login/logout de usuários
- **Rotas Protegidas**: Lista de cervejas acessível apenas para usuários autenticados
- **Listagem Paginada de Cervejas**: Navegação pelas cervejas da Punk API com paginação
- **Design Responsivo**: Interface adaptada para dispositivos móveis
- **Tratamento de Erros**: Mensagens amigáveis para tentativas de login inválidas

## 🛠️ Tecnologias Utilizadas

| Frontend | Backend         | Banco de Dados | Outros           |
|----------|----------------|----------------|------------------|
| Angular  | Node.js + Express | PostgreSQL     | JWT, CSS, Postman |

## 📋 Pré-requisitos

Antes de rodar este projeto, certifique-se de ter:

- Node.js (v14 ou superior)
- PostgreSQL instalado e em execução
- Angular CLI (`npm install -g @angular/cli`)

## 🏃‍♂️ Guia Rápido

### 1. Configuração do Banco de Dados

Primeiro, crie o banco de dados e o usuário:

```sql
-- Conecte-se ao PostgreSQL como superusuário
CREATE DATABASE appdb;
CREATE USER rolveuser WITH PASSWORD '1234';
GRANT ALL PRIVILEGES ON DATABASE appdb TO rolveuser;

-- Conecte-se à appdb e crie a tabela de usuários
\c appdb
CREATE TABLE "Users" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(255) NOT NULL UNIQUE,
  "password" VARCHAR(255) NOT NULL
);

-- Insira usuário de teste (a senha deve ser criptografada em produção)
INSERT INTO "Users" (username, password) VALUES ('admin', '1234');
```

### 2. Configuração do Backend

```bash
# Acesse o diretório backend
cd backend

# Instale as dependências
npm install

# Inicie o servidor
node index.js
```

O backend estará disponível em `http://localhost:3000`

**Variáveis de Ambiente** (já configuradas no `.env`):
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=appdb
DB_USER=rolveuser
DB_PASS=1234
PORT=3000
JWT_SECRET=4321
```

### 3. Configuração do Frontend

```bash
# Acesse o diretório frontend (em um novo terminal)
cd frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento Angular
ng serve --open
```

O frontend estará disponível em `http://localhost:4200` e abrirá automaticamente no navegador.

## 🔐 Credenciais de Teste

Utilize estas credenciais para testar a aplicação:

- **Usuário**: `admin`
- **Senha**: `1234`

## 🧪 Testes de API

Você pode testar os endpoints do backend usando Postman ou curl:

### Endpoint de Login
```http
POST http://localhost:3000/user/login
Content-Type: application/json

{
  "username": "admin",
  "password": "1234"
}
```

### Resposta Esperada
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "admin"
  }
}
```

## 📡 API Externa

Este projeto consome a Punk API para dados de cervejas:
- **Endpoint**: [https://punkapi.online/v3/beers](https://punkapi.online/v3/beers)
- **Documentação**: Disponível no link acima

## 🏗️ Estrutura do Projeto

```
project/
├── frontend/          # Aplicação Angular
│   ├── src/
│   ├── package.json
│   └── angular.json
├── backend/           # API Node.js/Express
│   ├── index.js
│   ├── .env
│   └── package.json
└── README.md
```

