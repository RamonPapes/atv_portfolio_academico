import { useRef } from 'react'
import './BuscaAtividades.css'

function BuscaAtividades({ termo, aoBuscar }) {
  const entradaRef = useRef(null)

  // O botão some junto com o termo, então o foco volta para o campo.
  const limpar = () => {
    aoBuscar('')
    entradaRef.current.focus()
  }

  return (
    <div className="busca">
      <label className="busca__rotulo" htmlFor="busca-atividades">
        Buscar atividade
      </label>

      <div className="busca__campo">
        <input
          className="busca__entrada"
          id="busca-atividades"
          ref={entradaRef}
          type="search"
          value={termo}
          placeholder="Título ou descrição"
          autoComplete="off"
          onChange={(evento) => aoBuscar(evento.target.value)}
        />

        {termo !== '' && (
          <button
            type="button"
            className="busca__limpar"
            onClick={limpar}
          >
            Limpar
            <span className="sr-only"> a busca por atividades</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default BuscaAtividades
