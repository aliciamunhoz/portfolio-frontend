# Portfolio Frontend

Frontend em React + TypeScript + Vite para um portfólio com visual inspirado em Pokédex. A aplicação exibe uma apresentação pessoal, lista projetos com filtro por tags e um footer estilizado.

## Tecnologias

- React 18
- TypeScript
- Vite

## Funcionalidades

- Layout em seções: Sobre, Projetos, Habilidades e Contato
- Lista de projetos definida em `src/data/projetos.ts`
- Filtro de projetos por tags
- Cards de projeto com links para repositório e demo

## Pré-requisitos

- Node.js 18 ou superior
- npm

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

## Adicionando projetos

Para adicionar ou editar projetos, basta atualizar o array em `src/data/projetos.ts`. Cada projeto segue a interface `Projeto` definida em `src/types/projeto.ts`:

```ts
interface Projeto {
  id: number
  nome: string
  descricao: string
  tags: string[]
  links: { label: string; url: string }[]
}
```

## Estrutura do projeto

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
    Contato.tsx
    FiltroTags.tsx
    Habilidades.tsx
    Header.tsx
    ProjetoCard.tsx
    ProjetoList.tsx
    Sobre.tsx
  data/
    projetos.ts
  pages/
    PortfolioPage.tsx
  types/
    projeto.ts
```
