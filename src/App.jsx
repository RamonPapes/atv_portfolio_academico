import Cabecalho from './components/Cabecalho.jsx'
import CartaoAtividade from './components/CartaoAtividade.jsx'
import Rodape from './components/Rodape.jsx'
import avatar from './assets/avatar.svg'
import './App.css'

const REPOSITORIO = 'https://github.com/RamonPapes/atv_portfolio_academico'

const ATIVIDADES = [
  {
    numero: 1,
    titulo: 'Estrutura semântica',
    descricao:
      'Montagem da página com header, nav, main, section e footer, títulos em ordem hierárquica e a área reservada para as 30 entregas.',
    tecnologias: ['HTML', 'JSX', 'React'],
    link: `${REPOSITORIO}/commit/3dc8abe`,
  },
  {
    numero: 2,
    titulo: 'Seção de apresentação',
    descricao:
      'Identificação com nome, curso e turma, avatar com texto alternativo descritivo e botão de atalho para o quadro de atividades.',
    tecnologias: ['HTML', 'CSS', 'Acessibilidade'],
    link: `${REPOSITORIO}/commit/978f20a`,
  },
  {
    numero: 3,
    titulo: 'Menu de navegação',
    descricao:
      'Links internos para Início, Sobre, Atividades e Contato, com rolagem suave respeitando prefers-reduced-motion e foco visível.',
    tecnologias: ['HTML', 'CSS', 'Acessibilidade'],
    link: `${REPOSITORIO}/commit/0b0185e`,
  },
  {
    numero: 4,
    titulo: 'Sistema visual em CSS',
    descricao:
      'Tokens de cor, espaçamento, raio e sombra, escala tipográfica com clamp, normalização básica e suporte a tema escuro.',
    tecnologias: ['CSS', 'Design System'],
    link: `${REPOSITORIO}/commit/6b44ecf`,
  },
  {
    numero: 5,
    titulo: 'Cartões de atividades',
    descricao:
      'Componente reutilizável com número, título, descrição, tecnologias e ação, além dos estados de hover e foco.',
    tecnologias: ['React', 'CSS'],
    link: `${REPOSITORIO}/commit/675a600`,
  },
  {
    numero: 6,
    titulo: 'Layout com Flexbox',
    descricao:
      'Cabeçalho, menu e grupo de botões alinhados com Flexbox. Problema resolvido: marca, título e menu ficavam empilhados e desalinhados, e os botões dependiam de margens fixas que quebravam ao mudar a largura da tela.',
    tecnologias: ['CSS', 'Flexbox'],
  },
  {
    numero: 7,
    titulo: 'Grade de atividades com CSS Grid',
    descricao:
      'Quadro das entregas em grade adaptável com auto-fit e minmax, sem largura fixa. Problema resolvido: os cartões tinham altura desigual e a coluna mínima de 260px estourava a tela em celulares estreitos, gerando rolagem horizontal.',
    tecnologias: ['CSS', 'Grid', 'Responsividade'],
  },
  {
    numero: 8,
    titulo: 'Homepage responsiva',
    descricao:
      'Pontos de ajuste em 768px, 480px e 1440px afinando menu, tipografia, margens, avatar e grade. Problema resolvido: em telas estreitas o cabeçalho comprimia o menu contra o título e o avatar de 160px roubava quase toda a largura útil.',
    tecnologias: ['CSS', 'Media Queries', 'Responsividade'],
  },
  {
    numero: 9,
    titulo: 'Componente Cabecalho',
    descricao:
      'Cabeçalho e menu extraídos para Cabecalho.jsx, com os estilos movidos para Cabecalho.css e os links vindos de um array. Problema resolvido: marcação e CSS do topo estavam misturados ao restante da página, sem fronteira clara entre as partes.',
    tecnologias: ['React', 'Componentes'],
  },
  {
    numero: 10,
    titulo: 'Componente Rodape',
    descricao:
      'Rodapé extraído para Rodape.jsx, com autor e disciplina por props, ano calculado uma única vez no módulo e link de retorno ao início. Problema resolvido: new Date().getFullYear() ficava solto no meio do JSX da página, pronto para ser repetido em cada lugar que precisasse do ano.',
    tecnologias: ['React', 'Componentes'],
  },
]

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo principal
      </a>

      <Cabecalho marca="Ramon Papes" titulo="Portfólio Acadêmico" />

      <main id="conteudo" className="conteudo">
        <section
          id="apresentacao"
          className="apresentacao"
          aria-labelledby="titulo-apresentacao"
        >
          <img
            className="apresentacao__avatar"
            src={avatar}
            alt="Avatar ilustrativo de Ramon Enrico Alves Papes: silhueta de uma pessoa sobre um círculo roxo."
            width="160"
            height="160"
          />

          <div className="apresentacao__texto">
            <h2 id="titulo-apresentacao">Ramon Enrico Alves Papes</h2>

            <dl className="apresentacao__dados">
              <div>
                <dt>Curso</dt>
                <dd>Engenharia da Computação</dd>
              </div>
              <div>
                <dt>Turma</dt>
                <dd>GRDECPDIU20241</dd>
              </div>
            </dl>

            <p>
              Estudante de Engenharia da Computação em formação na área de
              desenvolvimento web. Neste portfólio reúno as 30 atividades da
              disciplina, cada uma com sua descrição e link, para acompanhar de
              forma pública a minha evolução com HTML, CSS, JavaScript e React.
            </p>

            <div className="grupo-botoes">
              <a className="botao" href="#atividades">
                Ver as 30 atividades
              </a>
              <a
                className="botao botao--secundario"
                href={REPOSITORIO}
                rel="noreferrer"
              >
                Repositório no GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" aria-labelledby="titulo-sobre">
          <h2 id="titulo-sobre">Sobre o projeto</h2>
          <p>
            Este portfólio organiza, em um único lugar, todas as entregas da
            disciplina de Desenvolvimento Web. Cada atividade recebe um cartão
            próprio, com título, descrição e link, para que qualquer pessoa
            encontre rapidamente o que procura.
          </p>
          <p>
            A construção é incremental: cada avanço vira um commit no histórico
            do repositório, documentando a evolução do trabalho.
          </p>
        </section>

        <section id="atividades" aria-labelledby="titulo-atividades">
          <h2 id="titulo-atividades">As 30 atividades</h2>
          <p>
            Lista completa das entregas, da primeira à trigésima, em ordem
            cronológica.
          </p>

          {/* Área reservada para a lista das 30 atividades. */}
          <div className="atividades" aria-live="polite">
            <h3 className="atividades__titulo">Quadro de entregas</h3>
            <ul className="atividades__lista">
              {ATIVIDADES.length === 0 ? (
                <li className="atividades__vazio">
                  Nenhuma atividade cadastrada ainda. Esta área receberá os 30
                  cartões de entrega.
                </li>
              ) : (
                ATIVIDADES.map((atividade) => (
                  <CartaoAtividade key={atividade.numero} {...atividade} />
                ))
              )}
            </ul>
          </div>
        </section>

        <section id="contato" aria-labelledby="titulo-contato">
          <h2 id="titulo-contato">Contato</h2>
          <p>
            Dúvidas ou sugestões sobre alguma entrega? Fale comigo pelo e-mail{' '}
            <a href="mailto:ramonpapes@gmail.com">ramonpapes@gmail.com</a>.
          </p>
        </section>
      </main>

      <Rodape autor="Ramon Enrico Alves Papes" disciplina="Desenvolvimento Web" />
    </div>
  )
}

export default App
