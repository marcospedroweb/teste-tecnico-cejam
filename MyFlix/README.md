# MyFlix API

API REST desenvolvida para gerenciamento pessoal de filmes.

A API permite cadastrar, editar, remover, listar e avaliar filmes, controlando quais filmes já foram assistidos e quais ainda estão pendentes.

## Tecnologias utilizadas

- .NET 8
- ASP.NET Core Web API
- Entity Framework Core
- SQLite
- FluentValidation
- Swagger

## Funcionalidades

- Cadastro de filmes
- Listagem de filmes
- Busca de filme por ID
- Atualização de informações
- Remoção de filmes
- Marcar filme como assistido
- Avaliação de filmes
- Validação dos dados enviados
- Tratamento padronizado de erros

## Estrutura do projeto

```
MyFlix
├── Controllers
│   └── MoviesController.cs
│
├── Data
│   └── AppDbContext.cs
│
├── DTOs
│   ├── CreateMovieDto.cs
│   ├── UpdateMovieDto.cs
│   └── WatchMovieDto.cs
│
├── Models
│   └── Movie.cs
│
├── Services
│   ├── MovieService.cs
│   └── Interfaces
│       └── IMovieService.cs
│
├── Validators
│   ├── CreateMovieValidator.cs
│   ├── UpdateMovieValidator.cs
│   └── WatchMovieValidator.cs
│
└── Program.cs
```

## Pré-requisitos

Necessário:

- .NET SDK 8

Verifique:

```bash
dotnet --version
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Entre na pasta do backend:

```bash
cd MyFlix
```

Restaure as dependências:

```bash
dotnet restore
```

## Banco de dados

O projeto utiliza SQLite com Entity Framework Core.

Para criar o banco:

```bash
dotnet ef database update
```

Caso não tenha o Entity Framework instalado:

```bash
dotnet tool install --global dotnet-ef
```

Após executar, será criado o arquivo:

```
myflix.db
```

## Executando a API

Execute:

```bash
dotnet run
```

A API estará disponível na porta configurada pelo ASP.NET.

Exemplo:

```
https://localhost:xxxx
```

## Swagger

Com a aplicação rodando, acesse:

```
https://localhost:xxxx/swagger
```

O Swagger permite testar todos os endpoints.

## Endpoints

### Listar filmes

```
GET /api/movies
```

### Buscar filme por ID

```
GET /api/movies/{id}
```

### Criar filme

```
POST /api/movies
```

Exemplo:

```json
{
  "title": "Interstellar",
  "year": 2014,
  "genre": "Science Fiction",
  "posterUrl": "https://imagem.com/poster.jpg"
}
```

### Editar filme

```
PUT /api/movies/{id}
```

### Marcar como assistido e avaliar

```
PATCH /api/movies/{id}
```

Exemplo:

```json
{
  "watched": true,
  "rating": 5
}
```

### Remover filme

```
DELETE /api/movies/{id}
```

## Validações

A API utiliza FluentValidation para validar:

- Título obrigatório
- Gênero obrigatório
- Ano válido
- URL do poster válida
- Nota entre 1 e 5

## Tratamento de erros

Todos os erros retornam um padrão JSON:

```json
{
  "success": false,
  "message": "Mensagem de erro",
  "errors": []
}
```

## Build

Para validar o projeto:

```bash
dotnet build
```

## Executando o sistema completo

Backend:

```bash
cd MyFlix

dotnet run
```

Frontend:

```bash
cd frontend

npm run dev
```

Acesse:

```
http://localhost:3000
```
