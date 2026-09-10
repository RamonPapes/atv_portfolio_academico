import './ProgressoAtividades.css'

function ProgressoAtividades({ concluidas, total }) {
  return (
    <p className="progresso">
      <strong className="progresso__numero">
        {concluidas} de {total}
      </strong>
      <span className="progresso__rotulo">atividades concluídas</span>
    </p>
  )
}

export default ProgressoAtividades
