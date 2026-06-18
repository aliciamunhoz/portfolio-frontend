# Portfolio Frontend

Frontend em React + TypeScript + Vite para um portfólio com visual inspirado em Pokédex. A aplicação exibe uma apresentação pessoal, lista projetos vindos de uma API, permite filtrar por tags e alternar entre tema claro e escuro.

## Tecnologias

- React 18
- TypeScript
- Vite

## Funcionalidades

- Layout em seções: Sobre, Projetos, Habilidades e Contato
- Lista de projetos carregada da API
- Filtro de projetos por tags
- Alternância entre tema claro e escuro com persistência no `localStorage`
- Tratamento de erros ao buscar dados da API

## Pré-requisitos

- Node.js 18 ou superior
- npm
- Backend da API rodando localmente em `http://localhost:4000`

## Instalação

```bash
npm install
```

## Como rodar

### Desenvolvimento

```bash
npm run dev
```

O Vite iniciará o servidor local e a aplicação ficará disponível no endereço exibido no terminal.

### Build de produção

```bash
npm run build
```

### Pré-visualização do build

```bash
npm run preview
```

## API

O frontend consome a rota `GET /api/projetos` para listar os projetos. Em desenvolvimento, o Vite faz proxy de `/api` para `http://localhost:4000`, evitando problemas de CORS.

Se quiser apontar para outro backend, defina a variável de ambiente `VITE_API_BASE_URL`.

Exemplo:

```bash
VITE_API_BASE_URL=http://localhost:4000/
```

## Estrutura do projeto

```text
src/
  App.tsx
  main.tsx
  components/
  hooks/
  pages/
  services/
  types/
```
