import './ProgressoAtividades.css'

const calcularPercentual = (concluidas, total) => {
  if (!total || total <= 0) {
    return 0
  }

  if (concluidas <= 0) {
    return 0
  }

  if (concluidas >= total) {
    return 100
  }

  return Math.min(99, Math.max(1, Math.round((concluidas / total) * 100)))
}

function ProgressoAtividades({ concluidas, total }) {
  const percentual = calcularPercentual(concluidas, total)
  const descricao = `${concluidas} de ${total} atividades concluídas, ${percentual}% do projeto`

  return (
    <section className="progresso" aria-labelledby="progresso-titulo">
      <p className="progresso__texto">
        <strong className="progresso__numero" id="progresso-titulo">
          {concluidas} de {total}
        </strong>
        <span className="progresso__rotulo">atividades concluídas</span>
        <span className="progresso__percentual">{percentual}%</span>
      </p>

      <div
        className="progresso__trilha"
        role="progressbar"
        aria-labelledby="progresso-titulo"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentual}
        aria-valuetext={descricao}
        data-completo={percentual === 100 ? 'sim' : 'nao'}
      >
        <div
          className="progresso__preenchimento"
          style={{ inlineSize: `${percentual}%` }}
        />
      </div>
    </section>
  )
}

export default ProgressoAtividades
