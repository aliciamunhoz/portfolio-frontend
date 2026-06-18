import { Projeto } from '../types/projeto'
import { ProjetoCard } from './ProjetoCard'

interface ProjetoListProps {
  projetos: Projeto[]
}

export function ProjetoList({ projetos }: ProjetoListProps) {
  if (projetos.length === 0) {
    return <p className="aviso">Nenhum projeto encontrado.</p>
  }

  return (
    <div className="cards">
      {projetos.map((projeto) => (
        <ProjetoCard key={projeto.id} projeto={projeto} />
      ))}
    </div>
  )
}
