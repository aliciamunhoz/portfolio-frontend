import { Projeto } from '../types/projeto'

// Lista de projetos do portfólio. Para adicionar/editar, é só mexer aqui.
export const projetos: Projeto[] = [
  {
    id: 1,
    nome: 'SalaCerta',
    descricao:
      'App mobile de consulta da grade de aulas, com geolocalização e notificações push. Minha iniciação científica e projeto de conclusão de curso — em desenvolvimento contínuo (próxima fase em julho/2026).',
    tags: ['React Native', 'Node.js', 'Fastify', 'TypeScript', 'API REST'],
    links: [
      { label: 'Código', url: 'https://github.com/aliciamunhoz/salacerta' },
    ],
  },
  {
    id: 2,
    nome: 'Project Calendar',
    descricao:
      'Aplicação full-stack de calendário para registrar e acompanhar meus projetos e trabalhos ao longo do tempo. Front em React e back em Fastify + Prisma.',
    tags: ['React', 'TypeScript', 'Fastify', 'Prisma', 'API REST'],
    links: [
      {
        label: 'Back-end',
        url: 'https://github.com/aliciamunhoz/calendar-project-backend',
      },
      {
        label: 'Front-end',
        url: 'https://github.com/aliciamunhoz/calendar-project-frontend',
      },
      { label: 'Demo', url: 'https://calendar-project-frontend-amfc.vercel.app' },
    ],
  },
  {
    id: 3,
    nome: 'BookHub',
    descricao:
      'Projeto full-stack de gerenciamento de livros: API REST (CRUD, filtros e validações) consumida por um front com busca e feedback de sucesso/erro.',
    tags: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'React', 'API REST'],
    links: [
      {
        label: 'Back-end',
        url: 'https://github.com/aliciamunhoz/bookhub-backend',
      },
      {
        label: 'Front-end',
        url: 'https://github.com/aliciamunhoz/bookhub-frontend',
      },
      { label: 'Demo', url: 'https://bookhub-amfc.vercel.app' },
    ],
  },
  {
    id: 4,
    nome: 'DSList — Spring Boot',
    descricao:
      'Back-end em Java com Spring Boot: API REST com modelagem de dados e regras de negócio.',
    tags: ['Java', 'Spring Boot', 'API REST'],
    links: [
      { label: 'Código', url: 'https://github.com/aliciamunhoz/dslist' },
    ],
  },
  {
    id: 5,
    nome: 'Kanban',
    descricao:
      'Quadro Kanban feito com Next.js e TypeScript para organização de tarefas.',
    tags: ['Next.js', 'React', 'TypeScript', 'API REST'],
    links: [
      { label: 'Código', url: 'https://github.com/aliciamunhoz/kanban-next' },
      { label: 'Demo', url: 'https://kanban-next-nine.vercel.app' },
    ],
  },
]
