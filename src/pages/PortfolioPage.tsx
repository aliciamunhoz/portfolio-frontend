import { useMemo, useState } from 'react'
import { projetos } from '../data/projetos'
import { Header } from '../components/Header'
import { Sobre } from '../components/Sobre'
import { FiltroTags } from '../components/FiltroTags'
import { ProjetoList } from '../components/ProjetoList'
import { Habilidades } from '../components/Habilidades'
import { Contato } from '../components/Contato'

export function PortfolioPage() {
  const [tagAtiva, setTagAtiva] = useState<string | null>(null)

  const tags = useMemo(() => {
    const todas = projetos.flatMap((p) => p.tags)
    return [...new Set(todas)].sort()
  }, [])

  const projetosFiltrados = useMemo(() => {
    if (tagAtiva === null) return projetos
    return projetos.filter((p) => p.tags.includes(tagAtiva))
  }, [tagAtiva])

  return (
    <>
      <Header />

      <main>
        <Sobre />

        <section id="projetos" className="tela">
          <h2 className="titulo-secao">Projetos</h2>
          <FiltroTags
            tags={tags}
            tagAtiva={tagAtiva}
            onSelecionar={setTagAtiva}
          />
          <ProjetoList projetos={projetosFiltrados} />
        </section>

        <Habilidades />
        <Contato />
      </main>

      <footer className="rodape">
        <p>Feito com 💙 estilo Pokédex</p>
      </footer>
    </>
  )
}
