import './BuscaAtividades.css'

function BuscaAtividades({ termo, aoBuscar }) {
  return (
    <div className="busca">
      <label className="busca__rotulo" htmlFor="busca-atividades">
        Buscar atividade
      </label>

      <div className="busca__campo">
        <input
          className="busca__entrada"
          id="busca-atividades"
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
            onClick={() => aoBuscar('')}
          >
            Limpar
          </button>
        )}
      </div>
    </div>
  )
}

export default BuscaAtividades
