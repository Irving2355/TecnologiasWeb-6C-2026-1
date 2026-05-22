import { useCallback, useMemo, useState } from 'react'
import { cursos as cursosIniciales } from '../data/cursos'

// Este hook concentra la lógica del catálogo.
// Usa useMemo para evitar cálculos repetidos innecesarios.
// Usa useCallback para mantener estable una función que se manda a tarjetas memoizadas.
function useCatalogoOptimizado() {
  const [cursos, setCursos] = useState(cursosIniciales)
  const [busqueda, setBusqueda] = useState('')
  const [area, setArea] = useState('Todas')
  const [nivel, setNivel] = useState('Todos')

  const cursosFiltrados = useMemo(() => {
    console.log('Calculando cursos filtrados...')

    return cursos.filter((curso) => {
      const coincideBusqueda = curso.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase())

      const coincideArea = area === 'Todas' || curso.area === area
      const coincideNivel = nivel === 'Todos' || curso.nivel === nivel

      return coincideBusqueda && coincideArea && coincideNivel
    })
  }, [cursos, busqueda, area, nivel])

  const resumen = useMemo(() => {
    console.log('Calculando resumen...')

    const total = cursosFiltrados.length
    const inscritos = cursosFiltrados.filter((curso) => curso.inscrito).length
    const horas = cursosFiltrados.reduce(
      (acumulado, curso) => acumulado + curso.duracionHoras,
      0
    )

    return {
      total,
      inscritos,
      horas
    }
  }, [cursosFiltrados])

  const cambiarInscripcion = useCallback((id) => {
    setCursos((previos) =>
      previos.map((curso) =>
        curso.id === id
          ? { ...curso, inscrito: !curso.inscrito }
          : curso
      )
    )
  }, [])

  return {
    busqueda,
    area,
    nivel,
    setBusqueda,
    setArea,
    setNivel,
    cursosFiltrados,
    resumen,
    cambiarInscripcion
  }
}

export default useCatalogoOptimizado
