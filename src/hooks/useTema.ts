import { useEffect, useState } from 'react'

type Tema = 'claro' | 'escuro'

// Guarda o tema escolhido, lembra dele no localStorage e aplica no <html>
// (o CSS troca as cores conforme o atributo data-tema).
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
