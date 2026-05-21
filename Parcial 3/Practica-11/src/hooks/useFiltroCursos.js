import { useState } from 'react'

// Este custom hook se encarga solo de la lógica de filtrado.
// Recibe la lista original de cursos y devuelve los cursos filtrados.
function useFiltroCursos(cursos) {
  const [busqueda, setBusqueda] = useState('')
  const [areaSeleccionada, setAreaSeleccionada] = useState('Todas')

  const cursosFiltrados = cursos.filter((curso) => {
    const coincideBusqueda = curso.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())

    const coincideArea =
      areaSeleccionada === 'Todas' || curso.area === areaSeleccionada

    return coincideBusqueda && coincideArea
  })

  // Regresamos todo lo que la interfaz necesita:
  // los cursos filtrados, los valores actuales y las funciones
  // para modificar los filtros.
  return {
    busqueda,
    areaSeleccionada,
    setBusqueda,
    setAreaSeleccionada,
    cursosFiltrados
  }
}

export default useFiltroCursos