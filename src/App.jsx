import { useState } from 'react'
import BuscaAtividades from './components/BuscaAtividades.jsx'
import Cabecalho from './components/Cabecalho.jsx'
import CartaoAtividade from './components/CartaoAtividade.jsx'
import FiltroTecnologias from './components/FiltroTecnologias.jsx'
import Rodape from './components/Rodape.jsx'
import {
  atividades,
  FILTROS,
  FILTRO_PADRAO,
  REPOSITORIO,
} from './data/atividades.js'
import avatar from './assets/avatar.svg'
import './App.css'

const normalizar = (texto) =>
  texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

const mensagemSemResultado = (tecnologia, termo) => {
  if (termo !== '' && tecnologia !== FILTRO_PADRAO) {
    return `Nenhuma atividade de ${tecnologia} corresponde a "${termo}".`
  }

  if (termo !== '') {
    return `Nenhuma atividade corresponde a "${termo}".`
  }

  return `Nenhuma atividade usa ${tecnologia}.`
}

function App() {
  const [tecnologiaSelecionada, setTecnologiaSelecionada] =
    useState(FILTRO_PADRAO)
  const [termoBusca, setTermoBusca] = useState('')

  const termo = normalizar(termoBusca)

  const atividadesVisiveis = atividades.filter((atividade) => {
    const combinaTecnologia =
      tecnologiaSelecionada === FILTRO_PADRAO ||
      atividade.tecnologia.includes(tecnologiaSelecionada)

    const combinaTermo =
      termo === '' ||
      normalizar(atividade.titulo).includes(termo) ||
      normalizar(atividade.descricao).includes(termo)

    return combinaTecnologia && combinaTermo
  })

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

          <BuscaAtividades termo={termoBusca} aoBuscar={setTermoBusca} />

          <FiltroTecnologias
            opcoes={FILTROS}
            selecionada={tecnologiaSelecionada}
            aoSelecionar={setTecnologiaSelecionada}
            total={atividades.length}
            visiveis={atividadesVisiveis.length}
          />

          <div className="atividades" aria-live="polite">
            <h3 className="atividades__titulo">Quadro de entregas</h3>
            <ul className="atividades__lista">
              {atividadesVisiveis.length === 0 ? (
                <li className="atividades__vazio">
                  {mensagemSemResultado(tecnologiaSelecionada, termoBusca.trim())}{' '}
                  Ajuste a busca ou volte para o filtro Todos.
                </li>
              ) : (
                atividadesVisiveis.map((atividade) => (
                  <CartaoAtividade key={atividade.id} {...atividade} />
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
