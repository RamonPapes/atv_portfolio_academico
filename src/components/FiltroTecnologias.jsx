import './FiltroTecnologias.css'

function FiltroTecnologias({ opcoes, selecionada, aoSelecionar, total, visiveis }) {
  return (
    <div className="filtro">
      <div
        className="filtro__botoes"
        role="group"
        aria-label="Filtrar atividades por tecnologia"
      >
        {opcoes.map((opcao) => {
          const ativa = opcao === selecionada

          return (
            <button
              type="button"
              key={opcao}
              className={`filtro__botao${ativa ? ' filtro__botao--ativo' : ''}`}
              aria-pressed={ativa}
              onClick={() => aoSelecionar(opcao)}
            >
              {ativa && (
                <span className="filtro__marca" aria-hidden="true">
                  ✓
                </span>
              )}
              {opcao}
            </button>
          )
        })}
      </div>

      <p className="filtro__resultado" role="status">
        Mostrando {visiveis} de {total} atividades
      </p>
    </div>
  )
}

export default FiltroTecnologias
