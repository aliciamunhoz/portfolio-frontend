const HABILIDADES = [
  // Back-end
  { nome: 'Java', tipo: 'fire' },
  { nome: 'Spring Boot', tipo: 'grass' },
  { nome: 'Node.js', tipo: 'ground' },
  { nome: 'Express', tipo: 'steel' },
  { nome: 'APIs REST', tipo: 'fighting' },
  // Front-end
  { nome: 'React', tipo: 'psychic' },
  { nome: 'TypeScript', tipo: 'water' },
  { nome: 'JavaScript', tipo: 'electric' },
  { nome: 'React Native', tipo: 'dragon' },
  // Banco de dados
  { nome: 'PostgreSQL', tipo: 'normal' },
  { nome: 'MySQL', tipo: 'water' },
  { nome: 'MongoDB', tipo: 'grass' },
  // Ferramentas
  { nome: 'Docker', tipo: 'steel' },
  { nome: 'Git', tipo: 'fighting' },
]

export function Habilidades() {
  return (
    <section id="habilidades" className="tela">
      <h2 className="titulo-secao">Habilidades</h2>
      <div className="habilidades">
        {HABILIDADES.map((h) => (
          <span key={h.nome} className={`tipo tipo-${h.tipo}`}>
            {h.nome}
          </span>
        ))}
      </div>
    </section>
  )
}
