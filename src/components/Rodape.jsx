import './Rodape.css'

const ANO_ATUAL = new Date().getFullYear()

function Rodape({ autor, disciplina }) {
  return (
    <footer className="rodape">
      <div className="rodape__creditos">
        <p className="rodape__autor">{autor}</p>
        <p>
          Portfólio acadêmico desenvolvido para a disciplina de {disciplina}
          {' — '}
          <time dateTime={String(ANO_ATUAL)}>{ANO_ATUAL}</time>.
        </p>
      </div>

      <p>
        <a className="rodape__topo" href="#inicio">
          Voltar ao início
        </a>
      </p>
    </footer>
  )
}

export default Rodape
