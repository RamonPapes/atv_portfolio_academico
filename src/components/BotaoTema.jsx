import { TEMAS } from '../hooks/useTema.js'
import './BotaoTema.css'

/**
 * O nome do tema atual fica visível e a ação vai num texto só para leitores de
 * tela, então o nome acessível começa pelo rótulo que se lê na tela.
 */
const APARENCIA_TEMA = {
  [TEMAS.CLARO]: { simbolo: '☾', nome: 'Claro', acao: 'Ativar tema escuro' },
  [TEMAS.ESCURO]: { simbolo: '☀', nome: 'Escuro', acao: 'Ativar tema claro' },
}

function BotaoTema({ tema, aoAlternar }) {
  const aparencia = APARENCIA_TEMA[tema] ?? APARENCIA_TEMA[TEMAS.CLARO]

  return (
    <button
      type="button"
      className="botao-tema"
      onClick={aoAlternar}
      title={aparencia.acao}
    >
      <span className="botao-tema__simbolo" aria-hidden="true">
        {aparencia.simbolo}
      </span>
      <span className="botao-tema__nome">{aparencia.nome}</span>
      <span className="sr-only">{aparencia.acao}</span>
    </button>
  )
}

export default BotaoTema
