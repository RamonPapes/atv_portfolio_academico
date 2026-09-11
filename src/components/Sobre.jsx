import { REPOSITORIO } from '../data/atividades.js'
import './Sobre.css'

/**
 * As tecnologias trazem o estágio real de uso dentro do portfólio, para que a
 * seção descreva prática e não domínio.
 */
const TECNOLOGIAS = [
  {
    nome: 'HTML semântico',
    nivel: 'Em prática',
    detalhe:
      'Estrutura da página com header, nav, main, section e footer, mantendo os títulos em ordem.',
  },
  {
    nome: 'CSS',
    nivel: 'Em prática',
    detalhe:
      'Tokens de cor e espaçamento, Flexbox, Grid e media queries para o layout responsivo.',
  },
  {
    nome: 'JavaScript',
    nivel: 'Em prática',
    detalhe:
      'Listas, funções puras e derivação de dados com map e filter a cada renderização.',
  },
  {
    nome: 'React',
    nivel: 'Em estudo',
    detalhe:
      'Componentes, props, useState e useEffect no que cada entrega exigiu até aqui.',
  },
  {
    nome: 'Acessibilidade',
    nivel: 'Em estudo',
    detalhe:
      'Foco visível, rótulos associados e uso por teclado, ainda com apoio de listas de verificação.',
  },
  {
    nome: 'Git e GitHub',
    nivel: 'Em prática',
    detalhe:
      'Commits pequenos e descritivos na branch main, com o histórico aberto para consulta.',
  },
  {
    nome: 'Vite',
    nivel: 'Primeiros passos',
    detalhe:
      'Servidor de desenvolvimento e build de produção, sem configuração além do padrão.',
  },
  {
    nome: 'Vercel',
    nivel: 'Primeiros passos',
    detalhe: 'Publicação prevista para a última atividade do portfólio.',
  },
]

/** Só entram aqui endereços públicos, que já podem ser divulgados. */
const LINKS = [
  {
    href: 'https://github.com/RamonPapes',
    rotulo: 'GitHub',
    detalhe: '@RamonPapes',
  },
  {
    href: REPOSITORIO,
    rotulo: 'Repositório deste portfólio',
    detalhe: 'atv_portfolio_academico',
  },
  {
    href: 'mailto:ramonpapes@gmail.com',
    rotulo: 'E-mail',
    detalhe: 'ramonpapes@gmail.com',
  },
]

/**
 * @param {string} autor
 * @param {string} curso
 */
function Sobre({ autor, curso }) {
  return (
    <section id="sobre" className="sobre" aria-labelledby="titulo-sobre">
      <h2 id="titulo-sobre">Sobre</h2>

      <div className="sobre__texto">
        <p>
          Sou {autor}, estudante de {curso} e autor de cada linha deste
          portfólio. Escrevi o código, a interface e os textos das 30 entregas
          da disciplina de Desenvolvimento Web, uma de cada vez, resolvendo os
          problemas conforme apareciam.
        </p>
        <p>
          A construção é incremental: cada avanço vira um commit no repositório,
          então o histórico mostra a ordem em que as decisões foram tomadas. O
          que está publicado aqui é o que eu de fato consegui fazer funcionar
          até agora, e não uma vitrine do que pretendo aprender.
        </p>
        <p>
          Meu objetivo profissional é atuar com desenvolvimento web front-end,
          começando por posições de estágio ou júnior em que eu possa escrever
          interfaces acessíveis e responsáveis e continuar aprendendo com
          revisão de código.
        </p>
      </div>

      <div className="sobre__blocos">
        <div className="sobre__bloco">
          <h3 className="sobre__subtitulo" id="sobre-tecnologias">
            Tecnologias praticadas
          </h3>
          <p className="sobre__nota">
            O rótulo indica o quanto cada tecnologia foi usada neste projeto.
          </p>

          <ul className="sobre__tecnologias" aria-labelledby="sobre-tecnologias">
            {TECNOLOGIAS.map(({ nome, nivel, detalhe }) => (
              <li className="sobre__tecnologia" key={nome}>
                <p className="sobre__tecnologia-topo">
                  <strong className="sobre__tecnologia-nome">{nome}</strong>
                  <span className="sobre__nivel">
                    <span className="sr-only">Nível de prática: </span>
                    {nivel}
                  </span>
                </p>
                <p className="sobre__tecnologia-detalhe">{detalhe}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="sobre__bloco">
          <h3 className="sobre__subtitulo" id="sobre-links">
            Links profissionais
          </h3>
          <p className="sobre__nota">
            Endereços públicos, mantidos por mim e apropriados para divulgação.
          </p>

          <ul className="sobre__links" aria-labelledby="sobre-links">
            {LINKS.map(({ href, rotulo, detalhe }) => (
              <li key={href}>
                <a className="sobre__link" href={href} rel="noreferrer">
                  <span className="sobre__link-rotulo">{rotulo}</span>
                  <span className="sobre__link-detalhe">{detalhe}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Sobre
