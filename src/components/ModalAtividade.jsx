import { useEffect, useRef } from 'react'
import { REPOSITORIO } from '../data/atividades.js'
import './ModalAtividade.css'

/** Vale para as entregas cujo link é o commit que as registrou. */
const ROTULO_LINK_PADRAO = 'Ver o commit desta entrega'

const HISTORICO = `${REPOSITORIO}/commits/main`

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

        <h2 className="modal__titulo" id="modal-titulo">
          {atividade.titulo}
        </h2>

        <p className="modal__descricao">{atividade.descricao}</p>

        <h3 className="modal__subtitulo">Como foi feita</h3>
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
              {atividade.rotuloLink ?? ROTULO_LINK_PADRAO}
            </a>
          ) : (
            <span className="modal__sem-link">
              Esta entrega não tem link próprio: ela está em funcionamento aqui
              mesmo no portfólio, e o código dela fica no{' '}
              <a href={HISTORICO} rel="noreferrer">
                histórico de commits do repositório
              </a>
              .
            </span>
          )}
        </p>
      </div>
    </dialog>
  )
}

export default ModalAtividade
