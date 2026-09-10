import avatar from './assets/avatar.svg'
import './App.css'

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo principal
      </a>

      <header className="cabecalho">
        <p className="cabecalho__marca">Ramon Papes</p>
        <h1>Portfólio Acadêmico</h1>

        <nav className="navegacao" aria-label="Navegação principal">
          <ul>
            <li>
              <a href="#apresentacao">Apresentação</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#atividades">Atividades</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

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

            <a className="botao" href="#atividades">
              Ver as 30 atividades
            </a>
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

          {/* Área reservada para a lista das 30 atividades.
              Nas próximas etapas ela será preenchida dinamicamente. */}
          <div className="atividades" aria-live="polite">
            <h3 className="atividades__titulo">Quadro de entregas</h3>
            <ul className="atividades__lista">
              <li className="atividades__vazio">
                Nenhuma atividade cadastrada ainda. Esta área receberá os 30
                cartões de entrega.
              </li>
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

      <footer className="rodape">
        <p>
          Portfólio acadêmico desenvolvido para a disciplina de Desenvolvimento
          Web &mdash; {new Date().getFullYear()}.
        </p>
      </footer>
    </div>
  )
}

export default App
