import { useEffect, useState } from 'react'
import { obtenerCursos } from '../services/cursosService'
import FiltrosCursos from '../components/FiltrosCursos'
import ListaCursos from '../components/ListaCursos'


function Cursos() {
  const [cursos, setCursos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  const [busqueda, setBusqueda] = useState('')
  const [areaSeleccionada, setAreaSeleccionada] = useState('Todas')

  useEffect(() => {
    async function cargarCursos() {
      try {
        const datos = await obtenerCursos()
        setCursos(datos)
      } catch (error) {
        setError(error.message)
      } finally {
        setCargando(false)
      }
    }

    cargarCursos()
  }, [])

  const cursosFiltrados = cursos.filter((curso) => {
    const coincideBusqueda = curso.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())

    const coincideArea =
      areaSeleccionada === 'Todas' || curso.area === areaSeleccionada

    return coincideBusqueda && coincideArea
  })

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
        Esta versión funciona, pero mezcla carga de datos,
        filtros e interfaz en la misma página.
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
