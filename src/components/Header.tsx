export function Header() {
  return (
    <header className="topo">
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
        {/* Botão de destaque: meu calendário de registros de trabalho */}
        <a
          className="botao-calendario"
          href="https://calendar-project-frontend-amfc.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          📅 Meu Calendário
        </a>
      </nav>
    </header>
  )
}
