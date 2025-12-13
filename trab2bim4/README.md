# FinancApp - Aplicação de Controle Financeiro

Sistema completo de controle financeiro com React Native/Expo (Front-End) e Node.js/Prisma (Back-End).

## Pré-requisitos

- Node.js 18+
- npm ou yarn
- Expo CLI
- Git

## Instalação e Configuração

### 1. Clone o Repositório
```bash
git clone <url-do-repositorio>
cd financas
```

### 2. Configurar Back-End

```bash
# Navegar para o Back-End
cd backendFinancApp

# Instalar dependências
npm install

# Configurar banco de dados
npx prisma migrate dev

# Iniciar servidor
npm run dev
```

**Back-End rodando em:** 
- `http://localhost:3333`

### 3. Configurar Front-End

```bash
# Navegar para o Front-End (nova aba do terminal)
cd financApp

# Instalar dependências
npm install --legacy-peer-deps

# Iniciar aplicação
npx expo start
```

**Front-End disponível em:**
- Web: `http://localhost:8081`
- Mobile: Escaneie QR Code com Expo Go

---

## Banco de Dados (Prisma)

### Estrutura do Banco
```sql
-- Tabela de Usuários
users (
  id: String (UUID)
  name: String
  email: String
  password: String (hash)
  balance: Float
  created_at: DateTime
  updated_at: DateTime
)

-- Tabela de Transações
receives (
  id: String (UUID)
  description: String
  value: Float
  type: String ('receita' | 'despesa')
  date: String
  user_id: String (FK)
  created_at: DateTime
  updated_at: DateTime
)
```

### Comandos do Prisma
```bash
# Visualizar banco de dados
npx prisma studio

# Reset do banco
npx prisma migrate reset

# Gerar cliente Prisma
npx prisma generate

# Nova migração
npx prisma migrate dev --name nome_da_migracao
```

---

## Back-End (Node.js + Prisma)

### Estrutura de Pastas
```
backendFinancApp/
├── src/
│   ├── controllers/     # Controladores das rotas
│   ├── services/        # Lógica de negócio
│   ├── middlewares/     # Middlewares (auth)
│   ├── prisma/          # Cliente Prisma
│   ├── routes.ts        # Definição das rotas
│   └── server.ts        # Servidor principal
├── prisma/
│   └── schema.prisma    # Schema do banco
└── package.json
```

### Rotas da API

| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| POST | `/users` | Cadastrar usuário | ❌ |
| POST | `/login` | Login usuário | ❌ |
| GET | `/me` | Dados do usuário | ✅ |
| GET | `/balance` | Saldo e resumo | ✅ |
| POST | `/receive` | Nova transação | ✅ |
| GET | `/receives` | Listar transações | ✅ |
| DELETE | `/receives/delete` | Deletar transação | ✅ |

### Exemplo de Uso da API
```javascript
// Cadastro
POST /users
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "123456"
}

// Login
POST /login
{
  "email": "joao@email.com",
  "password": "123456"
}

// Nova transação
POST /receive
Headers: { Authorization: "Bearer <token>" }
{
  "description": "Salário",
  "value": 3000,
  "type": "receita",
  "date": "15/12/2024"
}
```

---

## Front-End (React Native/Expo)

### Estrutura de Pastas
```
financApp/
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── contexts/        # Context API (auth)
│   ├── hooks/           # Hooks personalizados
│   ├── pages/           # Telas da aplicação
│   ├── routes/          # Navegação
│   ├── services/        # API calls
│   └── types/           # Tipos TypeScript
├── assets/              # Imagens e ícones
├── App.tsx              # Componente principal
└── package.json
```

### Telas Disponíveis
- **SignIn:** Login do usuário
- **SignUp:** Cadastro de usuário
- **Home:** Dashboard com saldo e transações
- **New:** Cadastro de nova transação
- **Profile:** Perfil do usuário

### Configuração da API
```typescript
// src/services/api.ts
const api = axios.create({
  baseURL: 'http://localhost:3333', // Back-End local
  // baseURL: 'http://SEU_IP:3333', // Para mobile
});
```

---

## Autenticação

### Fluxo de Autenticação
1. **Cadastro/Login** → Recebe JWT token
2. **Token salvo** no AsyncStorage
3. **Requisições** incluem token no header
4. **Middleware** valida token no Back-End

### Estrutura do Token JWT
```javascript
{
  "sub": "user_id",
  "name": "Nome do Usuário",
  "email": "email@exemplo.com",
  "exp": 1640995200
}
```

---

## Como Executar

### Desenvolvimento Local

1. **Terminal 1 - Back-End:**
```bash
cd backendFinancApp
npm run dev
```

2. **Terminal 2 - Front-End:**
```bash
cd financApp
npx expo start
```

3. **Acessar:**
   - Web: `http://localhost:8081`
   - Mobile: Expo Go + QR Code

### Para Mobile (Dispositivo Físico)

1. **Descobrir IP da máquina:**
```bash
ipconfig  # Windows
ifconfig  # Mac/Linux
```

2. **Atualizar baseURL:**
```typescript
// src/services/api.ts
baseURL: 'http://192.168.1.100:3333' // Seu IP
```

3. **Configurar CORS no Back-End:**
```typescript
// src/server.ts
app.use(cors({
  origin: ['http://localhost:8081', 'http://192.168.1.100:8081']
}));
```

---

## Comandos Úteis

### Back-End
```bash
npm run dev          # Iniciar servidor
npx prisma studio    # Interface do banco
npx prisma migrate   # Aplicar migrações
```

### Front-End
```bash
npx expo start       # Iniciar desenvolvimento
npx expo start --clear  # Limpar cache
npm install --legacy-peer-deps  # Instalar dependências
```

### Limpeza Completa
```bash
# Back-End
rm -rf node_modules package-lock.json
npm install

# Front-End  
rm -rf node_modules package-lock.json .expo
npm install --legacy-peer-deps
npx expo start --clear
```

---

## Funcionalidades

### Implementadas
- Cadastro e login de usuários
- Dashboard com saldo atual
- Cadastro de receitas e despesas
- Listagem de transações por data
- Exclusão de transações
- Navegação entre telas
- Autenticação JWT

### Possíveis Melhorias
- Categorias de transações
- Relatórios e gráficos
- Backup de dados
- Notificações push
- Modo offline

---


## Tecnologias Utilizadas

### Front-End
- React Native + Expo
- TypeScript
- React Navigation
- Styled Components
- Axios
- AsyncStorage

### Back-End
- Node.js + Express
- TypeScript
- Prisma ORM
- SQLite
- JWT
- bcryptjs

## IFPR

[![IFPR Logo](https://user-images.githubusercontent.com/126702799/234438114-4db30796-20ad-4bec-b118-246ebbe9de63.png)](https://user-images.githubusercontent.com/126702799/234438114-4db30796-20ad-4bec-b118-246ebbe9de63.png)

**By João Vitor Campõe Galescky**

Written with  [StackEdit](https://stackedit.io/).