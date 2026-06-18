export interface LinkProjeto {
  label: string // ex: "Back-end", "Front-end", "Código", "Demo"
  url: string
}

export interface Projeto {
  id: number
  nome: string
  descricao: string
  tags: string[]
  // Um projeto pode ter vários links (ex: front e back no mesmo slot).
  links: LinkProjeto[]
}
