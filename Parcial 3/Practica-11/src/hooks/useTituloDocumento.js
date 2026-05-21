import { useEffect } from 'react'

// Este hook cambia el título de la pestaña del navegador.
// Sirve para mostrar cómo un custom hook también puede
// encapsular efectos secundarios.
function useTituloDocumento(titulo) {
  useEffect(() => {
    const tituloAnterior = document.title

    document.title = titulo

    // Limpieza:
    // cuando el componente se desmonta, se restaura el título anterior.
    return () => {
      document.title = tituloAnterior
    }
  }, [titulo])
}

export default useTituloDocumento