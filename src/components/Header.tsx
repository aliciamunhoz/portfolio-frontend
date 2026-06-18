interface HeaderProps {
  tema: 'claro' | 'escuro'
  onAlternarTema: () => void
}

export function Header({ tema, onAlternarTema }: HeaderProps) {
  return (
    <header className="topo">
      {/* Lente azul + luzinhas, a cara da Pokédex */}
      <div className="pokedex-luz" />
      <div className="pokedex-luzes-pequenas">
        <span />
        <span />
        <span />
      </div>

      <nav className="menu">
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contato">Contato</a>
        <button
          className="botao-tema"
          onClick={onAlternarTema}
          aria-label="Alternar tema"
        >
          {tema === 'claro' ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  )
}
