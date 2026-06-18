interface FiltroTagsProps {
  tags: string[]
  tagAtiva: string | null
  onSelecionar: (tag: string | null) => void
}

export function FiltroTags({ tags, tagAtiva, onSelecionar }: FiltroTagsProps) {
  return (
    <div className="filtro-tags">
      <button
        className={tagAtiva === null ? 'filtro ativo' : 'filtro'}
        onClick={() => onSelecionar(null)}
      >
        Todos
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          className={tagAtiva === tag ? 'filtro ativo' : 'filtro'}
          onClick={() => onSelecionar(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
