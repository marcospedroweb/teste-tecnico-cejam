# MyFlix Frontend

Aplicação web desenvolvida para gerenciamento pessoal de filmes.

O usuário pode cadastrar, editar, remover, avaliar e controlar quais filmes já assistiu ou ainda deseja assistir.

## Tecnologias utilizadas

### Frontend

- Next.js
- React
- TypeScript
- TailwindCSS
- Axios
- React Hook Form
- React Toastify
- React Icons

### Backend

- .NET 8
- ASP.NET Core Web API
- Entity Framework Core
- SQLite
- FluentValidation
- Swagger

## Estrutura do projeto

```

MyFlix
│
├── frontend
│ ├── src
│ ├── public
│ ├── Dockerfile
│ └── package.json
│
├── MyFlix
│ ├── Controllers
│ ├── Data
│ ├── DTOs
│ ├── Models
│ ├── Services
│ ├── Validators
│ ├── Dockerfile
│ └── Program.cs
│
├── docker-compose.yml
└── README.md

```

## Funcionalidades

- Adicionar filmes
- Listar filmes
- Editar informações dos filmes
- Remover filmes
- Marcar filme como assistido
- Avaliar filmes com estrelas
- Filtrar filmes:
  - Todos
  - Assistidos
  - Para assistir
- Modais de confirmação
- Notificações de sucesso e erro
- Loading com Skeleton
- Layout responsivo

## Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

## Executando com Docker

A forma recomendada de executar o projeto é utilizando Docker Compose.

Antes de iniciar, tenha instalado:

- Docker
- Docker Compose

Verifique:

```bash
docker --version
docker compose version
```

## Subindo o projeto

Na raiz do projeto, onde está localizado o arquivo:

```
docker-compose.yml
```

execute:

```bash
docker compose up --build
```

O Docker irá:

- Criar a imagem do backend
- Criar a imagem do frontend
- Executar a API .NET
- Executar a aplicação Next.js
- Criar o banco SQLite através das migrations

Após finalizar:

Frontend:

```
http://localhost:3000
```

Backend API Route:

```
http://localhost:5152/api
```

Swagger:

```
http://localhost:5152/swagger
```

## Encerrar containers

Para parar os serviços:

```bash
docker compose down
```

## Executando manualmente sem Docker

Caso prefira executar o projeto sem Docker, cada aplicação possui seu próprio README com as instruções completas de instalação e execução.

Backend:

Acesse a pasta:

```

MyFlix

```

O arquivo `README.md` contém todas as informações necessárias para:

- Instalar as dependências
- Configurar o ambiente
- Criar o banco de dados
- Executar a API

Frontend:

Acesse a pasta:

```

frontend

```

O arquivo `README.md` contém todas as informações necessárias para:

- Instalar as dependências
- Configurar as variáveis de ambiente
- Executar a aplicação Next.js

```

```
