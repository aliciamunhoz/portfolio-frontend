import { Projeto } from '../types/projeto'

interface ProjetoCardProps {
  projeto: Projeto
}

export function ProjetoCard({ projeto }: ProjetoCardProps) {
  return (
    <article className="card-projeto">
      <h3>{projeto.nome}</h3>
      <p>{projeto.descricao}</p>

      <div className="tags">
        {projeto.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="card-links">
        {projeto.links.map((link) => {
          const ehDemo = link.label.toLowerCase() === 'demo'
          return (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={ehDemo ? 'link-demo' : undefined}
            >
              {link.label} {ehDemo ? '↗' : '→'}
            </a>
          )
        })}
      </div>
    </article>
  )
}
