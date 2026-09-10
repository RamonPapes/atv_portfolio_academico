import { useEffect, useState } from 'react'

export const TEMAS = {
  CLARO: 'claro',
  ESCURO: 'escuro',
}

const sistemaPrefereEscuro = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches

const temaInicial = () =>
  sistemaPrefereEscuro() ? TEMAS.ESCURO : TEMAS.CLARO

export function useTema() {
  const [tema, setTema] = useState(temaInicial)

  useEffect(() => {
    document.documentElement.dataset.tema = tema
  }, [tema])

  const alternarTema = () => {
    setTema((atual) => (atual === TEMAS.ESCURO ? TEMAS.CLARO : TEMAS.ESCURO))
  }

  return { tema, alternarTema }
}
