import FiltrosCursos from '../components/FiltrosCursos'
import ListaCursos from '../components/ListaCursos'
import useCursos from '../hooks/useCursos'
import useFiltroCursos from '../hooks/useFiltroCursos'
import useTituloDocumento from '../hooks/useTituloDocumento'

// Ahora la página Cursos se concentra en armar la vista.
// La carga de datos y el filtrado ya viven en custom hooks.
function Cursos() {
  useTituloDocumento('Cursos disponibles')

  const { cursos, cargando, error } = useCursos()

  const {
    busqueda,
    areaSeleccionada,
    setBusqueda,
    setAreaSeleccionada,
    cursosFiltrados
  } = useFiltroCursos(cursos)

  if (cargando) {
    return <p className="cargando">Cargando cursos...</p>
  }

  if (error) {
    return <p className="error">{error}</p>
  }

  return (
    <section>
      <h1>Cursos disponibles</h1>

      <p>
        En esta versión la lógica de carga y filtrado fue separada
        en custom hooks.
      </p>

      <FiltrosCursos
        busqueda={busqueda}
        areaSeleccionada={areaSeleccionada}
        onCambiarBusqueda={setBusqueda}
        onCambiarArea={setAreaSeleccionada}
      />

      <ListaCursos cursos={cursosFiltrados} />
    </section>
  )
}

export default Cursos