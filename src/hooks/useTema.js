import { useEffect, useState } from 'react'

export const TEMAS = {
  CLARO: 'claro',
  ESCURO: 'escuro',
}

export const CHAVE_TEMA = 'portfolio-academico:tema'

const TEMA_PADRAO = TEMAS.CLARO

const temaValido = (valor) =>
  valor === TEMAS.CLARO || valor === TEMAS.ESCURO ? valor : null

const lerTemaSalvo = () => {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    return temaValido(window.localStorage.getItem(CHAVE_TEMA))
  } catch {
    return null
  }
}

const salvarTema = (tema) => {
  try {
    window.localStorage.setItem(CHAVE_TEMA, tema)
    return true
  } catch {
    return false
  }
}

const sistemaPrefereEscuro = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches

const temaInicial = () => {
  const salvo = lerTemaSalvo()

  if (salvo) {
    return salvo
  }

  if (sistemaPrefereEscuro()) {
    return TEMAS.ESCURO
  }

  return TEMA_PADRAO
}

export function useTema() {
  const [tema, setTema] = useState(temaInicial)

  useEffect(() => {
    document.documentElement.dataset.tema = tema
    salvarTema(tema)
  }, [tema])

  const alternarTema = () => {
    setTema((atual) => (atual === TEMAS.ESCURO ? TEMAS.CLARO : TEMAS.ESCURO))
  }

  return { tema, alternarTema }
}
