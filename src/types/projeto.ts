export interface LinkProjeto {
  label: string 
  url: string
}

export interface Projeto {
  id: number
  nome: string
  descricao: string
  tags: string[]
  links: LinkProjeto[]
}
