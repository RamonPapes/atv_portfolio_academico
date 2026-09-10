import { STATUS } from '../data/atividades.js'
import './CartaoAtividade.css'

const APARENCIA_STATUS = {
  [STATUS.PLANEJADA]: { classe: 'status--planejada', simbolo: '○' },
  [STATUS.EM_ANDAMENTO]: { classe: 'status--andamento', simbolo: '◐' },
  [STATUS.CONCLUIDA]: { classe: 'status--concluida', simbolo: '●' },
}

const APARENCIA_PADRAO = APARENCIA_STATUS[STATUS.PLANEJADA]

/**
 * @param {number}   numero      
 * @param {string}   titulo       
 * @param {string}   descricao    
 * @param {string[]} tecnologia   
 * @param {string}   [status]     
 * @param {string}   [link]       
 */
function CartaoAtividade({
  numero,
  titulo,
  descricao,
  tecnologia: tecnologias = [],
  status = STATUS.PLANEJADA,
  link,
}) {
  const numeroFormatado = String(numero).padStart(2, '0')
  const idTitulo = `atividade-${numero}-titulo`
  const aparencia = APARENCIA_STATUS[status] ?? APARENCIA_PADRAO

  return (
    <li className="cartao">
      <article className="cartao__conteudo" aria-labelledby={idTitulo}>
        <div className="cartao__topo">
          <p className="cartao__numero">
            <span className="sr-only">Atividade </span>
            {numeroFormatado}
          </p>

          <p className={`status ${aparencia.classe}`}>
            <span className="status__simbolo" aria-hidden="true">
              {aparencia.simbolo}
            </span>
            <span className="sr-only">Status: </span>
            {status}
          </p>
        </div>

        <h4 className="cartao__titulo" id={idTitulo}>
          {titulo}
        </h4>

        <p className="cartao__descricao">{descricao}</p>

        {tecnologias.length > 0 && (
          <ul className="cartao__tecnologias" aria-label="Tecnologias usadas">
            {tecnologias.map((tecnologia) => (
              <li className="etiqueta" key={tecnologia}>
                {tecnologia}
              </li>
            ))}
          </ul>
        )}

        <p className="cartao__rodape">
          {link ? (
            <a className="cartao__acao" href={link}>
              Ver atividade
              <span className="sr-only"> {numeroFormatado}: {titulo}</span>
              <span className="cartao__seta" aria-hidden="true">
                →
              </span>
            </a>
          ) : (
            <span className="cartao__acao cartao__acao--inativa">Em breve</span>
          )}
        </p>
      </article>
    </li>
  )
}

export default CartaoAtividade
