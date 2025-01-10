# ReactAvancado

Este projeto é composto por um frontend em React com TypeScript e um backend em ASP.NET Core. Abaixo estão as configurações e ferramentas utilizadas para configurar o projeto.

## Estrutura do Projeto

ReactAvancado/ .gitattributes .gitignore .vscode/ reactavancado.client/ ReactAvancado.Server/ ReactAvancado.sln

## Ferramentas Utilizadas

- **Frontend**: React, TypeScript, Next.js, Styled Components
- **Backend**: ASP.NET Core
- **Testes**: Jest, Testing Library
- **Linting**: ESLint, Prettier
- **Controle de Versão**: Git, Husky, Lint-staged

## Configurações do Frontend

### ESLint

O ESLint foi configurado para utilizar plugins e regras específicas para React e TypeScript. As configurações estão no arquivo [eslint.config.js](reactavancado.client/eslint.config.js).

### Prettier

O Prettier foi configurado para formatar o código automaticamente. As configurações estão no arquivo [prettierrc.json](reactavancado.client/.prettierrc.json).

### Husky e Lint-staged

O Husky e o Lint-staged foram configurados para garantir que o código seja formatado e lintado antes de cada commit. As configurações estão nos arquivos [pre-commit](reactavancado.client/.husky/pre-commit) e [lintstagedrc.js](reactavancado.client/.lintstagedrc.js).

### Jest

O Jest foi configurado para rodar testes unitários e de integração. As configurações estão no arquivo [jest.config.cjs](reactavancado.client/jest.config.cjs).

### TypeScript

O TypeScript foi configurado com opções específicas para o projeto. As configurações estão nos arquivos [tsconfig.json](reactavancado.client/tsconfig.json) e [tsconfig.app.json](reactavancado.client/tsconfig.app.json).

### Next.js

O Next.js foi configurado para utilizar HTTPS e proxy para o backend. As configurações estão no arquivo [next.config.mjs](reactavancado.client/next.config.mjs).

## Configurações do Backend

### ASP.NET Core

O backend foi configurado para servir o frontend e fornecer APIs. As configurações estão nos arquivos [Program.cs](ReactAvancado.Server/Program.cs) e [appsettings.json](ReactAvancado.Server/appsettings.json).

### SPA Proxy

O ASP.NET Core foi configurado para utilizar o SPA Proxy para servir o frontend durante o desenvolvimento. As configurações estão no arquivo [ReactAvancado.Server.csproj](ReactAvancado.Server/ReactAvancado.Server.csproj).

## Configurações do Visual Studio Code

O Visual Studio Code foi configurado para facilitar o desenvolvimento e depuração do projeto. As configurações estão nos arquivos [launch.json](.vscode/launch.json) e [tasks.json](.vscode/tasks.json).

## Scripts Disponíveis

### Frontend

- `dev`: Inicia o servidor de desenvolvimento do Next.js.
- `build`: Compila o projeto para produção.
- `start`: Inicia o servidor em modo de produção.
- `test`: Executa os testes com Jest.
- `lint`: Executa o ESLint para verificar o código.

### Backend

- `dotnet run`: Inicia o servidor ASP.NET Core.

## Como Executar o Projeto

1. Clone o repositório.
2. Instale as dependências do frontend:
   ```sh
   cd reactavancado.client
   npm install
   ```
3. Inicie o servidor do backend e o servidor de desenvolvimento do frontend:
   ```sh
   cd ReactAvancado.Server
   dotnet run
   ```
