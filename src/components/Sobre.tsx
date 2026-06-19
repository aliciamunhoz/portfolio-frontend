export function Sobre() {
  return (
    <section id="sobre" className="tela">
      <div className="sobre-conteudo">
        <img className="avatar" src="/amfc.jpeg" alt="Foto de Alícia Munhóz" />

        <div className="sobre-texto">
          <h1 className="titulo">
            Olá, eu sou <span>Alícia</span> 👋
          </h1>
          <p className="subtitulo">
            Desenvolvedora Full-stack · Java · Spring Boot · Node.js · React
          </p>
          <p className="texto">
            Desenvolvedora full-stack com base sólida em back-end (Java, Spring
            Boot, Node.js e APIs REST) e atuação crescente no front-end (React e
            TypeScript). Tenho experiência em integração de serviços, modelagem
            de dados e times ágeis, formação em Análise e Desenvolvimento de
            Sistemas e atualmente curso mobilidade acadêmica em Portugal. Busco
            evoluir como engenheira de software, com código limpo, boas práticas
            e soluções escaláveis.
          </p>

          {/* Ficha de "treinador" */}
          <ul className="ficha">
            <li>
              <strong>Local:</strong> Bragança, Portugal
            </li>
            <li>
              <strong>Foco:</strong> Full-stack
            </li>
            <li>
              <strong>Stack:</strong> Java · Node · React · TypeScript
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
