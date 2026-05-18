import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { obtenerCursoPorId } from '../services/cursosService'


function DetalleCurso() {
  const { id } = useParams()

  const [curso, setCurso] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function cargarCurso() {
      try {
        const datos = await obtenerCursoPorId(id)
        setCurso(datos)
      } catch (error) {
        setError(error.message)
      } finally {
        setCargando(false)
      }
    }

    cargarCurso()
  }, [id])

  if (cargando) {
    return <p className="cargando">Cargando detalle...</p>
  }

  if (error) {
    return (
      <section>
        <p className="error">{error}</p>
        <Link to="/cursos">Volver a cursos</Link>
      </section>
    )
  }

  return (
    <section className="panel">
      <h1>{curso.nombre}</h1>

      <p>
        <strong>Área:</strong> {curso.area}
      </p>

      <p>
        <strong>Nivel:</strong> {curso.nivel}
      </p>

      <p>
        <strong>Duración:</strong> {curso.duracion}
      </p>

      <p>{curso.descripcion}</p>

      <Link to="/cursos">Volver a cursos</Link>
    </section>
  )
}

export default DetalleCurso
