import { useEffect, useRef } from 'react'
import './ModalAtividade.css'

function ModalAtividade({ atividade, aoFechar }) {
  const dialogoRef = useRef(null)

  useEffect(() => {
    const dialogo = dialogoRef.current

    if (dialogo && !dialogo.open) {
      dialogo.showModal()
    }
  }, [])

  const fecharPeloFundo = (evento) => {
    if (evento.target === dialogoRef.current) {
      dialogoRef.current.close()
    }
  }

  const numeroFormatado = String(atividade.numero).padStart(2, '0')

  return (
    <dialog
      className="modal"
      ref={dialogoRef}
      aria-labelledby="modal-titulo"
      onClose={aoFechar}
      onClick={fecharPeloFundo}
    >
      <div className="modal__conteudo">
        <div className="modal__cabecalho">
          <p className="modal__numero">Atividade {numeroFormatado}</p>
          <button
            type="button"
            className="modal__fechar"
            onClick={() => dialogoRef.current.close()}
          >
            <span aria-hidden="true">×</span>
            <span className="sr-only">Fechar detalhes</span>
          </button>
        </div>

        <h3 className="modal__titulo" id="modal-titulo">
          {atividade.titulo}
        </h3>

        <p className="modal__descricao">{atividade.descricao}</p>

        <h4 className="modal__subtitulo">Como foi feita</h4>
        <p className="modal__detalhes">{atividade.detalhes}</p>

        <dl className="modal__dados">
          <div>
            <dt>Status</dt>
            <dd>{atividade.status}</dd>
          </div>
          <div>
            <dt>Tecnologias</dt>
            <dd>{atividade.tecnologia.join(', ')}</dd>
          </div>
        </dl>

        <p className="modal__acao">
          {atividade.link ? (
            <a href={atividade.link} rel="noreferrer">
              Ver o commit desta entrega
            </a>
          ) : (
            <span className="modal__sem-link">
              Commit ainda não publicado para esta entrega.
            </span>
          )}
        </p>
      </div>
    </dialog>
  )
}

export default ModalAtividade
