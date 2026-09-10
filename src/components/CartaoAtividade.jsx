import './CartaoAtividade.css'

/**
 * @param {number}   numero      
 * @param {string}   titulo       
 * @param {string}   descricao    
 * @param {string[]} tecnologias  
 * @param {string}   [link]       
 */
function CartaoAtividade({ numero, titulo, descricao, tecnologias = [], link }) {
  const numeroFormatado = String(numero).padStart(2, '0')
  const idTitulo = `atividade-${numero}-titulo`

  return (
    <li className="cartao">
      <article className="cartao__conteudo" aria-labelledby={idTitulo}>
        <p className="cartao__numero">
          <span className="sr-only">Atividade </span>
          {numeroFormatado}
        </p>

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
