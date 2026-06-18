import { useEffect, useState } from 'react'

type Tema = 'claro' | 'escuro'

export function useTema() {
  const [tema, setTema] = useState<Tema>(() => {
    return (localStorage.getItem('tema') as Tema) || 'claro'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-tema', tema)
    localStorage.setItem('tema', tema)
  }, [tema])

  function alternarTema() {
    setTema((atual) => (atual === 'claro' ? 'escuro' : 'claro'))
  }

  return { tema, alternarTema }
}
