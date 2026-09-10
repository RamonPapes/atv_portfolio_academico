import { TEMAS } from '../hooks/useTema.js'
import './BotaoTema.css'

const APARENCIA_TEMA = {
  [TEMAS.CLARO]: { simbolo: '☾', rotulo: 'Ativar tema escuro', nome: 'Claro' },
  [TEMAS.ESCURO]: { simbolo: '☀', rotulo: 'Ativar tema claro', nome: 'Escuro' },
}

function BotaoTema({ tema, aoAlternar }) {
  const aparencia = APARENCIA_TEMA[tema] ?? APARENCIA_TEMA[TEMAS.CLARO]

  return (
    <button
      type="button"
      className="botao-tema"
      onClick={aoAlternar}
      title={aparencia.rotulo}
      aria-label={aparencia.rotulo}
    >
      <span className="botao-tema__simbolo" aria-hidden="true">
        {aparencia.simbolo}
      </span>
      <span className="botao-tema__nome" aria-hidden="true">
        {aparencia.nome}
      </span>
    </button>
  )
}

export default BotaoTema
