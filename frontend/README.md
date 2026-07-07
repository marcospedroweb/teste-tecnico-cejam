# MyFlix Frontend

Aplicação web desenvolvida para gerenciamento pessoal de filmes.

O usuário pode cadastrar, editar, remover, avaliar e controlar quais filmes já assistiu ou ainda deseja assistir.

## Tecnologias utilizadas

- Next.js
- React
- TypeScript
- TailwindCSS
- Axios
- React Hook Form
- React Toastify
- React Icons

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

## Estrutura do projeto

```
src
├── app
│   ├── page.tsx
│   └── movies
│       ├── new
│       └── [id]
│           └── edit
│
├── components
│   ├── movies
│   ├── sections
│   ├── ui
│   └── skeletons
│
├── services
│   └── movie.service.ts
│
├── types
│   ├── movie.ts
│   └── dto.ts
```

## Pré-requisitos

Antes de iniciar, tenha instalado:

- Node.js 20 ou superior
- npm

Verifique:

```bash
node -v
npm -v
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/marcospedroweb/teste-tecnico-cejam.git
```

Entre na pasta frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```
NEXT_PUBLIC_API_URL=http://localhost:5152/api
```

Essa variável define a URL da API backend.

## Executando o projeto

Modo desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:3000
```

## Build de produção

Criar build:

```bash
npm run build
```

Executar produção:

```bash
npm start
```

## Comunicação com API

Todas as chamadas HTTP estão centralizadas em:

```
src/services/movie.service.ts
```

Responsável por:

- Buscar filmes
- Criar filmes
- Atualizar filmes
- Remover filmes
- Avaliar filmes

## Componentes reutilizáveis

O projeto utiliza componentes reutilizáveis:

- Button
- Input
- Checkbox
- Modal
- MovieCard
- MovieForm
- RatingStars

## Executando o projeto completo

Primeiro execute o backend:

```bash
cd MyFlix

dotnet run
```

Depois execute o frontend:

```bash
cd frontend

npm run dev
```

Acesse:

```
http://localhost:3000
```

## Observações

O frontend depende da API backend estar em execução para carregar e manipular os filmes.
