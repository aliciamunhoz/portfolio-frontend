import { useEffect, useMemo, useState } from 'react'
import { Projeto } from '../types/projeto'
import { listarProjetos } from '../services/projetoService'
import { ApiError } from '../services/api'
import { useTema } from '../hooks/useTema'
import { Header } from '../components/Header'
import { Sobre } from '../components/Sobre'
import { FiltroTags } from '../components/FiltroTags'
import { ProjetoList } from '../components/ProjetoList'
import { Habilidades } from '../components/Habilidades'
import { Contato } from '../components/Contato'

export function PortfolioPage() {
  const { tema, alternarTema } = useTema()

  const [projetos, setProjetos] = useState<Projeto[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState<string | null>(null)
  const [tagAtiva, setTagAtiva] = useState<string | null>(null)

  // Busca os projetos na API quando a página abre.
  useEffect(() => {
    listarProjetos()
      .then(setProjetos)
      .catch((e) => {
        const mensagem =
          e instanceof ApiError ? e.message : 'Erro inesperado.'
        setErro(mensagem)
      })
      .finally(() => setCarregando(false))
  }, [])

  // Lista única de tags, para os botões de filtro.
  const tags = useMemo(() => {
    const todas = projetos.flatMap((p) => p.tags)
    return [...new Set(todas)].sort()
  }, [projetos])

  // Projetos visíveis conforme o filtro selecionado.
  const projetosFiltrados = useMemo(() => {
    if (tagAtiva === null) return projetos
    return projetos.filter((p) => p.tags.includes(tagAtiva))
  }, [projetos, tagAtiva])

  return (
    <>
      <Header tema={tema} onAlternarTema={alternarTema} />

      <main>
        <Sobre />

        <section id="projetos" className="tela">
          <h2 className="titulo-secao">Projetos</h2>

          {carregando && <p className="aviso">Carregando projetos...</p>}
          {erro && <p className="aviso aviso-erro">{erro}</p>}

          {!carregando && !erro && (
            <>
              <FiltroTags
                tags={tags}
                tagAtiva={tagAtiva}
                onSelecionar={setTagAtiva}
              />
              <ProjetoList projetos={projetosFiltrados} />
            </>
          )}
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
